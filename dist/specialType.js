"use strict";
let u = true;
u = "hello";
Math.round(u);
console.log(typeof u);
// console.log(u)   
let w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am");
    }
};
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
console.log(typeof w);
