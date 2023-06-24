import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  image: {
    src: LiveImage;
    alt: string;
  };
  npsGrade: string;
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
      <div class="pt-[140px] pb-[180px] xs:mb-[140px] lg:mb-[400px]">
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
          <div class="mx-[-10px]">
            <div class="xs:w-[450px] md:w-full lg:w-1/2 float-left px-3 relative">
              <Image
                src={image.src}
                alt={image.alt}
                width={550}
                height={300}
                class="h-[300px] xs:w-[450px] md:w-full"
              />
            </div>
            <div class="xs:w-[485px] md:w-[975px] lg:w-1/2 float-left px-3 relative">
              <div
                class="-z-10  pl-[120px] pr-[60px] left-[-80px] lg:w-[630px] xs:w-full xs:h-[320px] md:h-[260px] lg:h-[400px] border-b-5 border-black pb-0 pt-[70px] absolute top-[-50px]"
                style={{ backgroundColor: npsBackGroundColor }}
              >
                <div class="border-b-4 border-solid border-orange-500 mb-3">
                  <h1 class=" my-0 pr-1 font-bold text-[60px]">
                    <span dangerouslySetInnerHTML={{ __html: npsGrade }}></span>
                  </h1>
                </div>
                <div class="text-left text-lg leading-6">
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: npsText }}></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="z-10 md:w-[860px] lg:w-[710px] bg-white border border-gray-300 rounded-md flex flex-col items-start pt-[40px] px-[40px] pb-[24px] xs:relative lg:absolute xs:top-[270px] md:top-[180px] lg:top-[230px] md:left-[15px] lg:left-[136px]">
            <h3 class="mb-2 mt-3 uppercase  font-bold text-2xl">
              <span dangerouslySetInnerHTML={{ __html: bottomBoxTitle }}></span>
            </h3>
            <p class="mb-5">
              <span dangerouslySetInnerHTML={{ __html: bottomBoxText }}></span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GreatExperience;
