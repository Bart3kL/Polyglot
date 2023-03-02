import React from "react";
import { useSession } from "next-auth/react";
import BarLoader from "react-spinners/BarLoader";
import { useQuery } from "@tanstack/react-query";

import ErrorNoAccess from "@/src/components/atoms/ErrorNoAccess";
import SciencePageLayout from "@/src/components/layout/SciencePageLayout";
import { override } from "@/src/components/lib/spinner";
import { getPage } from "@/src/components/lib/contentful/client";
import useGet from "@/src/components/lib/axios/useGet";
import ListeningPage from "@/src/components/organisms/ListeningPage";
import { PageListeningContetful } from "@/src/types/Listening/utilityTypes";

const Listening = () => {
  const { data: session }: any = useSession();

  const { data: page, isLoading: loadingListeningPage } = useQuery({
    queryKey: ["listeningPage"],
    queryFn: () => getPage("listeningPage"),
  });
  const { data: words, isLoading: loadingListening } = useQuery({
    queryKey: ["listening"],
    queryFn: () => useGet("dictionary", "words"),
  });

  if (!session) {
    return <ErrorNoAccess />;
  }
  const isLoading = loadingListeningPage || loadingListening;

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
        <ListeningPage page={page as PageListeningContetful} words={words} />
      )}
    </SciencePageLayout>
  );
};

export default Listening;
