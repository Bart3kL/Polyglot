import axios from "axios";

export default async function useGetUsers(table: string) {
  const { data } = await axios.get(`http://localhost:3000/api/${table}`);

  return data;
}
