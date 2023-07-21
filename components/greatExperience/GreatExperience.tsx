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
      <div class="lg:pt-[140px] lg:pb-[180px] md:mb-10 md:pb-0 md:pt-10 xs:mb-[20px] lg:mb-[400px]">
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
          <div class="ml-[-10px]">
            <div class="xs:w-full md:w-full md:left-auto md:right-auto lg:w-1/2 float-left px-[10px] relative">
              <div
                class="xs:h-[200px] md:h-[300px]"
                style={{
                  backgroundImage: `url(${image.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 0",
                }}
              >
              </div>
            </div>
            <div class="xs:w-full xs:left-auto xs:right-auto lg:w-1/2 float-left px-[10px] relative">
              <div
                class="z-10 xs:p-5 md:pt-10 md:px-10 md:pb-5 lg:z-[-10] lg: lg:pl-[120px] lg:pr-[60px] xs:relative lg:w-[630px] lg:h-[400px] lg:absolute lg:top-[-50px] lg:left-[-80px] md:left-auto xs:w-full xs:h-auto relative xs:top-0 lg:pt-[70px]"
                style={{ backgroundColor: npsBackGroundColor }}>
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
          <div class="z-10 xs:w-[385px] md:w-[860px] lg:w-[710px] lg:mb-10 bg-white border border-[#dfdfdf] rounded-sm flex flex-col items-start xs:py-5 xs:pl-5 xs:pr-[10px]  md:pt-[40px] md:px-[40px] md:pb-[24px] xs:relative lg:absolute xs:top-[0px] md:top-[0px] lg:top-[230px] md:left-[7px] lg:left-[136px]">
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
