import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import BarLoader from "react-spinners/BarLoader";
import { useSession } from "next-auth/react";

import { getPage } from "@/contentful/client";
import useGet from "@/src/axios/useGet";
import SciencePageLayout from "@/src/components/layout/SciencePageLayout";
import { override } from "@/src/components/lib/spinner";
import ErrorNoAccess from "@/src/components/atoms/ErrorNoAccess";

function Science() {
  const { data: session } = useSession();

  const { data: levels, isLoading } = useQuery({
    queryKey: ["levels"],
    queryFn: () => useGet(),
  });
  const { data: page } = useQuery({
    queryKey: ["homePage"],
    queryFn: () => getPage("dictionary"),
  });
  if (!session) {
    return <ErrorNoAccess />;
  }
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
        // <DictionaryPage page={page as Header} levels={levels} />
        <p>Lorem*1000</p>
      )}
    </SciencePageLayout>
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
export default Science;
