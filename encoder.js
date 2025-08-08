function encodeCode(code, language) {
  const dict = dictionaries[language];
  if (!dict) return code;

  let encoded = code;

  // Reemplazamos todas las palabras clave en el texto
  for (const [word, symbol] of Object.entries(dict)) {
    const regex = new RegExp(`\\b${escapeRegExp(word)}\\b`, 'g');
    encoded = encoded.replace(regex, symbol);
  }

  return encoded;
}

// Escapar caracteres especiales en regex
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
