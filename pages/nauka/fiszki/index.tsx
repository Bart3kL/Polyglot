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
import { getPage } from "@/src/components/lib/contentful/client";

const Flashcards = ({ id, repetitions }: any) => {
  const { data: session }: any = useSession();

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
        <p>flashcards</p>
      )}
    </SciencePageLayout>
  );
};

export default Flashcards;

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
