import HomePage from "@/src/components/organisms/HomePage";
import { getPage } from "@/contentful/client";

export default function Home({ page }: any) {
  return <HomePage page={page} />;
}

export const getServerSideProps = async () => {
  const page = await getPage("quotes");
  console.log(page);
  return {
    props: { page },
  };
};
