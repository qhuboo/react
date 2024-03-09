import { range } from "./utils";
import { NUM_OF_GUESSES_ALLOWED } from "./constants";

export const squareGrid = range(NUM_OF_GUESSES_ALLOWED)
  .map((index) => range(5))
  .map((row) => {
    return row.map((cell) => {
      return crypto.randomUUID();
    });
  });
