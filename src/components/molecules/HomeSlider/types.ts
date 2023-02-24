import type { MutableRef } from "preact/hooks";
import type { KeenSliderInstance, KeenSliderOptions } from "keen-slider/react";

export type CarouselRef = MutableRef<KeenSliderInstance | null>;
export type CarouselOptions = KeenSliderOptions;
export type CarouselInstance = KeenSliderInstance;
