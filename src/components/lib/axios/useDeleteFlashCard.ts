import axios from "axios";
export async function useDeleteFlashCard(userId: string, wordId: string) {
  await axios.delete(
    `http://localhost:3000/api/flashcards/${userId}/${wordId}`
  );
}
