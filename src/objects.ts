const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };

console.log(car.year);

const car2 = {
    type: "Toyota",
    owner : "Rathore"

  }
car2.type = "Tesla"
car2.owner = "Gaurav"
console.log(car2.type);

// throwing error kyuki wife name ke type define hi nahi hai

// const car3 :{ type: string, owner : string} = {
//     type: "Toyota",
//     owner : "Rathore",
//     wife : "aaru"
//   }
//   car3.type = "Tesla"
//   car3.owner = "Gaurav"
//   console.log(car3.type);


//  ye koi error nahi dega kyuki ? ye hone se is type ka ho bhi skta hai aur nahi bhi
const car4: { type: string, mileage?: number } = { // no error
    type: "Toyota"
  };
  car4.mileage = 2000;

  console.log(car4.mileage);

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty" // error because string is not assignable to number