const allGroup = [
  { name: "Ben", age: 18, groupId: 444 },
  { name: "Den", age: 19, groupId: 444 },
  { name: "Len", age: 17, groupId: 444 },
  { name: "Gen", age: 18, groupId: 444 },
  { name: "Ten", age: 17, groupId: 444 },
  { name: "Een", age: 19, groupId: 444 },
  { name: "Pen", age: 18, groupId: 444 },
  { name: "Zen", age: 18, groupId: 444 },
  { name: "Wen", age: 20, groupId: 444 },
  { name: "Qen", age: 17, groupId: 444 },
  { name: "Jen", age: 18, groupId: 444 },
  { name: "Ken", age: 19, groupId: 444 },
  { name: "Men", age: 19, groupId: 444 },
];

const group = (students) =>
  students.reduce(
    (acc, student) =>
      student.age < 18
        ? acc
        : acc[student.groupId]
        ? acc[student.groupId].push(student) && acc
        : (acc[student.groupId] = [student]) && acc,
    {}
  );

/* function group(students) {
  return students.reduce((acc, student) => {
    const { groupId, age } = student;

    if (age < 18) {
      return acc;
    }

    if (groupId in acc) {
      acc[groupId].push(student);
    } else {
      acc[groupId] = [student];
    }

    return acc;
  }, {});
} 
console.log(group(allGroup));*/

// const arrStart = [4, 7, 83, 2, 1, 35, 39, 18, 60, 23, 12];

// const arrFinish = arrStart
//   .filter((num) => !(num % 2))
//   .reduce((acc, curNum) => acc + Math.sqrt(curNum), 0);

// console.log(arrFinish);

/* function getNum(modulus, callback) {
  return function (start, end) {
    while (start <= end) {
      if (start % modulus == configuration.isEntry) {
        callback(start);
      }
      start++;
    }
  };
}

let callbackLogger = (data) => console.log(data);

const configuration = {
  modulus: 10,
  isEntry: false,
  start: 45,
  end: 68,
};

let tenNumbersModulator = getNum(configuration.modulus, callbackLogger);
console.log(tenNumbersModulator(configuration.start, configuration.end));

configuration.modulus = 5;
configuration.isEntry = true;

let fiveNumbersModulator = getNum(configuration.modulus, callbackLogger);
console.log(fiveNumbersModulator(configuration.start, configuration.end)); */

/* let animal = {
  name: "animal",
  age: 10,
  childs: ["child 1", "child 2"],
};

// let clone = (obj) => Object.assign(new Object(), obj);

// function clone(obj) {
//   const { name, age, childs } = obj;
//   return {
//     name: name,
//     age: age,
//     childs: childs,
//   };
// }

let clone = (obj) => JSON.parse(JSON.stringify(obj));

const cat = clone(animal);
cat.name = "cat";
cat.age = 5;
cat.childs.push("child 3");

console.log(cat);
console.log(animal); */

/* cycle: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i === 5 && j === 5) {
      break cycle;
    }

    console.log(i, j);
  }
} */
