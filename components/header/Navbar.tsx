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
      {/* Mobile Version */}
      <div className="md:hidden flex flex-col justify-center items-center border-b border-base-200 w-full">
        <div className="flex justify-between items-center w-full">
          <a href="/" aria-label="Store logo" className="block">
            <Image
              className="p-6"
              src={logo.mobile}
              alt={logo.alt}
              width={160}
              height={58}
              loading="lazy"
            />
          </a>
          <div className="flex gap-1">
            <Buttons variant="search" />
            <Searchbar searchbar={searchbar} />
          </div>
        </div>
        <div class="flex-auto flex justify-end max-w-full overflow-x-auto flex-nowrap space-x-4">
          {items.map((item) => <NavItem item={item} />)}
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-around items-center border-b border-base-200 w-full pl-2">
        <div class="flex-none w-44">
          {
            <a href="/" aria-label="Store logo" class="block w-[160]">
              <Image
                class="p-6"
                src={logo.desktop}
                alt={logo.alt}
                width={160}
                height={58}
                loading="lazy"
              />
            </a>
          }
        </div>
        <div class="flex-auto flex justify-end">
          {items.map((item) => <NavItem item={item} />)}
        </div>
        <div class="flex-none w-44 flex items-center justify-left gap-2">
          <Buttons variant="search" />
          <Searchbar searchbar={searchbar} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
