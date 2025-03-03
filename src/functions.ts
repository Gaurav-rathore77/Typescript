const getTime = ():string =>{
    return new Date().toLocaleString();
}

getTime();
console.log(getTime());

// The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
    console.log('Hello!');
  } 

  function multiply(a: number, b: number) {
    return a * b;
  }

  console.log(multiply(2, 3));
  
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
  function add1(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }

//   For parameters with default values, the default value goes after the type annotation:

  function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }


//   Typing named parameters follows the same pattern as typing normal parameters.
function divide(divisor: number, dividend: number): number {
    return divisor / dividend;
  }

  console.log(divide(10, 2));


// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
  function add2(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }
console.log(add2(1, 2, 3, 4, 5));
