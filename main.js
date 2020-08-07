#!/usr/bin/env node

import { aspectString, dict } from "./aspects_string.js";
import { getObjects } from "./filtered_data.js";
import { files, file, locales } from "./paths.js";
import { mod } from "./mod.js";

export let {books, descr, descrLang, vaultsDescr, vaults, obstacles, vault_locks, rites, ables} =
  getObjects(files(Object.keys(locales)[0]));

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

const extend = (obj, entityType) => obj[entityType].forEach(item => item.extends = [item.id]);

Object.entries(locales).forEach(([loc, locDir]) => {
  const obj = getObjects(files(loc));
  descr = obj.descr;
  descrLang = obj.descrLang;
  vault_locks = obj.vaultsDescr;
  vault_locks = obj.vault_locks;
  rites = obj.rites;
  ables = obj.ables;

  books.forEach(keyB => {
    forEachDescr(descr.elements, keyB);
    forEachDescr(descrLang.elements, keyB);
  });

  vaults.forEach(keyVault => forEachDescr(vaultsDescr.elements, keyVault, true));

  extend(descr, "elements");
  extend(descrLang, "elements");
  extend(vaultsDescr, "elements")

  mod(descr, file.descr, locDir);
  mod(descrLang, file.descrLang, locDir);
  mod(vaultsDescr, file.vaultsDescr, locDir);
});