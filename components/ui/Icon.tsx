import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons =
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "ChevronDown"
  | "QuestionMarkCircle"
  | "User"
  | "ShoppingCart"
  | "Bars3"
  | "Heart"
  | "MagnifyingGlass"
  | "XMark"
  | "Plus"
  | "Minus"
  | "MapPin"
  | "Phone"
  | "Elo"
  | "Mastercard"
  | "Visa"
  | "Pix"
  | "Logo"
  | "Facebook"
  | "FacebookBlack"
  | "Instagram"
  | "InstagramBlack"
  | "Tiktok"
  | "Truck"
  | "Discount"
  | "Return"
  | "CreditCard"
  | "Deco"
  | "Discord"
  | "Trash"
  | "FilterList"
  | "WhatsApp"
  | "Linkedin"
  | "LinkedinBlack"
  | "YoutubeBlack"
  | "Brazil"
  | "Spain"
  | "Italy"
  | "Chile"
  | "Romania"
  | "GreatBritain"
  | "ArrowRight"
  | "ArrowRightOrange"
  | "Computer"
  | "Seed"
  | "ArrowsPointingOut";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   */
  id: AvailableIcons;
  size?: number;
}

function Icon(
  { id, strokeWidth = 16, size, width, height, ...otherProps }: Props,
) {
  return (
    <svg
      {...otherProps}
      width={width ?? size}
      height={height ?? size}
      strokeWidth={strokeWidth}
    >
      <use href={asset(`/sprites.svg#${id}`)} />
    </svg>
  );
}

export default Icon;
