import React from "react";
import { useQuery } from "@tanstack/react-query";
import BarLoader from "react-spinners/BarLoader";
import { useSession } from "next-auth/react";

import { override } from "@/src/components/lib/spinner";
import useGetDictionary from "@/src/components/lib/axios/useGetDictionary";
import { getPage } from "@/src/components/lib/contentful/client";
import WordsPage from "@/src/components/organisms/WordsPage";
import { WordsProps } from "@/src/types/Words";
import { Header } from "@/src/types/Dictionary/utilityTypes";
import ErrorNoAccess from "@/src/components/atoms/ErrorNoAccess";

const Words = ({ id }: WordsProps) => {
  const { data: session }: any = useSession();
  const { data: words, isLoading: loadingWords } = useQuery({
    queryKey: ["words", id],
    queryFn: () => useGetDictionary("words", id),
  });
  const { data: page, isLoading: loadingWordsPage } = useQuery({
    queryKey: ["wordsPage"],
    queryFn: () => getPage("words"),
  });
  if (!session) {
    return <ErrorNoAccess />;
  }
  const isLoading = loadingWords || loadingWordsPage;
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
        <WordsPage
          page={page as Header}
          words={words}
          userId={session.user.id}
        />
      )}
    </>
  );
};

export default Words;

export const getServerSideProps = async (context: {
  params: { wordsId: string };
}) => {
  const id = context.params?.wordsId as string;

  return {
    props: { id },
  };
};
