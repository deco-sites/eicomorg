import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface Props {
  title: HTML;
  image: LiveImage;
  rightText: HTML;
  bottomTextTopPart: HTML;
  bottomTextBottomPart: HTML;
}

function ScaleUpCareer(
  { title, image, rightText, bottomTextTopPart, bottomTextBottomPart }: Props,
) {
  const [elementRef, isShown] = useScrollShow();
  return (
    <div
      class="xs:px-3 xs:pt-10 lg:px-0 lg:pb-[180px] lg:pt-[140px] lg:mb-[140px] lg:h-[800px] md:h-[900px] xs:h-[1100px]"
      ref={elementRef as Ref<HTMLDivElement>}
    >
      <div class="xs:max-w-none md:max-w-[1120px] relative mx-auto">
        <div class="text-center xs:pb-5 md:pb-7 lg:pb-5">
          <h2 class="text-left uppercase md:mt-3 md:mb-5 lg:mx-5 text-3xl font-bold block font-AvenirNextLTPro">
            <span dangerouslySetInnerHTML={{ __html: title }}></span>
          </h2>
        </div>
        <div class="xs:mx-0 md:mx-[-10px] md:mt-0 lg:mt-[120px] relative">
          <div
            class={`xs:w-full left-auto right-auto lg:w-1/2 float-left px-3 relative
          ${isShown ? "lg:animate-slide-right" : ""}`}
          >
            <div
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "50%",
              }}
              class="xs:h-[180px] md:h-[300px] bg-[#820047]"
            >
            </div>
          </div>
          <div
            class={`xs:w-[94%] md:w-[97%] md:left-auto md:right-auto lg:w-1/2 float-left px-3 relative
          ${isShown ? "lg:animate-slide-left" : ""}`}
          >
            <div class="z-[-1] xs:px-10 xs:pt-10 xs:pb-5 lg:pl-[120px] lg:pr-[60px] md:left-auto lg:left-[-80px]
                        xs:w-full lg:w-[630px] md:h-auto lg:h-[400px] lg:pt-[70px] absolute md:top-0 lg:top-[-50px] bg-[#dbdbdf]">
              <h1 class="text-[32px] leading-[36px] mt-0 md:font-bold mb-[10px] font-AvenirNextLTPro">
                <span dangerouslySetInnerHTML={{ __html: rightText }}></span>
              </h1>
            </div>
          </div>
        </div>
        <div class="z-10 md:w-[850px] lg:w-[710px] bg-white border border-gray-300 rounded-md flex flex-col items-start pt-[20px] px-[40px] pb-[24px] xs:relative lg:absolute xs:top-[340px] md:top-[180px] lg:top-[480px] md:left-[15px] lg:left-[136px]">
          <p class="lg:text-[22px] lg:leading-[30px] md:text-[20px] md:leading-[28px] mb-[10px] text-left pb-[10px]">
            <span dangerouslySetInnerHTML={{ __html: bottomTextTopPart }}>
            </span>
          </p>
          <p class=" md:text-[16px] xs:text-[14px] leading-[1.6rem] text-left mb-3">
            <span dangerouslySetInnerHTML={{ __html: bottomTextBottomPart }}>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScaleUpCareer;
