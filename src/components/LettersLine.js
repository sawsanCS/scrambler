import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Sentence.css";

function LettersLine(props) {
  let { nb, word, initialWord } = props;
  let arrayOfWords = [[]];
  const lineRefs = useRef([]);
  console.log("props of letter line", props);
  useEffect(() => setWordLetters([]), [props.word]);
  useEffect(() => {
    lineRefs.current = wordArray.map(
      (_, i) => lineRefs.current[i] ?? React.createRef()
    );
    console.log(lineRefs);
    document.getElementById("letter").reset();

    setWordLetters("");
  }, [props.word]);
  const [wordLetters, setWordLetters] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const handleLetter = (e) => {
    /* let newWordLetters = [...wordLetters];
    if (e.target.value !== " ") {
      newWordLetters.push(e.target.value);
    } else if (e.keyCode === "8" || e.keyCode === "42") {
      newWordLetters.pop();
    }
    setWordLetters(newWordLetters);*/
    lineRefs.current[currentLine].focus();
  };

  const handleLetterSpace = (e) => {
    console.log(wordLetters);
    if (e.keyCode === 32) {
      if (wordLetters.length > 1) {
        if (wordLetters.join("") == props.initialWord) {
          alert("correct");
        }
      } else {
        if (wordLetters[0] == props.initialWord) {
          alert("correct");
        }
      }
    }
  };
  let wordArray = word.split("");

  return (
    <form id="letter">
      <div className="line">
        {wordArray.map((letter, i) => {
          return (
            <input
              className="letter"
              type="text"
              idWord={i}
              innerRef={lineRefs.current[i]}
              maxLength="1"
              onKeyUp={(e) => {
                setCurrentLine(i);
                arrayOfWords[nbLine][i] = e.target.value;
                if (initialWord[i] === e.target.value) {
                  e.target.className = "greenClassName";
                  e.target.nextElementSibling.focus();
                } else {
                  e.target.nextElementSibling.focus();
                }
              }}
              onBlur={(e) => {
                console.log("fel blur", e.target.value);
                handleLetter(e);
              }}
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
        />
      </div>
    </form>
  );
}

export default LettersLine;
