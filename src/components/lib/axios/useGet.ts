import axios from "axios";

export default async function useGet(table: string) {
  const { data } = await axios.get(`https://11-beige.vercel.app/api/${table}`);

  return data;
}
