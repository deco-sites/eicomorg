import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";
import Policy from "./Policy.tsx";

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

export interface Infos {
  label: HTML;
  href?: string;
  isEmail?: boolean;
  isPhone?: boolean;
}

export interface Policies {
  label: HTML;
  href: string;
  closeButton: LiveImage;
}

export type FooterIcons = {
  icon: AvailableIcons;
  href: string;
};

export interface Props {
  logo: Logo;
  infos: Infos[];
  policies: Policies[];
  icons: FooterIcons[];
}

function Footer({ logo, infos = [], policies = [], icons = [] }: Props) {
  return (
    <>
      <div class="bg-black h-10 w-full"></div>
      <div class="bg-black xs:px-3 md:px-0">
        <div class="z-auto max-w-[1120px] pr-0 xs:pl-0 relative mx-auto h-full">
          <div class=" xs:mx-0 md:mx-[-10] h-[120px] bg-black">
            <div class=" xs:h-[100px] md:h-[120px] flex flex-col xs:justify-center  md:justify-between xs:w-full md:w-1/3 float-left px-3 relative">
              <a
                href={logo.href}
                class="max-w-full inline-block cursor-pointer bg-black"
              >
                <Image
                  src={logo.desktop}
                  alt={logo.alt}
                  width={160}
                  height={58}
                  class="p-1 block w-[160px] h-[58px]"
                />
              </a>
              <p class="text-sx text-left mb-3">
                <span
                  dangerouslySetInnerHTML={{ __html: logo.copyrightText }}
                >
                </span>
              </p>
            </div>
            <div class="xs:h-[100px] md:h-[120px] flex flex-col xs:justify-center  md:justify-between xs:w-full md:w-1/4 float-left px-3 relative">
              {infos.map((info) => {
                return (
                  <>
                    {info.isEmail
                      ? (
                        <p class="text-xs my-0 text-left">
                          <a
                            href={`mailto:${info.href}`}
                            className="hover:underline cursor-pointer"
                          >
                            <span
                              dangerouslySetInnerHTML={{ __html: info.label }}
                            >
                            </span>
                          </a>
                        </p>
                      )
                      : info.isPhone
                      ? (
                        <p class="text-xs my-0 text-left">
                          <a
                            href={`tel:${info.href}`}
                            className="hover:underline cursor-pointer"
                          >
                            <span
                              dangerouslySetInnerHTML={{ __html: info.label }}
                            >
                            </span>
                          </a>
                        </p>
                      )
                      : (
                        <p class="text-xs my-0 text-left">
                          <span
                            dangerouslySetInnerHTML={{ __html: info.label }}
                          >
                          </span>
                        </p>
                      )}
                  </>
                );
              })}
            </div>
            <div class=" xs:h-[100px] md:h-[120px] flex flex-col xs:justify-center  md:justify-between xs:w-full md:w-1/4 float-left px-3 relative">
              <ul class="pl-0 list-none mb-3 mt-0 block" role="list">
                {policies.map((policyData, index) => (
                  <Policy policyData={policyData} />
                ))}
              </ul>
            </div>
            <div class="flex flex-row xs:justify-start md:justify-end h-[120px] xs:w-full md:w-1/6 float-left px-3 relative">
              {icons.map((icon) => {
                return (
                  <a href={icon.href} class="w-6 h-6 xs:ml-3 md:ml-2 lg:ml-3">
                    <Icon
                      id={icon.icon}
                      width={24}
                      height={24}
                      strokeWidth={3}
                      class="max-w-full align-middle inline-block"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div class="bg-black xs:h-64 md:h-10 w-full"></div>
    </>
  );
}

export default Footer;

{/* <div class="hidden sm:flex flex-row "> */}
