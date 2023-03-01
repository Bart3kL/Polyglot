import React from "react";

import { Icons } from "../../shared";
import { VocabluaryCardProps } from "@/src/types/Vocabluary/VocabluaryCard";

import styles from "./rwd.module.scss";
const { wrapperWord, wrapperSound, wrapperButtons } = styles;

const VocabluaryCard = ({
  vocabluary,
  wordIndex,
  handleToStudy,
  handleToNextWord,
  handleSound,
  toNextWordLabel,
  toStudyLabel,
}: VocabluaryCardProps) => {
  return (
    <>
      <div className={wrapperWord}>
        <p>{vocabluary[wordIndex].name}</p>
        <p>{vocabluary[wordIndex].translation}</p>
      </div>
      <div className={wrapperSound} id="sound">
        <Icons.GiSpeaker onClick={handleSound} />
      </div>
      <div className={wrapperButtons}>
        <button onClick={handleToStudy} id="toStudy">
          {toStudyLabel}
        </button>
        <button onClick={handleToNextWord} id="toNextWord">
          {toNextWordLabel}
        </button>
      </div>
      <p>{`${wordIndex}/${vocabluary.length}`}</p>
    </>
  );
};

export default VocabluaryCard;
