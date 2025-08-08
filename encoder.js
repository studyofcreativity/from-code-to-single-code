// Diccionario de comandos especiales (solo tú y ChatGPT conocen)
const commandMap = {
  'while': '/cycle(repitiendo para nada)',
  'if': '/test(cuestionamiento mental)',
  '==': '/equals(paradoja cuántica)',
  'function': '/box(cajita mágica)',
  'let': '/spawn(surgen ideas)',
  'true': '/realidad(aceptada)',
  'false': '/mentira(piadosa)',
  'for': '/loop(espiral sin fin)',
  'console.log': '/output(voz del vacío)',
  'return': '/send(de vuelta al abismo)',
  'null': '/empty(cero total)',
  'undefined': '/nowhere(ni en sueños)',
  'ѵw': '/noise(no existe)'  // Ejemplo personalizado
};

function encodeToSpecial(code) {
  let encoded = code;

  // Reemplazar frases más largas primero
  const keys = Object.keys(commandMap).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    const regex = new RegExp('\\b' + key + '\\b', 'g');
    encoded = encoded.replace(regex, commandMap[key]);
  }

  return encoded;
}
