import React from "react";
import Sentence from "./components/Sentence";
import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [nbSentence, setNbSentence] = useState(1);
  const [score, setScore] = useState(0);
  const [longueur, setLongueur] = useState(0);
  const [sentenceContent, setSentenceContent] = useState("");
  const updateNbSentence = () => {
    setNbSentence(nbSentence + 1);
    console.log("look at the value", nbSentence);
  };
  const fetchData = () => {
    return fetch(`https://api.hatchways.io/assessment/sentences/${nbSentence}`)
      .then((response) => response.json())
      .then((data) => {
        setSentenceContent(data.data.sentence);
        setLongueur(data.data.sentence.split(" ").length);
      });
  };
  useEffect(() => fetchData(), [nbSentence]);
  return (
    <div className="App">
      <Sentence
        content={sentenceContent}
        nbSentence={updateNbSentence}
        score={score}
        longueur={longueur}
      />
    </div>
  );
}

export default App;
