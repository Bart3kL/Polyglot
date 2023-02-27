import React from "react";

import DictionaryHeader from "../../atoms/DictionaryHeader";
import DictionaryCard from "../../atoms/DictionaryCard";
import { SubcategoriesPageProps } from "@/src/types/Subcategories/SubcategoriesPage";

import styles from "./rwd.module.scss";
const { wrapper, wrapperList } = styles;

export default function SubcategoriesPage({
  page: { headerTitle, headerDescription },
  subcategories,
}: SubcategoriesPageProps) {
  return (
    <>
      <DictionaryHeader title={headerTitle} description={headerDescription} />
      <section className={wrapper}>
        <ul className={wrapperList}>
          {subcategories.map((subcategory) => (
            <DictionaryCard {...subcategory} key={subcategory.title} />
          ))}
        </ul>
      </section>
    </>
  );
}
