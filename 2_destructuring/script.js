const arr = ["A", "B", "C", "D"];

// function addAndMultiply(a, b) {
//   return [a + b, a * b];
// }

// const [sum, mul] = addAndMultiply(2, 3);
// console.log(sum);
// console.log(mul);

/* const [first, second, , blabla, five] = arr;
console.log(first);
console.log(second);
// console.log(bla);
console.log(blabla);
console.log(five); */

const person = {
  name: "Fella",
  age: 30,
  favoriteMusic: "Tums-Tums",
  address: {
    street: "Kosmonavtov",
    city: "Minsk",
  },
};

const {
  name: first,
  age,
  address: { street, city },
} = person;
// const { street } = address;

// console.log(first);
// console.log(age);
// console.log(street);
// console.log(street);

// function addAndMultiply2(a, b) {
//   return { sum: a + b, mult: a * b };
// }

// const { sum, mult } = addAndMultiply2(2, 3);

// console.log(sum);
// console.log(mult);

/*--------------------- func */
// function nameFirstLast(fullname) {
//   return {
//     firstName: fullname.split(" ")[0],
//     lastName: fullname.split(" ")[1],
//   };
// }

// const { firstName, lastName } = nameFirstLast("Fella Inthewagon");

// console.log(firstName);
// console.log(lastName);

/* --------------------- obj => func destruct => array*/
function addAndMultiply3({ a, b }) {
  /* --- 1 way */
  //   const a = options.a;
  //   const b = options.b;

  /* --- 2 way */
  //   const { a, b } = options;
  return [a + b, a * b];
}

const [sum, mult] = addAndMultiply3({ a: 2, b: 3 });
console.log(sum, mult);
