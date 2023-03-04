import React from "react";

import RankingPageContent from "../../molecules/RankingPageContent";
import { RankingPageProps } from "@/src/types/Ranking/RankingPage";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const RankingPage = ({ ranking, page, achievements }: RankingPageProps) => {
  const { headerTitle } = page;
  return (
    <section className={wrapper}>
      <h1>{headerTitle}</h1>
      <RankingPageContent
        ranking={ranking}
        achievements={achievements}
        page={page}
      />
    </section>
  );
};

export default RankingPage;
