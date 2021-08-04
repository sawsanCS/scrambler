import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Sentence.css";

function LettersLine(props) {
  let { nb, word } = props;
  console.log("nbline", props.nbLine);
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
    newWordLetters.push(e.target.value);
    setWordLetters(newWordLetters);
  };

  const handleLetterSpace = (e) => {
    console.log(wordLetters);
    if (e.keyCode === 32) {
      if (wordLetters.length > 1) {
        if (wordLetters.join("") == props.word) {
          alert("correct");
          console.log(
            "njarreb",
            e.target.parentNode.parentNode.parentNode.childNodes[2]
          );
        }
      } else {
        if (wordLetters[0] == props.word) {
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
      <div className="line" id={props.nbLine}>
        {wordArray.map((letter) => {
          return (
            <input
              className="letter"
              type="text"
              maxLength="1"
              onKeyUp={(e) => {
                e.target.className = "greenClassName";
                e.target.nextElementSibling.focus();
              }}
              onBlur={(e) => {
                console.log("we left the input");
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
          }}
          ref={inputReference}
        />
      </div>
    </form>
  );
}

export default LettersLine;
