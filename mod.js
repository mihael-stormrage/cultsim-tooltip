import fs from "fs-extra"
import {locale} from "./filtered_data.js"

const modName = "books-description-tooltip";
const modPath = "out/" + modName;

const manifest = {
  name:"",
  author: "Mihael Stormrage",
  version: "1.0.0",
  description: "",
  description_long: "TBD"
}

if (locale === "ru") {
  manifest.name = "Подсказка для книг";
  manifest.description = "Добавляет на книги информацию об аспектах.";
}
else {
  manifest.name = "Book tooltip";
  manifest.description = "Now you can see aspects of the book on it.";
}

fs.outputJson(modPath + "/manifest.json", manifest, {spaces: "\t"});

export function mod(obj, filePath) {
  const path = modPath + "/content" + filePath;
  fs.outputJsonSync(path, obj, {spaces: "\t"});
}