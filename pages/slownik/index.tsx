import { getPage } from "@/contentful/client";
import useGet from "@/src/axios/useGet";
import DictionaryPage from "../../src/components/organisms/DictionaryPage";
import { DictionaryProps } from "../../src/types/Dictionary";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import BarLoader from "react-spinners/BarLoader";
import { override } from "@/src/components/lib/spinner";

function Dictionary() {
  const { data: levels, isLoading } = useQuery({
    queryKey: ["levels"],
    queryFn: () => useGet(),
  });
  const { data: page } = useQuery({
    queryKey: ["homePage"],
    queryFn: () => getPage("dictionary"),
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
        <DictionaryPage page={page} levels={levels} />
      )}
    </>
  );
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["levels"], await useGet());
  await queryClient.prefetchQuery(
    ["homePage"],
    async () => await getPage("dictionary")
  );
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
export default Dictionary;
