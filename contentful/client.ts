import { createClient } from "contentful";

export const client = createClient({
  space: "l6zxrr4liuya",
  accessToken: "9V8krsEnpX0rGeCSkSECXyP38Af_78HVJ_8jutBL5VM",
});

type GetPageParams = {
  pageContentType: string;
  slug: string;
  locale: string;
};

export async function getPage(content: string) {
  const query = {
    content_type: content,
  };
  const { items } = await client.getEntries(query);
  return items;
}
