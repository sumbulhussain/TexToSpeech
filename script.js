const speakButton = document.getElementById("speak-btn");
const textInput = document.getElementById("text-input");
const languageSelect = document.getElementById("language-select");
const copyButton = document.getElementById("copy-btn");

// Bind click event to speak button
speakButton.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (text !== "") {
    const selectedLanguage = languageSelect.value;
    speakText(text, selectedLanguage);
  }
});

// Bind click event to copy button
copyButton.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (text !== "") {
    copyTextToClipboard(text);
  }
});

// Function to speak the given text using the selected language
function speakText(text, language) {
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.lang = language;
  window.speechSynthesis.speak(utterance);
}

// Function to copy the given text to the clipboard
function copyTextToClipboard(text) {
  const dummyTextarea = document.createElement("textarea");
  dummyTextarea.value = text;
  document.body.appendChild(dummyTextarea);
  dummyTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(dummyTextarea);
}

// const speakButton = document.getElementById("speak-btn");
// const textInput = document.getElementById("text-input");
// const languageSelect = document.getElementById("language-select");
// const copyButton = document.getElementById("copy-btn");
// // Create SpeechSynthesisUtterance instance
// const utterance = new SpeechSynthesisUtterance();

// // Set voice properties (optional)
// utterance.lang = "en-US"; // Set language
// utterance.volume = 1; // 0 to 1
// utterance.rate = 1; // 0.1 to 10
// utterance.pitch = 1; // 0 to 2

// // Bind click event to speak button
// speakButton.addEventListener("click", () => {
//   const text = textInput.value.trim();
//   if (text !== "") {
//     const selectedLanguage = languageSelect.value;
//     utterance.text = text;
//     utterance.lang = selectedLanguage;
//     window.speechSynthesis.speak(utterance);
//   }
// });
// // Bind click event to copy button
// copyButton.addEventListener("click", () => {
//   const text = textInput.value.trim();
//   if (text !== "") {
//     copyTextToClipboard(text);
//   }
// });
// // Function to copy the given text to the clipboard
// function copyTextToClipboard(text) {
//   const dummyTextarea = document.createElement("textarea");
//   dummyTextarea.value = text;
//   document.body.appendChild(dummyTextarea);
//   dummyTextarea.select();
//   document.execCommand("copy");
//   document.body.removeChild(dummyTextarea);
// }
