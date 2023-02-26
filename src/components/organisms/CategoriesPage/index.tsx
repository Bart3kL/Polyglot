import React from "react";

import DictionaryHeader from "../../atoms/DictionaryHeader";
import DictionaryCard from "../../atoms/DictionaryCard";
import { CategoriesPageProps } from "@/src/types/Categories/CategoriesPage";

import styles from "./rwd.module.scss";
const { wrapper, wrapperList } = styles;

export default function CategoriesPage({
  headerTitle,
  headerDescription,
  categories,
}: CategoriesPageProps) {
  return (
    <>
      <DictionaryHeader title={headerTitle} description={headerDescription} />
      <section className={wrapper}>
        <ul className={wrapperList}>
          {categories.map((category) => (
            <DictionaryCard {...category} key={category.name} link="slownik" />
          ))}
        </ul>
      </section>
    </>
  );
}
