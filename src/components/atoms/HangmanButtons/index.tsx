import React from "react";

import { HangmanButtonsProps } from "@/src/types/Hangman/HangmanButtons";

import styles from "./rwd.module.scss";
const { wrapper, wrapperButtons, wrapperButtonsButton, wrapperButtonsReset } =
  styles;

const HangmanButtons = ({
  uniqueChars,
  handleGuess,
  addedLetters,
  resetGame,
  loss,
  alphabet,
  resetGameBtn,
}: HangmanButtonsProps) => {
  return (
    <div className={wrapper}>
      {uniqueChars.length === addedLetters.length || loss ? (
        <div className={wrapperButtons}>
          <button className={wrapperButtonsReset} onClick={resetGame}>
            {resetGameBtn}
          </button>
        </div>
      ) : (
        <div className={wrapperButtons}>
          {alphabet.split("").map((ltr, index) => (
            <button
              className={wrapperButtonsButton}
              key={index}
              value={ltr}
              onClick={handleGuess}
              disabled={addedLetters.includes(ltr)}
            >
              {ltr}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HangmanButtons;
