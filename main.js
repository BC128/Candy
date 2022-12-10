import { node_IMPORT } from "./node_imp.js";
import * as fs from 'fs'
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value#circular_references
getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
};
function dumpFunc(fname,inp1){
    const deserialised_data = JSON.stringify(inp1,getCircularReplacer())
    fs.writeFile(fname+".json", deserialised_data, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
    });
}
console.log(typeof e)
