import { useQuery } from "@tanstack/react-query";

import { getPage } from "@/src/components/lib/contentful/client";
import useGetUserProgress from "@/src/components/lib/axios/useGetUserProgress";
import useGet from "@/src/components/lib/axios/useGet";

const useQuerySciencePage = (id: string) => {
  const { data: lessons, isLoading: loadingLessons } = useQuery({
    queryKey: ["lessons"],
    queryFn: () => useGet("lessons"),
  });
  const { data: page, isLoading: loadingSciencePage } = useQuery({
    queryKey: ["sciencePage"],
    queryFn: () => getPage("science"),
  });
  const { data: achievements, isLoading: loadingAchievements } = useQuery({
    queryKey: ["achievements"],
    queryFn: () => useGet("achievements"),
  });

  const { data: userProgress, isLoading: loadingUserProgress } = useQuery({
    queryKey: ["userProgress"],
    queryFn: () => useGetUserProgress(id),
  });

  const isLoading =
    loadingLessons ||
    loadingSciencePage ||
    loadingAchievements ||
    loadingUserProgress;
  return { isLoading, lessons, page, achievements, userProgress };
};

export default useQuerySciencePage;
