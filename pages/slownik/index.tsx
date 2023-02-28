import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import BarLoader from "react-spinners/BarLoader";

import { getPage } from "@/src/components/lib/contentful/client";
import useGetDictionary from "@/src/components/lib/axios/useGetDictionary";
import { Header } from "@/src/types/Dictionary/utilityTypes";
import DictionaryPage from "@/src/components/organisms/DictionaryPage";
import { override } from "@/src/components/lib/spinner";

function Dictionary() {
  const { data: levels, isLoading: loadingLevels } = useQuery({
    queryKey: ["levels"],
    queryFn: () => useGetDictionary(),
  });
  const { data: page, isLoading: loadingHomePage } = useQuery({
    queryKey: ["homePage"],
    queryFn: () => getPage("dictionary"),
  });

  const isLoading = loadingHomePage || loadingLevels;

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
        <DictionaryPage page={page as Header} levels={levels} />
      )}
    </>
  );
}
export default Dictionary;
