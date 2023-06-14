import Searchbar from "$store/islands/HeaderSearchbar.tsx";
import Buttons from "$store/islands/HeaderButton.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import NavItem from "./NavItem.tsx";
"../../static/Logo-header.png";
import type { INavItem } from "./NavItem.tsx";
import type { Logo } from "./Header.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";

function Navbar({ items, logo, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
  logo: Logo;
}) {
  return (
    <>
      <div class="
      lg:w-[70rem]
      
      lg:container
      md:container-fluid

      md:flex
      xs:block

      h-[100%]
      m-auto
      py-1
      relative
      justify-between
    ">
        <img
          class="xs:hidden w-[160px] h-[58px] py-[4px]"
          src={logo.desktop}
          alt={logo.alt}
        />

        <img
          class="md:hidden w-[160px] h-[58px] py-[4px]"
          src={logo.mobile}
          alt={logo.alt}
        />

        <div class="pr-4 md:flex xs:hidden absolute lg:right-0 md:right-4 top-7">
          {items.map((item, index) => (
            <NavItem item={{ ...item, isMobile: false, itemIndex: index }} />
          ))}
        </div>

        <span class="
            lg:right-[-3rem]
            md:right-[0rem]
            xs:right-2

            top-2

            w-[50px]
            h-[50px]

            block
            absolute
        ">
          <Buttons variant="search" />
        </span>

        <div class="md:hidden xs:flex ml-4 my-4">
          {items.map((item, index) => (
            <NavItem item={{ ...item, isMobile: true, itemIndex: index }} />
          ))}
        </div>
      </div>

      <Searchbar searchbar={searchbar} />
    </>
  );
}

export default Navbar;
