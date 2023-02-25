import { GetServerSideProps } from "next";
import React from "react";
import { getPage } from "../../../contentful/client";
import { client } from "../../../contentful/client";

const DictionaryLevel = ({ items }: any) => {
  console.log(items);
  return <div>DictionaryLevel</div>;
};

export default DictionaryLevel;

export const getStaticPaths = async () => {
  const res: any = await getPage("dictionary");

  const paths = res.levels.map(({ slug }: { slug: string }) => {
    return {
      params: { id: slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context: GetServerSideProps) {
  const { items } = await client.getEntries({
    content_type: "categories",
    select: ["fields.b2"],
  });

  return {
    props: { items },
  };
}
