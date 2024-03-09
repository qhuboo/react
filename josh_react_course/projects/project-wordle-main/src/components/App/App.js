import React from "react";
import Game from "../Game";
import Header from "../Header";
import Input from "../Input";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function App() {
  const [guessList, setGuessList] = React.useState([]);

  return (
    <div className="wrapper">
      <Header />
      <Game answer={answer} guessList={guessList} />
      <Input
        answer={answer}
        guessList={guessList}
        setGuessList={setGuessList}
      />
    </div>
  );
}

export default App;
