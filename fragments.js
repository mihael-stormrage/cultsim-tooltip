import { books } from "./filtered_data.js"

let frag = [];
let effects = [];

for (let b in books)
  effects.push(Object.keys(books[b].effects));

for (let b in effects)
  frag = effects[b].concat(frag);

frag = frag.filter(item => item.includes("fragment"));
frag.sort();
frag = new Set(frag);

export let fragments = {
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

let keys = Object.keys(fragments);

for (let k in keys)
  for (let fKey in frag)
    if (frag[fKey].includes(keys[k]))
      fragments[keys[k]].push(frag[fKey]);

// function DictXFilter(match, dict, callback) {
//   let keysD = Object.keys(dict);
//   for (let kD in keysD)
//     for (let mkey in match)
//       if (match[mkey].includes(keysD[kD]))
//         callback();
// }

// let cbFragmentDict = () => DictXFilter.dict[keysD[kD]].push(match[mkey]);

// DictXFilter(fragments,frag,cbFragmentDict);

// console.log(fragments);