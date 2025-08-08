function decodeCode(code) {
  for (const dict of Object.values(dictionaries)) {
    for (const [word, symbol] of Object.entries(dict)) {
      const regex = new RegExp(symbol.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      code = code.replace(regex, word);
    }
  }

  return code;
}
