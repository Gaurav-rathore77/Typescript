interface Point {
    x: number;
    y: number;
  }
  
  let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
  pointPart.x = 10;
  console.log(pointPart);

  interface Person {
    name2131: string;
    age: number;
    location?: string;
  }
  
  // const bob23: Omit<Person, 'age' | 'location'> = { //  Omit<Person, 'age' | 'location'> ye types ko reduce karega
  //   name2131: 'Bob'
  // };

  // console.log(bob23);


  const nameMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
  };
  console.log(nameMap)

  interface Person {
    name: string;
    age: number;
    location?: string;
  }

  //Pick removes all but the specified keys from an object type.
  
  const bob213: Pick<Person, 'name'> = {
    name: 'Bob'

  };

  //Exclude removes types from a union.



  type Primitive = string | number | boolean
const value2: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.
  console.log(value2)

  // ReturnType extracts the return type of a function type.

  type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};
console.log(point)

// prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.
interface Person12 {
  name: string;
  age: number;
}
const insaan: Readonly<Person12> = {
  name: "Dylan",
  age: 35,
  // name2131: ""
};
console.log(insaan.name)
console.log(insaan.age)
// console.log(insaan.name2131)
// person.name = 'Israel'


