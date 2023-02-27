import React from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import BarLoader from "react-spinners/BarLoader";
import { override } from "@/src/components/lib/spinner";

import useGet from "@/src/axios/useGet";
import { getPage } from "@/contentful/client";
import CategoriesPage from "@/src/components/organisms/CategoriesPage";
import { CategoriesProps } from "@/src/types/Categories";

const Categories = ({ id }: any) => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => useGet("categories", id),
  });
  const { data: page } = useQuery({
    queryKey: ["categoriesPage"],
    queryFn: () => getPage("categories"),
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
        <CategoriesPage page={page} categories={categories} />
      )}
    </>
  );
};

export default Categories;

export const getServerSideProps = async (context: {
  params: { categoryId: string };
}) => {
  const id = context.params?.categoryId as string;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ["categories"],
    await useGet("categories", id)
  );
  await queryClient.prefetchQuery(
    ["categoriesPage"],
    async () => await getPage("categories")
  );
  return {
    props: { id, dehydratedState: dehydrate(queryClient) },
  };
};
