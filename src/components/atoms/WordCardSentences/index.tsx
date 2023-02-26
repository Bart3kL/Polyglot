import React from "react";

import { WordCardSentecesProps } from "@/src/types/Words/WordCardSenteces";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const WordCardSenteces = ({
  example1,
  example2,
  handleToggleSentences,
}: WordCardSentecesProps) => {
  return (
    <div className={wrapper}>
      <span>{example1}</span>
      <span>{example2}</span>
      <button onClick={handleToggleSentences}>Słowo</button>
    </div>
  );
};

export default WordCardSenteces;
