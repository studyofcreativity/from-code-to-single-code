const reverseMap = Object.fromEntries(
  Object.entries(specialMap).map(([k, v]) => [v, k])
);

function decodeToNormal(specialCode) {
  let decoded = specialCode;
  for (const symbol in reverseMap) {
    const regex = new RegExp(symbol, 'g');
    decoded = decoded.replace(regex, reverseMap[symbol]);
  }
  return decoded;
}
