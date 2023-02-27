import React from "react";
import Image from "next/image";

import { ScienceSingleNextLessonProps } from "@/src/types/Science/ScienceSingleNextLesson";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const ScienceSingleNextLesson = ({
  title,
  id,
  image,
}: ScienceSingleNextLessonProps) => {
  return (
    <div className={wrapper}>
      <p>
        {id}) {title}
      </p>
      <span>
        <Image
          src={image}
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </span>
    </div>
  );
};

export default ScienceSingleNextLesson;
