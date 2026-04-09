import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { kv } from "@vercel/kv";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email =
    body !== null &&
    typeof body === "object" &&
    "email" in body &&
    typeof (body as Record<string, unknown>).email === "string"
      ? ((body as Record<string, unknown>).email as string).trim().toLowerCase()
      : null;

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 422 }
    );
  }

  // Rate limiting: 5 requests per IP per hour via Vercel KV
  const ip = getClientIp(req);
  const rateLimitKey = `subscribe:${ip}`;

  try {
    const count = await kv.incr(rateLimitKey);
    if (count === 1) {
      // Set expiry on first request: 1 hour
      await kv.expire(rateLimitKey, 3600);
    }
    if (count > 5) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in an hour." },
        { status: 429 }
      );
    }
  } catch {
    // KV unavailable — fail open (don't block legitimate subscribers)
    console.error("[subscribe] KV rate limit check failed — proceeding without rate limit");
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) {
    console.error("[subscribe] RESEND_AUDIENCE_ID not set");
    return NextResponse.json({ error: "Service unavailable." }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    // Resend returns a 422 when email already exists in audience — treat as success
    if (message.includes("already exists") || message.includes("422")) {
      return NextResponse.json({ ok: true });
    }
    console.error("[subscribe] Resend error:", message);
    return NextResponse.json(
      { error: "Could not subscribe. Please try again." },
      { status: 500 }
    );
  }
}
