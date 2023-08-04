import { JSX } from "preact";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import { useUI } from "$store/sdk/useUI.ts";

export interface INavItemChildren {
  label: string;
  href: string;
  description?: string;
  children?: Array<{
    label: string;
    href: string;
  }>;
}

export interface INavItem {
  label: string;
  href: string;
  icon: AvailableIcons;

  isMobile?: boolean;
  itemIndex?: number;

  children?: Array<{
    label: string;
    href: string;
    description?: string;
    children?: INavItemChildren[];
  }>;
  image?: { src?: string; alt?: string };
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, isMobile, itemIndex } = item;

  const mobileLabel = label.split(" ");
  const lastLabelWord = mobileLabel[mobileLabel.length - 1];

  const { displayNavbarMenu } = useUI();

  const toggleExpand = () => {
    if (itemIndex === displayNavbarMenu.value) {
      displayNavbarMenu.value = undefined;
    } else displayNavbarMenu.value = itemIndex;
  };

  const buttonArrow: JSX.CSSProperties = {
    backgroundRepeat: "no-repeat",
  };

  return (
    <div class="flex md:mr-3 xs:mr-2 cursor-pointer h-[100%] md:relative">
      <div class="m-auto flex">
        <a
          href={!isMobile ? href : "#"}
          class="
            lg:text-[12px]
            md:text-[12px]
            xs:text-[10px]

            uppercase
            inline-block
            h-5
            align-middle
            md:hover:underline
            text-[#696969]
            font-medium

            font-Gravity
            tracking-[-.5px]
          "
        >
          {!isMobile ? label : lastLabelWord}
        </a>

        <Icon
          id={(item.children && displayNavbarMenu.value === itemIndex)
            ? "ChevronUp"
            : "ChevronDown"}
          width={!isMobile ? 12 : 10}
          height={!isMobile ? 12 : 10}
          strokeWidth={3}
          class="ml-2 top-[1px] relative text-[#696969] font-bold"
          onClick={toggleExpand}
        />
      </div>

      {(item.children && displayNavbarMenu.value === itemIndex)
        ? (
          <>
            <div class="
            absolute
            
            md:top-14
            xs:top-28

            xs:left-3

            md:w-[230px]
            xs:w-[94%]

            p-4
            bg-white
            rounded
            shadow-md
            cursor-default
          ">
              {item.children.map((item) => (
                <div class="mb-2">
                  <a
                    href={item.href}
                    class="text-[12px] uppercase text-[#101010] border-b-[#475769] border-b-[1px] hover:border-b-[2px] font-medium outline-none"
                  >
                    {item.label}
                  </a>
                  <p class="text-[#848b94] text-[12px] my-1 mb-1">
                    {item.description}
                  </p>

                  <div class="ml-2 my-4">
                    {item.children?.map((link) => (
                      <a
                        style={buttonArrow}
                        href={link.href}
                        class="text-[#505050] hover:text-[#202020] text-[12px] border-b-[#eaeaea] border-b-[1px] w-[90%] pb-2 mb-2 block bg-[length:15px] bg-[99%_20%] hover:bg-[url(/icons/Arrow-right-black.svg)]"
                      >
                        <span class="w-[90%] block">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )
        : <></>}
    </div>
  );
}

export default NavItem;
