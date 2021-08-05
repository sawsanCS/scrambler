import React from "react";
import { useState, useRef, useEffect } from "react";
import Letter from "./Letter";
import "./Sentence.css";

export default function LettersLine(props) {
  let { nb, nbline, longueur, word, initialWord } = props;
  const [arrayOfWords, setArrayOfWords] = useState(props.arrayOfWords);
  const [value, setValue] = useState("");
  const [greenClassNameForLetterSpace, setGreenClassNameForLetterSpace] =
    useState("letterSpace");
  const [greenClassNameForLetter, setGreenClassNameForLetter] =
    useState("letter");
  const updateLetter = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    setGreenClassNameForLetter("letter");
    setGreenClassNameForLetterSpace("letterSpace");
    [...document.getElementsByTagName("greenClassName")].forEach((el) => {
      el.className = "letter";
    });
    setValue("");
  }, [props.nbSentence]);

  return (
    <form>
      <div className="line">
        {initialWord.split("").map((letter, i) => {
          return (
            <Letter
              letter={letter}
              i={i}
              id="letter"
              nbline={nbline}
              value={(e) => updateLetter(e)}
              className={greenClassNameForLetter}
              arrayOfWords={arrayOfWords}
              initialWord={initialWord}
            />
          );
        })}
        <Letter
          letter=""
          id="space"
          i={initialWord.split("").length}
          nbline={nbline}
          value={(e) => updateLetter(e)}
          className={greenClassNameForLetterSpace}
          arrayOfWords={arrayOfWords}
          initialWord={initialWord}
        />
      </div>
    </form>
  );
}
