class Dropdown {
  constructor(container, trigger, content) {
    this.container = container;
    this.trigger = trigger || container.querySelector(".dropdown__trigger");
    this.content = content || container.querySelector(".dropdown__content");
    this.caret = container.querySelector(".dropdown__caret");
  }

  init() {
    this.trigger.addEventListener("click", () => {
      if (this.trigger) {
        this.trigger.classList.toggle("active");
      }
      if (this.content) {
        this.content.classList.toggle("active");
      }
      if (this.caret) {
        this.caret.classList.toggle("active");
      }
    });
  }
}

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

const trigger = document.querySelector(".resp__trigger");
const content = document.querySelector(".resp__navigation");
// trigger.addEventListener("click", () => {
//   content.classList.toggle("active");
// });
const container = document.querySelector(".resp");
const navdrop = new Dropdown(container, trigger, content);
navdrop.init();
