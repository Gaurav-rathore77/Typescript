let str: string = "red vine with green grapes";
let num: number = 1;
let bool: boolean = true;
let arr: string[] = ["red", "green", "blue"];
let obj: { name: string, age: number } = { name: "John", age: 30 };

function add(a: number, b: number): number {
    return a + b;
}
console.log(str, num, bool, arr, obj, add);
console.log(typeof str, typeof num, typeof bool, typeof arr, typeof obj, typeof add);
// export { str, num, bool, arr, obj, add };