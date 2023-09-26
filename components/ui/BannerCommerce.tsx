import { JSX } from "preact";
import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
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
  logo: {
    src: LiveImage;
    alt: string;
  };
  text: HTML;
  backgroundImage: BannerBackgroundImage;
  button: ActionLink;
}

function BannerCommerce(
  { title, backgroundImage, button, logo, text }: Props,
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
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  height={96}
                  width={130}
                  class="w-[130px] h-auto max-w-full inline-block align-middle"
                />
                <h1 class="my-5 font-AvenirNextLTPro text-[44px] leading-[54px] ml-0">
                  <span dangerouslySetInnerHTML={{ __html: title }}></span>
                </h1>
              </div>
              <div class="w-[460px] flex-col flex items-start pt-5 pl-10 static">
                <div class="text-left pb-[10px] font-Gravity text-[22px] leading-[30px] mb-[10px]">
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: text }}></span>
                  </p>
                </div>
                <a
                  href={button.href}
                  class={`mr-auto w-auto uppercase cursor-pointer bg-[#f26f21]
                 hover:bg-[#f07d39] rounded py-[16px] px-[24px] font-Gravity text-[16px] font-bold text-white inline-block
                `}
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
                class="z-10 w-full h-auto bg-white flex-col justify-center items-start md:pt-5 md:pl-5 md:pr-10 mb-5 xs:pt-[10px] xs:pl-[20px] xs:pr-[10px] pb-[10px] flex shadow-[1px_1px_3px_rgba(0,0,0,.1)]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 70%, 85% 100%, 0% 100%)",
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  height={96}
                  width={130}
                  class="xs:w-[80px] md:w-[130px] h-auto max-w-full inline-block align-middle"
                />
                <h1 class="tracking-[.1px] mb-5 font-AvenirNextLTPro md:text-[46px] md:leading-[56px] xs:text-[30px] leading-[36px] mt-[20px]">
                  <span dangerouslySetInnerHTML={{ __html: title }}></span>
                </h1>
              </div>
              <div>
                <div class="text-left pb-[10px] font-Gravity md:text-[20px] md:leading-[28px] xs:text-[16px] xs:leading-[24px] mb-[10px]">
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: text }}></span>
                  </p>
                </div>
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
            class="w-[100%] md:h-[300px] md:mt-[70px]  xs:h-[200px] xs:mt-[100px] max-w-none top-auto bottom-0 left-auto right-0 static md:bg-[0 0] xs:bg-[50% 100%]"
            style={{
              backgroundImage: `url(${backgroundImage.mobile})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerCommerce;
