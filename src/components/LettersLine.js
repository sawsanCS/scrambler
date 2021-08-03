import React from "react";
import { useState } from "react";
import "./Sentence.css";

function LettersLine(props) {
  let { nb, word } = props;
  let wordArray = word.split("");
  console.log("lettersLine", props);
  return (
    <div className="line">
      {wordArray.map((letter) => {
        return <input className="letter" type="text" value={letter} />;
      })}
      <input className="letterSpace" type="text" value="space" />
    </div>
  );
}

export default LettersLine;
