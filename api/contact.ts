export const config = { runtime: "nodejs" };

type Body = {
  name?: string;
  email?: string;
  message?: string;
};

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 255;
const MAX_MESSAGE_LENGTH = 2000;
const MIN_MESSAGE_LENGTH = 10;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(input: string) {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .trim();
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return res.status(500).json({ success: false });
  }

  const body = (req.body || {}) as Body;

  const name = sanitize(body.name ?? "");
  const email = (body.email ?? "").trim();
  const message = sanitize(body.message ?? "");

  if (name.length > MAX_NAME_LENGTH) return res.status(400).json({ success: false });
  if (!email || !isValidEmail(email)) return res.status(400).json({ success: false });
  if (message.length < MIN_MESSAGE_LENGTH || message.length > MAX_MESSAGE_LENGTH)
    return res.status(400).json({ success: false });

  const upstream = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "New La Touche holding page message",
      from_name: "La Touche Holding Page",
      replyto: email,
      name,
      email,
      message,
    }),
  });

  const result = await upstream.json();
  return res.status(result.success ? 200 : 500).json(result);
}
