import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  image: {
    src: LiveImage;
    alt: string;
  };
  npsGrade: HTML;
  npsBackGroundColor: string;
  npsText: HTML;
  bottomBoxTitle: HTML;
  bottomBoxText: HTML;
}

function GreatExperience(
  {
    image,
    npsGrade,
    npsBackGroundColor,
    npsText,
    bottomBoxTitle,
    bottomBoxText,
  }: Props,
) {
  return (
    <>
      <div class="lg:pt-[140px] lg:pb-[180px] md:mb-10 md:pb-0 md:pt-10 xs:mb-[140px] lg:mb-[400px]">
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
          <div class="mx-[-10px]">
            <div class="xs:w-[450px] md:w-full md:left-auto md:right-auto lg:w-1/2 float-left px-[10px] relative">
              <div class="xs:h-[200px] md:h-[300px]"
                style={{
                backgroundImage: `url(${image.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "50% 0",
              }}>
              </div>
            </div>
            <div class="xs:w-full md:w-full md:left-auto md:right-auto lg:w-1/2 float-left px-[10px] relative">
              <div
                class="z-[-10]  pl-[120px] pr-[60px] left-[-80px] lg:w-[630px] xs:w-full xs:h-[320px] md:h-[260px] lg:h-[400px] border-b-5 border-black pb-0 pt-[70px] absolute top-[-50px]"
                style={{ backgroundColor: npsBackGroundColor }}
              >
                <div class="border-b-4 border-solid border-orange-500 mb-[10px]">
                  <h1 class=" my-0 pr-[5px] leading-[80px] inline-block font-bold text-[60px] font-AvenirNextLTPro">
                    <span dangerouslySetInnerHTML={{ __html: npsGrade }}></span>
                  </h1>
                </div>
                <div class="text-left text-[16px] mb-[10px] leading-[1.6rem] font-Gravity">
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: npsText }}></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="z-10 md:w-[860px] lg:w-[710px] lg:mb-10 bg-white border border-[#dfdfdf] rounded-sm flex flex-col items-start pt-[40px] px-[40px] pb-[24px] xs:relative lg:absolute xs:top-[270px] md:top-[180px] lg:top-[230px] md:left-[15px] lg:left-[136px]">
            <h3 class="mb-[5px] mt-[10px] uppercase font-bold text-[22px] leading-[28px] font-AvenirNextLTPro">
              <span dangerouslySetInnerHTML={{ __html: bottomBoxTitle }}></span>
            </h3>
            <p class="mb-5 font-Gravity text-[16px] leading-[1.6rem] mt-0">
              <span dangerouslySetInnerHTML={{ __html: bottomBoxText }}></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GreatExperience;
