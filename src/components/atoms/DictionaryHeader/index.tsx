import React from "react";

import { DictionaryHeaderProps } from "../../../types/Dictionary/DictionaryHeader";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle } = styles;

const DictionaryHeader = ({ title, description }: DictionaryHeaderProps) => {
  return (
    <header className={wrapper}>
      <div className={wrapperTitle}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </header>
  );
};

export default DictionaryHeader;
