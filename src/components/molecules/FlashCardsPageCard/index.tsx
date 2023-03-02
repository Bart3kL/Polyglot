import React from "react";

import useFlashcard from "../../lib/hooks/useFlashcard";
import FlashCardOpen from "../../atoms/FlashCardOpen";
import FlashCardClose from "../../atoms/FlashCardClose";
import { FlashCardsCardProps } from "@/src/types/Flashcards/FlashCardsCard";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle, wrapperSingle, wrapperButton } = styles;

const FlashCardsCard = ({
  data,
  showBtn,
  step,
  showToNextStepBtn,
  headerTitle,
  loadWordBtn,
  btnLabel,
  clickLabel,
  word,
}: FlashCardsCardProps) => {
  const {
    setToggle,
    handleSound,
    handleLoadWords,
    handleToNextStep,
    setNextWord,
    toggle,
    nextWord,
  } = useFlashcard(data);

  return (
    <div className={wrapper} id="preview">
      <h2 className={wrapperTitle}>
        {headerTitle} {step && <span>Etap {step}</span>}
      </h2>
      <div className={wrapperSingle} onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <FlashCardOpen
            data={data}
            nextWord={nextWord}
            setNextWord={setNextWord}
          />
        ) : (
          <FlashCardClose
            data={data}
            clickLabel={clickLabel}
            word={word}
            nextWord={nextWord}
            handleSound={handleSound}
          />
        )}
      </div>
      {showBtn && (
        <button
          onClick={handleLoadWords}
          className={wrapperButton}
          id="loadFlashcards"
        >
          {loadWordBtn}
        </button>
      )}
      {showToNextStepBtn && (
        <button onClick={handleToNextStep} className={wrapperButton}>
          {btnLabel}
        </button>
      )}
    </div>
  );
};

export default FlashCardsCard;
