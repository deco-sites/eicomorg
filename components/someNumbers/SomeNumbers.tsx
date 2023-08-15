import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface Card {
  number: HTML;
  subtitle: HTML;
  text: HTML;
  source: HTML;
}

export interface Props {
  backgroundImage: LiveImage;
  topText: HTML;
  leftCard: Card;
  rightCard: Card;
}

function SomeNumbers(
  { backgroundImage, topText, leftCard, rightCard }: Props,
) {
  const [elementRef, isShown] = useScrollShow();
  return (
    <>
      <div
        ref={elementRef as Ref<HTMLDivElement>}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 120%",
          backgroundPosition: "120% 0",
          backgroundAttachment: "scroll,",
        }}
        class="lg:px-24 md:px-5 md:pb-14 xs:w-full  md:pl-0 xs:max-w-[385px] md:max-w-full bg-gray-100 xs:h-[700px] md:h-[500px]"
      >
        <div class="max-w-[1120px] pr-0 relative mx-auto">
          <div class="max-w-[700px] mx-auto text-center pt-3 block">
            <p class="text-base">
              <span dangerouslySetInnerHTML={{ __html: topText }}></span>
            </p>
          </div>
          <div class="mx-[-10px] mb-5 px-10 xs:mt-16 md:mt-24 pt-0">
            <div
              class={`xs:w-full md:w-1/2 mb-5 px-10 pt-0 float-left relative
            ${isShown ? "animate-slide-bottom" : ""}`}
            >
              <div class="border-b-4 border-solid border-orange-500 mb-3 block">
                <h1 class=" my-0 pr-5 font-bold text-6xl mb-[7px] inline-block font-AvenirNextLTPro">
                  <span dangerouslySetInnerHTML={{ __html: leftCard.number }}>
                  </span>
                </h1>
              </div>
              <p class="text-[22px] leading-[30px] text-left mb-[10px] mt-0">
                <span dangerouslySetInnerHTML={{ __html: leftCard.subtitle }}>
                </span>
              </p>
              <p class="text-[16px] font-Gravity leading-[1.6rem] text-left mb-[10px] mt-0">
                <span dangerouslySetInnerHTML={{ __html: leftCard.text }}>
                </span>
              </p>
              <p class="text-[14px] leading-[22px] font-Gravity mb-0">
                <span dangerouslySetInnerHTML={{ __html: leftCard.source }}>
                </span>
              </p>
            </div>
            <div
              class={`xs:w-full md:w-1/2 mb-5 px-10 pt-0 float-left relative
            ${isShown ? "animate-slide-bottom" : ""}`}
              style={{ animationDelay: "120ms" }}
            >
              <div class="border-b-4 border-solid border-orange-500 mb-3 block">
                <h1 class=" my-0 pr-5 font-bold text-6xl mb-[7px] inline-block font-AvenirNextLTPro">
                  <span dangerouslySetInnerHTML={{ __html: rightCard.number }}>
                  </span>
                </h1>
              </div>
              <p class="text-[22px] leading-[30px] text-left mb-[10px] mt-0">
                <span dangerouslySetInnerHTML={{ __html: rightCard.subtitle }}>
                </span>
              </p>
              <p class="text-[16px] font-Gravity leading-[1.6rem] text-left mb-[10px] mt-0">
                <span dangerouslySetInnerHTML={{ __html: rightCard.text }}>
                </span>
              </p>
              <p class="text-[14px] leading-[22px] font-Gravity mb-0">
                <span dangerouslySetInnerHTML={{ __html: rightCard.source }}>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SomeNumbers;
