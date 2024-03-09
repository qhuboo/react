import React from "react";
import styled from "styled-components";
import { range } from "../../utils";

const grid = range(6).map((index) => range(5));
const squareGrid = grid.map((row) => {
  return row.map((cell) => {
    return crypto.randomUUID();
  });
});
function Game({ answer, guessList }) {
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
        {guessList.length > 0 &&
          guessList.map((word) =>
            word.map((letter) => (
              <GridCell key={letter.id} className={`cell ${letter.status}`}>
                {letter.letter}
              </GridCell>
            ))
          )}

        {squareGrid.slice(guessList.length, 6).map((row) => {
          return row.map((cell) => {
            return <GridCell key={cell}></GridCell>;
          });
        })}
      </GameGrid>
      <div>
        {guessList.length > 0 && isWon(guessList[guessList.length - 1]) === 5 && (
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
        {guessList.length === 6 &&
          isWon(guessList[guessList.length - 1]) !== 5 && (
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
