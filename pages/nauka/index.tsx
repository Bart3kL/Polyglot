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
