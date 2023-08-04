import { AvailableIcons } from "$store/components/ui/Icon.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { EditableProps as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";

import Navbar from "./Navbar.tsx";

export interface NavItem {
  label: string;
  href: string;
  icon: AvailableIcons;
  children?: Array<{
    label: string;
    href: string;
    description?: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
}

export interface Logo {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description Image's alt text */
  alt: string;
}

export interface Props {
  logo: Logo;
  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */
  products?: LoaderReturnType<Product[] | null>;

  /**
   * @title Enable Top Search terms
   */
  suggestions?: LoaderReturnType<Suggestion | null>;
}

function Header(
  {
    searchbar: _searchbar,
    products,
    logo,
    navItems = [],
    suggestions,
  }: Props,
) {
  const searchbar = { ..._searchbar, products, suggestions };
  return (
    <>
      <header>
        <div class="container-fluid fixed md:h-[70px] xs:h-[100px] z-[1000] md:w-[100%] xs:w-[98%] bg-white shadow-md">
          <Navbar items={navItems} logo={logo} searchbar={searchbar} />
        </div>
      </header>
    </>
  );
}

export default Header;
