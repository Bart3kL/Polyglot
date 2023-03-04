import React from "react";

import RankingSingleUser from "./../../atoms/RankingSingleUser/index";
import { RankingPageContentProps } from "@/src/types/Ranking/RankingPageContent";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const RankingPageContent = ({
  ranking,
  achievements,
  page,
}: RankingPageContentProps) => {
  const sortedByLesson = ranking.sort(
    (a: any, b: any) =>
      Number(b.userDetails.find((x: any) => x !== false).lesson) -
      Number(a.userDetails.find((x: any) => x !== false).lesson)
  );

  return (
    <ul className={wrapper}>
      {sortedByLesson.map(
        ({ userDetails, flashcardsLength, repetitionsLength }: any, index:number) => (
          <RankingSingleUser
            userDetails={userDetails}
            flashcardsLength={flashcardsLength}
            repetitionsLength={repetitionsLength}
            index={index}
            key={index}
            achievements={achievements}
            {...page}
          />
        )
      )}
    </ul>
  );
};

export default RankingPageContent;
