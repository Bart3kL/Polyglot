import React from "react";
import Image from "next/image";

import { WordCardImageProps } from "@/src/types/Words/WordCardImage";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const WordCardImage = ({ image }: WordCardImageProps) => {
  return (
    <div className={wrapper}>
      <Image src={image} alt="Picture of the author" width={300} height={200} />
    </div>
  );
};

export default WordCardImage;
