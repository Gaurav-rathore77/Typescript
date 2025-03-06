"use strict";
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person123, property) {
    console.log(`Printing person property ${property}: "${person123[property]}"`);
}
let person123 = {
    name: "Max",
    age: 27
};
printPersonProperty(person123, "name");
