import React from "react";
import { useQuery } from "@tanstack/react-query";
import BarLoader from "react-spinners/BarLoader";

import { override } from "@/src/components/lib/spinner";
import useGetSingleLessonCategory from "@/src/components/lib/axios/useGetSingleLessonCategory";
import SciencePageLayout from "@/src/components/layout/SciencePageLayout";
import { getPage } from "@/src/components/lib/contentful/client";
import GrammarPage from "@/src/components/organisms/GrammarPage";
import { GrammarProps } from "@/src/types/Grammar";
import { GrammarPageContentful } from "@/src/types/Grammar/utilityTypes";

const Grammar = ({ id }: GrammarProps) => {
  const { data: grammar, isLoading: loadingGrammarPage } = useQuery({
    queryKey: ["grammarPage", id],
    queryFn: () => useGetSingleLessonCategory("grammar", id),
  });
  const { data: page, isLoading: loadingGrammarPageContentful } = useQuery({
    queryKey: ["grammarPageContentful", id],
    queryFn: () => getPage("grammarPage"),
  });
  const isLoading = loadingGrammarPageContentful || loadingGrammarPage;
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
        <GrammarPage grammar={grammar} page={page as GrammarPageContentful} />
      )}
    </SciencePageLayout>
  );
};

export default Grammar;

export const getServerSideProps = async (context: {
  params: { id: string };
}) => {
  const id = context.params?.id as string;

  return {
    props: {
      id,
    },
  };
};
