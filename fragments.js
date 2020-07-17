import { books } from "./filtered_data.js"

let frag = [];
let effects = [];

books.forEach(b => effects.push(Object.keys(b.effects)));
effects.forEach(b => frag = b.concat(frag));

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

Object.keys(fragments).forEach(k => frag.forEach(fKey => {
  if (fKey.includes(k))
    fragments[k].push(fKey);
}));

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