export let file = {
  books: "\\recipes\\study_1_books.json",
  descr: "\\elements\\books_lore.json",
  descrLang: "\\elements\\books_untranslated.json",
  rites: "\\elements\\rituals.json",
  abilities: "\\elements\\abilities.json"
};

export function files(locale) {
    let PATH = process.env["PROGRAMFILES(X86)"] + "\\Steam\\steamapps\\common\\Cultist Simulator\\cultistsimulator_Data\\StreamingAssets\\content";
    let locales = {
      en: "\\core",
      ru: "\\core_ru",
      zh: "\\core_zh-hans"
    };
    let filePath = {};
    for (let key in file)
      if (key != "books")
        filePath[key] = PATH + locales[locale] + file[key]
      else filePath[key] = PATH + locales["en"] + file[key];
    return filePath;
  }