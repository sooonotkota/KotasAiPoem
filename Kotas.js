let apiKey = "c5fb501012566e9bd47a3bo39e25tb37";
let context = "Please tell us a french poem.";
let prompt = "Please tell me a french poem.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayAnswer);

new Typewriter("#h1", {
  strings: "Please wait... generating a poem!",
  autoStart: true,
});
