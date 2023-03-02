import React from "react";

import { HangmanDetailsProps } from "@/src/types/Hangman/HangmanDetails";

import styles from "./rwd.module.scss";
const { wrapper, wrapperOtherColor } = styles;

const HangmanDetails = ({
  game,
  amountBadAnswers,
  youLostLabel,
}: HangmanDetailsProps) => {
  return (
    <div className={wrapper}>
      {game.wrong === 6 ? (
        <p>
          {youLostLabel}{" "}
          <span className={wrapperOtherColor}>{game.word.name}</span>
        </p>
      ) : (
        <>
          <p>
            {amountBadAnswers}
            <span className={wrapperOtherColor}> {game.wrong}</span>
          </p>
          <p>{game.word.translation}</p>
        </>
      )}
    </div>
  );
};

export default HangmanDetails;
