import axios from "axios";

const useGetUserProgress = async (id: string) => {
  if (id) {
    const data = await axios
      .get(`http://localhost:3000/api/user-progress/${id}`)
      .then(({ data }) => data);
    return data;
  }
  return;
};
export default useGetUserProgress;
