import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface Props {
  backgroundImage: LiveImage;
  mobileLogo: LiveImage;
  title: HTML;
  text: HTML;
  linkText: HTML;
  href: string;
  icon: AvailableIcons;
  arrow: LiveImage
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
    arrow
  }: Props,
) {
  const [elementRef, isShown] = useScrollShow();
  return (
    <>
      {/* mobile view */}
      <div ref={elementRef as Ref<HTMLDivElement>} 
      class="py-10 px-3 h-[330px] bg-[#262628] xs:block md:hidden">
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
              <h2 class="my-3 mb-5 block text-2xl text-left font-bold font-AvenirNextLTPro">
                <span dangerouslySetInnerHTML={{ __html: title }}></span>
              </h2>
              <p class={`text-left mb-3 mt-0 text-base
                ${isShown ? "animate-slide-left" : ""}`}>
                <span dangerouslySetInnerHTML={{ __html: text }}></span>
              </p>
              <div class="flex flex-row mt-3">
              <a
                  href={href}
                  class="tracking-[1px] uppercase cursor-pointer font-AvenirNextLTPro font-bold inline-block
                  border-0 py-[9px] pr-[15px] text-[14px]"
                  style={{
                    backgroundImage: `url(${arrow})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "100%",
                    backgroundSize: "20px",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    paddingRight: "30px",
                  }}
                >
                  <span dangerouslySetInnerHTML={{ __html: linkText }}></span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>


      {/* desktop view */}
      <div
        ref={elementRef as Ref<HTMLDivElement>}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundPosition: "0 0",
          backgroundColor: "#262628",
        }}
        class="py-24 h-[448px] xs:hidden md:block box-border"
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
            <div class="w-[60%] float-left px-[10px] relative">
              <h2 class="my-5 block md:text-[30px] leading-[34px] font-AvenirNextLTPro text-left font-bold ">
                <span dangerouslySetInnerHTML={{ __html: title }}></span>
              </h2>
              <p class={`text-left mb-3 mt-0 md:text-[22px] leading-[30px] font-Gravity
              ${isShown ? "animate-slide-left" : ""}`}>
                <span dangerouslySetInnerHTML={{ __html: text }}></span>
              </p>
              <div class="flex flex-row mt-3">
                <a
                  href={href}
                  class="tracking-[1px] uppercase cursor-pointer font-AvenirNextLTPro font-bold inline-block
                  border-0 py-[9px] pr-[30px] text-[14px] lg:hover:pr-[34px] lg:hover:underline text-[#f26f21]"
                  style={{
                    backgroundImage: `url(${arrow})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "100%",
                    backgroundSize: "20px",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                  }}
                >
                  <span dangerouslySetInnerHTML={{ __html: linkText }}></span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreAboutEicomDCE;
