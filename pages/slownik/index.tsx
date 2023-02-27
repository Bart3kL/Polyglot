import { getPage } from "@/contentful/client";
import useGet from "@/src/axios/useGet";
import DictionaryPage from "../../src/components/organisms/DictionaryPage";
import { DictionaryProps } from "../../src/types/Dictionary";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

function Dictionary() {
  const { data: levels, isLoading } = useQuery({
    queryKey: ["levels"],
    queryFn: () => useGet(),
  });
  const { data: page } = useQuery({
    queryKey: ["homePage"],
    queryFn: () => getPage("dictionary"),
  });

  if (isLoading) {
    return <p>loading...</p>;
  } else {
    // console.log(isLoading, levels, page);
    return <DictionaryPage page={page} levels={levels} />;
  }
  // return <p>s</p>;
}

export const getServerSideProps = async () => {
  // const page = await getPage("dictionary");

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["levels"], await useGet());
  await queryClient.prefetchQuery(["homePage"], () => getPage("dictionary"));
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
export default Dictionary;
