import React from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import BarLoader from "react-spinners/BarLoader";

import { override } from "@/src/components/lib/spinner";
import useGet from "@/src/axios/useGet";
import { getPage } from "@/contentful/client";
import WordsPage from "@/src/components/organisms/WordsPage";
import { WordsProps } from "@/src/types/Words";
import { Header } from "@/src/types/Dictionary/utilityTypes";

const Words = ({ id }: WordsProps) => {
  const { data: words, isLoading } = useQuery({
    queryKey: ["words", id],
    queryFn: () => useGet("words", id),
  });
  const { data: page } = useQuery({
    queryKey: ["wordsPage"],
    queryFn: () => getPage("words"),
  });

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

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["words", id], await useGet("words", id));
  await queryClient.prefetchQuery(
    ["wordsPage"],
    async () => await getPage("words")
  );

  return {
    props: { id, dehydratedState: dehydrate(queryClient) },
  };
};
