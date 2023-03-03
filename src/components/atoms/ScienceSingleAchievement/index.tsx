import React from "react";
import Image from "next/image";

import { ScienceSingleAchievementProps } from "@/src/types/Science/ScienceSingleAchievement";

import styles from "./rwd.module.scss";
const {
  wrapper,
  wrapperDetails,
  wrapperDetailsDescription,
  wrapperDetailsDescriptionDesktop,
} = styles;

const ScienceSingleAchievement = ({
  name,
  description,
  imgDefault,
  imgAchieved,
  checkAchievement,
  achievementsCongratsText,
}: ScienceSingleAchievementProps) => {
  const isAchieved = checkAchievement === "true";
  return (
    <div className={wrapper}>
      <Image
        src={isAchieved ? imgAchieved : imgDefault}
        alt="Picture of the author"
        width={100}
        height={100}
      />
      <div className={wrapperDetails}>
        <h4>{name}</h4>
        <p className={wrapperDetailsDescription}>
          {isAchieved ? description : description}
        </p>
        <p className={wrapperDetailsDescriptionDesktop}>
          {isAchieved ? description : description}
        </p>
      </div>
    </div>
  );
};

export default ScienceSingleAchievement;
