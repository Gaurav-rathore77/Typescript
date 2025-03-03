// build a list of colors
const gaurav:string [] = ["red", "green", "blue","white" , "black"];
// remove the white color
const rathore =gaurav.filter((color) => color !== "white");
// add a new color

const dop:string [] = [];
// add whole array and push into dop array
dop.push(...rathore);

console.log(rathore);


dop.push("hello");
dop.push("hiii");

console.log(dop);

// const array1: readonly number [] = [1, 2, 3, 4, 5];
// array1.push(6);