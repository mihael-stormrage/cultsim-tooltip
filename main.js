#!/usr/bin/env node

import { aspectString, dict } from "./aspects_string.js"
import { books, descr, descrLang, vaultsDescr, vaults, obstacles, vault_locks } from "./filtered_data.js"
import { file } from "./paths.js"
import { mod } from "./mod.js"

function forEachDescr(Descr, key, isVault = false) {
  Descr.forEach(keyD => {
    const item = Object.keys(key.requirements).filter(it => it !== "funds" && it !== "follower")[0];
    if (keyD.id.indexOf(item) !== -1) {
      let aspects = new Set();
      keyD.description += "\n";

      Object.keys(key.effects).forEach(effect => {
        if (isVault) {

          obstacles.forEach(obs => {
            const obstacle = Object.keys(obs.requirements)[0];
            if (obstacle === effect) {
              obs.alt.forEach(it => {
                aspectString(aspects, it.id, false);
              });
              keyD.description += `\n${Array.from(aspects)}  ->${dict(vault_locks, obstacle)}`;
              aspects.clear();
            }
          });

        }
        else aspectString(aspects, effect);
      });

      if (!isVault) keyD.description += "\n" + Array.from(aspects);
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