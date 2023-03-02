import React from "react";

import { Icons } from "../../shared";
import { FlashCardCloseProps } from "@/src/types/Flashcards/FlashCardClose";

import styles from "./rwd.module.scss";
const { wrapperSpeaker } = styles;

const FlashCardClose = ({
  data,
  nextWord,
  clickLabel,
  word,
  handleSound,
}: FlashCardCloseProps) => {
  return (
    <>
      {data.length > 0 ? <h5>{data[nextWord]?.name}</h5> : <h5>{word}</h5>}
      {data[nextWord]?.audio && (
        <Icons.GiSpeaker onClick={handleSound} className={wrapperSpeaker} />
      )}
      <p>{clickLabel}</p>
      {data.length > 0 ? (
        <p>
          {nextWord + 1}/{data.length}
        </p>
      ) : (
        <p>0/0</p>
      )}
    </>
  );
};

export default FlashCardClose;
