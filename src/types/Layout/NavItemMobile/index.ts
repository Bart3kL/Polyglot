import { Submenu } from "./utilityTypes";

export interface NavItemMobileProps {
  href: string;
  name: string;
  index: number;
  subMenu?: Submenu[];
}
