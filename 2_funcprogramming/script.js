// const person = {
//   name: "Fella",
//   friends: ["Mia", "Vincent"],
// };

// function addFriends(p, friendsNew) {
//   return { ...p, friends: addElements(p.friends, friendsNew) };
// }

// function addElements(a, elems) {
//   return [...a, ...elems];
// }

// console.log(addFriends(person, ["Jules", "Marcellos"]));

/* _________________________ */

// const iam = deepFreeze({
//   name: "Fella",
//   friends: ["Mia", "Vincent"],
//   teacher: "Jules",
//   address: {
//     city: "Minsk",
//     street: "Kosmonavtov",
//   },
// });

// function deepFreeze(obj) {
//   Object.values(obj).forEach((value) => {
//     if (value && typeof value === "object") {
//       deepFreeze(value);
//     }
//   });

//   return Object.freeze(obj);
// }

// iam.teacher = "Butch";
// iam.address.city = "Bzdinsk";
// iam.age = 30;
// console.log(iam);

/* _________________________ */

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function mapOddNumber(a, func) {
//   return a.map((value, i) => {
//     if (i % 2 !== 0) return func(value);
//     return value;
//   });
// }

// const arrOddNumber = mapOddNumber(arr, (value) => value * 10);

// console.log(arrOddNumber);

/* _________________________ */

// const groupA = [
//   {
//     name: "Mia",
//     pats: ["cat"],
//   },
//   {
//     name: "Jules",
//     pats: ["dog", "Kolt"],
//   },
//   {
//     name: "Vincent",
//     pats: ["dog", "case"],
//   },
// ];

// function groupMoney(a, func) {
//   return a.reduce((grouping, elem) => {
//     let key = func(elem);
//     if (grouping[key] == null) grouping[key] = [];
//     grouping[key].push(elem);
//     return grouping;
//   }, {});
// }

// const range = groupMoney(groupA, (person) => person.pats.length);
// console.log(range);

/* _________________________ */

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum.bind(null, 5, 5)(5));
