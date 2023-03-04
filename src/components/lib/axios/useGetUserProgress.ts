import axios from "axios";

const useGetUserProgress = async (id: string) => {
  if (id) {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/user-progress/${id}`
      );

      return data;
    } catch (e) {}
  }
  return;
};
export default useGetUserProgress;
