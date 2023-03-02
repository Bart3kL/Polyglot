import React from "react";
import Image from "next/image";

import HangmanWord from "../../atoms/HangmanWord";
import HangmanDetails from "../../atoms/HangmanDetails";
import useHangmanGame from "../../lib/hooks/useHangmanGame";
import HangmanButtons from "../../atoms/HangmanButtons";
import { HangmanPageProps } from "@/src/types/Hangman/HangmanPage";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const HangmanPage = ({ words, page }: HangmanPageProps) => {
  const {
    images,
    alphabet,
    congrats,
    resetGameBtn,
    youLostLabel,
    amountBadAnswers,
  } = page;

  const { game, handleGuess, uniqueChars, resetGame, handleSound } =
    useHangmanGame(words);

  return (
    <div className={wrapper}>
      <Image
        src={images[game.wrong].image}
        alt="Picture of the author"
        width={500}
        height={300}
      />
      <HangmanDetails
        game={game}
        youLostLabel={youLostLabel}
        amountBadAnswers={amountBadAnswers}
      />
      <HangmanWord
        uniqueChars={uniqueChars}
        handleSound={handleSound}
        game={game}
        congrats={congrats}
      />
      <HangmanButtons
        uniqueChars={uniqueChars}
        handleGuess={handleGuess}
        alphabet={alphabet}
        resetGameBtn={resetGameBtn}
        loss={game.wrong === 6}
        resetGame={resetGame}
        addedLetters={game.addedLetters}
      />
    </div>
  );
};

export default HangmanPage;
