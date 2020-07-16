export const file = {
  books: "/recipes/study_1_books.json",
  descr: "/elements/books_lore.json",
  descrLang: "/elements/books_untranslated.json",
  rites: "/elements/rituals.json",
  abilities: "/elements/abilities.json"
};

export function files(locale) {
    const PATH = process.env["PROGRAMFILES(X86)"] + "/Steam/steamapps/common/Cultist Simulator/cultistsimulator_Data/StreamingAssets/content";
    const locales = {
      en: "/core",
      ru: "/core_ru",
      zh: "/core_zh-hans"
    };
    const filePath = {};
    for (const key in file)
      if (key != "books")
        filePath[key] = PATH + locales[locale] + file[key]
      else filePath[key] = PATH + locales["en"] + file[key];
    return filePath;
  }

// ~/Library/Application Support/Weather Factory/Cultist Simulator/mods

// ~/Library/Application Support/Steam/steamapps/common/Cultist Simulator/OSX.app/Contents/Resources/Data/StreamingAssets/content
