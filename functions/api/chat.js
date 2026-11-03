// Cloudflare Pages Function: POST /api/chat
// Holds the Groq key server-side. The browser never sees it.
const MODEL = "openai/gpt-oss-120b";
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const ALLOWED_ORIGINS = [
  "https://samburuyouthsbasket.pages.dev",
  "https://samburuyouthsbasket.ke",
  "https://www.samburuyouthsbasket.ke",
];

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("Origin") || "";
  const allowed =
    ALLOWED_ORIGINS.includes(origin) ||
    origin.endsWith(".samburuyouthsbasket.pages.dev");
  if (!allowed) return json({ error: "Forbidden" }, 403);

  if (!env.GROQ_API_KEY) return json({ error: "Server key not configured" }, 500);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  if (messages.length === 0 || messages.length > 40 || JSON.stringify(messages).length > 40000) {
    return json({ error: "Invalid or too-long conversation" }, 400);
  }

  const upstream = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      temperature: 0.7,
      max_tokens: 800,
      reasoning_effort: "low",
    }),
  });

  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: { "Content-Type": "application/json" },
  });
}
