import React from "react";

import ScienceSingleAchievement from "../../atoms/ScienceSingleAchievement";
import { ScienceAchievementsProps } from "@/src/types/Science/ScienceAchievements";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTitle, wrapperAchievements } = styles;

const ScienceAchievements = ({
  achievements,
  userProgress,
  achievementsText,
  achievementsCongratsText,
}: ScienceAchievementsProps) => {
  const {
    allLessonslessonAchievement,
    flashcardslessonAchievement,
    lessonAchievement,
    listeninglessonAchievement,
    noteslessonAchievement,
    repeatsAchievement,
  } = userProgress;

  const achievementsList = [
    lessonAchievement,
    repeatsAchievement,
    listeninglessonAchievement,
    noteslessonAchievement,
    flashcardslessonAchievement,
    allLessonslessonAchievement,
  ];

  return (
    <div className={wrapper}>
      <h2 className={wrapperTitle}>{achievementsText}</h2>
      <div className={wrapperAchievements} id="achievements">
        {achievements.map((achievement, i) => (
          <ScienceSingleAchievement
            key={achievement.id}
            {...achievement}
            achievementsCongratsText={achievementsCongratsText}
            checkAchievement={achievementsList[i]}
          />
        ))}
      </div>
    </div>
  );
};

export default ScienceAchievements;
