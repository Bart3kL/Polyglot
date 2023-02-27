import React from "react";

import DictionaryHeader from "../../atoms/DictionaryHeader";
import { WordsPageProps } from "@/src/types/Words/WordsPage";
import WordCard from "../../molecules/WordCard";

import styles from "./rwd.module.scss";
const { wrapper, wrapperList } = styles;

export default function WordsPage({
  page: { headerTitle, headerDescription },
  words,
}: WordsPageProps) {
  return (
    <>
      <DictionaryHeader title={headerTitle} description={headerDescription} />
      <section className={wrapper}>
        <ul className={wrapperList}>
          {words.map((word) => (
            <WordCard {...word} key={word.name} />
          ))}
        </ul>
      </section>
    </>
  );
}
