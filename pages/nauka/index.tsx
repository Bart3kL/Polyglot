import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import BarLoader from "react-spinners/BarLoader";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import type { GetServerSidePropsContext } from "next";

import { getPage } from "@/src/components/lib/contentful/client";
import useGetLessons from "@/src/components/lib/axios/useGetLessons";
import useGetUserProgress from "@/src/components/lib/axios/useGetUserProgress";
import SciencePageLayout from "@/src/components/layout/SciencePageLayout";
import { override } from "@/src/components/lib/spinner";
import ErrorNoAccess from "@/src/components/atoms/ErrorNoAccess";
import SciencePage from "@/src/components/organisms/SciencePage";
import { authOptions } from "../api/auth/[...nextauth]";
import { ScienceProps } from "@/src/types/Science";
import { ScienceHeader } from "@/src/types/Science/utilityTypes";

function Science({ id }: ScienceProps) {
  const { data: session } = useSession();

  const { data: lessons, isLoading } = useQuery({
    queryKey: ["lessons"],
    queryFn: () => useGetLessons(),
  });
  const { data: page } = useQuery({
    queryKey: ["sciencePage"],
    queryFn: () => getPage("science"),
  });
  const { data: userProgress } = useQuery({
    queryKey: ["userProgress"],
    queryFn: () => useGetUserProgress(id),
  });

  if (!session) {
    return <ErrorNoAccess />;
  }
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
        <SciencePage
          page={page as ScienceHeader}
          lessons={lessons}
          userProgress={userProgress}
        />
      )}
    </SciencePageLayout>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { user }: any = await getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ["sciencePage"],
    async () => await getPage("science")
  );
  await queryClient.prefetchQuery(["lessons"], await useGetLessons());
  await queryClient.prefetchQuery(
    ["userProgress"],
    await useGetUserProgress(user.id)
  );

  return {
    props: { id: user.id, dehydratedState: dehydrate(queryClient) },
  };
};
export default Science;

const achievements = [
  {
    name: "Śmiałek",
    description: "Ukończ 1 lekcje",
    img: {
      default:
        "https://www.etutor.pl/images/achievements/lessons-collector/lessons-collector-gray.svg",
      achieved:
        "https://www.etutor.pl/images/achievements/lessons-collector/lessons-collector-3.svg",
    },
  },
  {
    name: "Powtórkowicz",
    description: "Dodaj 15 słówek do powtórek",
    img: {
      default:
        "https://www.etutor.pl/images/achievements/repetitions-perfect/repetitions-perfect-gray.svg",
      achieved:
        "https://www.etutor.pl/images/achievements/repetitions-perfect/repetitions-perfect-3.svg",
    },
  },
  {
    name: "Słuchacz",
    description: "Wpisz poprawnie 5 raz usłyszane słowa",
    img: {
      default:
        "https://www.etutor.pl/images/achievements/persistence/persistence-gray.svg",
      achieved:
        "https://www.etutor.pl/images/achievements/persistence/persistence-3.svg",
    },
  },
  {
    name: "Naukowiec",
    description: "Dodaj 2 notatki",
    img: {
      default:
        "https://www.etutor.pl/images/achievements/adventurer/adventurer-gray.svg",
      achieved:
        "https://www.etutor.pl/images/achievements/adventurer/adventurer-3.svg",
    },
  },
  {
    name: "Perfekcjonista",
    description: "Wczytaj listę słówek z bazy do fiszek",
    img: {
      default:
        "https://www.etutor.pl/images/achievements/slang-master/slang-master-gray.svg",
      achieved:
        "https://www.etutor.pl/images/achievements/slang-master/slang-master-3.svg",
    },
  },
  {
    name: "Mistrz",
    description: "Ukończ wszystkie lekcje",
    img: {
      default:
        "https://www.etutor.pl/images/achievements/big-fish/big-fish-gray.svg",
      achieved:
        "https://www.etutor.pl/images/achievements/big-fish/big-fish-3.svg",
    },
  },
];
