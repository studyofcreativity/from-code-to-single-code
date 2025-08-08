const specialMap = {
  "for": "✪☉",
  "in": "↭➥",
  "range": "⍬⬵",
  "random": "⫷∽",
  "import": "≡⩎",
  "print": "⋌≜",
  "if": "☊⚮",
  "else": "✦⌖",
  "elif": "✹⊷",
  "def": "⧫≌",
  "return": "↰⤹",
  "True": "♛⥀",
  "False": "⚑⌁",
  "None": "∅◬",
  "int": "⧥⇋",
  "str": "✺↯",
  "float": "⧈⧬",
  "while": "⏃⎔",
  "break": "⤠⊗",
  "continue": "⇉⇭",
  "class": "⌘⎇",
  "with": "⤙⛏",
  "as": "↭⧿",
  "open": "⌦⊓",
  "read": "✶⧴",
  "write": "✍↠",
  "list": "⇌⛶",
  "dict": "⧣⇔",
  "from": "⤄⇖",
  "global": "⧨⧻"
};

function encodeToSpecial(code) {
  let encoded = code;
  for (const word in specialMap) {
    const regex = new RegExp(`\\b${word}\\b`, 'g');
    encoded = encoded.replace(regex, specialMap[word]);
  }
  return encoded;
}
