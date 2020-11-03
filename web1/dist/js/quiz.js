const correctAnswers = ["A", "B", "B", "C"];

const form = document.getElementById("quiz");
const result = document.querySelector(".quiz__result");
const resField = result.querySelector(".quiz__percent");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // show result

  scrollTo(0, 0);
  result.classList.add("active");

  let output = 0;
  const timer = setInterval(() => {
    resField.textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  });
});
