import React from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import BarLoader from "react-spinners/BarLoader";

import { override } from "@/src/components/lib/spinner";
import useGetDictionary from "@/src/components/lib/axios/useGetDictionary";
import { getPage } from "@/src/components/lib/contentful/client";
import SubcategoriesPage from "@/src/components/organisms/SubcategoriesPage";
import { SubcategoriesProps } from "@/src/types/Subcategories";
import { Header } from "@/src/types/Dictionary/utilityTypes";

const Subcategories = ({ id }: SubcategoriesProps) => {
  const { data: subcategories, isLoading } = useQuery({
    queryKey: ["subcategories", id],
    queryFn: () => useGetDictionary("subcategories", id),
  });
  const { data: page } = useQuery({
    queryKey: ["subcategoriesPage"],
    queryFn: () => getPage("subcategories"),
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
        <SubcategoriesPage
          page={page as Header}
          subcategories={subcategories}
        />
      )}
    </>
  );
};

export default Subcategories;

export const getServerSideProps = async (context: {
  params: { subcategoryId: string };
}) => {
  const id = context.params?.subcategoryId as string;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ["subcategories", id],
    await useGetDictionary("subcategories", id)
  );
  await queryClient.prefetchQuery(
    ["subcategoriesPage"],
    async () => await getPage("subcategories")
  );

  return {
    props: { id, dehydratedState: dehydrate(queryClient) },
  };
};
