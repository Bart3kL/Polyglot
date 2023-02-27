import { Subcategory } from "../utilityTypes";
import { Header } from "../../Dictionary/utilityTypes";

export type SubcategoriesPageProps = {
  subcategories: Subcategory[];
  page: Header;
};
