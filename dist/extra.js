"use strict";
let pointPart = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart);
// const bob23: Omit<Person, 'age' | 'location'> = { //  Omit<Person, 'age' | 'location'> ye types ko reduce karega
//   name2131: 'Bob'
// };
// console.log(bob23);
const nameMap = {
    'Alice': 21,
    'Bob': 25
};
console.log(nameMap);
//Pick removes all but the specified keys from an object type.
const bob213 = {
    name: 'Bob'
};
const value2 = true; // a string cannot be used here since Exclude removed it from the type.
console.log(value2);
const point = {
    x: 10,
    y: 20
};
console.log(point);
const insaan = {
    name: "Dylan",
    age: 35,
    // name2131: ""
};
console.log(insaan.name);
console.log(insaan.age);
// console.log(insaan.name2131)
// person.name = 'Israel'
