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
import useGet from "@/src/components/lib/axios/useGet";
import FlashcardsPage from "@/src/components/organisms/FlashcardsPage";
import { FlashcardsProps } from "@/src/types/Flashcards";
import { FlashcardsContentful } from "@/src/types/Flashcards/utilityTypes";
import { SessionType } from "@/src/types/Auth";

const Flashcards = ({ id }: FlashcardsProps) => {
  const { data: session } = useSession();

  const { data: page, isLoading: loadingRepetitionsPage } = useQuery({
    queryKey: ["flashcardsPage"],
    queryFn: () => getPage("flashcardsPage"),
  });
  const { data: flashcards, isLoading: loadingFlashcards } = useQuery({
    queryKey: ["flashcards"],
    queryFn: () => useGet("flashcards", id),
    refetchInterval: 1000,
  });

  if (!session) {
    return <ErrorNoAccess />;
  }
  const isLoading = loadingRepetitionsPage || loadingFlashcards;
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
        <FlashcardsPage
          flashcards={flashcards}
          page={page as FlashcardsContentful}
        />
      )}
    </SciencePageLayout>
  );
};

export default Flashcards;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const data: SessionType = await getServerSession(
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
