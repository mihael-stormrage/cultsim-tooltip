import { propFilter } from "./json_parser.js"
import { files } from "./paths.js"

let bookProps = ["effects"];
let descrProps = ["id", "description"];
let riteProps = ["id", "label"];
let ableProps = ["id", "label"];

export let locale = "ru"; //en, ru, zh
let file = files(locale);

export let books = propFilter(file.books, bookProps, "recipes").recipes;
export let descr = propFilter(file.descr, descrProps, "elements");
export let descrLang = propFilter(file.descrLang, descrProps, "elements");
export let rites = propFilter(file.rites, riteProps, "elements");
export let ables = propFilter(file.abilities, ableProps, "elements");

function extend (obj, entityType)
{
  let ent = obj[entityType];
  for (let item in ent)
    ent[item].extends = [ent[item].id];
}

extend (descr, "elements");
extend (descrLang, "elements");

// console.log(descr);