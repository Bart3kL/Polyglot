import React from "react";

import useGetUserProgress from "../../../lib/axios/useGetUserProgress";
import { ScienceSingleLessonBarProps } from "../../types/SciencePage/ScienceSingleLessonBar";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const ScienceSingleLessonBar = ({ id }: ScienceSingleLessonBarProps) => {
  const fetchLessonStep = useGetUserProgress();
  return (
    <div
      className={wrapper}
      key={id}
      style={
        fetchLessonStep?.userProgress?.lesson >= id
          ? { backgroundColor: "red" }
          : { backgroundColor: "#d9d9d9" }
      }
    >
      Lekcja {id}
    </div>
  );
};

export default ScienceSingleLessonBar;
