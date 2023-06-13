import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import type { ComponentChildren } from "preact";

export interface Logo {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description Image's alt text */
  alt: string;
  href: string;
  copyrightText: HTML;
}

export type IconItem = { icon: AvailableIcons; href: string };
export type StringItem = {
  label: HTML;
  href?: string;
  isEmail?: boolean;
  isPhone?: boolean;
};

export type FooterIcons = {
  icon: IconItem;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <span class="text-primary-content">
      {isIcon(item)
        ? (
          <a href={item.href}>
            <Icon
              id={item.icon}
              width={32}
              height={32}
              strokeWidth={0.01}
            />
          </a>
        )
        : (
          <>
            {item.isEmail
              ? (
                <a href={`mailto:${item.href}`} className="hover:underline">
                  <span dangerouslySetInnerHTML={{ __html: item.label }}></span>
                </a>
              )
              : item.isPhone
              ? (
                <a href={`tel:${item.href}`} className="hover:underline">
                  <span dangerouslySetInnerHTML={{ __html: item.label }}></span>
                </a>
              )
              : (
                <a href={item.href}>
                  <span dangerouslySetInnerHTML={{ __html: item.label }}></span>
                </a>
              )}
          </>
        )}
    </span>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  logo: Logo;
  sections?: Section[];
}

function Footer({ sections = [], logo }: Props) {
  return (
    <footer class="w-full bg-black flex flex-col divide-y divide-primary-content">
      <div>
        <div class="container w-full flex flex-col divide-y divide-primary-content max-w-[1120px] relative ml-auto mr-auto">
          <FooterContainer>
            {/* Desktop view */}
            <ul class="hidden sm:flex flex-row gap-20">
              <div class="h-32 flex flex-col justify-between float-left px-3 w-1/3">
                <a
                  href={logo.href}
                  aria-label="Store logo"
                  class="block w-[160]"
                >
                  <Image
                    class="py-1"
                    src={logo.desktop}
                    alt={logo.alt}
                    width={160}
                    height={58}
                    loading="lazy"
                  />
                </a>
                <p>
                  <span
                    dangerouslySetInnerHTML={{ __html: logo.copyrightText }}
                  >
                  </span>
                </p>
              </div>
              {sections.map((section) => (
                <li>
                  <div>
                    <ul
                      class={`flex ${
                        isIcon(section.children[0]) ? "flex-row" : "flex-col"
                      } gap-2 pt-2`}
                    >
                      {section.children.map((item) => (
                        <SectionItem item={item} />
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile view */}
            <ul class="flex flex-col sm:hidden sm:flex-row gap-4">
              <div class="h-32 flex flex-col justify-between float-left px-3 md:w-1/3 xs:1/2">
                <a
                  href={logo.href}
                  aria-label="Store logo"
                  class="block w-[160]"
                >
                  <Image
                    class="py-1"
                    src={logo.desktop}
                    alt={logo.alt}
                    width={160}
                    height={58}
                    loading="lazy"
                  />
                </a>
                <p>
                  <span
                    dangerouslySetInnerHTML={{ __html: logo.copyrightText }}
                  >
                  </span>
                </p>
              </div>
              {sections.map((section) => (
                <li>
                  <span class="text-primary-content">
                    <ul
                      class={`flex ${
                        isIcon(section.children[0])
                          ? "flex-row items-center"
                          : "flex-col"
                      } gap-2 px-2 pt-2`}
                    >
                      {section.children.map((item) => (
                        <SectionItem item={item} /> // Remove the extra <li> wrapper here
                      ))}
                    </ul>
                  </span>
                </li>
              ))}
            </ul>
          </FooterContainer>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
