interface Person12 {
    name: string;
    age: number;
  }
  // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
  function printPersonProperty(person123: Person12, property: keyof Person12) {
    console.log(`Printing person property ${property}: "${person123[property]}"`);
  }
  let person123 = {
    name: "Max",
    age: 27
  };
  printPersonProperty(person123, "name"); 