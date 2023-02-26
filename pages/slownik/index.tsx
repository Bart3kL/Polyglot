import { getPage } from "@/contentful/client";
import { useRouter } from "next/router";
import useGet from "@/src/axios/useGet";
import DictionaryPage from "../../src/components/organisms/DictionaryPage";
import { DictionaryProps } from "../../src/types/Dictionary";

export default function Dictionary({ page, levels }: DictionaryProps) {
  return <DictionaryPage {...page} levels={levels} />;
}

export const getStaticProps = async () => {
  const page = await getPage("dictionary");
  const levels = await useGet();
  return {
    props: { page, levels },
  };
};
