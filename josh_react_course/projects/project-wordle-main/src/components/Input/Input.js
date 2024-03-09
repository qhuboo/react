import React from "react";
import styled from "styled-components";
import { checkGuess } from "../../game-helpers";

function Input({ guessList, setGuessList }) {
  const [input, setInput] = React.useState("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setGuessList([...guessList, input]);
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
