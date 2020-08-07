import {propFilter} from "./json_parser.js"
import {locfiles} from "./main.js";

const bookProps = ["requirements", "effects"];
const descrProps = ["id", "description"];
const riteProps = ["id", "label"];
const ableProps = ["id", "label"];
const vaultProps = ["id", "requirements", "effects"];
const obstacleProps = ["id", "requirements", "alt"];
const vault_locksProps = ["id", "label"];

export const books = propFilter(locfiles.books, bookProps, "recipes").recipes;
export const descr = propFilter(locfiles.descr, descrProps, "elements");
export const descrLang = propFilter(locfiles.descrLang, descrProps, "elements");
export const rites = propFilter(locfiles.rites, riteProps, "elements");
export const ables = propFilter(locfiles.abilities, ableProps, "elements");
export const vault_locks = propFilter(locfiles.vault_locks, vault_locksProps, "elements");
export const vaultsDescr = propFilter(locfiles.vaultsDescr, descrProps, "elements");
export const vaults = getRecipes(locfiles.vaults, vaultProps, ["_success"]);
export const obstacles = getRecipes(locfiles.obstacles, obstacleProps, ["_mid", "_low", "_success", "_failure"]);

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