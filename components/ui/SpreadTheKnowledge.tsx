import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  title: HTML;
  youtubeURL: string;
  youtubeBackGroundImage: LiveImage;
  topText: HTML;
  bottomText: HTML;
}

function SpreadTheKnowledge(
  {
    title,
    youtubeURL,
    youtubeBackGroundImage,
    topText,
    bottomText,
  }: Props,
) {
  return (
    <>
      <div class="lg:pt-[80px] xs:pt-10 pb-[60px] xs:px-[10px] md:px-[10px] box-border lg:h-[600px] md:h-[550px] xs:h-[700px]">
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
          <div class="text-center uppercase block my-5 font-AvenirNextLTPro md:leading-[34px] md:text-[28px] xs:leading-[32px] xs:text-[26px] md:mb-[60px] xs:mb-[40px]">
            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
          </div>
          <div class="md:mx-[-10px] xs:mx-0">
            <div class="md:w-1/2 xs:w-full float-left px-[10px] relative">
              <div class="max-w-[700px] mx-auto py-0">
                <div
                  style={{ 
                    paddingTop: "56.17021276595745%",
                  }}
                  class="w-full relative p-0 lg:bottom-[300px] md:bottom-[225px] xs:bottom-[200px]"
                >
                  <iframe
                    class="w-full h-full border-0 absolute left-0 right-0"
                    src={`${youtubeURL}`}
                    scrolling="no"
                    allowFullScreen
                    allow="autoplay; encrypted-media"
                    title="Commerce Chats: Participate, collaborate, and expand your knowledge!"
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="md:pl-10 xs:pl-[10px] md:w-1/2 xs:w-full float-left pr-[10px]">
            <div class="max-w-[700px] pb-0  mx-auto pt-[10px] block">
              <div class="font-Gravity md:text-[22px] md:leading-[30px] xs:text-[20px] xs:leading-[28px] text-left mb-[10px]">
                <p>
                  <span dangerouslySetInnerHTML={{__html: topText}}></span>
                </p>
              </div>
              <div class="font-Gravity text-[16px] leading-[1.6rem] text-left mb-[10px]">
                <p>
                  <span dangerouslySetInnerHTML={{__html: bottomText}}></span>
                </p>
              </div>
            </div>
            <div class="">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpreadTheKnowledge;
