import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title: HTML;
  subTitle: HTML;
  text: HTML;
  graphic: {
    src: LiveImage;
    alt: string;
  };
  url: string;
}

function ElevateYourCareer(
  {
    title,
    subTitle,
    text,
    graphic,
    url,
  }: Props,
) {
  return (
    <>
      <div class="py-24 bg-gray-100">
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
          <div class="text-center pb-5">
            <h2 class="text-bold text-center text-3xl md:mt-5 xs:mb-5 md:uppercase block font-AvenirNextLTPro">
              <span dangerouslySetInnerHTML={{ __html: title }}></span>
            </h2>
          </div>
          <div class="mx-[-10px] align-center flex xs:flex-col md:flex-row px-2">
            <div class="xs:w-full md:w-[40%] md:mt-16 float-left px-3 mb-3 relative md:">
              <p>
                <span
                  class="text-left pb-[10px] text-[22px] leading-[30px] mb-[10px] font-Gravity"
                  dangerouslySetInnerHTML={{ __html: subTitle }}
                >
                </span>
              </p>
              <p class="text-left mb-5 text-base">
                <span dangerouslySetInnerHTML={{ __html: text }}></span>
              </p>
            </div>
            <div class="text-center xs:w-full md:w-[60%] float-left px-3 relative ">
              <a
                href={url}
                class="max-w-full inline-block cursor-pointer"
                target="blank"
              >
                <Image
                  src={graphic.src}
                  alt={graphic.alt}
                  width={500}
                  height={375}
                  class="bg-white rounded-md mb-3 md:ml-2 pb-0 shadow-sm max-w-full align-middle inline-block"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ElevateYourCareer;
