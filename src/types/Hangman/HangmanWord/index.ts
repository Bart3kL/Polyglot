import { Word } from "../../Words/utilityTypes";

export interface HangmanWordProps {
  uniqueChars: string[];
  handleSound: () => void;
  game: {
    addedLetters: string[];
    word: Word;
    wrong: number;
  };
  congrats: string;
}
