export const IdenticalToInitialWord = (
  event,
  typedLetters,
  posWordInSentence,
  originalWord
) => {
  if (typedLetters[posWordInSentence].length > 1) {
    if (
      typedLetters[posWordInSentence].join("").toUpperCase() ===
      originalWord.toUpperCase()
    ) {
      alert("correct");
      event.target.className = "greenClassName";

      console.log("esm class", event.target.className);
    }
  } else {
    if (
      typedLetters[posWordInSentence][0].toUpperCase() ===
      originalWord.toUpperCase()
    ) {
      event.target.className = "greenClassName";
      console.log("esm class", event.target.className);
      alert("correct");
    }
  }
};

export const handleInputAndMoveToNext = (letter, event) => {
  if (
    letter.toUpperCase() === event.target.value.toUpperCase() &&
    event.target.className !== "letterSpace"
  ) {
    event.target.className = "greenClassName";
    if (event.target.nextElementSibling !== null) {
      event.target.nextElementSibling.focus();
    }
  } else if (
    letter.toUpperCase() !== event.target.value.toUpperCase() &&
    event.target.className !== "letterSpace"
  ) {
    if (event.target.nextElementSibling !== null) {
      event.target.nextElementSibling.focus();
    }
  }
};
