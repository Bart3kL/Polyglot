import { Submenu } from "../NavItemMobile/utilityTypes";
export interface NavItemDesktopProps {
  href: string;
  name: string;
  index: number;
  subMenu?: Submenu[];
}
