import React from "react";
import BarLoader from "react-spinners/BarLoader";

import { useQuery } from "@tanstack/react-query";
import ScienceWelcomeBox from "../../atoms/ScienceWelcomeBox";
import SciencePageNextLessons from "../../atoms/SciencePageNextLessons";
import { SciencePageProps } from "@/src/types/Science/SciencePage";
import ScienceProgressBar from "../../molecules/ScienceProgressBar";
import ScienceAchievements from "../../molecules/ScienceAchievements";
import { getPage } from "@/src/components/lib/contentful/client";
import useGetUserProgress from "@/src/components/lib/axios/useGetUserProgress";
import { ScienceHeader } from "@/src/types/Science/utilityTypes";
import useGet from "@/src/components/lib/axios/useGet";
import { override } from "@/src/components/lib/spinner";

import styles from "./rwd.module.scss";
const { wrapper, wrapperBox } = styles;

const SciencePage = ({ lessons, id }: SciencePageProps) => {
  const { data: page, isLoading: isLoading1 } = useQuery({
    queryKey: ["sciencePage"],
    queryFn: () => getPage("science"),
  });
  const { data: achievements, isLoading: isLoading2 } = useQuery({
    queryKey: ["achievements"],
    queryFn: () => useGet("achievements"),
  });

  const { data: userProgress, isLoading: isLoading3 } = useQuery({
    queryKey: ["userProgress"],
    queryFn: () => useGetUserProgress(id),
  });
  console.log(page);
  const {
    welcomeMessage,
    nextLessons,
    yourProgress,
    achievementsText,
    achievementsCongratsText,
  } = page as ScienceHeader;

  const threeNextLessons = lessons
    ?.slice(Number(userProgress?.lesson) - 1, lessons.length)
    .slice(0, 3);

  return (
    <>
      {isLoading1 || isLoading2 || isLoading3 ? (
        <BarLoader
          color={"#1f2233"}
          loading={isLoading1 || isLoading2 || isLoading3}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <section className={wrapper}>
          <div className={wrapperBox}>
            <ScienceWelcomeBox welcomeMessage={welcomeMessage} />
            <SciencePageNextLessons
              nextLessons={nextLessons}
              threeNextLessons={threeNextLessons}
            />
          </div>
          <ScienceAchievements
            achievementsCongratsText={achievementsCongratsText}
            achievementsText={achievementsText}
            achievements={achievements}
            userProgress={userProgress}
          />
          <ScienceProgressBar
            lessons={lessons}
            userProgress={userProgress}
            yourProgress={yourProgress}
          />
        </section>
      )}
    </>
  );
};

export default SciencePage;
