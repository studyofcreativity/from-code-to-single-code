// Inverso del mapa de comandos especiales
const reverseMap = Object.entries({
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
  'ѵw': '/noise(no existe)'
}).reduce((acc, [real, fake]) => (acc[fake] = real, acc), {});

function decodeSpecialCode(code) {
  let decoded = code;

  // Reemplazar comandos falsos por los reales
  const keys = Object.keys(reverseMap).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    decoded = decoded.replace(regex, reverseMap[key]);
  }

  return decoded;
}
