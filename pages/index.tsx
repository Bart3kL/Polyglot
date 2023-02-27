import HomePage from "@/src/components/organisms/HomePage";
import { getPage } from "@/src/components/lib/contentful/client";
import { HomeProps } from "@/src/types/Home";

export default function Home({ page }: HomeProps) {
  return <HomePage {...page} />;
}

export const getStaticProps = async () => {
  const page = await getPage("homePage");
  return {
    props: { page },
  };
};
