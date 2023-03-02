import React from "react";
import { useSession } from "next-auth/react";

import DictionaryHeader from "../../atoms/DictionaryHeader";
import { WordsPageProps } from "@/src/types/Words/WordsPage";
import WordCard from "../../molecules/WordCard";
import ErrorNoAccessDictionarty from "@/src/components/atoms/ErrorNoAccessDictionarty";

import styles from "./rwd.module.scss";
const { wrapper, wrapperList } = styles;

export default function WordsPage({
  page: { headerTitle, headerDescription },
  words,
}: WordsPageProps) {
  const { data: session }: any = useSession();

  return (
    <>
      <DictionaryHeader title={headerTitle} description={headerDescription} />
      <section className={wrapper}>
        {session ? (
          <ul className={wrapperList}>
            {words.map((word) => (
              <WordCard key={word.name} word={word} userId={session.user.id} />
            ))}
          </ul>
        ) : (
          <ErrorNoAccessDictionarty />
        )}
      </section>
    </>
  );
}
