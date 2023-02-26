import React from "react";

import useGet from "@/src/axios/useGet";
import { getPage } from "@/contentful/client";
import WordsPage from "@/src/components/organisms/WordsPage";
import { WordsProps } from "@/src/types/Words";

const Words = ({ page, words }: WordsProps) => {
  return <WordsPage {...page} words={words} />;
};

export default Words;

export const getServerSideProps = async (context: {
  params: { wordsId: string };
}) => {
  const id = context.params?.wordsId as string;

  const page = await getPage("words");
  const words = await useGet("words", id);

  return {
    props: {
      page,
      words,
    },
  };
};
