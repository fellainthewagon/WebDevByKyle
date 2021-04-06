/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/
const form = document.querySelector("#quiz-form");
const answers = Array.from(document.querySelectorAll(".answer"));
const questionItems = document.querySelectorAll(".question-item");
const alert = document.querySelector("#alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  questionItems.forEach((item) => {
    item.classList.add("incorrect");
  });

  const selectedAnswers = answers.filter((answer) => answer.checked);
  //console.log(selectedAnswers);

  selectedAnswers.forEach((answer) => {
    const isCorrect = answer.value === "true";
    const answerItem = answer.closest(".question-item");

    if (isCorrect) {
      answerItem.classList.add("correct");
      answerItem.classList.remove("incorrect");
    } else {
      answerItem.classList.add("incorrect");
      answerItem.classList.remove("correct");
    }

    const everyAnswersRight = selectedAnswers.every(
      (answer) => answer.value === "true"
    );
    const checkedAll = questionItems.length === selectedAnswers.length;

    if (everyAnswersRight && checkedAll) {
      alert.classList.add("active");
      setTimeout(() => {
        alert.classList.remove("active");
      }, 1000);
    }
  });
});

//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
