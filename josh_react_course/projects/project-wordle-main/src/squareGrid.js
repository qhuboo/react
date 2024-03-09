import { range } from "./utils";

export const squareGrid = range(6)
  .map((index) => range(5))
  .map((row) => {
    return row.map((cell) => {
      return crypto.randomUUID();
    });
  });
