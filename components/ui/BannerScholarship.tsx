import { JSX } from "preact";
import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface ActionLink {
  text: string;
  href: string;
}

export interface BannerBackgroundImage {
  desktop: LiveImage;
  mobile: LiveImage;
}

export interface Props {
  title: HTML;
  text: HTML;
  backgroundImage: BannerBackgroundImage;
  button: ActionLink;
}

function BannerScholarship(
  { title, text, backgroundImage, button }: Props,
) {
  const [elementRef, isShown] = useScrollShow();

  return (
    <>
      <div
        class="xs:hidden lg:block w-auto h-auto bg-[#f3f3f3] bg-none bg-repeat bg-auto relative"
        ref={elementRef as Ref<HTMLDivElement>}
      >
        <div class="box-border">
          <div class="h-[60px]"></div>
          <div class="z-10 h-[640px] max-w-[1120px] relative mx-auto">
            <div class="h-[640px] flex-col flex justify-between items-start pt-[60px] pb-[40px] relative">
              <div
                class="z-10 w-[660px] h-[300px] bg-white flex-col justify-center items-start pt-5 px-10 pb-[10px] flex shadow-[1px_1px_3px_rgba(0,0,0,.1)]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 70%, 85% 100%, 0% 100%)",
                }}
              >
                <h1 class="my-5 font-AvenirNextLTPro text-[58px] leading-[68px] ml-0 w-[610px] mt-[80px]">
                  <span dangerouslySetInnerHTML={{ __html: title }}></span>
                </h1>
              </div>
              <div class="w-[460px] flex-col flex items-start pt-5 pl-10 static">
                <p class="mb-5 text-left font-Gravity text-[16px] leading-[1.6rem]">
                  <span dangerouslySetInnerHTML={{ __html: text }}></span>
                </p>
                <a
                  href={button.href}
                  class={`mr-auto w-auto uppercase cursor-pointer bg-[#f26f21]
                 hover:bg-[#f07d39] rounded py-[16px] px-[24px] font-Gravity text-[16px] font-bold text-white inline-block
                ${isShown ? "animate-button-expand" : ""}`}
                >
                  {button.text}
                </a>
              </div>
            </div>
          </div>
          <div
            class={`w-[76%] h-[640px] max-w-none absolute top-auto bottom-0 left-auto right-0 
            ${isShown ? "animate-slide-left" : ""}`}
            style={{
              backgroundImage: `url(${backgroundImage.desktop})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "0%",
            }}
          >
          </div>
        </div>
      </div>

      <div
        class="xs:block md:block lg:hidden w-auto h-auto bg-[#f3f3f3] bg-none bg-repeat bg-auto relative"
        ref={elementRef as Ref<HTMLDivElement>}
      >
        <div class="box-border flex flex-col-reverse">
          <div class="z-10 h-[auto] pb-5 xs:px-[10px] md:px-5 max-w-[1120px] relative mx-auto top-[-20px]">
            <div class="h-auto flex-col flex justify-between items-start py-[0px] relative">
              <div
                class="z-10 w-full md:h-[160px] xs:h-[160px] bg-white flex-col justify-center items-start md:pr-[10px] xs:pt-[10px] xs:pl-[20px] xs:pr-[10px] pb-[10px] flex shadow-[1px_1px_3px_rgba(0,0,0,.1)]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 70%, 85% 100%, 0% 100%)",
                }}
              >
                <h1 class="tracking-[.1px] mb-5 font-AvenirNextLTPro md:text-[46px] md:leading-[56px] xs:text-[32px] leading-[38px] md:mt-[60px] xs:mt-[60px]">
                  <span dangerouslySetInnerHTML={{ __html: title }}></span>
                </h1>
              </div>
              <div class="p-5 w-full static flex-col items-start flex">
                <p class="mb-5 text-left font-Gravity md:text-[16px] md:leading-[20px] xs:text-[14px] xs:leading-[22px]">
                  <span dangerouslySetInnerHTML={{ __html: text }}></span>
                </p>
                <a
                  href={button.href}
                  class={`mr-auto xs:w-full md:w-auto uppercase cursor-pointer bg-[#f26f21]
                 hover:bg-[#f07d39] rounded py-[10px] px-[24px] font-Gravity text-[16px] font-bold text-white text-center inline-block xs:mb-2
                `}
                >
                  {button.text}
                </a>
              </div>
            </div>
          </div>
          <div
            class="w-[100%] md:h-[300px] md:mt-[70px]  xs:h-[200px] xs:mt-[100px] max-w-none top-auto bottom-0 left-auto right-0 static"
            style={{
              backgroundImage: `url(${backgroundImage.mobile})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "50% 100%",
            }}
          >
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerScholarship;
