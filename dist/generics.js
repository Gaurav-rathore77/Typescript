"use strict";
const yalgarHo = (x) => x;
console.log(yalgarHo("hello"));
console.log(yalgarHo(2342));
console.log(yalgarHo(true));
// you can give multiple types to the function by using generics
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42)); //Generics with functions help make more generalized methods which more accurately represent the types used and returned.
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
let value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString());
const wrap = { value: 10 };
console.log(wrap);
function createLoggedPair(v1, v2) {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
}
