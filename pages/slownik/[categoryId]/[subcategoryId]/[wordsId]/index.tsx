import React from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import BarLoader from "react-spinners/BarLoader";

import { override } from "@/src/components/lib/spinner";
import useGetDictionary from "@/src/components/lib/axios/useGetDictionary";
import { getPage } from "@/src/components/lib/contentful/client";
import WordsPage from "@/src/components/organisms/WordsPage";
import { WordsProps } from "@/src/types/Words";
import { Header } from "@/src/types/Dictionary/utilityTypes";

const Words = ({ id }: WordsProps) => {
  const { data: words, isLoading: loadingWords } = useQuery({
    queryKey: ["words", id],
    queryFn: () => useGetDictionary("words", id),
  });
  const { data: page, isLoading: loadingWordsPage } = useQuery({
    queryKey: ["wordsPage"],
    queryFn: () => getPage("words"),
  });

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
        <WordsPage page={page as Header} words={words} />
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
