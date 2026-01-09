export const config = { runtime: "nodejs" };

type Body = { name?: string; email?: string; message?: string };

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
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const body: Body = req.body || {};

    const name = sanitize(body.name || "Not provided");
    const email = sanitize(body.email || "");
    const message = sanitize(body.message || "");

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ success: false, error: "Invalid email" });
    }
    if (!message || message.length < 10) {
      return res.status(400).json({ success: false, error: "Message too short" });
    }

    const key = process.env.WEB3FORMS_ACCESS_KEY;
    if (!key) {
      return res.status(500).json({
        success: false,
        error: "Missing WEB3FORMS_ACCESS_KEY in Vercel env vars",
      });
    }

    const payload = {
      access_key: key,
      subject: "New La Touche holding page message",
      from_name: "La Touche Holding Page",
      replyto: email,
      name,
      email,
      message,
    };

    const r = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await r.json().catch(() => null);

    if (!r.ok || !data?.success) {
      return res.status(502).json({
        success: false,
        status: r.status,
        error: "Web3Forms rejected the request",
        details: data,
      });
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: "Server error",
      details: err?.message || String(err),
    });
  }
}
