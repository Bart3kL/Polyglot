import BarLoader from "react-spinners/BarLoader";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import type { GetServerSidePropsContext } from "next";

import useQuerySciencePage from "@/src/components/lib/react-query/useQuerySciencePage";
import SciencePageLayout from "@/src/components/layout/SciencePageLayout";
import { override } from "@/src/components/lib/spinner";
import ErrorNoAccess from "@/src/components/atoms/ErrorNoAccess";
import SciencePage from "@/src/components/organisms/SciencePage";
import { authOptions } from "../api/auth/[...nextauth]";
import { ScienceProps } from "@/src/types/Science";
import { ScienceHeader } from "@/src/types/Science/utilityTypes";
import usePostProgress from "@/src/components/lib/axios/usePostProgress";

function Science({ id }: ScienceProps) {
  const { data: session }: any = useSession();
  const { isLoading, lessons, page, achievements, userProgress } =
    useQuerySciencePage(id);

  if (!session) {
    return <ErrorNoAccess />;
  }

  const fetchLessonStep = usePostProgress();

  fetchLessonStep(userProgress.lesson, userProgress.lessonStep);
  return (
    <SciencePageLayout>
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
          <SciencePage
            userProgress={userProgress}
            achievements={achievements}
            page={page as ScienceHeader}
            lessons={lessons}
          />
        )}
      </>
    </SciencePageLayout>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const data: any = await getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (data) {
    return {
      props: { id: data.user.id },
    };
  }
  return { props: {} };
};
export default Science;
[
  {
    id: "1", // 2 lekcje
    name: "Obieżyświat",
    description: "Dodaj 15 słów do powtórek",
    imgDefault:
      "https://www.etutor.pl/images/achievements/globetrotter/globetrotter-gray.svg",
    imgAchieved:
      "https://www.etutor.pl/images/achievements/globetrotter/globetrotter-1.svg",
  },
  {
    id: "3", // 3lekcje
    name: "Trening czyni mistrza",
    description: "Wczytaj bazę słówek do fiszek",
    imgDefault:
      "https://www.etutor.pl/images/achievements/repetitions-perfect/repetitions-perfect-gray.svg",
    imgAchieved:
      "https://www.etutor.pl/images/achievements/repetitions-perfect/repetitions-perfect-3.svg",
  },
  {
    id: "4", // 10 fiszki
    name: "Naukowiec",
    description: "Dodaj dwie notatki",
    imgDefault:
      "https://www.etutor.pl/images/achievements/lessons-collector/lessons-collector-gray.svg",
    imgAchieved:
      "https://www.etutor.pl/images/achievements/lessons-collector/lessons-collector-3.svg",
  },
  {
    id: "5", //30 do powtorek
    name: "Perfekcjonista",
    description: "Ukończ samouczek",
    imgDefault:
      "https://www.etutor.pl/images/achievements/perfectionist/perfectionist-gray.svg",
    imgAchieved:
      "https://www.etutor.pl/images/achievements/perfectionist/perfectionist-3.svg",
  },
  {
    id: "6", //45 fiszki
    name: "Na bogato",
    description: "Wpisz poprawnie 10 usłyszanych słów",
    imgDefault:
      "https://www.etutor.pl/images/achievements/spending-spree/spending-spree-gray.svg",
    imgAchieved:
      "https://www.etutor.pl/images/achievements/spending-spree/spending-spree-3.svg",
  },
  {
    id: "2", //15 do powtorek
    name: "Śmiałek",
    description: "Ukończ 2 lekcje",
    imgDefault:
      "https://www.etutor.pl/images/achievements/adventurer/adventurer-gray.svg",
    imgAchieved:
      "https://www.etutor.pl/images/achievements/adventurer/adventurer-3.svg",
  },
];
