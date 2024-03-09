import React from "react";
import styled from "styled-components";
import { checkGuess } from "../../game-helpers";

function Input({ answer, guessList, setGuessList }) {
  const [input, setInput] = React.useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // The checkGuess takes two strings representing the guess and the answer and it returns
          // an array of objects where each object contains two properties, the letter and the status of the word.
          // Here we map through this array of objects and add an id property for mapping later on.
          const resultWithId = checkGuess(input, answer).map((guess) => {
            return {
              letter: guess.letter,
              status: guess.status,
              id: crypto.randomUUID(),
            };
          });
          setGuessList([...guessList, resultWithId]);
          setInput("");
        }}
      >
        <InputLabel htmlFor="guess-input">Guess:</InputLabel>
        <br />
        <InputGuess
          type="text"
          minLength="5"
          maxLength="5"
          id="guess-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
    </div>
  );
}

const InputGuess = styled.input`
  display: block;
  width: 100%;
  font-size: 2rem;
  border: 2px solid var(--color-gray-300);
  border-radius: 4px;
  padding: 8px 16px;
  outline-offset: 4px;
`;

const InputLabel = styled.label`
  font-size: 1.25rem;
`;

export default Input;
