import React from "react";

import useGet from "@/src/axios/useGet";
import { getPage } from "@/contentful/client";
import CategoriesPage from "@/src/components/organisms/CategoriesPage";
import { CategoriesProps } from "@/src/types/Categories";

const Categories = ({ page, categories }: CategoriesProps) => {
  return <CategoriesPage {...page} categories={categories} />;
};

export default Categories;

export const getServerSideProps = async (context: {
  params: { categoryId: string };
}) => {
  const id = context.params?.categoryId as string;

  const page = await getPage("categories");
  const categories = await useGet("categories", id);

  return {
    props: {
      page,
      categories,
    },
  };
};
