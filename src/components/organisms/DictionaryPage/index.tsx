import React from "react";

import DictionaryHeader from "../../atoms/DictionaryHeader";
import DictionaryLevelCard from "../../atoms/DictionaryLevelCard";
import { DictionaryPageProps } from "../../../types/Dictionary/DictionaryPage";

import styles from "./rwd.module.scss";
const { wrapper, wrapperList } = styles;

export default function DictionaryPage({
  headerTitle,
  headerDescription,
  levels,
}: DictionaryPageProps) {
  return (
    <>
      <DictionaryHeader title={headerTitle} description={headerDescription} />
      <section className={wrapper}>
        <ul className={wrapperList}>
          {levels.map((level) => (
            <DictionaryLevelCard {...level} key={level.id} />
          ))}
        </ul>
      </section>
    </>
  );
}
