import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Props {
  backgroundImage: LiveImage;
  mobileLogo: LiveImage;
  title: HTML;
  text: HTML;
  linkText: HTML;
  href: string;
  icon: AvailableIcons;
}

function MoreAboutEicomDCE(
  {
    backgroundImage,
    mobileLogo,
    title,
    text,
    linkText,
    href,
    icon,
  }: Props,
) {
  return (
    <>
      <div class="py-10 px-3 h-[400px] bg-[#262628] xs:block md:hidden">
        <div class="mx-auto">
          <div class="mx-0">
            <div class="px-0 text-center w-full left-auto right-auto float-left relative">
              <Image
                class="inline-block relative max-w-none top-0 py-1 h-auto"
                src={mobileLogo}
                alt="null"
                width={120}
                height={58}
              />
            </div>
            <div class="px-0 w-full left-auto right-auto float-left relative">
              <h2 class="my-3 mb-5 block text-2xl text-left font-bold">
                <span dangerouslySetInnerHTML={{ __html: title }}></span>
              </h2>
              <p class="text-left mb-3 mt-0 text-base">
                <span dangerouslySetInnerHTML={{ __html: text }}></span>
              </p>
              <div class="flex flex-row mt-3">
                <a
                  href={href}
                  class="uppercase tracking-wide cursor-pointer pl-0 font-bold inline-block"
                >
                  <span dangerouslySetInnerHTML={{ __html: linkText }}></span>
                </a>
                <Icon
                  id={icon}
                  width={24}
                  height={24}
                  strokeWidth={3}
                  class="mt-1 ml-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundPosition: "0 0",
          backgroundColor: "#262628",
        }}
        class="py-24 h-[448px] xs:hidden md:block"
      >
        <div class="max-w-[1120px] mx-auto">
          <div class="mx-[-10px]">
            <div class="text-center w-[40%] z-[-1] float-left px-3 relative">
              <Image
                class="py-1"
                src={mobileLogo}
                alt="null"
                width={160}
                height={58}
              />
            </div>
            <div class="w-[60%] float-left px-3 relative">
              <h2 class="my-5 block md:text-3xl text-left font-bold">
                <span dangerouslySetInnerHTML={{ __html: title }}></span>
              </h2>
              <p class="text-left mb-3 mt-0 md:text-2xl">
                <span dangerouslySetInnerHTML={{ __html: text }}></span>
              </p>
              <div class="flex flex-row mt-3">
                <a
                  href={href}
                  class="uppercase tracking-wide cursor-pointer pl-0 font-bold inline-block"
                >
                  <span dangerouslySetInnerHTML={{ __html: linkText }}></span>
                </a>
                <Icon
                  id={icon}
                  width={24}
                  height={24}
                  strokeWidth={3}
                  class="mt-1 ml-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreAboutEicomDCE;
