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

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const record = body !== null && typeof body === "object" ? (body as Record<string, unknown>) : {};

  // Honeypot — pretend success so bots get nothing useful
  if (asString(record.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(record.name);
  const organisation = asString(record.organisation);
  const email = asString(record.email).toLowerCase();
  const stage = asString(record.stage);
  const message = asString(record.message);

  if (!name || !email || !isValidEmail(email) || !message) {
    return NextResponse.json(
      { error: "Name, a valid email, and a message are required." },
      { status: 422 }
    );
  }

  if (message.length > 8000) {
    return NextResponse.json(
      { error: "Message is too long. Please shorten it and try again." },
      { status: 422 }
    );
  }

  const ip = getClientIp(req);
  const rateLimitKey = `contact:${ip}`;

  try {
    const count = await kv.incr(rateLimitKey);
    if (count === 1) {
      await kv.expire(rateLimitKey, 3600);
    }
    if (count > 5) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in an hour." },
        { status: 429 }
      );
    }
  } catch {
    console.error("[contact] KV rate limit check failed — proceeding without rate limit");
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY not set");
    return NextResponse.json({ error: "Service unavailable." }, { status: 503 });
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "hello@suhitanantula.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Suhit Anantula <hello@suhitanantula.com>";
  const resend = new Resend(process.env.RESEND_API_KEY);

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    organisation ? `Organisation: ${organisation}` : null,
    stage ? `Stage: ${stage}` : null,
    "",
    message,
  ].filter((line) => line !== null);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Contact form — ${name}`,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error.message);
      return NextResponse.json(
        { error: "Could not send the message. Please email hello@suhitanantula.com." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const errMessage = err instanceof Error ? err.message : "Unknown error";
    console.error("[contact] Resend error:", errMessage);
    return NextResponse.json(
      { error: "Could not send the message. Please email hello@suhitanantula.com." },
      { status: 500 }
    );
  }
}
