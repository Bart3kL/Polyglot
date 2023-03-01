import axios from "axios";

export async function useGetSingleWordFromRepetitions(
  userId: string,
  wordId: string
) {
  const { data } = await axios.get(
    `http://localhost:3000/api/repetitions/${userId}/${wordId}`
  );

  return data;
}
