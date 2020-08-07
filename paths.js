import fs from "fs"

const PATH = process.env["PROGRAMFILES(X86)"] + "/Steam/steamapps/common/Cultist Simulator/cultistsimulator_Data/StreamingAssets/content";

export const file = {
  books: "/recipes/study_1_books.json",
  descr: "/elements/books_lore.json",
  descrLang: "/elements/books_untranslated.json",
  rites: "/elements/rituals.json",
  abilities: "/elements/abilities.json",

  vaults: [],
  obstacles: [],
  vault_locks: "/elements/vault_locks.json",
  vaultsDescr: "/elements/vaults.json",
};

const getRecipes = (prop, filenameMask) =>
  fs.readdirSync(PATH + "/core" + "/recipes/").filter(file => file.includes(filenameMask))
    .forEach(it => prop.push("/recipes/" + it));
getRecipes(file.vaults, "explore_vaults_");
getRecipes(file.obstacles, "explore_obstacles_");

export const locales = {
  en: "/core",
  ru: "/core_ru",
  zh: "/core_zh-hans"
};

export function files(locale) {
    const filePath = {
      vaults: [],
      obstacles: [],
    };
    for (const key in file)
      if (key === "vaults" || key === "obstacles") file[key].forEach(file => filePath[key].push(PATH + locales["en"] + file))
      else if (key !== "books")
        filePath[key] = PATH + locales[locale] + file[key]
      else filePath[key] = PATH + locales["en"] + file[key];
    return filePath;
  }

// ~/Library/Application Support/Weather Factory/Cultist Simulator/mods

// ~/Library/Application Support/Steam/steamapps/common/Cultist Simulator/OSX.app/Contents/Resources/Data/StreamingAssets/content
