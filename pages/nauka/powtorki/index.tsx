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
import { SessionType } from "@/src/types/Auth";

const Repetitions = ({ repetitions }: RepetitionsProps) => {
  const { data: session } = useSession();

  const { data: page, isLoading: loadingRepetitionsPage } = useQuery({
    queryKey: ["repetitionsPage"],
    queryFn: () => getPage("repetitionsPage"),
  });
  if (!session) {
    return <ErrorNoAccess />;
  }
  const isLoading = loadingRepetitionsPage;
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
  const data: SessionType = await getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (data) {
    const repetitions = await useGet("repetitions", data.user.id);
    return {
      props: { repetitions },
    };
  }
  return { props: {} };
};
