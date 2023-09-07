import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface Button {
  color: string;
  text: string;
  url: string;
}

export interface Props {
  leftText: HTML;
  button: Button;
  rightText: HTML;
}

function MakeAnImpact(
  {
    leftText,
    button,
    rightText,
  }: Props,
) {
  return (
    <>
      <div
        class={`lg:py-[100px] lg:mt-0 lg:px-0  md:mt-5 xs:px-[10px] xs:py-[60px] box-border bg-[#dbdbdf] lg:h-[340px] xs:h-[400px] md:h-[320px]`}
      >
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto block">
          <div class="lg:mx-[-10px] xs:mx-0 xs:flex-col-reverse xs:flex md:block">
            <div class="md:w-1/3 xs:w-full float-left md:px-[10px] relative">
              <div class="lg:w-[340px] xs:w-auto block">
                <div class="mb-5 text-left font-Gravity md:text-[16px] lg:leading-[1.6rem] md:leading-[20px] xs:text-[14px] xs:leading-[22px]">
                  <p>
                    <span dangerouslySetInnerHTML={{__html: leftText}}></span>
                  </p>
                </div>
                <a
                  href={button.url}
                  class={`mx-auto md:w-auto xs:w-full uppercase cursor-pointer bg-[#f26f21]
                 hover:bg-[#f07d39] rounded md:py-[16px] lg:px-[24px] xs:py-[12px] xs:px-[20px] font-Gravity text-[16px] font-bold text-white inline-block text-center
                `}
                >
                  {button.text}
                </a>
              </div>
            </div>
            <div class="justify-around md:pl-[60px] md:pt-0 flex md:w-2/3 xs:w-full float-left pr-[10px] relative md:border-l-[1px] md:border-l-solid md:border-l-[#000]">
              <h1 class="font-AvenirNextLTPro md:text-[38px] md:leading-[44px] xs:text-[28px] xs:leading-[36px] mb-[10px]">
                <span dangerouslySetInnerHTML={{__html: rightText}}></span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MakeAnImpact;
