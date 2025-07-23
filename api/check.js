export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  const { url, days } = req.body;

  if (!url || !days || isNaN(parseInt(days))) {
    return res.status(400).json({ error: 'Dati mancanti o non validi' });
  }

  try {
    const response = await fetch(url);
    const content = await response.text();

    const now = new Date();
    const pastDate = new Date(now.getTime() - parseInt(days) * 24 * 60 * 60 * 1000);

    const changeDetected = content.includes(pastDate.getFullYear()); // dummy

    res.status(200).json({
      message: changeDetected
        ? 'Contenuti modificati negli ultimi ' + days + ' giorni.'
        : 'Nessuna modifica rilevata.',
      changed: changeDetected
    });
  } catch (error) {
    res.status(500).json({ error: 'Errore durante la verifica del link.' });
  }
}
