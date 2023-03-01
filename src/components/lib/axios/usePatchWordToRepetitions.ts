import axios from "axios";

const usePatchWordToRepetitions = async (
  userId: string,
  wordId: string,
  data: any
) => {
  await axios.post(
    `http://localhost:3000/api/repetitions/${userId}/${wordId}`,
    data
  );
};

export default usePatchWordToRepetitions;
