import React from "react";

import NotesForm from "../../molecules/NotesForm";
import NotesContent from "../../molecules/NotesContent";
import { NotesPageProps } from "@/src/types/Notes/NotesPage";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const NotesPage = ({ notes, page }: NotesPageProps) => {
  return (
    <section className={wrapper}>
      <NotesForm {...page} />
      <NotesContent notes={notes} />
    </section>
  );
};

export default NotesPage;
