import axios from "axios";

const useGet = async (secondValue?: string, thirdValue?: string) => {
  if (secondValue) {
    const { data } = await axios.get(
      `${process.env.NEXTAUTH_URL}/api/dictionary/${secondValue}/${thirdValue}`
    );
    return data;
  }

  const { data } = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/dictionary`
  );
  return data;
};

export default useGet;
