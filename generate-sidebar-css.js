import fs from "fs";
import path from "path";

const styles = [
  "sparkles",
  "booktext",
  "webhook",
  "route",
  "log",
  "settings",
  "command",
  "feather",
  "start",
  "album",
  "replace",
  "usage"
];

const output = [];

for (const style of styles) {
  const className = "style_" + style.replace(/\//g, "_");
  const iconPath = `../../static/img/sidebar/${style}.png`;

  output.push(`
.${className} .menu__link {
  position: relative;
  padding-left: 2em;
}
.${className} .menu__link::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 1%;
  transform: translateY(-50%);
  width: 1em;
  height: 1em;
  background-image: url("${iconPath}");
  background-size: contain;
  background-repeat: no-repeat;
}
`);
}

fs.writeFileSync(path.join("./src/css/sidebar-style.css"), output.join("\n"));
console.log("✅ sidebar-style.css wurde generiert!");
