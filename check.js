export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'No URL provided' });

  try {
    const response = await fetch(url);
    const text = await response.text();

    const hash = text.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);

    res.status(200).json({ hash });
  } catch (err) {
    res.status(500).json({ error: 'Errore nel recupero del link' });
  }
}
