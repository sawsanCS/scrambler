import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Sentence.css";

function LettersLine(props) {
  let { nb, word } = props;
  const inputReference = useRef();
  const [greenClassname, setGreenClassname] = useState(false);
  const [enteredText, setEnteredText] = useState("");
  useEffect(() => {
    inputReference.current?.focus();
    document.getElementById("letter").reset();
    setGreenClassname(false);

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
          e.target.nextElementSibling.focus();
        }
      } else {
        if (wordLetters[0] == props.word) {
          alert("correct");
          e.target.nextElementSibling.focus();
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
          return (
            <input
              className="letter"
              type="text"
              maxLength="1"
              onKeyPress={(e) => {
                setEnteredText(e.target.value);
              }}
              onKeyUp={(e) => {
                setGreenClassname(true);
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
          value={enteredText}
          type="text"
          maxLength="1"
          onKeyPress={(e) => {
            setEnteredText(e.target.value);
          }}
          onKeyUp={(e) => {
            setGreenClassname(true);
            e.target.className("greenClassName");
          }}
          onKeyUp={(e) => {
            setEnteredText(e.target.value);
            handleLetterSpace(e);
          }}
          ref={inputReference}
        />
      </div>
    </form>
  );
}

export default LettersLine;
