import React from "react";
import BarLoader from "react-spinners/BarLoader";
import { useQuery, useQueryClient } from "@tanstack/react-query";

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
    initialData: () => {
      const cachedData = useQueryClient().getQueryData(["lessonsPage"]);
      if (!cachedData) return;

      useQueryClient().cancelQueries(["lessonsPage"]);

      return cachedData;
    },
  });
  const { data: lessons, isLoading: isLoading2 } = useQuery({
    queryKey: ["lessons"],
    queryFn: () => useGet("lessons"),
    initialData: () => {
      const cachedData = useQueryClient().getQueryData(["lessons"]);
      if (!cachedData) return;

      useQueryClient().cancelQueries(["lessons"]);

      return cachedData;
    },
  });
  const { data: userProgress, isLoading: isLoading3 } = useQuery({
    queryKey: ["userProgress"],
    queryFn: () => useGetUserProgress(userId),
    initialData: () => {
      const cachedData = useQueryClient().getQueryData(["userProgress"]);
      if (!cachedData) return;

      useQueryClient().cancelQueries(["userProgress"]);

      return cachedData;
    },
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
