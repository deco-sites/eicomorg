import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface Countries {
  country: HTML;
}

export interface Props {
  title: HTML;
  contentTop: HTML;
  contentBottom: HTML;
  countries: Countries[];
  backgroundImage: LiveImage;
}

function AcelerateYourGrowth(
  {
    title,
    contentTop,
    contentBottom,
    countries = [],
    backgroundImage,
  }: Props,
) {
  const [elementRef, isShown] = useScrollShow();
  return (
    <>
      <div
        class="bg-[#f3f3f3] py-[100px] box-border"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 120%",
          backgroundPosition: "120% 0",
          backgroundAttachment: "scroll",
          marginLeft: "2px",
        }}
        ref={elementRef as Ref<HTMLDivElement>}
      >
        <div class="max-w-[1120px] mx-auto ">
          <div class="mb-0 py-5">
            <h1
              class={`md:text-[28px] md:leading-[34px] xs:text-[26px] xs:leading-[32px] my-5 block text-center font-AvenirNextLTPro
						${isShown ? "animate-button-expand" : ""}`}
            >
              <span dangerouslySetInnerHTML={{ __html: title }}></span>
            </h1>
            <div class="text-center mx-auto max-w-[710px]">
              <p class="text-center font-Gravity mb-[10px] md:text-[16px] md:leading-[1.6rem] xs:text-[14px] xs:leading-[22px] ">
                <span dangerouslySetInnerHTML={{ __html: contentTop }}></span>
              </p>
            </div>
          </div>
          <div class="mb-0 py-5">
            <p class="text-center font-Gravity mb-[10px] md:text-[16px] md:leading-[1.6rem] xs:text-[14px] xs:leading-[22px] ">
              <span dangerouslySetInnerHTML={{ __html: contentBottom }}></span>
            </p>
            <div class="text-center mt-5">
              {countries.map((country) => {
                return (
                  <div class="pb-[10px] pr-[10px] inline-block">
                    <div
                      class="text-[#475769] cursor-pointer bg-[#fff] border-[1px] border-solid rounded-[20px] py-[4px] md:pr-[18px] xs:pr-[10px] pl-[15px] border-[#d9d9e2]"
                      style={{ transition: "background-color .2s" }}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: country.country }}
                      >
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AcelerateYourGrowth;
