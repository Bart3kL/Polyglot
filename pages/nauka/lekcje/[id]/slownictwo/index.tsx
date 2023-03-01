import React from "react";
import { useQuery } from "@tanstack/react-query";
import BarLoader from "react-spinners/BarLoader";

import { override } from "@/src/components/lib/spinner";
import useGetSingleLessonCategory from "@/src/components/lib/axios/useGetSingleLessonCategory";
import SciencePageLayout from "@/src/components/layout/SciencePageLayout";
import VocabluaryPage from "@/src/components/organisms/VocabluaryPage";
import { VocabluaryProps } from "@/src/types/Vocabluary";

const Vocabluary = ({ id }: VocabluaryProps) => {
  const { data: vocabluary, isLoading: loadingVocabluaryPage } = useQuery({
    queryKey: ["vocabluaryPage", id],
    queryFn: () => useGetSingleLessonCategory("vocabluary", id),
  });
  return (
    <SciencePageLayout>
      {loadingVocabluaryPage ? (
        <BarLoader
          color={"#1f2233"}
          loading={loadingVocabluaryPage}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <VocabluaryPage vocabluary={vocabluary} />
      )}
    </SciencePageLayout>
  );
};

export default Vocabluary;

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
