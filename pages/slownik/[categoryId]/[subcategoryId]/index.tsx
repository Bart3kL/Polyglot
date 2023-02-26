import React from "react";

import useGet from "@/src/axios/useGet";
import { getPage } from "@/contentful/client";
import SubcategoriesPage from "@/src/components/organisms/SubcategoriesPage";
import { SubcategoriesProps } from "@/src/types/Subcategories";

const Subcategories = ({ page, subcategories }: SubcategoriesProps) => {
  return <SubcategoriesPage {...page} subcategories={subcategories} />;
};

export default Subcategories;

export const getServerSideProps = async (context: {
  params: { subcategoryId: string };
}) => {
  const id = context.params?.subcategoryId as string;

  const page = await getPage("subcategories");
  const subcategories = await useGet("subcategories", id);

  return {
    props: {
      page,
      subcategories,
    },
  };
};
