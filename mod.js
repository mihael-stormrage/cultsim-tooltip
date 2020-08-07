import fs from "fs-extra";

const modName = "cultsim-tooltip";
const modPath = "out/" + modName;

const manifest = {
  name:"",
  author: "Mihael Stormrage",
  version: "3.0.0",
  description: "",
  description_long: "TBD"
}

// if (locale === "ru") {
//   manifest.name = "Подсказка для книг и экспедиций";
//   manifest.description = "Добавляет на книги и экспедиции информацию об аспектах.";
// }
// else {
  manifest.name = "Books & Vaults tooltip";
  manifest.description = "Now you can see books effects and obstacles in vaults.";
// }

fs.outputJson(modPath + "/synopsis.json", manifest, {spaces: "\t"});

export function mod(obj, filePath, locDir) {
    const path = modPath + "/content" + locDir + filePath;
    fs.outputJsonSync(path, obj, {spaces: "\t"});
}