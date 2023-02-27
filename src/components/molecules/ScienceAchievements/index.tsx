import React from "react";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle } = styles;

const ScienceAchievements = () => {
  return (
    <div className={wrapper}>
      <h2 className={wrapperTitle}>Osiągnięcia</h2>
    </div>
  );
};

export default ScienceAchievements;
