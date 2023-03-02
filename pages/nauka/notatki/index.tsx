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
import { NotesProps } from "@/src/types/Notes";
import NotesPage from "@/src/components/organisms/NotesPage";
import { NotesContentful } from "@/src/types/Notes/utilityTypes";

const Notes = ({ id }: NotesProps) => {
  const { data: session }: any = useSession();

  const { data: page, isLoading: loadingRepetitionsPage } = useQuery({
    queryKey: ["notesPage"],
    queryFn: () => getPage("notesPage"),
  });
  const { data: notes, isLoading: loadingNotes } = useQuery({
    queryKey: ["notes"],
    queryFn: () => useGet("notes", id),
    refetchInterval: 1000,
  });

  if (!session) {
    return <ErrorNoAccess />;
  }
  const isLoading = loadingRepetitionsPage || loadingNotes;
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
        <NotesPage notes={notes} page={page as NotesContentful} />
      )}
    </SciencePageLayout>
  );
};

export default Notes;

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
