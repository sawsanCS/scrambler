import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Sentence.css";

function LettersLine(props) {
  let { nb, word, initialWord } = props;
  const [countChar, setCountChar] = useState(0);
  const inputReference = useRef();
  useEffect(() => setWordLetters([]), [props.nbLine]);
  useEffect(() => {
    inputReference.current?.focus();
    document.getElementById("letter").reset();

    setWordLetters("");
  }, [props.word]);
  const [wordLetters, setWordLetters] = useState([]);
  const handleLetter = (e) => {
    let newWordLetters = [...wordLetters];
    if (e.target.value !== " ") {
      newWordLetters.push(e.target.value);
    }
    setWordLetters(newWordLetters);
  };

  const handleLetterSpace = (e) => {
    console.log(wordLetters);
    if (e.keyCode === 32) {
      if (wordLetters.length > 1) {
        if (wordLetters.join("") == props.initialWord) {
          alert("correct");
          console.log(
            "njarreb",
            e.target.parentNode.parentNode.parentNode.childNodes[2]
          );
        }
      } else {
        if (wordLetters[0] == props.initialWord) {
          alert("correct");
          console.log(
            "njarreb",
            e.target.parentNode.parentNode.parentNode.childNodes[2]
          );
        }
      }
    }
  };
  let wordArray = word.split("");
  console.log("lettersLine", props);

  return (
    <form id="letter">
      <div className="line">
        {wordArray.map((letter) => {
          console.log("countchar", countChar, "letter", letter);
          return (
            <input
              className="letter"
              type="text"
              maxLength="1"
              onKeyUp={(e) => {
                if (initialWord[countChar] === e.target.value) {
                  e.target.className = "greenClassName";
                  setCountChar(countChar + 1);

                  e.target.nextElementSibling.focus();
                } else {
                  e.target.nextElementSibling.focus();
                  setCountChar(countChar + 1);
                }
              }}
              onBlur={(e) => {
                handleLetter(e);
              }}
              ref={inputReference}
            />
          );
        })}
        <input
          className="letterSpace"
          type="text"
          maxLength="1"
          onKeyUp={(e) => {
            e.target.className = "greenClassName";
            handleLetterSpace(e);
            setCountChar(0);
          }}
          ref={inputReference}
        />
      </div>
    </form>
  );
}

export default LettersLine;
