import React from "react";
import { useState } from "react";
import "./Sentence.css";

function LettersLine(props) {

  return (
      
    <div className="currentSentence">
      <div className="title">
        {scrambleSentence(props.content).map((word) => {
          return word + "  ";
        })}
      </div>
      <div className="clarification1">Guess the sentence! Start typing</div>
      <div className="clarification2">
        The yellow blocks are meant for spaces
      </div>
      <div className="score">Score : {props.score}</div>
      {!finish && (
        <button type="button" onClick={props.nbSentence}>
          Next
        </button>
      )}
      <div className="inputsToFill">
          for (let c = 0; c <scrambleSentence(props.content).length; c++) {
              <LettersLine nb={}/>
          }
      </div>
    </div>

  );
}

export default LettersLine;
