import React from "react";

import VocabluaryContent from "../../molecules/VocabluaryContent";
import { VocabluaryPageProps } from "@/src/types/Vocabluary/VocabluaryPage";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle, wrapperContent } = styles;

const VocabluaryPage = ({ vocabluary }: VocabluaryPageProps) => {
  return (
    <section className={wrapper}>
      <h1 className={wrapperTitle}>
        Lekcja 1 - <span>słownictwo</span>
      </h1>
      <div className={wrapperContent}>
        <VocabluaryContent vocabluary={vocabluary} />
      </div>
    </section>
  );
};

export default VocabluaryPage;
