window.onload = () => {
  const encodeBtn = document.getElementById("encodeButton");
  const decodeBtn = document.getElementById("decodeButton");
  const inputCode = document.getElementById("inputCode");
  const outputCode = document.getElementById("outputCode");
  const languageSelect = document.getElementById("language");

  encodeBtn.addEventListener("click", () => {
    const code = inputCode.value;
    const language = languageSelect.value;
    const encoded = encodeCode(code, language);
    outputCode.value = encoded;
  });

  decodeBtn.addEventListener("click", () => {
    const code = inputCode.value;
    const decoded = decodeCode(code);
    outputCode.value = decoded;
  });
};
