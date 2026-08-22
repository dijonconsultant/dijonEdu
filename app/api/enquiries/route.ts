import { NextResponse } from "next/server";

export const runtime = "nodejs";

const requiredFields = ["fullName", "whatsapp", "email"] as const;
const fieldLimits: Record<string, number> = {
  fullName: 100, whatsapp: 30, email: 254, city: 100, qualification: 100, grade: 50,
  graduationYear: 4, country: 50, course: 150, level: 50, englishTest: 100, budget: 100, message: 2000,
};

function clean(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object") return NextResponse.json({ error: "Invalid form data." }, { status: 400 });

    const input = body as Record<string, unknown>;
    const enquiry = Object.fromEntries(Object.entries(fieldLimits).map(([field, limit]) => [field, clean(input[field], limit)]));

    if (requiredFields.some((field) => !enquiry[field])) {
      return NextResponse.json({ error: "Please complete your name, WhatsApp number and email." }, { status: 400 });
    }
    if (!/^\S+@\S+\.\S+$/.test(enquiry.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const endpoint = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;
    if (!endpoint || !secret) {
      console.error("Google Sheets webhook environment variables are missing.");
      return NextResponse.json({ error: "The enquiry service is not configured yet." }, { status: 503 });
    }

    const payload = new URLSearchParams({ ...enquiry, secret, submittedAt: new Date().toISOString() });
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload,
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`Google Sheets webhook responded with ${response.status}.`);
      return NextResponse.json(
        { error: "We could not submit your enquiry. Please try again.", diagnostic: `Webhook HTTP ${response.status}` },
        { status: 502 },
      );
    }
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Failed to submit enquiry", error);
    const diagnostic = error instanceof Error ? error.message : "Unknown webhook error";
    return NextResponse.json(
      { error: "We could not submit your enquiry. Please try again.", diagnostic },
      { status: 500 },
    );
  }
}
