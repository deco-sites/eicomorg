import Searchbar from "$store/islands/HeaderSearchbar.tsx";
import Buttons from "$store/islands/HeaderButton.tsx";
import NavItem from "./NavItem.tsx";
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
      lg:w-[69rem]
      md:w-full

      md:flex
      xs:block

      h-[100%]
      m-auto
      py-1
      relative
      justify-between
    ">
        <a href="/">
          <img
            class="xs:hidden md:block p-[4px] md:ml-4 lg:ml-0 max-h-[58px] "
            src={logo.desktop}
            alt={logo.alt}
          />

          <img
            class="md:hidden ml-2 max-w-[120px] px-[4px] py-[4px]"
            src={logo.mobile}
            alt={logo.alt}
          />
        </a>

        <div class="pr-4 md:flex xs:hidden absolute lg:right-2 md:right-10 top-3">
          {items.map((item, index) => (
           <div class="border-r border-[#f3f3f3] py-4 px-[1.25rem] m-0"><NavItem  item={{ ...item, isMobile: false, itemIndex: index }} /></div>
          ))}
        </div>

        <span class="
            lg:right-[-2rem]
            md:right-[1rem]
            xs:right-2

            md:top-3
            xs:top-2

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
