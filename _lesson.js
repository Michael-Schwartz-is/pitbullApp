//      node _lesson.js

import fs from "fs";

//                ⬇ relative to the folder you ran node in (root of project)
fs.writeFileSync("./_test.txt", "Hello!");
const thing = fs.readFileSync("./app/api/dummy-data/users.json", "utf-8");

console.log(thing);

//                                           ⬇ you must specify the encoding, or it will return a byte array
let text = fs.readFileSync("./_test.txt", "utf-8");

// console.log(text);

//                                      ⬇ This is like the .then on a promise
fs.readFile("./_test.txt", "utf-8", (err, data) => {
  if (err) {
    return;
  }

  // console.log(data);
});
