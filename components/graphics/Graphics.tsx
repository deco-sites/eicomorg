import type { HTML } from "deco-sites/std/components/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface topPartText {
  title: HTML;
  content: HTML;
}

export interface graphicImage {
  graphic: LiveImage;
  title: HTML;
}

export interface Props {
  topText: topPartText;
  graphic1: graphicImage;
  graphic2: graphicImage;
}

function Graphics(
  { topText, graphic1, graphic2 }: Props,
) {
  return (
    <div class="container-fluid text-center lg:py-[100px] md:py-[60px] xs:mb-[800px] md:mb-[860px] xs:px-5 lg:px-0 lg:mb-[450px] ">
      <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
        <div class="block my-[20px] font-[28px] font-AvenirNextLTPro leading-[34px] text-center">
          <span dangerouslySetInnerHTML={{ __html: topText.title }}></span>
        </div>
        <div class="text-center">
          <div class="text-[16px] mx-auto mb-[60px] font-Gravity text-center max-w-[710px]">
            <span
              style={{ color: "#696969" }}
              dangerouslySetInnerHTML={{ __html: topText.content }}
            >
            </span>
          </div>
          <div class="mx-[-10px]">
            <div class="lg:w-1/2 xs:w-full float-left min-h-1 relative px-[10px]">
              <div class="text-[18px] leading-[24px] lg:mb-[10px] font-AvenirNextLTPro">
                <h3 dangerouslySetInnerHTML={{ __html: graphic1.title }}></h3>
              </div>
              <div>
                <Image
                  src={graphic1.graphic}
                  alt={graphic1.title}
                  width={550}
                  height={330}
                  class="lg:h-[330px] mt-[40px] xs:mb-[60px] lg:mb-0 max-w-full mx-auto inline-block align-middle"
                />
              </div>
            </div>
            <div class="lg:w-1/2 xs:w-full float-left min-h-1 relative px-[10px]">
              <div class="text-[18px] leading-[24px] mb-[10px] font-AvenirNextLTPro">
                <h3 dangerouslySetInnerHTML={{ __html: graphic2.title }}></h3>
              </div>
              <div>
                <Image
                  src={graphic2.graphic}
                  alt={graphic2.title}
                  width={550}
                  height={370}
                  class="lg:h-auto max-w-full mx-auto inline-block align-middle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphics;
