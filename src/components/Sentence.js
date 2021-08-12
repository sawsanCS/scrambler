import React from "react";
import { useEffect, useState } from "react";
import LettersLine from "./LettersLine";
import "./Sentence.css";

function Sentence(props) {
  console.log("props of sentence", props);
  const { longueur, content, nbSentence, score } = props;
  const initialSentenceArray = content.split(" ");
  const [finish, setFinish] = useState(false);
  const updateFinish = () => {
    setFinish(true);
    console.log("finish", finish);
  };
  const [scrambledFinalSentence, setScrambledFinalSentence] = useState(
    content.split(" ")
  );
  useEffect(() => scrambleSentence(), [nbSentence]);
  useEffect(() => {
    let matrix = [[]];
    //init the grid matrix
    content.split(" ").map((el, i) => {
      matrix[i] = new Array(el.length);
      matrix[i].map((e) => (e = ""));
    });
    setArrayOfWords(matrix);
    // console.log("nthabbet fiha fergha", arrayOfWords, content);
  }, [nbSentence]);
  const [arrayOfWords, setArrayOfWords] = useState([[]]);

  //a function that scrambles the original sentence and calls a function that scrambles words
  const scrambleSentence = () => {
    let scrambledSentence = [];
    let scrambledWord = "";
    let words = content.split(" ");
    for (let c = 0; c < words.length; c++) {
      if (words[c].length > 2) {
        scrambledWord = scrambleWord(words[c]);
        scrambledSentence.push(scrambledWord);
      } else {
        scrambledSentence.push(words[c]);
      }
    }
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
    // console.log(wordArray);
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
      <div className="score">Score : {score}</div>

      <div className="inputsToFill">
        {scrambledFinalSentence.map((word, i) => {
          // console.log("word", word, "number", i, word.length);
          return (
            <LettersLine
              nbline={i}
              nb={word.length}
              word={word}
              initialWord={initialSentenceArray[i]}
              longueur={longueur}
              arrayOfWords={arrayOfWords}
              nbSentence={nbSentence}
              finish={updateFinish}
            />
          );
        })}
      </div>
      {JSON.parse(localStorage.getItem("finish")) && (
        <button type="button" onClick={nbSentence}>
          Next
        </button>
      )}
    </div>
  );
}

export default Sentence;
