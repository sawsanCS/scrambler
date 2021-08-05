import React from "react";
import { useEffect, useState } from "react";
import LettersLine from "./LettersLine";
import "./Sentence.css";

function Letter(props) {
  const { className, letter, i, nbline, arrayOfWords, id, value } = props;
  const [currentArrayOfWords, setCurrentArrayOfWords] = useState(arrayOfWords);
  const [currentClass, setCurrentClass] = useState(className);

  const handleSubmit = (e) => {
    e.preventDefault();
    //if the user submits a correct letter in the correct space
    if (letter === e.target.value && e.target.className !== "letterSpace") {
      e.target.className = "greenClassName";
      if (e.target.nextElementSibling !== null) {
        e.target.nextElementSibling.focus();
      }
    }

    if (e.keyCode === 32 && e.target.className === "letterSpace") {
      //e.target.className = { greenClassNameForLetterSpace };

      if (currentArrayOfWords[nbline].length > 1) {
        if (currentArrayOfWords[nbline].join("") === props.initialWord) {
          alert("correct");
          e.target.className = "greenClassName";
          console.log("esm class", e.target.className);
        }
      } else {
        if (currentArrayOfWords[nbline][0] === props.initialWord) {
          e.target.className = "greenClassName";
          console.log("esm class", e.target.className);
          alert("correct");
        }
      }
    }
    console.log("look at the final result", currentArrayOfWords[nbline]);
  };
  return (
    <input
      className={currentClass}
      type="text"
      idWord={i}
      id={id}
      maxLength="1"
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
