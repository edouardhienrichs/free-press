const { parser } = require("keep-a-changelog");
const { readFileSync, writeFileSync } = require("fs");

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const changelog = parser(readFileSync("./CHANGELOG.md", "UTF-8"));

let source = "";
changelog.releases[0].changes.forEach((changes, key) => {
  if (changes.length === 0) return;

  if (source.length !== 0) source += "\n";
  source += `### ${capitalize(key)}\n\n`;
  source += changes.reduce((prev, change) => `${prev}${change}\n`, "");
});

const chromeUri =
  "https://chrome.google.com/webstore/detail/free-press/glmnaokgbaeaeldfanghdlblcbfhjpho";
const uriStart = "https://github.com/edouardhienrichs/free-press/releases/download";
const uriEnd = "/free-press-unsigned.zip";
const sourceWithLink = `${source.trim()}

---

- [Install Chrome Extension](${chromeUri})
- [Download Unsigned Browser Extension](${uriStart}/v${process.env.npm_package_version}${uriEnd})`;

writeFileSync("./RELEASE_NOTES.md", sourceWithLink, "utf8");
