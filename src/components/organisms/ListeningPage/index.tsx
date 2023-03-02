import React, { useMemo } from "react";

import useListening from "../../lib/hooks/useListening";
import { Icons } from "../../shared";
import RepetitionsDefaultButtons from "../../atoms/RepetitionsDefaultButtons";
import RepetitionsCheckButton from "../../atoms/RepetitionsCheckButton";
import { Word } from "@/src/types/Words/utilityTypes";
import { ListeningPageProps } from "@/src/types/Listening/ListeningPage";

import styles from "./rwd.module.scss";
const {
  wrapper,
  wrapperContent,
  wrapperTitle,
  wrapperAudio,
  wrapperWordToTranslate,
  wrapperMessage,
  wrapperButtons,
} = styles;

const ListeningPage = ({ words, page }: ListeningPageProps) => {
  const shuffledArray = useMemo(
    () => words?.sort((a: Word, b: Word) => 0.5 - Math.random()),
    [words]
  );
  const {
    handleSound,
    manageRepeats,
    handleResult,
    handleChange,
    handleAddLetter,
    handleCheckResult,
  } = useListening(shuffledArray);

  const {
    checkButtonsList,
    headerTitle,
    translatePleaceholder,
    thatsAllLabel,
    checkAnswerBtn,
    hintAnswerBtn,
  } = page;
  return (
    <section className={wrapper}>
      <h2 className={wrapperTitle}>{headerTitle}</h2>
      <div className={wrapperContent}>
        {manageRepeats.repetitionsLength === 0 ? (
          <div className={wrapperWordToTranslate}>{thatsAllLabel}</div>
        ) : (
          <p className={wrapperAudio}>
            <Icons.GiSpeaker onClick={handleSound} />
          </p>
        )}

        {manageRepeats.success && (
          <div className={wrapperMessage}>
            {shuffledArray[manageRepeats.index].name}
          </div>
        )}
        <textarea
          placeholder={translatePleaceholder}
          value={manageRepeats.value}
          onChange={(e: any) => handleChange(e)}
          disabled={
            manageRepeats.success || manageRepeats.repetitionsLength === 0
              ? true
              : false
          }
        />
        {!manageRepeats.success ? (
          <div className={wrapperButtons}>
            <RepetitionsDefaultButtons
              handleAddLetter={handleAddLetter}
              handleCheckResult={handleCheckResult}
              value={manageRepeats.value}
              checkAnswerBtn={checkAnswerBtn}
              hintAnswerBtn={hintAnswerBtn}
              repetitionsLength={manageRepeats.repetitionsLength}
            />
          </div>
        ) : (
          <div className={wrapperButtons}>
            {checkButtonsList.map((button, i) => (
              <RepetitionsCheckButton
                handleResult={handleResult}
                {...button}
                index={i}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ListeningPage;
