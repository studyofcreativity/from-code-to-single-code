function decodeCode(code) {
  // Iteramos todos los diccionarios y hacemos la traducción inversa
  for (const dict of Object.values(dictionaries)) {
    for (const [word, symbol] of Object.entries(dict)) {
      const regex = new RegExp(escapeRegExp(symbol), 'g');
      code = code.replace(regex, word);
    }
  }
  return code;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
