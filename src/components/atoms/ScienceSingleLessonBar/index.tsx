import React from "react";

import { ScienceSingleLessonBarProps } from "@/src/types/Science/ScienceSingleLessonBar";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const ScienceSingleLessonBar = ({
  id,
  userProgress,
}: ScienceSingleLessonBarProps) => {
  return (
    <div
      className={wrapper}
      key={id}
      style={
        userProgress?.lesson >= id
          ? { backgroundColor: "red" }
          : { backgroundColor: "#d9d9d9" }
      }
    >
      Lekcja {id}
    </div>
  );
};

export default ScienceSingleLessonBar;
