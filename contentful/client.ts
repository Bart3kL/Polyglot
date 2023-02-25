import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
});

export async function getPage(content: string) {
  const query = {
    content_type: content,
  };
  const { items } = await client.getEntries(query);

  const { fields } = items[0];
  return fields;
}
