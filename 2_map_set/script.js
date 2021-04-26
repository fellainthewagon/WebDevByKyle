const obj = {
  name: "Fella",
  age: 30,
  car: false,
};

const map = new Map(Object.entries(obj));

// console.log(map);
// console.log(map.get("car"));

map
  .set({ friend: "Mia" }, false)
  .set(false, "has a lot of money")
  .delete("age");

// console.log(map.has("age"));
// console.log(map);

// for (let [key, value] of map) {
//   console.log(`${key} - ${value}`);
// }
// for (let entry of map.entries()) {
//   console.log(entry);
// }
// for (let value of map.values()) {
//   console.log(value);
// }
// for (let key of map.keys()) {
//   console.log(key);
// }
// map.forEach((val, key) => {
//   console.log(val, key);
// });
// const arr = [...map];
// console.log(arr);

/* ---------------- */
// const shop = [{ milk: 50 }, { water: 10 }, { chees: 150 }, { pasta: 100 }];

// function toMap(arr) {
//   let map = new Map();

//   arr.forEach((item) => {
//     map.set(item, new Date(new Date().getTime()));
//   });

//   return map;
// }

// const newDay = toMap(shop);
// console.log(newDay);

/* const cart = {
  milk: 30,
  water: 10,
  pasta: 50,
};

const mapCart = new Map(Object.entries(cart));
console.log(mapCart);
console.log(Object.entries(cart)); */

/* prototype */

// function First() {
//   this.valueAge = 30;
//   this.hasCar = false;
// }

// First.prototype = {
//   sayBoom: function (text) {
//     console.log(`I sad ${text}!`);
//   },
// };

// function Second() {}

// Second.prototype = new First();

// const test = new Second();

// test.sayBoom("boom");

/* -------------closures */

/* function outer() {
  let counter = 0;

  function inner() {
    console.log((counter += 1));
  }

  return inner;
}

let invokeF = outer();
let invokeS = outer();
console.log(invokeF);

invokeF();
invokeF();
invokeF();

invokeS(); */

/* ---------------  clicker */
// const myBtn = document.querySelector(".my-btn"),
//   myText = document.querySelector(".my-text");

// function clicker() {
//   let counter = 0;
//   function innerFunc() {
//     return (counter += 1);
//   }
//   return innerFunc;
// }

// let callback = clicker();

// myBtn.addEventListener("click", function () {
//   myText.innerText = callback();
// });

/* function division(a) {
  return function runDivision(b) {
    return b / a;
  };
}

const divideByFive = division(5);

console.log(divideByFive(10));
console.log(divideByFive(1900));
console.log(divideByFive(410)); */

/* destruct */

// function quote(str, { char = "", skipIfQuoted = true } = {}) {
//   if (skipIfQuoted && str[0] === char && str[str.lenght - 1] === char) {
//     return str;
//   }

//   return char + str + char;
// }

// console.log(quote("Fella"));
// console.log(quote("Fella", { char: "*" }));

/* const unsafeOptions = {
  fontSize: 18,
};
const defaults = {
  fontSize: 16,
  color: "red",
};
const options = {
  ...defaults,
  ...unsafeOptions,
};

console.log(options); */

void (function iife() {
  var bar = function () {};
  var baz = function () {};
  var foo = function () {
    bar();
    baz();
  };
  var biz = function () {};

  foo();
  biz();
})();
