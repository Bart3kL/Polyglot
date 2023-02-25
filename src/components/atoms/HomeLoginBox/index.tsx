import React from "react";

import { HomeLoginBox } from "@/src/types/Home/HomeLoginBox";

import styles from "./rwd.module.scss";
const { wrapperWelcomeMessage, wrapperLoginBtn } = styles;

const HomeLoginBox = ({
  username,
  title,
  message,
  buttonName,
  onClick,
}: HomeLoginBox) => {
  return (
    <>
      <h2 className={wrapperWelcomeMessage}>
        {username ? (
          <p>
            {message}
            {username}
          </p>
        ) : (
          <>
            <p>{title}</p>
            {message}
          </>
        )}
      </h2>
      <button className={wrapperLoginBtn} onClick={onClick}>
        {buttonName}
      </button>
    </>
  );
};

export default HomeLoginBox;
