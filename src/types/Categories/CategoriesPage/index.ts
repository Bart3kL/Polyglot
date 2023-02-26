import { Category } from "../utilityTypes";
import { Header } from "../../Dictionary/utilityTypes";

export type CategoriesPageProps = {
  categories: Category[];
} & Header;
