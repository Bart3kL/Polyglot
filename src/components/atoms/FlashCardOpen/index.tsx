import React from "react";
import Image from "next/image";

import { Icons } from "../../shared";
import { FlashCardOpenProps } from "@/src/types/Flashcards/FlashCardOpen";

import styles from "./rwd.module.scss";
const { wrapperArrows, wrapperArrowsImage, wrapperSentences } = styles;

const FlashCardOpen = ({ data, nextWord, setNextWord }: FlashCardOpenProps) => {
  const manageNextWord = (action: string) => {
    return action === "minus"
      ? nextWord > 0
        ? setNextWord(nextWord - 1)
        : setNextWord(data.length - 1)
      : nextWord < data.length - 1
      ? setNextWord(nextWord + 1)
      : setNextWord(0);
  };
  return (
    <>
      {data.length > 0 ? (
        <h5>{data[nextWord]?.translation}</h5>
      ) : (
        <h5>Tłumaczenie</h5>
      )}
      <div className={wrapperArrows}>
        <button onClick={() => manageNextWord("minus")}>
          <Icons.MdKeyboardArrowLeft />
        </button>
        {data[nextWord]?.image && (
          <div className={wrapperArrowsImage}>
            <Image
              src={data[nextWord].image}
              alt="Picture of the author"
              width={80}
              height={80}
            />
          </div>
        )}

        <button onClick={() => manageNextWord("add")}>
          <Icons.MdKeyboardArrowRight />
        </button>
      </div>
      {data[nextWord]?.example1 && (
        <div className={wrapperSentences}>
          <p>{data[nextWord].example1}</p>
          <p>{data[nextWord].example2}</p>
        </div>
      )}
      <p>
        {nextWord + 1}/{data.length}
      </p>
    </>
  );
};

export default FlashCardOpen;
