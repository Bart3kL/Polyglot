import axios from "axios";

export default async function useGet(table: string) {
  const { data } = await axios.get(`http://localhost:3000/api/${table}`);

  return data;
}
