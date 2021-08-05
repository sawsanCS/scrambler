import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Sentence.css";

export default function LettersLine(props) {
  let { nb, nbline, longueur, word, initialWord } = props;
  const [arrayOfWords, setArrayOfWords] = useState(props.arrayOfWords);
  const [greenClassNameForLetter, setGreenClassNameForLetter] =
    useState("letter");
  const [greenClassNameForLetterSpace, setGreenClassNameForLetterSpace] =
    useState("letterSpace");
  const lineRefs = useRef([]);
  console.log("props of letter line", props);

  useEffect(() => {
    lineRefs.current = word
      .split("")
      .map((_, i) => lineRefs.current[i] ?? React.createRef());
    setGreenClassNameForLetterSpace("letterSpace");
    setGreenClassNameForLetter("letter");
    console.log(document.getElementsByClassName("letter"));
    [...document.getElementsByClassName("letter")].forEach((el) => {
      el.value = "";
    });
    [...document.getElementsByClassName("letterSpace")].forEach((el) => {
      el.value = "";
    });
  }, [props.nbSentence]);
  const handleLetterSpace = (e) => {
    console.log(arrayOfWords);

    if (e.keyCode === 32) {
      setGreenClassNameForLetterSpace("greenClassName");
      e.target.className = greenClassNameForLetterSpace;
      if (arrayOfWords[nbline].length > 1) {
        if (arrayOfWords[nbline].join("") === props.initialWord) {
          alert("correct");
        }
      } else {
        if (arrayOfWords[nbline][0] === props.initialWord) {
          alert("correct");
        }
      }
    }
    console.log("look at the final result", arrayOfWords[nbline]);
  };

  return (
    <form>
      <div className="line">
        {initialWord.split("").map((letter, i) => {
          return (
            <input
              className="letter"
              type="text"
              idWord={i}
              id="letter"
              ref={lineRefs.current[i]}
              maxLength="1"
              onKeyUp={(e) => {
                if (letter === e.target.value) {
                  setGreenClassNameForLetter("greenClassName");
                  e.target.className = greenClassNameForLetter;
                  e.target.nextElementSibling.focus();
                } else {
                  e.target.nextElementSibling.focus();
                }
              }}
              onBlur={(e) => {
                console.log("besh ta3ref rou7ek wine", nbline, i);
                let copyArrayOfWords = [...arrayOfWords];
                console.log("the copy is here", arrayOfWords);
                copyArrayOfWords[nbline][i] = e.target.value;

                console.log("now the whole", copyArrayOfWords);
                setArrayOfWords(copyArrayOfWords);
              }}
            />
          );
        })}

        <input
          className="letterSpace"
          id="letterSpace"
          type="text"
          maxLength="1"
          onKeyUp={(e) => handleLetterSpace(e)}
        />
      </div>
    </form>
  );
}
