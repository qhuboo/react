import React, { useEffect } from "react";
import styled from "styled-components";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({ guessList }) {
  const [guessResults, setGuessResults] = React.useState([]);
  console.log(guessResults);
  let guessDifference = range(6 - guessList.length);

  useEffect(() => {
    if (guessList.length > 0) {
      let resultNoId = checkGuess(guessList[guessList.length - 1], answer);
      console.log(resultNoId);
      let resultWithId = resultNoId.map((letter) => {
        return { ...letter, id: crypto.randomUUID() };
      });
      setGuessResults([...guessResults, resultWithId]);
    }
    console.log("render");
  }, [guessList]);

  function isWon(guess) {
    let correct = 0;
    for (let i = 0; i < 5; i++) {
      if (guess[i].status === "correct") {
        correct++;
      }
    }
    return correct;
  }

  return (
    <>
      <GameGrid>
        {guessResults.length > 0 &&
          guessResults.map((word) =>
            word.map((letter) => (
              <GridCell key={letter.id} className={`cell ${letter.status}`}>
                {letter.letter}
              </GridCell>
            ))
          )}
        {guessDifference.length > 0 &&
          guessDifference.map((index) => {
            return (
              <React.Fragment key={index}>
                <GridCell></GridCell>
                <GridCell></GridCell>
                <GridCell></GridCell>
                <GridCell></GridCell>
                <GridCell></GridCell>
              </React.Fragment>
            );
          })}
      </GameGrid>
      <div>
        {guessResults.length > 0 &&
          isWon(guessResults[guessResults.length - 1]) === 5 && (
            <div className="happy banner">
              <p>
                <strong>Congratulations!</strong> Got it in{" "}
                <strong>
                  {guessResults.length} guess{guessList.length > 1 ? "es" : ""}
                </strong>
                .
              </p>
            </div>
          )}
        {guessList.length === 6 &&
          isWon(guessResults[guessResults.length - 1]) !== 5 && (
            <div className="sad banner">
              <p>
                Sorry, the correct answer is <strong>{answer}</strong>.
              </p>
            </div>
          )}
      </div>
    </>
  );
}

const GameGrid = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-template-rows: repeat(6, minmax(100px, 1fr));
  gap: 5px;
`;

const GridCell = styled.div`
  border: solid;
  height: 100px;
  width: 100px;
  display: grid;
  place-content: center;
  font-size: 4rem;
  background-color: white;
`;

export default Game;
