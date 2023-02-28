import axios from "axios";

const useGetLessons = async (secondValue?: string, thirdValue?: string) => {
  if (secondValue && thirdValue) {
    const { data } = await axios.get(
      `http://localhost:3000/api/dictionary/${secondValue}/${thirdValue}`
    );
    return data;
  }

  const { data } = await axios.get(`http://localhost:3000/api/lessons`);
  return data;
};

export default useGetLessons;
