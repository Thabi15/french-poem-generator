function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "68b0ffbbbf6d90tda73d3f86ae54316o";
  let context = `You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem and separate each line with a <br/ >. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' with a <strong> element at the end of the poem and NOT at the beginning. `;
  let prompt = `User instructions: Generate a French poem about ${instructionInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
