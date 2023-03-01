import axios from "axios";

async function deleteWordFromRepetitions(userId: string, wordId: string) {
  await axios
    .delete(`http://localhost:3000/api/repetitions/${userId}/${wordId}`)
    .then(() => console.log("Delete successful"));
}
export default deleteWordFromRepetitions;
