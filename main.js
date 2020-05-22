import { aspectString } from "./aspects_string.js"
import { books, descr, descrLang } from "./filtered_data.js"
import { file } from "./paths.js"
import { mod } from "./mod.js"

function forEachDescr(Descr, keyB) {
  for (let keyD in Descr) {
    let effect = books[keyB].effects;
    let book = Object.keys(effect);
    if (Descr[keyD].id.indexOf(book[0]) != -1) {
      let aspects = [];
      for (let key in effect)
        aspectString(aspects, key);
      Descr[keyD].description += "\n\n" + aspects;
    }
  }
}

for (let keyB in books) {
  forEachDescr(descr.elements, keyB);
  forEachDescr(descrLang.elements, keyB);
}

mod(descr, file.descr);
mod(descrLang, file.descrLang);