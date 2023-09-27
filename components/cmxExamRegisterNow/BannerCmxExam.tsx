import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";
import { JSX } from "preact";
export interface Props {
  backgroundImage: LiveImage;
  title: HTML;
  paragraph: HTML;
  buttonText: string;
  linkText: string;
}

const actionLinkBtn: JSX.CSSProperties = {
  color: "#000",
  backgroundImage: `url(/icons/Arrow-right-black.svg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "20px",
  backgroundPosition: "100%",
};

function BannerCmxExam(
  {
    backgroundImage,
    title,
    paragraph,
    buttonText,
    linkText,
  }: Props,
) {
  const [elementRef, isShown] = useScrollShow();
  return (
    <>
      <div class="">
        <div
          ref={elementRef as Ref<HTMLDivElement>}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "30%",
            maxHeight: "700px",
            minHeight: "500px",
            padding: "0 10px 40px",
            margin: "0",
          }}
          class="h-[70vh]"
        >
          <div class="z-10 max-w-[1120px] h-[70vh] m-auto relative animate-slide-right">
            <div class="absolute w-[50%] top-[20%] bottom-auto right-auto left-[0%] mt-[24px]">
              <span
                class="[&>*]:font-AvenirNextLTPro leading-[40px]"
                dangerouslySetInnerHTML={{ __html: title }}
              >
              </span>
              <div class="mt-[20px]">
                <span
                  class="[&>*]:font-Gravity text-[#505050] leading-[28px]"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                >
                </span>
              </div>
              <div class="flex flex-row">
                <button class="rounded mt-[20px] bg-[#f2a91d] px-[20px] py-[14px] w-fit text-[16px] font-bold text-white cursor-pointer text-[#f2a91d]">
                  {buttonText}
                </button>
                <a
                  class="animate-slide-right w-fit ml-[20px] mt-[2rem] lg:text-[14px] xs:text-[12px] block bold lg:mt-[2.3rem] xs:my-2 font-bold hover:underline pr-[30px] hover:pr-[34px] uppercase tracking-[1px] font-AvenirNextLTPro"
                  style={{
                    ...actionLinkBtn,
                    animationDuration: "1.5s",
                  }}
                  href="#"
                >
                  {linkText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerCmxExam;
