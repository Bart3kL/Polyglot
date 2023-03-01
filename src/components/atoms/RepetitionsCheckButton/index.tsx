import React from "react";

import { RepetitionsCheckButtonProps } from "@/src/types/Repetitions/RepetitionsCheckButton";

const RepetitionsCheckButton = ({
  handleResult,
  name,
  key,
  index,
}: RepetitionsCheckButtonProps) => {
  return (
    <div id={name}>
      <button onClick={() => handleResult(index)}>{name}</button>
      <p>{key}</p>
    </div>
  );
};

export default RepetitionsCheckButton;
