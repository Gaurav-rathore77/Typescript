const yalgarHo = <T>(x: T) => x;
console.log(yalgarHo<string>("hello"));
console.log(yalgarHo<Number>(2342));
console.log(yalgarHo<boolean>(true));

// you can give multiple types to the function by using generics

function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }
  console.log(createPair<string, number>('hello', 42));  //Generics with functions help make more generalized methods which more accurately represent the types used and returned.


  class NamedValue<T> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value = new NamedValue<number>('myNumber');
  value.setValue(10);
  console.log(value.toString());

  type Wrapped<T> = { value: T };

const  wrap : Wrapped<number> = { value : 10 };
console.log(wrap)

function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
  }