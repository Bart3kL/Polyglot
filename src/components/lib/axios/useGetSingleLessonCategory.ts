import axios from "axios";

export default async function useGetSingleLessonCategory(
  category: string,
  id: string
) {
  const { data } = await axios.get(
    `http://localhost:3000/api/lessons/${id}/${category}`
  );

  return data;
}
