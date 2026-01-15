export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    const payload = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      name,
      email,
      message,
    };

    const r = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await r.json();
    return res.status(r.ok ? 200 : 400).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}

