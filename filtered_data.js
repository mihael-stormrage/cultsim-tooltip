import { propFilter } from "./json_parser.js"
import { files } from "./paths.js"

const bookProps = ["effects"];
const descrProps = ["id", "description"];
const riteProps = ["id", "label"];
const ableProps = ["id", "label"];
const vaultProps = ["id", "effects"];
const obstacleProps = ["id", "requirements", "alternativerecipes"];

export const locale = "ru"; //en, ru, zh
const file = files(locale);

export const books = propFilter(file.books, bookProps, "recipes").recipes;
export const descr = propFilter(file.descr, descrProps, "elements");
export const descrLang = propFilter(file.descrLang, descrProps, "elements");
export const rites = propFilter(file.rites, riteProps, "elements");
export const ables = propFilter(file.abilities, ableProps, "elements");
export const vaults = getRecipes(file.vaults, vaultProps, ["_success"]);
export const obstacles = getRecipes(file.obstacles, obstacleProps, ["_mid", "_low", "_success", "_failure"]);

function getRecipes(recipeFiles, props, exclude) {
  let resultArr = [];
  recipeFiles.forEach(filename =>
    resultArr = resultArr.concat(propFilter(filename, props, "recipes").recipes
      .filter(it => exclude.every(ex => !it.id.includes(ex)))));
  return resultArr;
}

function extend (obj, entityType) {
  const ent = obj[entityType];
  for (const item in ent)
    ent[item].extends = [ent[item].id];
}

extend (descr, "elements");
extend (descrLang, "elements");

// console.log(descr);