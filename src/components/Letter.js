import React from "react";
import { useEffect, useState } from "react";
import LettersLine from "./LettersLine";
import "./Sentence.css";
const {
  IdenticalToInitialWord,
  handleInputAndMoveToNext,
} = require("./helpers");
function Letter(props) {
  const {
    className,
    letter,
    i,
    nbline,
    arrayOfWords,
    id,
    initialWord,
    longueur,
    finish,
  } = props;
  const [currentArrayOfWords, setCurrentArrayOfWords] = useState(arrayOfWords);
  const [currentClass, setCurrentClass] = useState(className);

  const handleSubmit = (e) => {
    console.log(
      "welcome in letter line",
      nbline,
      "out of",
      longueur,
      "at the position",
      i,
      "from length word ",
      initialWord.length
    );
    e.preventDefault();
    if (
      nbline === longueur - 1 &&
      i === initialWord.length - 1 &&
      e.target.className === "letter"
    ) {
      localStorage.setItem("finish", true);
    }
    //if the user submits a correct letter in the correct space
    if (e.keyCode !== 46 && e.keyCode !== 8) {
      handleInputAndMoveToNext(letter, e);
    }
    //once the space letter pressed, we call the function to assess the typed letters

    if (e.keyCode === 32 && e.target.className === "letterSpace") {
      IdenticalToInitialWord(e, currentArrayOfWords, nbline, initialWord);
    }
  };
  return (
    <input
      className={currentClass}
      type="text"
      idWord={i}
      id={id}
      maxLength="1"
      finish={finish}
      onKeyUp={(e) => handleSubmit(e)}
      onBlur={(e) => {
        let copyArrayOfWords = [...currentArrayOfWords];

        if (e.target.value !== " " && e.target.className !== "letterSpace") {
          copyArrayOfWords[nbline][i] = e.target.value;
        }
        console.log("now the whole", copyArrayOfWords);
        setCurrentArrayOfWords(copyArrayOfWords);
      }}
    />
  );
}

export default Letter;
