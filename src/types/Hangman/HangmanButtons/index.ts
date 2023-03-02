export interface HangmanButtonsProps {
  uniqueChars: string[];
  handleGuess: (e: any) => void;
  addedLetters: string[];
  resetGame: () => void;
  loss: boolean;
  alphabet: string;
  resetGameBtn: string;
}
