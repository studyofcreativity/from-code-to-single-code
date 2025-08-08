function convert() {
  const code = document.getElementById("inputCode").value;
  const output = encodeToSpecial(code);
  document.getElementById("outputCode").value = output;
}
