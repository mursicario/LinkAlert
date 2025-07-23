document.getElementById("checkForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const url = document.getElementById("urlInput").value;
  const resultDiv = document.getElementById("result");

  resultDiv.textContent = "Controllo in corso...";

  try {
    const response = await fetch(`/api/check?url=${encodeURIComponent(url)}`);
    const data = await response.json();

    if (data.valid) {
      resultDiv.innerHTML = `✅ Link valido`;
      resultDiv.style.color = "green";
    } else {
      resultDiv.innerHTML = `❌ Link non valido`;
      resultDiv.style.color = "red";
    }
  } catch (err) {
    resultDiv.innerHTML = `❌ Errore durante il controllo`;
    resultDiv.style.color = "red";
  }
});
