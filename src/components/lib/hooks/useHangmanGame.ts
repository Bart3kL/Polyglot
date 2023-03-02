import React, { useState } from "react";

import { Word } from "@/src/types/Words/utilityTypes";

const useHangmanGame = (data: Word[]) => {
  const [game, setGame] = useState<{
    word: Word;
    addedLetters: string[];
    wrong: number;
  }>({
    word: data[Math.floor(Math.random() * data.length)],
    addedLetters: [],
    wrong: 0,
  });

  let uniqueChars: string[] = [];
  game.word.name.split("").forEach((element: string) => {
    if (!uniqueChars.includes(element)) {
      uniqueChars.push(element);
    }
  });

  const handleGuess = (e: React.ChangeEvent<HTMLInputElement>) => {
    const letter = e.target.value;
    game.word.name.includes(letter)
      ? setGame({
          word: game.word,
          addedLetters: [letter, ...game.addedLetters],
          wrong: game.wrong,
        })
      : setGame({
          word: game.word,
          addedLetters: game.addedLetters,
          wrong: game.wrong + 1,
        });
  };

  const resetGame = () => {
    setGame({
      word: data[Math.floor(Math.random() * data.length)],
      addedLetters: [],
      wrong: 0,
    });
  };
  const handleSound = () => {
    new Audio(game.word.audio).play();
  };
  return { game, handleGuess, uniqueChars, resetGame, handleSound };
};

export default useHangmanGame;
