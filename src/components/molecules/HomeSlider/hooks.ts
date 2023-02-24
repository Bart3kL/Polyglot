import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState, useMemo } from "react";
import { CarouselRef, CarouselOptions, CarouselInstance } from "./types";

function fixKeenSliderBug(
  sliderInstanceRef: CarouselRef,
  sliderOptionsValue: CarouselOptions
) {
  return () => {
    if (sliderInstanceRef.current) {
      sliderInstanceRef.current.update({ ...sliderOptionsValue });
    }

    return () => {
      if (sliderInstanceRef.current) {
        sliderInstanceRef.current.destroy();
      }
    };
  };
}

const initialCarouselOptions: CarouselOptions = {};

const carouselHooks = [
  (slider: CarouselInstance) => {
    let timeout: ReturnType<typeof setTimeout>;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        slider.next();
      }, 2000);
    }

    slider.on("created", nextTimeout);
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", (sliderInstance) => {
      sliderInstance.update();
      nextTimeout();
    });
    slider.on("updated", nextTimeout);
  },
];

export const useCarousel = () => {
  const [slideIdx, setSlideIdx] = useState(0);
  const [jsEnabled, setJsEnabled] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    initialCarouselOptions,
    carouselHooks
  );

  const defaultCarouselOptions: CarouselOptions = useMemo(
    () => ({
      initial: 1,
      loop: true,
      slides: {
        spacing: 15,
      },
      slideChanged({ track: { details } }) {
        setSlideIdx(details.rel);
      },
    }),
    []
  );

  useEffect(() => {
    setJsEnabled(true);
  }, []);

  useEffect(fixKeenSliderBug(instanceRef, defaultCarouselOptions), [
    instanceRef.current,
  ]);

  return {
    jsEnabled,
    sliderRef,
    slideIdx,
  };
};
