import { rites, ables } from "./filtered_data.js"
import { fragments } from "./fragments.js"

export function aspectString(aspects, key) {

  for (let aspect in fragments)
    for (let power in fragments[aspect])
      if (key == fragments[aspect][power])
        aspects.push(`<sprite name=${aspect}> ${(Number(power) + 1) * 2}`);

  dict(ables);
  dict(rites);

  function dict(dictonary) {
    for (let rkey in dictonary.elements)
      if (dictonary.elements[rkey].id == key) {
        let string = ' ' + dictonary.elements[rkey].label.trim();
        if (key == "fascination" || key == "dread")
          aspects.push(`<b><i>${string}</i></b>`)
        else aspects.push(`<i>${string}</i>`);
      }
  }
}