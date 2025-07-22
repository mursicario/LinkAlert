function checkLink() {
  const input = document.getElementById("urlInput").value;

  try {
    new URL(input);
    document.getElementById("result").innerText = "✅ Il link è valido!";
  } catch (err) {
    document.getElementById("result").innerText = "❌ Il link NON è valido.";
  }
}
