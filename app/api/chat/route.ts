// app/api/chat/route.ts
import { google } from "@ai-sdk/google";
import { streamText } from "ai";

const systemPrompt = `You are an AI assistant for Dijon Consultants, a consulting firm that helps students apply to study abroad in Europe (especially Portugal, France, Germany, etc.), UK, Canada, and Australia. 
Answer questions about study abroad programs, university admissions, visa requirements, required documents, tuition fees, scholarships, living costs, and post-study work permits (including part-time work rights during studies). 
Be concise, friendly, and helpful. Do not provide legal guarantees on visa outcomes or employment. 
If a question is completely unrelated to studying abroad or Dijon Consultants services, politely say you can only help with study abroad-related topics.`;

export async function POST(req: Request) {
  let parsed: any;
  try {
    const raw = await req.text();
    parsed = JSON.parse(raw);
  } catch {
    parsed = { messages: [] };
  }

  const messages = (parsed.messages ?? []).filter(
    (m: any) => m.role === "user" || m.role === "assistant"
  );

  try {
    const result = streamText({
      model: google("gemini-flash-latest"),
      system: systemPrompt,
      messages,
    });

    // toTextStreamResponse streams plain text – easiest to parse on the client
    return result.toTextStreamResponse();
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err?.message ?? "Unknown error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
