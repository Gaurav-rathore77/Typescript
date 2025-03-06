"use strict";
class Person {
    constructor(name2131) {
        this.name2131 = name2131;
    }
}
// Creating an instance
const person1 = new Person("John Doe");
console.log(person1.name2131);
function getLength(obj) {
    return obj.length;
}
console.log(getLength("hellow my self Rathore"));
console.log(getLength(["hellow my self Rathore"]));
const a = ["hello", "my", "self", "Rathore"];
console.log(getLength(a));
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
console.log(wrapInArray("hellow my self Rathore"));
// console.log(wrapInArray());
console.log(wrapInArray(a));
