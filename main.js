#!/usr/bin/env node

import { aspectString } from "./aspects_string.js"
import { books, descr, descrLang, vaultsDescr, vaults, obstacles } from "./filtered_data.js"
import { file } from "./paths.js"
import { mod } from "./mod.js"

function forEachDescr(Descr, key, isVault = false) {
  Descr.forEach(keyD => {
    const item = Object.keys(key.requirements).filter(it => it !== "funds" && it !== "follower")[0];
    if (keyD.id.indexOf(item) !== -1) {
      let aspects = new Set();
      Object.keys(key.effects).forEach(effect => {
        if (isVault) {
          obstacles.forEach(obs => {
            const obstacle = Object.keys(obs.requirements)[0];
            if (obstacle === effect) {
              obs.alternativerecipes.forEach(it => {
                aspectString(aspects, it.id, false);
              })
            }
          });
        }
        else aspectString(aspects, effect);
      });
      keyD.description += "\n\n" + Array.from(aspects);
    }
  });
}

books.forEach(keyB => {
  forEachDescr(descr.elements, keyB);
  forEachDescr(descrLang.elements, keyB);
});

vaults.forEach(keyVault => forEachDescr(vaultsDescr.elements, keyVault, true));

mod(descr, file.descr);
mod(descrLang, file.descrLang);
mod(vaultsDescr, file.vaultsDescr);