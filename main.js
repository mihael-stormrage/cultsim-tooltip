#!/usr/bin/env node

import { aspectString, dict } from "./aspects_string.js"
import { books, descr, descrLang, vaultsDescr, vaults, obstacles, vault_locks } from "./filtered_data.js"
import { files, file, locales } from "./paths.js"
import { mod } from "./mod.js"

export let loc = Object.keys(locales)[0];
export let locfiles = files(loc);

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

Object.values(locales).forEach(([currLoc, locDir]) => {
  loc = currLoc;

  books.forEach(keyB => {
    forEachDescr(descr.elements, keyB);
    forEachDescr(descrLang.elements, keyB);
  });

  vaults.forEach(keyVault => forEachDescr(vaultsDescr.elements, keyVault, true));

  mod(descr, file.descr, locDir);
  mod(descrLang, file.descrLang, locDir);
  mod(vaultsDescr, file.vaultsDescr, locDir);
});