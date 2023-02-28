import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import BarLoader from "react-spinners/BarLoader";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import type { GetServerSidePropsContext } from "next";

import { getPage } from "@/src/components/lib/contentful/client";
import useGetUserProgress from "@/src/components/lib/axios/useGetUserProgress";
import useGetLessons from "@/src/components/lib/axios/useGetLessons";
import SciencePageLayout from "@/src/components/layout/SciencePageLayout";
import { override } from "@/src/components/lib/spinner";
import ErrorNoAccess from "@/src/components/atoms/ErrorNoAccess";
import SciencePage from "@/src/components/organisms/SciencePage";
import { authOptions } from "../api/auth/[...nextauth]";
import { ScienceProps } from "@/src/types/Science";
import useGet from "@/src/components/lib/axios/useGet";

function Science({ id }: ScienceProps) {
  const { data: session } = useSession();

  const { data: lessons, isLoading } = useQuery({
    queryKey: ["lessons"],
    queryFn: () => useGetLessons(),
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
        <SciencePage lessons={lessons} id={id} />
      )}
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
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(["sciencePage"], () => getPage("science"));
    await queryClient.prefetchQuery(["lessons"], () => useGetLessons());
    await queryClient.prefetchQuery(["userProgress"], () =>
      useGetUserProgress(data.user.id)
    );
    await queryClient.prefetchQuery(["achievements"], () =>
      useGet("achievements")
    );
    return {
      props: { id: data.user.id, dehydratedState: dehydrate(queryClient) },
    };
  }
  return { props: {} };
};
export default Science;
