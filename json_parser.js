import fs from "fs"
import jsonic from "jsonic"

function getJSON(file) {
  let output = fs.readFileSync(file, "utf8").trim();
  if (output.endsWith(";"))
    output = output.slice(0, -1);
  output = output.replace(/(?<!")\btrue\w+/g, `"$&"`);
  output = output.replace(/\s+/g,' ');
  return output;
}

function validate(buffer) {
  try {
    jsonic(buffer)
  } catch (error) {
    console.error(error.message)
  }
}

export function propFilter(file, props, entityType) {
  const json = getJSON(file);
  let parsed;
  validate(json);
  parsed = jsonic(json);

  Object.keys(parsed[entityType]).forEach(key => getProps(parsed[entityType], key));
  
  return parsed;

  function getProps(elem, key) {
    const entry = {};

    Object.keys(elem[key]).forEach(prop => props.forEach(pkey => {
      if (prop === pkey)
        entry[prop] = elem[key][prop];
    }));

    elem[key] = entry;
  }
}