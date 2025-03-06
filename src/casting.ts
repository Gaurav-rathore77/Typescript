let color : unknown = "green"

console.log((color as string).length) //A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

let num1: unknown = 4;
console.log((num1 as string).length);

let x1: unknown = 'hello';
console.log((<string>x1).length); // Using <> works the same as casting with as.



// let x = 'hello';
// console.log(((x as unknown) as number).length)

