import axios from "axios";

const useGetUserProgress = async (id: string) => {
  if (id) {
    const data = await axios
      .get(`https://11-beige.vercel.app/api/user-progress/${id}`)
      .then(({ data }) => data);
    return data;
  }
  return;
};
export default useGetUserProgress;
