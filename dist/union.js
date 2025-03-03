"use strict";
function printStatusCode(code) {
    console.log(`My status code is ${code}.`);
}
printStatusCode(200);
printStatusCode("404");
console.log(typeof printStatusCode);
// function printUpperStatusCode(code: string | number) {
//     console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
//     Property 'toUpperCase' does not exist on type 'number'
//   }
// printUpperStatusCode("new era");
function printUpperStatusCode1(code) {
    if (typeof code === "string") {
        console.log(`My status code is ${code.toUpperCase()}.`);
    }
    else {
        console.log(`My status code is ${code}.`); // No toUpperCase() needed for numbers
    }
}
printUpperStatusCode1("new era"); // Output: My status code is NEW ERA.
printUpperStatusCode1(200); // Output: My status code is 200.
