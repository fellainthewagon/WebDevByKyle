// function getTranslationMap(rhyme) {
//   const rhymes = {
//     "apples and pears": "Stairs",
//     "hampstead heath": "Teeth",
//     "loaf of bread": "Head",
//     "pork pies": "Lies",
//     "whistle and flute": "Suit",
//   };

//   return rhymes[rhyme.toLowerCase()] ?? "Rhyme not found";
// }

// const res = getTranslationMap("pork pies");

// console.log(res);

/* function light(color) {
  const colors = {
    green: "go",
    orange: "ready",
    red: "stop",
    black: "traffic light is broken",
  };

  return colors[color.toLowerCase().trim()] ?? "No result & no errors";
}

const res = light("Boom   ");
const res2 = light(" reD   ");
console.log(res, res2); */

// function calc(num1, num2, operator) {
//   const operators = {
//     minus: (a, b) => a - b,
//     plus: (a, b) => a + b,
//     mult: (a, b) => a * b,
//     div: (a, b) => a / b,
//   };

//   return operators[operator]?.(num1, num2) ?? "No result, get me more info";
// }

// const res = calc(3, 10, "mult");
// console.log(res);

/* function light(color) {
  return (
    {
      green: "go",
      orange: "ready",
      red: "stop",
      black: "traffic light is broken",
    }[color] ?? "boom, no result"
  );
}

const res = light("Red");
console.log(res); */

// const nick = "Fella in the wagon";
// const newNick = nick.split("-");
// console.log(newNick);
// const arr = new Array(nick);
// console.log(arr);
// console.log("Fella".charAt(0));
// console.log("Fella".slice(0, 3));

/* let data = [];

const myFunction = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 3000);
  });
};

(async () => {
  data = await myFunction();
  console.log("выполнится позже", data);
})();

console.log("выполнится первым", data); */
