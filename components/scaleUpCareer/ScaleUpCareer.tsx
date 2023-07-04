import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

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
  return (
    <div class="xs:px-3 xs:pt-10 lg:px-0 lg:pb-[180px] lg:pt-[140px] lg:mb-[140px]">
      <div class="xs:max-w-none md:max-w-[1120px] relative mx-auto">
        <div class="text-center xs:pb-5 md:pb-7 lg:pb-5">
          <h2 class="text-left uppercase md:mt-3 md:mb-5 lg:mx-5 text-3xl font-bold block ">
            <span dangerouslySetInnerHTML={{ __html: title }}></span>
          </h2>
        </div>
        <div class="xs:mx-0 md:mx-[-10px] md:mt-0 lg:mt-[120px] relative">
          <div class="xs:w-full left-auto right-auto lg:w-1/2 float-left px-3 relative">
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
          <div class="xs:w-[94%] md:w-[97%] md:left-auto md:right-auto lg:w-1/2 float-left px-3 relative">
            <div class="z-[-1] xs:px-10 xs:pt-10 xs:pb-5 lg:pl-[120px] lg:pr-[60px] md:left-auto lg:left-[-80px]
                        xs:w-full lg:w-[630px] md:h-auto lg:h-[400px] lg:pt-[70px] absolute md:top-0 lg:top-[-50px] bg-[#dbdbdf]">
              <h1 class="text-3xl  mt-0 md:font-bold mb-3">
                <span dangerouslySetInnerHTML={{ __html: rightText }}></span>
              </h1>
            </div>
          </div>
        </div>
        <div class="z-10 md:w-[860px] lg:w-[710px] bg-white border border-gray-300 rounded-md flex flex-col items-start pt-[40px] px-[40px] pb-[24px] xs:relative lg:absolute xs:top-[340px] md:top-[180px] lg:top-[460px] md:left-[15px] lg:left-[136px]">
          <p class="text-2xl mb-3 text-left pb-3">
            <span dangerouslySetInnerHTML={{ __html: bottomTextTopPart }}>
            </span>
          </p>
          <p class="text-base text-left mb-3">
            <span dangerouslySetInnerHTML={{ __html: bottomTextBottomPart }}>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScaleUpCareer;
