import { HomePageProps } from "./HomePage";
import { HomeSliderProps } from "./HomeSlider/index";

export interface HomeProps {
  page: HomePageProps & HomeSliderProps;
}
