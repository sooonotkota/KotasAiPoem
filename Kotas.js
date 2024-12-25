function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Please wait... generating a poem!",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
