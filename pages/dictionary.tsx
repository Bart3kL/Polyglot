import HomePage from "@/src/components/organisms/HomePage";
import { getPage } from "@/contentful/client";
import { HomeProps } from "@/src/types/Home";

export default function Dictionary({ page }: HomeProps) {
  return <p>s</p>;
}

export const getStaticProps = async () => {
  const page = await getPage("homePage");
  return {
    props: { page },
  };
};
