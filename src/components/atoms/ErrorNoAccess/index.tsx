import React from "react";

import NavigationLeft from "../../layout/NavBar/NavigationLeft";

import styles from "./rwd.module.scss";
const { wrapper, wrapperContent, wrapperNav } = styles;

const ErrorNoAccess = () => {
  return (
    <div className={wrapper}>
      <div className={wrapperNav}>
        <NavigationLeft />
      </div>
      <div className={wrapperContent}>
        <h2>Zaloguj sie!</h2>
        <p>Musisz być zalogowany aby korzystać z tej strony</p>
      </div>
    </div>
  );
};

export default ErrorNoAccess;
