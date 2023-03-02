import React from "react";
import { useQuery } from "@tanstack/react-query";
import BarLoader from "react-spinners/BarLoader";

import { override } from "@/src/components/lib/spinner";
import useGetSingleLessonCategory from "@/src/components/lib/axios/useGetSingleLessonCategory";
import SciencePageLayout from "@/src/components/layout/SciencePageLayout";
import { getPage } from "@/src/components/lib/contentful/client";
import ExercisesPage from "@/src/components/organisms/ExercisesPage";
import { GrammarProps } from "@/src/types/Grammar";
import { ExercisePageContentful } from "@/src/types/Exercises/utilityTypes";

const Exercises = ({ id }: GrammarProps) => {
  const { data: exercises, isLoading: loadingExercisesPage } = useQuery({
    queryKey: ["exercisesPage", id],
    queryFn: () => useGetSingleLessonCategory("exercises", id),
  });
  const { data: page, isLoading: loadingExercisesPageContentful } = useQuery({
    queryKey: ["exercisesPageContentful", id],
    queryFn: () => getPage("exercisesPage"),
  });
  const isLoading = loadingExercisesPageContentful || loadingExercisesPage;

  return (
    <SciencePageLayout>
      {isLoading ? (
        <BarLoader
          color={"#1f2233"}
          loading={isLoading}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <ExercisesPage
          exercises={exercises}
          page={page as ExercisePageContentful}
        />
      )}
    </SciencePageLayout>
  );
};

export default Exercises;

export const getServerSideProps = async (context: {
  params: { id: string };
}) => {
  const id = context.params?.id as string;

  return {
    props: {
      id,
    },
  };
};
