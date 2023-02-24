import React from "react";

import { useCarousel } from "./hooks";
import styles from "./rwd.module.scss";
// import getQuotes from "@/contentful/quotes";
const {
  wrapper,
  wrapperSlide,
  wrapperSlideQuote,
  wrapperSlideAuthor,
  wrapperProgress,
  wrapperProgressActive,
} = styles;

export default function HomeSlider() {
  const { sliderRef, slideIdx } = useCarousel();
  return (
    <div className={wrapper}>
      {/* <div ref={sliderRef} className={"keen-slider"}>
        {quotes.map(({ quote, author }, index) => (
          <>
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
          </>
        ))}
      </div> */}
    </div>
  );
}
