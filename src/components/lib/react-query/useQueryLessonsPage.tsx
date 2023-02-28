import React from "react";
import { useQuery } from "@tanstack/react-query";

import { getPage } from "@/src/components/lib/contentful/client";
import useGetUserProgress from "@/src/components/lib/axios/useGetUserProgress";
import useGet from "@/src/components/lib/axios/useGet";

const useQuerySciencePage = (id: string) => {
  const { data: page, isLoading: loadingPage } = useQuery({
    queryKey: ["lessonsPage"],
    queryFn: () => getPage("lessons"),
  });
  const { data: lessons, isLoading: loadingLessons } = useQuery({
    queryKey: ["lessons"],
    queryFn: () => useGet("lessons"),
  });
  const { data: userProgress, isLoading: loadingUserProgress } = useQuery({
    queryKey: ["userProgress"],
    queryFn: () => useGetUserProgress(id),
  });

  const isLoading = loadingLessons || loadingPage || loadingUserProgress;
  return { isLoading, lessons, page, userProgress };
};

export default useQuerySciencePage;
