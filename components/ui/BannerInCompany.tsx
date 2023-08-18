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

export interface ActionLinksContainer {
  firstButton: ActionLink;
  secondButton: ActionLink;
}

export interface Props {
  topText: HTML
  title: HTML;
  backgroundImage: BannerBackgroundImage;
  buttons: ActionLinksContainer;
}

function BannerInCompany(
  { title, topText, backgroundImage, buttons }: Props,
) {
  const [elementRef, isShown] = useScrollShow();

  return (
    <>
      <div class="xs:hidden lg:block w-auto h-auto bg-[#f3f3f3] bg-none bg-repeat bg-auto relative"
        ref={elementRef as Ref<HTMLDivElement>}>
        <div class="box-border">
          <div class="z-10 h-[640px] max-w-[1120px] relative mx-auto">
            <div class="h-[640px] flex-col flex justify-between items-start pt-[60px] pb-[40px] relative">
              <div class="z-10 w-[660px] h-[300px] bg-white flex-col justify-center items-start pt-5 px-10 pb-[10px] flex shadow-[1px_1px_3px_rgba(0,0,0,.1)]"
                    style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 85% 100%, 0% 100%)"}}>
                <p class="text-left font-Gravity text-[16px] mb-[10px] leading-[1.6rem]">
                  <span dangerouslySetInnerHTML={{__html: topText}}></span>
                </p>
                <h1 class="tracking-[.1px] mb-5 font-AvenirNextLTPro text-[44px] leading-[54px] mt-[20px]">
                  <span dangerouslySetInnerHTML={{__html: title}}></span>
                </h1>
              </div>
              <div>
                <a href={buttons.firstButton.href} class={`mx-auto w-auto uppercase cursor-pointer bg-[#f26f21]
                 hover:bg-[#f07d39] rounded py-[16px] px-[24px] font-Gravity text-[16px] font-bold text-white inline-block
                ${isShown ? "animate-button-expand" : ""}`
                }>
                  {buttons.firstButton.text}
                </a>
                <a href={buttons.secondButton.href} class={`mr-auto w-auto uppercase outline-offset-[-2px]
                cursor-pointer bg-[#eeeeee] hover:bg-[#f07d3] rounded py-[16px] px-[24px]
                font-Gravity text-[16px] font-bold text-[#f26f21] hover:text-[#eee] outline hover:bg-[#f26f21] outline-2 outline-[#f26f21] ml-[10px] inline-block
                ${isShown ? "animate-button-expand" : ""}`
                }
                style={{transition: "background-color .2s"}}>
                  {buttons.secondButton.text}
                </a>
              </div>
            </div>
          </div>
          <div class="w-[76%] h-[640px] max-w-none absolute top-auto bottom-0 left-auto right-0" 
          style={{
            backgroundImage: `url(${backgroundImage.desktop})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "0%",
          }}>
          </div>        
        </div>
      </div>

      <div class="xs:block md:block lg:hidden w-auto h-auto bg-[#f3f3f3] bg-none bg-repeat bg-auto relative"
        ref={elementRef as Ref<HTMLDivElement>}>
        <div class="box-border flex flex-col-reverse">
          <div class="z-10 h-[auto] pb-5 xs:px-[10px] md:px-5 max-w-[1120px] relative mx-auto top-[-20px]">
            <div class="h-auto flex-col flex justify-between items-start py-[0px] relative">
              <div class="z-10 w-full h-auto bg-white flex-col justify-center items-start md:pt-5 md:pl-5 md:pr-10 mb-5 xs:pt-[10px] xs:pl-[20px] xs:pr-[10px] pb-[10px] flex shadow-[1px_1px_3px_rgba(0,0,0,.1)]"
                    style={{clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 85% 100%, 0% 100%)"}}>
                <p class="text-left font-Gravity xs:text-[14px] md:text-[16px] mb-[10px] xs:leading-[22px] md:leading-[20px]">
                  <span dangerouslySetInnerHTML={{__html: topText}}></span>
                </p>
                <h1 class="tracking-[.1px] mb-5 font-AvenirNextLTPro md:text-[42px] md:leading-[52px] xs:text-[30px] leading-[36px] mt-[20px]">
                  <span dangerouslySetInnerHTML={{__html: title}}></span>
                </h1>
              </div>
              <div>
                <a href={buttons.firstButton.href} class={`mx-auto xs:w-full md:w-auto uppercase cursor-pointer bg-[#f26f21]
                 hover:bg-[#f07d39] rounded py-[10px] px-[24px] font-Gravity text-[16px] font-bold text-white text-center inline-block xs:mb-2
                ${isShown ? "animate-button-expand" : ""}`
                }>
                  {buttons.firstButton.text}
                </a>
                <a href={buttons.secondButton.href} class={`mr-auto md:w-auto xs:w-full uppercase outline-offset-[-2px]
                cursor-pointer bg-[#eeeeee] hover:bg-[#f07d3] rounded py-[10px] px-[24px]
                font-Gravity text-[16px] font-bold text-[#f26f21] hover:text-[#eee] outline text-center hover:bg-[#f26f21] outline-2 outline-[#f26f21] md:ml-[10px] inline-block
                ${isShown ? "animate-button-expand" : ""}`
                }
                style={{transition: "background-color .2s"}}>
                  {buttons.secondButton.text}
                </a>
              </div>
            </div>
          </div>
          <div class="md:block xs:hidden w-[100%] h-[300px] max-w-none top-auto bottom-0 left-auto right-0" 
            style={{
            backgroundImage: `url(${backgroundImage.mobile})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "0 0",
            }}>
          </div>    
          <div class="md:hidden xs:block w-[100%] h-[200px] max-w-none top-auto bottom-0 left-auto right-0" 
            style={{
            backgroundImage: `url(${backgroundImage.mobile})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50% 100%",
            }}>
          </div>        
        </div>
      </div>
    </>
  );
}

export default BannerInCompany;


