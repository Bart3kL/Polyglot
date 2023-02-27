import React from "react";

import DictionaryHeader from "../../atoms/DictionaryHeader";
import DictionaryCard from "../../atoms/DictionaryCard";
import { CategoriesPageProps } from "@/src/types/Categories/CategoriesPage";

import styles from "./rwd.module.scss";
const { wrapper, wrapperList } = styles;

export default function CategoriesPage({ page, categories }: any) {
  return (
    <>
      <DictionaryHeader
        title={page.headerTitle}
        description={page.headerDescription}
      />
      <section className={wrapper}>
        <ul className={wrapperList}>
          {categories.map((category: any) => (
            <DictionaryCard {...category} key={category.name} link="slownik" />
          ))}
        </ul>
      </section>
    </>
  );
}
