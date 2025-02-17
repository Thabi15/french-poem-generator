function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Vois-tu, je sais que tu m’attends.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
