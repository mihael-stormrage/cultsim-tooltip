import { books } from "./filtered_data.js"

let frag = [];
let effects = [];

for (const b in books)
  effects.push(Object.keys(books[b].effects));

for (const b in effects)
  frag = effects[b].concat(frag);

frag = frag.filter(item => item.includes("fragment"));
frag.sort();
frag = new Set(frag);

export const fragments = {
  edge: [],
  forge: [],
  grail: [],
  heart: [],
  knock: [],
  lantern: [],
  moth: [],
  secrethistories: [],
  winter: [],
};

frag = Array.from(frag);

const keys = Object.keys(fragments);

for (const k in keys)
  for (const fKey in frag)
    if (frag[fKey].includes(keys[k]))
      fragments[keys[k]].push(frag[fKey]);

// function DictXFilter(match, dict, callback) {
//   const keysD = Object.keys(dict);
//   for (const kD in keysD)
//     for (const mkey in match)
//       if (match[mkey].includes(keysD[kD]))
//         callback();
// }

// const cbFragmentDict = () => DictXFilter.dict[keysD[kD]].push(match[mkey]);

// DictXFilter(fragments,frag,cbFragmentDict);

// console.log(fragments);