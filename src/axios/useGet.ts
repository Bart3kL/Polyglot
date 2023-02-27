import axios from "axios";

const useGet = async (secondValue?: string, thirdValue?: string) => {
  if (secondValue && thirdValue) {
    const { data } = await axios.get(
      `${process.env.NEXTAUTH_URL}/api/dictionary/${secondValue}/${thirdValue}`
    );
    return data;
  }

  const { data } = await axios.get(`http://localhost:3000/api/dictionary`);
  return data;
};

export default useGet;
