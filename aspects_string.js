import { rites, ables } from "./filtered_data.js"
import { fragments } from "./fragments.js"

export function aspectString(aspects, key) {

  Object.keys(fragments).forEach(aspect => Object.keys(aspect).forEach(power => {
    if (key === fragments[aspect][power])
      aspects.push(`<sprite name=${aspect}> ${(Number(power) + 1) * 2}`);
  }));

  dict(ables);
  dict(rites);

  function dict(dictonary) {
    dictonary.elements.forEach(rkey => {
      if (rkey.id === key) {
        const string = ' ' + rkey.label.trim();
        if (key === "fascination" || key === "dread")
          aspects.push(`<b><i>${string}</i></b>`)
        else aspects.push(`<i>${string}</i>`);
      }
    });
  }
}