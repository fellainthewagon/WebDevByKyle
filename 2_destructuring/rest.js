const personA = {
  name: "Fella",
  age: 30,
  hair: "black",
};

const details = {
  car: true,
  house: false,
};
const personB = { ...personA, car: false, ...details };
personB.friend = "personA";

console.log(personB);
console.log(personA);

const { name, age } = personB;
console.log(name);
console.log(age);

personA.name = "Mia";
personA.sayHi = function () {
  console.log("hi");
};
const property = "husband";
const nameHusband = "Marcellos";
personA[property] = nameHusband;

console.log(personA);
