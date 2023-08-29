import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface Props {
  title: HTML;
  text: HTML;
}

function CreateImpact(
  { title, text }: Props,
) {
  const [elementRef, isShown] = useScrollShow();

  return (
    <>
      <div
        class="bg-[#fff] lg:py-[80px] md:pt-[60px] xs:pt-[40px] xs:px-[10px] lg:px-0 md:px-5 md:pb-[10 xs:pb-5 box-border max-w-full"
        ref={elementRef as Ref<HTMLDivElement>}
      >
        <div class="lg:justify-end md:justify-center flex z-auto max-w-[1120px] pr relative mx-auto"></div>
        <div class="lg:justify-end md:justify-center flex z-auto max-w-[1120px] pr relative mx-auto">
          <div class="pt-10 max-w-[710px]">
            <h2 class="text-left uppercase md:my-5 xs:mt-[10px] xs:mb-5 font-AvenirNextLTPro md:text-[30px] md:leading-[34px] xs:text-[24px] xs:leading-[32px] block">
              <span dangerouslySetInnerHTML={{ __html: title }}></span>
            </h2>
            <p class="text-left font-Gravity text-[16px] mb-[10px] leading-[1.6rem]">
              <span dangerouslySetInnerHTML={{ __html: text }}></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateImpact;
