/* function* simpleGenerator() {
  console.log("before 1");
  yield 1;
  console.log("after 1");
  console.log("before 2");
  yield 2;
  console.log("after 2");
  console.log("before 3");
  yield 3;
  console.log("after 3");
}

const generator = simpleGenerator();
generator.next();
generator.next();
generator.next();
generator.next(); */

/* iterators */
// let generateNumbers = {
//   start: 1,
//   end: 10,
// };

// generateNumbers[Symbol.iterator] = function () {
//   let curr = this.start;
//   let last = this.end;

//   return {
//     next() {
//       if (curr <= last) {
//         return {
//           done: false,
//           value: curr++,
//         };
//       } else {
//         return {
//           done: true,
//         };
//       }
//     },
//   };
// };
// for (let number of generateNumbers) {
//   console.log(number);
// }

/* generators */

/* function* generate() {
  console.log("1 step");
  let res = (yield) * 2;
  console.log("result: ", res);
}

let iterator = generate();

console.log(iterator.next());
console.log(iterator.next(2)); */

// function* generateRange(start, end) {
//   let curr = start;
//   while (curr <= end) {
//     yield curr++;
//   }
// }
// console.log(generateRange(1, 10));

// for (let num of generateRange(1, 10)) {
//   console.log(num);
// }

/* setters */

/* const person = {
  fname: "Fella",
  lname: "Inthewagon",
  get fullname() {
    return `${this.fname} ${this.lname}`;
  },
  //   set fullname(value) {
  //     [this.fname, this.lname] = value.split(" ");
  //   },
};

person.fullname = "Mia Walles";
console.log(person.fullname);
console.log(person); */

/* Object.create */

// const list = Object.create(
//   {
//     calcSale() {
//       console.log((this.milk + this.water) * 0.95);
//     },
//   },
//   {
//     milk: {
//       value: 150,
//       enumerable: true,
//       writable: true,
//       configurable: true,
//     },
//     water: {
//       value: 100,
//       enumerable: true,
//       writable: true,
//     },
//     poket: {
//       get() {
//         return 1000 - this.milk - this.water;
//       },
//       set(value) {},
//     },
//   }
// );

// console.log(list);
// console.log(list.poket);
// list.calcSale();

/* bind */

/* const admin = {
  name: "Vincent",
};

function printName() {
  console.log(this.name);
}

const newPrint = printName.bind(admin);
console.log(newPrint);
newPrint(); */

// function mult(a, b) {
//   return a * b;
// }

// const printMult = mult.bind(null, 5);

// console.log(printMult(2));
// console.log(printMult);

/* function mult(a, b) {
  return a * b;
}

const itemsPrice = [25, 35, 15, 50, 90];

const finishPrice = itemsPrice.map(mult.bind(null, 0.95));

console.log(finishPrice); */

/* call, apply */

// const admin = {
//   name: "Vincent",
// };

// function printName() {
//   console.log(this.name);
// }

// printName.call(admin);
