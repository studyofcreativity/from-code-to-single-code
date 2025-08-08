// Diccionarios por lenguaje
const dictionaries = {
  python: {
    "import": "◉⚙️",
    "random": "★🔄",
    "for": "↻☯",
    "in": "⇌➤",
    "range": "⏩⚡",
    "print": "🖨️📤",
    "def": "⚒️➕",
    "return": "🔙📦",
    "True": "✅✔️",
    "False": "❌✖️"
  },
  javascript: {
    "function": "⚒️➕",
    "return": "🔙📦",
    "let": "🪄📦",
    "const": "🧊🔐",
    "var": "📦🔁",
    "if": "❓➤",
    "else": "🚪➡️",
    "true": "✅✔️",
    "false": "❌✖️",
    "console": "🖥️📤",
    "log": "📜👁️"
  },
  java: {
    "public": "🌐🔓",
    "static": "🧷🏷️",
    "void": "🕳️🚫",
    "int": "🔢📦",
    "boolean": "🧠✅",
    "class": "🏛️📚",
    "if": "❓➤",
    "else": "🚪➡️",
    "true": "✅✔️",
    "false": "❌✖️"
  },
  csharp: {
    "using": "📎🧩",
    "namespace": "🌐🏷️",
    "class": "🏛️📚",
    "void": "🕳️🚫",
    "int": "🔢📦",
    "bool": "🧠✅",
    "true": "✅✔️",
    "false": "❌✖️",
    "if": "❓➤",
    "else": "🚪➡️"
  }
};

function encodeCode(code, language) {
  const dict = dictionaries[language];
  let result = code;

  for (const [word, replacement] of Object.entries(dict)) {
    const regex = new RegExp(`\\b${word}\\b`, 'g');
    result = result.replace(regex, replacement);
  }

  return result;
}
