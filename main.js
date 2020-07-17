#!/usr/bin/env node

import { aspectString } from "./aspects_string.js"
import { books, descr, descrLang } from "./filtered_data.js"
import { file } from "./paths.js"
import { mod } from "./mod.js"

function forEachDescr(Descr, keyB) {
  Descr.forEach(keyD => {
    const effect = keyB.effects;
    const book = Object.keys(effect);
    if (keyD.id.indexOf(book[0]) !== -1) {
      let aspects = [];
      Object.keys(effect).forEach(key => aspectString(aspects, key));
      keyD.description += "\n\n" + aspects;
    }
  });
}

books.forEach(keyB => {
  forEachDescr(descr.elements, keyB);
  forEachDescr(descrLang.elements, keyB);
});

mod(descr, file.descr);
mod(descrLang, file.descrLang);