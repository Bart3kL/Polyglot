import axios from "axios";

const useGet = async (secondValue?: string, thirdValue?: string) => {
  if (secondValue && thirdValue) {
    const { data } = await axios.get(
      `https://11-beige.vercel.app/api/dictionary/${secondValue}/${thirdValue}`
    );
    return data;
  }

  const { data } = await axios.get(
    `https://11-beige.vercel.app/api/dictionary`
  );
  return data;
};

export default useGet;
