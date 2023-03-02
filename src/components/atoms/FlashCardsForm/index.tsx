import React from "react";

import useFlashCardsForm from "../../lib/hooks/useFlashCardsForm";
import { FlashCardsFormProps } from "@/src/types/Flashcards/FlashCardsForm";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle, wrapperInputs } = styles;

const FlashCardsForm = ({
  formTitle,
  word,
  translation,
  addWordLabel,
  inputTranslationlabel,
  inputWordLabel,
}: FlashCardsFormProps) => {
  const {
    handleAddWord,
    setSingleTranslation,
    singleTranslation,
    setSingleWord,
    singleWord,
  } = useFlashCardsForm();
  return (
    <div className={wrapper} id="form">
      <h2 className={wrapperTitle}>{formTitle}</h2>
      <div className={wrapperInputs}>
        <label>{word}</label>
        <input
          type="text"
          required={true}
          value={singleWord}
          onChange={(e) => setSingleWord(e.target.value)}
          placeholder={inputWordLabel}
        />
        <label>{translation}</label>
        <input
          type="text"
          required={true}
          value={singleTranslation}
          onChange={(e) => setSingleTranslation(e.target.value)}
          placeholder={inputTranslationlabel}
        />
        <button onClick={handleAddWord}>{addWordLabel}</button>
      </div>
    </div>
  );
};

export default FlashCardsForm;
