document.getElementById("encodeButton").addEventListener("click", () => {
  const code = document.getElementById("inputCode").value;
  const language = document.getElementById("language").value;
  const encoded = encodeCode(code, language);
  document.getElementById("outputCode").value = encoded;
});

document.getElementById("decodeButton").addEventListener("click", () => {
  const code = document.getElementById("inputCode").value;
  const decoded = decodeCode(code);
  document.getElementById("outputCode").value = decoded;
});
