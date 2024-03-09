import React from "react";
import Input from "../Input/Input";
import styled from "styled-components";
import { squareGrid } from "../../squareGrid";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function isWon(guess) {
    for (let i = 0; i < 5; i++) {
      if (guess[i].status !== "correct") {
        return false;
      }
    }
    return true;
  }
  return (
    <>
      <GameGrid>
        {guessList.length > 0 &&
          guessList.map((word) =>
            word.map((letter) => (
              <GridCell key={letter.id} className={`cell ${letter.status}`}>
                {letter.letter}
              </GridCell>
            ))
          )}

        {squareGrid
          .slice(guessList.length, NUM_OF_GUESSES_ALLOWED)
          .map((row) => {
            return row.map((cell) => {
              return <GridCell key={cell}></GridCell>;
            });
          })}
      </GameGrid>
      <Input
        answer={answer}
        guessList={guessList}
        setGuessList={setGuessList}
      />
      <div>
        {guessList.length > 0 && isWon(guessList[guessList.length - 1]) && (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>
                {guessList.length} guess{guessList.length > 1 ? "es" : ""}
              </strong>
              .
            </p>
          </div>
        )}
        {guessList.length === NUM_OF_GUESSES_ALLOWED &&
          !isWon(guessList[guessList.length - 1]) && (
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
  grid-template-columns: repeat(5, minmax(10px, 1fr));
  gap: 5px;
`;

const GridCell = styled.div`
  border: solid;
  height: 100px;
  width: 100px;
  aspect-ratio: 1/1;
  display: grid;
  place-content: center;
  font-size: 4rem;
  background-color: white;
`;

export default Game;
