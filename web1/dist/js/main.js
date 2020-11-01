class Dropdown {
  constructor(container) {
    this.container = container;
    this.trigger = container.querySelector(".dropdown__trigger");
    this.content = container.querySelector(".dropdown__content");
  }

  init() {
    this.trigger.addEventListener("click", () => {
      this.trigger.classList.toggle("active");
      this.content.classList.toggle("active");
    });
  }
}

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});
