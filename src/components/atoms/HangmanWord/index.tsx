import React from "react";

import { Icons } from "../../shared";
import { HangmanWordProps } from "@/src/types/Hangman/HangmanWord";

import styles from "./rwd.module.scss";
const { wrapper, wrapperSound, wrapperLetters, wrapperOtherColor } = styles;

const HangmanWord = ({
  uniqueChars,
  handleSound,
  game,
  congrats,
}: HangmanWordProps) => {
  return (
    <div className={wrapper}>
      {uniqueChars.length === game.addedLetters.length ? (
        <>
          <p>
            {congrats}
            <span className={wrapperOtherColor}>{game.word.name}</span>
          </p>
          <p className={wrapperSound}>
            <Icons.GiSpeaker onClick={handleSound} />
          </p>
        </>
      ) : (
        <p className={wrapperLetters}>
          {game.word.name
            .split("")
            .map((ltr) => (game.addedLetters.includes(ltr) ? ltr : "_"))}
        </p>
      )}
    </div>
  );
};

export default HangmanWord;
