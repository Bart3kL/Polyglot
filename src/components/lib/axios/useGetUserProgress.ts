import axios from "axios";

const useGetUserProgress = async (id: string) => {
  if (id) {
    try {
      const { data } = await axios.get(
        `https://polyglot-bart3kl.vercel.app/api/user-progress/${id}`
      );

      return data;
    } catch (e) {}
  }
  return;
};
export default useGetUserProgress;
