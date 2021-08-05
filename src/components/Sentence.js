import React from "react";
import { useEffect, useState } from "react";
import LettersLine from "./LettersLine";
import "./Sentence.css";

function Sentence(props) {
  console.log("props of sentence", props);
  const initialSentenceArray = props.content.split(" ");
  const [finish, setFinish] = useState(false);

  const [scrambledFinalSentence, setScrambledFinalSentence] = useState(
    props.content.split(" ")
  );
  useEffect(() => scrambleSentence(), [props.nbSentence]);
  useEffect(() => {
    let matrix = [[]];
    //init the grid matrix
    props.content.split(" ").map((el, i) => {
      matrix[i] = new Array(el.length);
      matrix[i].map((e) => (e = ""));
    });
    setArrayOfWords(matrix);
  }, [props.nbSentence]);
  const [arrayOfWords, setArrayOfWords] = useState([[]]);

  //a function that scrambles the original sentence and calls a function that scrambles words
  const scrambleSentence = () => {
    let scrambledSentence = [];
    let scrambledWord = "";
    let words = props.content.split(" ");
    for (let c = 0; c < words.length; c++) {
      if (words[c].length > 2) {
        scrambledWord = scrambleWord(words[c]);
        scrambledSentence.push(scrambledWord);
      } else {
        scrambledSentence.push(words[c]);
      }
    }
    console.log("see the result now", scrambledSentence);
    setScrambledFinalSentence(scrambledSentence);
    return scrambledSentence;
  };

  //a function that scrambles words
  const scrambleWord = (word) => {
    let wordArray = word.split("");
    let aux, r;
    for (let c = 1; c < wordArray.length - 1; c++) {
      do {
        r = Math.floor(Math.random() * wordArray.length - 1) + 1;
      } while (r === 0 || r === wordArray.length - 1);
      aux = wordArray[r];
      wordArray[r] = wordArray[c];
      wordArray[c] = aux;
    }
    console.log(wordArray);
    return wordArray.join("");
  };
  return (
    <div className="currentSentence">
      <div className="title">
        {scrambledFinalSentence.map((word) => {
          return word + "  ";
        })}
      </div>
      <div className="clarification1">Guess the sentence! Start typing</div>
      <div className="clarification2">
        The yellow blocks are meant for spaces
      </div>
      <div className="score">Score : {props.score}</div>

      <div className="inputsToFill">
        {scrambledFinalSentence.map((word, i) => {
          console.log("word", word, "number", i);
          return (
            <LettersLine
              nbline={i}
              nb={word.length}
              word={word}
              initialWord={initialSentenceArray[i]}
              longueur={props.longueur}
              arrayOfWords={arrayOfWords}
              nbSentence={props.nbSentence}
            />
          );
        })}
      </div>
      {!finish && (
        <button type="button" onClick={props.nbSentence}>
          Next
        </button>
      )}
    </div>
  );
}

export default Sentence;
