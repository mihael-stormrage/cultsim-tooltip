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

  dict(ables, key, aspects);
  dict(rites, key, aspects);
}

export function dict(dictonary, key, aspectsLine = new Set()) {
  let string;
  dictonary.elements.forEach(rkey => {
    if (rkey.id === key) {
      string = rkey.label.trim();
      if (key === "fascination" || key === "dread" || key.startsWith("curse_"))
        string = ` <b><i>${string}</i></b>`;
      else string = ` <i>${string}</i>`;
      aspectsLine.add(string);
    }
  });
  return string;
}