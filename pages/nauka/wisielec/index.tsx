import React from "react";
import { useSession } from "next-auth/react";
import BarLoader from "react-spinners/BarLoader";
import { useQuery } from "@tanstack/react-query";

import ErrorNoAccess from "@/src/components/atoms/ErrorNoAccess";
import SciencePageLayout from "@/src/components/layout/SciencePageLayout";
import { override } from "@/src/components/lib/spinner";
import { getPage } from "@/src/components/lib/contentful/client";
import useGet from "@/src/components/lib/axios/useGet";
import HangmanPage from "@/src/components/organisms/HangmanPage";
import { HangmanContentful } from "@/src/types/Hangman/utilityTypes";

const Hangman = () => {
  const { data: session } = useSession();

  const { data: page, isLoading: loadingHangmanPage } = useQuery({
    queryKey: ["hangmanPage"],
    queryFn: () => getPage("hangmanPage"),
  });
  const { data: words, isLoading: loadingHangman } = useQuery({
    queryKey: ["hangman"],
    queryFn: () => useGet("dictionary", "words"),
  });

  if (!session) {
    return <ErrorNoAccess />;
  }
  const isLoading = loadingHangmanPage || loadingHangman;

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
        <HangmanPage words={words} page={page as HangmanContentful} />
      )}
    </SciencePageLayout>
  );
};

export default Hangman;
