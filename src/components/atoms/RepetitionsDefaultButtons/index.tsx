import React from "react";

import { RepetitionsDefaultButtonsProps } from "@/src/types/Repetitions/RepetitionsDefaultButtons";

const RepetitionsDefaultButtons = ({
  handleAddLetter,
  handleCheckResult,
  repetitionsLength,
  checkAnswerBtn,
  hintAnswerBtn,
  value,
}: RepetitionsDefaultButtonsProps) => {
  return (
    <>
      <div id="hint">
        <button
          onClick={handleAddLetter}
          disabled={repetitionsLength === 0 && true}
        >
          {hintAnswerBtn}
        </button>
      </div>
      <div>
        <button
          disabled={value.length > 1 ? false : true}
          onClick={() => handleCheckResult(0)}
        >
          {checkAnswerBtn}
        </button>
      </div>
    </>
  );
};

export default RepetitionsDefaultButtons;
