function encodeCode() {
  const input = document.getElementById("inputCode").value;
  const output = document.getElementById("outputCode");
  output.value = encodeToSpecial(input);
}

function decodeCode() {
  const input = document.getElementById("inputCode").value;
  const output = document.getElementById("outputCode");
  output.value = decodeToNormal(input);
}
