import Image from "deco-sites/std/components/Image.tsx";
import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface LabelProps {
  text: string;
  icon?: LiveImage;
}

export interface topTextProps {
  text: HTML;
}

export interface CardInfo {
  image: LiveImage;
  label1: LabelProps;
  label2: LabelProps;
  labelUrl: string;
  title: HTML;
  text: HTML;
  buttonText: string;
  buttonColor: string;
  buttonUrl: string;
}

export interface Props {
  title: HTML;
  topText: topTextProps;
  executiveProgramme: CardInfo;
}

function ExecutiveProgrammeCard(
  {
    title,
    topText,
    executiveProgramme,
  }: Props,
) {
  const [elementRef, isShown] = useScrollShow();

  return (
    <>
      <div
        ref={elementRef as Ref<HTMLDivElement>}
        class="md:pt-[100px] xs:pt-[70px] relative pb-0"
      >
        <div class="z-20 bg-white md:pt-5 xs:pt-[50px] sticky top-[68px] text-center text-3xl leading-[34px] my-5 uppercase block font-bold font-AvenirNextLTPro">
          <h4 dangerouslySetInnerHTML={{ __html: title }} class=""></h4>
        </div>
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
          <div class="max-w-[560px] my-10 mx-auto"></div>
        </div>
        <div class="bg-gray-100 pb-20">
          <div class="h-[100px] pt-10"></div>
          <div class="md:max-w-[840px] lg:max-w-[1120px] relative pr-0 z-auto mx-auto">
            <div class="max-w-[560px] my-10 mx-auto pb-0 md:text-2xl md:leading-[30px] text-center">
              <span dangerouslySetInnerHTML={{ __html: topText.text }}></span>
            </div>
            <div
              class={`border-1 bg-white border-solid border-gray-300 rounded-md mt-10 mb-16 xs:mx-3 lg:mx-0 p-0 flex xs:flex-col md:flex-row opacity-100 transform translate-x-0 translate-y-0 translate-z-0 scale-100 rotate-x-0 
            rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d  hover:shadow-[1px_1px_10px_rgba(0,0,0,0.2)] ${
                isShown ? "animate-slide-right" : ""
              }`}
            >
              <div
                style={{
                  backgroundImage: `url(${executiveProgramme.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 30%",
                }}
                class={`xs:w-full xs:h-[140px] md:h-auto md:w-[390px] lg:w-[55%] rounded-tl rounded-bl mt-0`}
              >
              </div>
              <div class="md:w-[45%] block">
                <div class="w-0 h-1 font-[#262628] bg-[#f26f21] block"></div>
                <div class="bg-white rounded-tr-md rounded-br-md  xs:pt-3 lg:py-[30px] pr-[20px] md:pb-2 xs:pb-6 pl-[30px]">
                  <a
                    href={executiveProgramme.labelUrl}
                    class="cursor-pointer flex max-w-full text-xs items-center"
                  >
                    <div class="flex">
                      <div class="bg-[#144576] text-white mr-[5px] h-[26px] py-[-4px] px-[10px] flex bottom-auto right-auto left-0 top-0 rounded-2xl">
                        {executiveProgramme.label1.icon && (
                          <Image
                            src={executiveProgramme.label1.icon}
                            width={16}
                            height={16}
                            class="mr-1 mt-[6px] h-[16px] w-[16px]"
                          />
                        )}
                        <div class="text-white font-semibold font-Gravity uppercase tracking-wider self-center text-[9px] leading-[8px] inline-block">
                          {executiveProgramme.label1.text}
                        </div>
                      </div>
                      <div class="bg-[#144576] px-4 py-2 text-white font-semibold font-Gravity uppercase tracking-wider self-center text-[9px] leading-[8px] inline-block rounded-2xl">
                        {executiveProgramme.label2.text}
                      </div>
                    </div>
                  </a>
                  <div class="pt-[10px] text-[22px] font-semibold leading-[28px] mt-5 mb-[10px] font-AvenirNextLTPro">
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: executiveProgramme.title,
                      }}
                    >
                    </h3>
                  </div>
                  <div class="h-[60px] max-h-[60px] font-Gravity text-[#262628] mt-0 mb-[10px] text-[14px] tracking-[0.5px] leading-[20px] overflow-hidden">
                    <p>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: executiveProgramme.text,
                        }}
                      >
                      </span>
                    </p>
                  </div>
                  <a
                    href={executiveProgramme.buttonUrl}
                    class="tracking-wider cursor-pointer border-2 border-solid border-orange-500 rounded-md py-[7px] px-[16px] mx-auto w-auto text-white uppercase font-Gravity font-semibold"
                    style={{ backgroundColor: executiveProgramme.buttonColor }}
                  >
                    {executiveProgramme.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExecutiveProgrammeCard;
