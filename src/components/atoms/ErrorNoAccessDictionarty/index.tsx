import React from "react";

import styles from "./rwd.module.scss";
const { wrapper, wrapperContent, wrapperNav } = styles;

const ErrorNoAccessDictionarty = () => {
  return (
    <div className={wrapper}>
      <div className={wrapperContent}>
        <h2>Zaloguj się!</h2>
        <p>Musisz być zalogowany aby korzystać z tej strony</p>
      </div>
    </div>
  );
};

export default ErrorNoAccessDictionarty;
