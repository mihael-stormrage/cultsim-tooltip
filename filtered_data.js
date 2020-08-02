import {propFilter} from "./json_parser.js"
import {files} from "./paths.js"

const bookProps = ["requirements", "effects"];
const descrProps = ["id", "description"];
const riteProps = ["id", "label"];
const ableProps = ["id", "label"];
const vaultProps = ["id", "requirements", "effects"];
const obstacleProps = ["id", "requirements", "alternativerecipes"];
const vault_locksProps = ["id", "label"];

export const locale = "en"; //en, ru, zh
const file = files(locale);

export const books = propFilter(file.books, bookProps, "recipes").recipes;
export const descr = propFilter(file.descr, descrProps, "elements");
export const descrLang = propFilter(file.descrLang, descrProps, "elements");
export const rites = propFilter(file.rites, riteProps, "elements");
export const ables = propFilter(file.abilities, ableProps, "elements");
export const vault_locks = propFilter(file.vault_locks, vault_locksProps, "elements");
export const vaultsDescr = propFilter(file.vaultsDescr, descrProps, "elements");
export const vaults = getRecipes(file.vaults, vaultProps, ["_success"]);
export const obstacles = getRecipes(file.obstacles, obstacleProps, ["_mid", "_low", "_success", "_failure"]);

function getRecipes(recipeFiles, props, exclude) {
  let resultArr = [];
  recipeFiles.forEach(filename =>
    resultArr = resultArr.concat(propFilter(filename, props, "recipes").recipes
      .filter(it => exclude.every(ex => !it.id.includes(ex)))));
  return resultArr;
}

const extend = (obj, entityType) => obj[entityType].forEach(item => item.extends = [item.id]);

extend(descr, "elements");
extend(descrLang, "elements");
extend(vaultsDescr, "elements")

// console.log(descr);