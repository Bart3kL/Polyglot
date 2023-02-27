import axios from "axios";

const useGetLessons = async (secondValue?: string, thirdValue?: string) => {
  if (secondValue && thirdValue) {
    const { data } = await axios.get(
      `https://11-beige.vercel.app/dictionary/${secondValue}/${thirdValue}`
    );
    return data;
  }

  const { data } = await axios.get(`https://11-beige.vercel.app/api/lessons`);
  return data;
};

export default useGetLessons;
