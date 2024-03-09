import React from "react";
import Game from "../Game";
import Header from "../Header";
import Input from "../Input";

function App() {
  const [guessList, setGuessList] = React.useState([]);
  const [guessResults, setGuessResults] = React.useState([]);

  return (
    <div className="wrapper">
      <Header />
      <Game guessList={guessList} guessResults={guessResults} />
      <Input
        guessList={guessList}
        setGuessList={setGuessList}
        guessResults={guessResults}
        setGuessResults={setGuessResults}
      />
    </div>
  );
}

export default App;
