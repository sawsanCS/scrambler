import React from "react";
import { useEffect, useState } from "react";

function Sentence(props) {
  console.log("props of sentence", props);
  const [finish, setFinish] = useState(false);

  return (
    <div className="currentSentence">
      <div className="title">{props.content}</div>
      <div className="clarification1">Guess the sentence! Start typing</div>
      <div className="clarification2">
        The yellow blocks are meant for spaces
      </div>
      <div className="score">Score : {props.score}</div>
      {!finish && (
        <button type="button" onClick={() => props.nbSentence(1)}>
          Next
        </button>
      )}
    </div>
  );
}

export default Sentence;
