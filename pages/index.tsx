import HomePage from "@/src/components/organisms/HomePage";
import { client } from "@/contentful/client";

export default function Home({ posts }: any) {
  console.log(posts);
  return <HomePage />;
}
export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "quotes" });

  return {
    props: {
      posts: response.items,
    },
  };
};
