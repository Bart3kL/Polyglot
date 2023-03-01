import React from "react";
import { useSession } from "next-auth/react";
import BarLoader from "react-spinners/BarLoader";
import { getServerSession } from "next-auth/next";
import type { GetServerSidePropsContext } from "next";
import { useQuery } from "@tanstack/react-query";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import ErrorNoAccess from "@/src/components/atoms/ErrorNoAccess";
import SciencePageLayout from "@/src/components/layout/SciencePageLayout";
import { override } from "@/src/components/lib/spinner";
import useGet from "@/src/components/lib/axios/useGet";
import RepetitionsPage from "@/src/components/organisms/RepetitionsPage";
import { getPage } from "@/src/components/lib/contentful/client";
import { RepetitionsProps } from "@/src/types/Repetitions";
import { RepetitionsContentful } from "@/src/types/Repetitions/utilityTypes";

const Repetitions = ({ id }: RepetitionsProps) => {
  const { data: session }: any = useSession();

  const { data: repetitions, isLoading: loadingRepetitions } = useQuery({
    queryKey: ["repetitions"],
    queryFn: () => useGet("repetitions", id),
  });
  const { data: page, isLoading: loadingRepetitionsPage } = useQuery({
    queryKey: ["repetitionsPage"],
    queryFn: () => getPage("repetitionsPage"),
  });
  if (!session) {
    return <ErrorNoAccess />;
  }
  const isLoading = loadingRepetitions && loadingRepetitionsPage;
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
        <RepetitionsPage
          repetitions={repetitions}
          page={page as RepetitionsContentful}
        />
      )}
    </SciencePageLayout>
  );
};

export default Repetitions;

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
