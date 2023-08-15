import { JSX } from "preact";
import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface BannerBackgroundImage {
  desktop:  {
    src: LiveImage
    alt: string
  };
  mobile:  {
    src: LiveImage
    alt: string
  };
}

export interface CourseLogo {
    desktop:  {
        src: LiveImage
        alt: string
      };
      mobile:  {
        src: LiveImage
        alt: string
      };
}

export interface Button {
    text: string
    href: string
    buttonColor: string;
}
export interface Props {
  title: HTML;
  text: HTML
  backgroundImage: BannerBackgroundImage;
  courseLogo: CourseLogo;
  button: Button;
  smallText: HTML;
}

function BannerEcommerceSolutionsArchitect(
  { title, text, backgroundImage, courseLogo, button, smallText }: Props,
) {

  const [elementRef, isShown] = useScrollShow();

  return (
    <>
      <div class="xs:hidden lg:block lg:h-[670px] md:h-[710px] 
      items-center mt-[70px] 
      lg:pb-0 lg:px-0 md:pb-5 md:px-5 md:justify-end lg:justify-normal 
      flex bg-[#445066] box-border"
      style={{
        backgroundImage: `url(${backgroundImage.desktop.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "600px",
        backgroundPosition: "10%",
      }}>
        <div class="max-w-[1120px] mx-auto">
          <div class="mx-[-10px]">
            <div class="md:w-1/2 float-left px-[10px] relative min-h-[1px]"></div>
            <div class="md:w-1/2 float-left px-[10px] relative min-h-[1px]">
              <div>
                <Image
                  src={courseLogo.desktop.src}
                  alt={courseLogo.desktop.alt}
                  width={185}
                  height={80}
                  class="lg:mb-5 h-[80px] max-w-full align-middle inline-block border-0"
                />
                <h1 class="md:text-[48px] md:leading-[58px] uppercase my-5 font-AvenirNextLTPro">
                  <span dangerouslySetInnerHTML={{__html: title}}></span>
                </h1>
                <p class="font-Gravity lg:text-[22px] md:text-[20px] md:leading-[28px] lg:leading-[30px] text-left mb-[10px] mt-0">
                  <span dangerouslySetInnerHTML={{__html: text}}></span>
                </p>
                <div class="lg:pt-[50px] md:pt-[30px]">
                  <a
                    class={`bg-[#f2a91d] text-white font-bold mx-auto w-auto uppercase cursor-pointer rounded-[4px] py-[16px] px-[24px] font-Gravity text-[16px]${
                      isShown ? "" : ""
                    }`}
                    ref={elementRef as Ref<HTMLAnchorElement>}
                    href={button.href}
                    style={{backgroundColor: button.buttonColor}}
                  >
                    {button.text}
                  </a>
                </div>
                <p class="text-left text-[12px] leading-[14px] mb-[10px] font-Gravity lg:pt-[50px] md:pt-[30px]">
                  <span dangerouslySetInnerHTML={{__html: smallText}}></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="xs:hidden md:block lg:hidden md:h-[710px] 
      items-center mt-[70px] 
      lg:pb-0 lg:px-0 md:pb-5 md:px-5 md:justify-end lg:justify-normal 
      flex bg-[#445066] box-border"
      style={{
        backgroundImage: `url(${backgroundImage.desktop.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "50%",
        backgroundPosition: "0%",
      }}>
        <div class="max-w-[1120px] mx-auto">
          <div class="mx-[-10px]">
            <div class="md:w-1/2 float-left px-[10px] relative min-h-[1px]"></div>
            <div class="md:w-1/2 float-left px-[10px] relative min-h-[1px]">
              <div>
                <Image
                  src={courseLogo.desktop.src}
                  alt={courseLogo.desktop.alt}
                  width={185}
                  height={80}
                  class="lg:mb-5 h-[80px] max-w-full align-middle inline-block border-0"
                />
                <h1 class="md:text-[48px] md:leading-[58px] uppercase my-5 font-AvenirNextLTPro">
                  <span dangerouslySetInnerHTML={{__html: title}}></span>
                </h1>
                <p class="font-Gravity lg:text-[22px] md:text-[20px] md:leading-[28px] lg:leading-[30px] text-left mb-[10px] mt-0">
                  <span dangerouslySetInnerHTML={{__html: text}}></span>
                </p>
                <div class="lg:pt-[50px] md:pt-[30px]">
                  <a
                    class={`bg-[#f2a91d] text-white font-bold mx-auto w-auto uppercase cursor-pointer rounded-[4px] py-[16px] px-[24px] font-Gravity text-[16px]${
                      isShown ? "" : ""
                    }`}
                    ref={elementRef as Ref<HTMLAnchorElement>}
                    href={button.href}
                    style={{backgroundColor: button.buttonColor}}
                  >
                    {button.text}
                  </a>
                </div>
                <p class="text-left text-[12px] leading-[14px] mb-[10px] font-Gravity lg:pt-[50px] md:pt-[30px]">
                  <span dangerouslySetInnerHTML={{__html: smallText}}></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="xs:block md:hidden h-[770px] 
      mt-[90px] pt-[200px] pb-[20px] items-end px-5 bg-[#445066] flex"
      style={{
        backgroundImage: `url(${backgroundImage.mobile.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "88%",
        backgroundPosition: "50% 0",
        backgroundAttachment: "scroll !important",
      }}>
        <div class="max-w-none mx-auto">
          <div class="mx-0 mt-[70px]">
            <div class="w-full left-auto right-auto float-left px-[0px] relative min-h-[1px]"></div>
            <div class="w-full left-auto right-auto float-left px-[0px] relative min-h-[1px]">
              <div>
                <Image
                  src={courseLogo.mobile.src}
                  alt={courseLogo.mobile.alt}
                  width={185}
                  height={80}
                  class="ml-auto mr-0 block text-right max-w-full align-middle"
                />
                <h1 class="text-[32px] md:leading-[42px] uppercase my-[10px] font-AvenirNextLTPro">
                  <span dangerouslySetInnerHTML={{__html: title}}></span>
                </h1>
                <p class="font-Gravity text-[16px] leading-[24px] text-left mb-[10px] mt-0">
                  <span dangerouslySetInnerHTML={{__html: text}}></span>
                </p>
                <div class="pt-[30px]">
                  <a
                    class={`bg-[#f2a91d] text-white text-center w-auto mx-auto pt-[12px] px-5 block uppercase cursor-pointer rounded-[4px] font-Gravity text-[16px] pb-3 font-bold '${
                      isShown ? "" : ""
                    }`}
                    ref={elementRef as Ref<HTMLAnchorElement>}
                    href={button.href}
                    style={{backgroundColor: button.buttonColor}}
                  >
                    {button.text}
                  </a>
                </div>
                <p class="text-left text-[11px] leading-[12px] font-Gravity pt-[20px]">
                  <span dangerouslySetInnerHTML={{__html: smallText}}></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerEcommerceSolutionsArchitect;
