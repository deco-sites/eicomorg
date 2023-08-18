import Image from "deco-sites/std/components/Image.tsx";
import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface Graphic {
  desktop: {
    src: LiveImage,
    alt: string,
  }
  mobile: {
    src: LiveImage,
    alt: string,
  }  
}

export interface Props {
  topText: HTML;
  bottomText: HTML;
  graphic: Graphic;
}

function GraphicInCompany(
  { topText, bottomText, graphic }: Props,
) {
  const [elementRef, isShown] = useScrollShow();

  return (
    <>
      <div ref={elementRef as Ref<HTMLDivElement>}
      class="lg:py-[100px] md:py-[60px] xs:py-[40px] lg:px-0 md:px-5 xs:px-[10px] box-border">
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
          <div class="md:mx-[-10px] xs:mx-0 items-center flex md:flex-row xs:flex-col">
            <div class="md:w-1/2 xs:w-full float-left md:px-[10px] relative">
              <p class="text-left font-Gravity pb-[10px] lg:text-[22px] lg:leading-[30px] md:text-[20px] md:leading-[28px] xs:text-[16px] xs:leading-[24px]  mb-[10px]">
                <span dangerouslySetInnerHTML={{__html: topText}}></span>
              </p>
              <p class="text-left font-Gravity md:text-[16px] xs:text-[14px] lg:leading-[1.6rem] md:leading-[20px] xs:leading-[22px] mb-[10px]">
                <span dangerouslySetInnerHTML={{__html: bottomText}}></span>
              </p>
            </div>
            <div class="md:w-1/2 xs:w-full float-left md:px-[10px] relative">
            <Image
              src={graphic.desktop.src}
              alt={graphic.desktop.alt}
              width={610}
              height={380}
              class={`bg-[#f3f3f3] rounded-[4px] md:mx-[10px] xs:mx-auto mb-[10px] pb-0 max-w-full align-middle inline-block border-2 border-solid border-[#eee] md:w-[610px] md:h-[380px] xs:w-auto xs:h-auto
              ${isShown ? "animate-slide-left" : ""}`}
            />   
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraphicInCompany;
