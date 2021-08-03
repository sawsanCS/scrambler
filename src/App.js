import React from "react";
import Sentence from "./components/Sentence";
import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [nbSentence, setNbSentence] = useState(1);
  const [score, setScore] = useState(0);
  const [sentenceContent, setSentenceContent] = useState("");
  const updateNbSentence = (value) => {
    setNbSentence(nbSentence + value);
    console.log("look at the value", nbSentence);
  };
  const fetchData = () => {
    if (nbSentence <= 10 && nbSentence > 0) {
      return fetch(
        `https://api.hatchways.io/assessment/sentences/${nbSentence}`
      )
        .then((response) => response.json())
        .then((data) => setSentenceContent(data.data.sentence));
    } else {
      alert("You have answered all the sentences, thank you");
    }
  };
  useEffect(() => fetchData(), [nbSentence]);
  return (
    <div className="App">
      <Sentence
        content={sentenceContent}
        nbSentence={updateNbSentence}
        score={score}
      />
    </div>
  );
}

export default App;
