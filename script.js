async function checkLink() {
  const input = document.getElementById("urlInput").value;

  const res = await fetch(`/api/check?url=${encodeURIComponent(input)}`);
  const data = await res.json();

  document.getElementById("result").innerText = data.message;
}

