export default function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ message: "Nessun URL fornito" });
  }

  const isValid = url.startsWith("https://") || url.startsWith("http://");

  if (isValid) {
    res.status(200).json({ message: "Link valido ✅" });
  } else {
    res.status(200).json({ message: "Link non valido ❌" });
  }
}
