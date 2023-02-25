import React from "react";
import Link from "next/link";
import Image from "next/image";

import { DictionaryLevelCardProps } from "../../../types/Dictionary/DictionaryLevelCard";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const DictionaryLevelCard = ({
  id,
  image,
  level,
  slug,
}: DictionaryLevelCardProps) => {
  return (
    <Link href={`/dictionary/${slug}`}>
      <li className={wrapper}>
        <Image
          src={image}
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <button>{level}</button>
      </li>
    </Link>
  );
};

export default DictionaryLevelCard;
