import React from "react";

import { RepetitionsCheckButtonProps } from "@/src/types/Repetitions/RepetitionsCheckButton";

const RepetitionsCheckButton = ({
  handleResult,
  name,
  index,
}: RepetitionsCheckButtonProps) => {
  return (
    <div id={name} key={name}>
      <button onClick={() => handleResult(index)}>{name}</button>
    </div>
  );
};

export default RepetitionsCheckButton;
