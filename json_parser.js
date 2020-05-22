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
  let json = getJSON(file);
  let parsed;
  validate(json);
  parsed = jsonic(json);

  for (let key in parsed[entityType])
    getProps(parsed[entityType], key);
  
  return parsed;

  function getProps(elem, key) {
    let entry = {};
    for (let prop in elem[key])
      for (let pkey in props)
        if (prop == props[pkey])
          entry[prop] = elem[key][prop];
    elem[key] = entry;
  }
}