import { rites, ables } from "./filtered_data.js"
import { fragments } from "./fragments.js"

export function aspectString(aspects, key, usePower = true) {

  if (usePower)
    Object.keys(fragments).forEach(aspect => Object.keys(aspect).forEach(power => {
      if (key === fragments[aspect][power])
        aspects.add(`<sprite name=${aspect}> ${(Number(power) + 1) * 2}`);
    }))
  else
    Object.keys(fragments).forEach(aspect => {
      if (key.includes(aspect))
        aspects.add(`<sprite name=${aspect}>`);
    });

  dict(ables);
  dict(rites);

  function dict(dictonary) {
    dictonary.elements.forEach(rkey => {
      if (rkey.id === key) {
        const string = ' ' + rkey.label.trim();
        if (key === "fascination" || key === "dread")
          aspects.add(`<b><i>${string}</i></b>`)
        else aspects.add(`<i>${string}</i>`);
      }
    });
  }
}