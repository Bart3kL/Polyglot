import React from "react";

import FlashCardsForm from "../../atoms/FlashCardsForm";
import FlashCardsCard from "../FlashCardsPageCard";
import { FlashCardsPageInitialContentProps } from "@/src/types/Flashcards/FlashCardsPageInitialContent";

import styles from "./rwd.module.scss";
const { wrapper } = styles;

const FlashCardsPageInitialContent = ({
  data,
  show,
  page,
}: FlashCardsPageInitialContentProps) => {
  const { headerTitle, loadWordBtn, btnLabel } = page;
  return (
    <>
      {show && (
        <div className={wrapper}>
          <FlashCardsForm {...page} />
          <FlashCardsCard
            data={data}
            showBtn={true}
            showToNextStepBtn={false}
            headerTitle={headerTitle}
            loadWordBtn={loadWordBtn}
            btnLabel={btnLabel}
          />
        </div>
      )}
    </>
  );
};

export default FlashCardsPageInitialContent;
