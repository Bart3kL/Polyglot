import React from "react";
import Image from "next/image";

import { WordCardImageProps } from "@/src/types/Words/WordCardImage";
import { Icons } from "../../shared";

import styles from "./rwd.module.scss";
const { wrapper, wrapperAdd } = styles;

const WordCardImage = ({
  image,
  manageWord,
  handleDeleteWordFromRepetitions,
  handleWordToRepetitions,
  index,
}: WordCardImageProps) => {
  return (
    <div className={wrapper}>
      <Image src={image} alt="Picture of the author" width={300} height={200} />
      {manageWord.exist ? (
        <div className={wrapperAdd} onClick={handleDeleteWordFromRepetitions}>
          <p>
            <Icons.AiOutlineMinus />
          </p>
        </div>
      ) : (
        <div
          className={wrapperAdd}
          onClick={handleWordToRepetitions}
          id={index === 0 ? "addIcon" : ""}
        >
          <p>
            <Icons.MdAdd />
          </p>
        </div>
      )}
    </div>
  );
};

export default WordCardImage;
