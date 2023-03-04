import React from "react";
import Image from "next/image";

import { RankingSingleUserProps } from "@/src/types/Ranking/RankingSingleUser";

import styles from "./rwd.module.scss";
const {
  wrapper,
  wrapperName,
  wrapperNameImage,
  wrapperNameNumber,
  wrapperNameText,
  wrapperAchievements,
  wrapperDetails,
  wrapperDetailsTitle,
  wrapperDetailsNumber,
} = styles;

const RankingSingleUser = ({
  userDetails,
  flashcardsLength,
  repetitionsLength,
  index,
  achievements,
  lessonLabel,
  flashcardAmountLabel,
  repetitionsAmountLabel,
}: RankingSingleUserProps) => {
  return (
    <li className={wrapper}>
      {userDetails.map((user: any) =>
        user ? (
          <div key={user}>
            <div className={wrapperName}>
              <p className={wrapperNameNumber}>{index + 1}</p>
              <div className={wrapperNameImage}>
                <Image
                  src={user.image}
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
              </div>
              <p className={wrapperNameText}>{user.name}</p>
            </div>
            <div className={wrapperAchievements}>
              <>
                {achievements.map(
                  ({ imgDefault, imgAchieved, name }: any, index: number) => (
                    <Image
                      src={
                        user.achievements[index] === "true"
                          ? imgAchieved
                          : imgDefault
                      }
                      alt="Picture of the author"
                      width={40}
                      height={40}
                      key={name}
                    />
                  )
                )}
              </>
            </div>
            <div className={wrapperDetails}>
              <div>
                <span className={wrapperDetailsTitle}>{lessonLabel}</span>{" "}
                <span className={wrapperDetailsNumber}>{user.lesson}</span>
              </div>
              <div>
                <span className={wrapperDetailsTitle}>
                  {flashcardAmountLabel}
                </span>
                <span className={wrapperDetailsNumber}>{flashcardsLength}</span>
              </div>
              <div>
                <span className={wrapperDetailsTitle}>
                  {repetitionsAmountLabel}
                </span>
                <span className={wrapperDetailsNumber}>
                  {repetitionsLength}
                </span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </li>
  );
};

export default RankingSingleUser;
