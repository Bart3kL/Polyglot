import React from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import BarLoader from "react-spinners/BarLoader";

import { override } from "@/src/components/lib/spinner";
import useGetDictionary from "@/src/components/lib/axios/useGetDictionary";
import { getPage } from "@/src/components/lib/contentful/client";
import CategoriesPage from "@/src/components/organisms/CategoriesPage";
import { CategoriesProps } from "@/src/types/Categories";
import { Header } from "@/src/types/Dictionary/utilityTypes";

const Categories = ({ id }: CategoriesProps) => {
  const { data: categories, isLoading: loadingCategories } = useQuery({
    queryKey: ["categories", id],
    queryFn: () => useGetDictionary("categories", id),
  });
  const { data: page, isLoading: loadingCategoriesPage } = useQuery({
    queryKey: ["categoriesPage"],
    queryFn: () => getPage("categories"),
  });
  const isLoading = loadingCategories || loadingCategoriesPage;

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
        <CategoriesPage page={page as Header} categories={categories} />
      )}
    </>
  );
};

export default Categories;

export const getServerSideProps = async (context: {
  params: { categoryId: string };
}) => {
  const id = context.params?.categoryId as string;

  return {
    props: { id },
  };
};
