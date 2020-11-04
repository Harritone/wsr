class Quiz {
  constructor(form, result, resField, answers) {
    this.form = form;
    this.result = result;
    this.answers = answers;
    this.resField = resField;
  }

  init() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      let score = 0;
      const userAnswers = [
        this.form.q1.value,
        this.form.q2.value,
        this.form.q3.value,
        this.form.q4.value,
      ];

      // check answers
      userAnswers.forEach((answer, index) => {
        if (answer === this.answers[index]) {
          score += 25;
        }
      });

      // show result

      scrollTo(0, 0);
      this.result.classList.add("active");

      let output = 0;
      const timer = setInterval(() => {
        this.resField.textContent = `${output}%`;
        if (output === score) {
          clearInterval(timer);
        } else {
          output++;
        }
      });
    });
  }
}

const correctAnswers = ["A", "A", "D", "A"];

const form = document.getElementById("quiz");
const result = document.querySelector(".quiz__result");
const resField = result.querySelector(".quiz__percent");

const quiz = new Quiz(form, result, resField, correctAnswers);
quiz.init();
