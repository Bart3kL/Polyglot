import React from "react";

import { useCarousel } from "./hooks";
import { HomeSliderProps } from "@/src/types/Home/HomeSlider";

import { cx } from "../../lib/utils";
import styles from "./rwd.module.scss";

const {
  wrapper,
  wrapperSlide,
  wrapperSlideQuote,
  wrapperSlideAuthor,
  wrapperProgress,
  wrapperProgressActive,
} = styles;

export default function HomeSlider({ quotes }: HomeSliderProps) {
  const { sliderRef, slideIdx } = useCarousel();

  return (
    <div className={wrapper}>
      <div ref={sliderRef} className={"keen-slider"}>
        {quotes.map(({ quote, author }, index) => (
          <div
            className={cx(
              wrapperSlide,
              `keen-slider__slide number-slide${index + 1}`
            )}
            key={quote + index}
          >
            <p className={wrapperSlideQuote}>{quote}</p>
            <p className={wrapperSlideAuthor}> {author}</p>
            <div
              className={cx(
                wrapperProgress,
                index === slideIdx && wrapperProgressActive
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
