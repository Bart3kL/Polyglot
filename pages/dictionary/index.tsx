import { getPage } from "@/contentful/client";

import DictionaryPage from "../../src/components/organisms/DictionaryPage";
import { DictionaryProps } from "../../src/types/Dictionary";

export default function Dictionary({ page }: DictionaryProps) {
  return <DictionaryPage {...page} />;
}

export const getStaticProps = async () => {
  const page = await getPage("dictionary");

  return {
    props: { page },
  };
};
