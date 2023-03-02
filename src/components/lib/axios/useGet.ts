import axios from "axios";

export default async function useGet(table: string, secondTable?: string) {
  if (secondTable) {
    const { data } = await axios.get(
      `http://localhost:3000/api/${table}/${secondTable}`
    );
    return data;
  }
  const { data } = await axios.get(`http://localhost:3000/api/${table}/`);
  return data;
}
