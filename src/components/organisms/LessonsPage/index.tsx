import React from "react";
import BarLoader from "react-spinners/BarLoader";
import { useQuery } from "@tanstack/react-query";

import { getPage } from "@/src/components/lib/contentful/client";
import useGetUserProgress from "@/src/components/lib/axios/useGetUserProgress";
import useGet from "@/src/components/lib/axios/useGet";
import { override } from "@/src/components/lib/spinner";
import { Header } from "@/src/types/Dictionary/utilityTypes";
import ScienceLessonCard from "../../atoms/ScienceLessonCard";

import styles from "./rwd.module.scss";
const { wrapper, wrapperTItle, wrapperLessons } = styles;

const LessonsPage = ({ userId }: any) => {
  const { data: page, isLoading: isLoading1 } = useQuery({
    queryKey: ["lessonsPage"],
    queryFn: () => getPage("lessons"),
  });
  const { data: lessons, isLoading: isLoading2 } = useQuery({
    queryKey: ["lessons"],
    queryFn: () => useGet("lessons"),
  });
  const { data: userProgress, isLoading: isLoading3 } = useQuery({
    queryKey: ["userProgress"],
    queryFn: () => useGetUserProgress(userId),
  });

  const { headerTitle } = page as Header;

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
          <h1 className={wrapperTItle}>{headerTitle}</h1>
          <div className={wrapperLessons}>
            {lessons.map((lesson: any) => (
              <ScienceLessonCard
                {...lesson}
                key={lesson.id}
                currentLesson={userProgress.lesson}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default LessonsPage;
