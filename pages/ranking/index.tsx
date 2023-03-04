import BarLoader from "react-spinners/BarLoader";
import { useQuery } from "@tanstack/react-query";

import { override } from "@/src/components/lib/spinner";
import useGet from "@/src/components/lib/axios/useGet";
import { getPage } from "@/src/components/lib/contentful/client";
import RankingPage from "@/src/components/organisms/RankingPage";
import { RankingContentful } from "@/src/types/Ranking/utilityTypes";

function Ranking() {
  const { data: page, isLoading: loadingRankingPage } = useQuery({
    queryKey: ["rankingPage"],
    queryFn: () => getPage("rankingPage"),
  });
  const { data: ranking, isLoading: loadingRanking } = useQuery({
    queryKey: ["ranking"],
    queryFn: () => useGet("ranking"),
  });
  const { data: achievements, isLoading: loadingAchievements } = useQuery({
    queryKey: ["achievementsRanking"],
    queryFn: () => useGet("achievements"),
  });

  const isLoading = loadingRanking || loadingAchievements || loadingRankingPage;
  return (
    <>
      {isLoading ? (
        <BarLoader
          color={"#1f2233"}
          loading={isLoading}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <RankingPage
          ranking={ranking}
          achievements={achievements}
          page={page as RankingContentful}
        />
      )}
    </>
  );
}
export default Ranking;
