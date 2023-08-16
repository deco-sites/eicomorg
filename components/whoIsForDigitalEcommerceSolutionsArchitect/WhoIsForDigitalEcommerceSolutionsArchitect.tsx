import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface Props {
  backgroundImage: LiveImage;
  cardImage: LiveImage;
  title: HTML;
  paragraph1: string;
  emoji1: HTML;
  paragraph2: string;
  emoji2: HTML;
  paragraph3: string;
  emoji3: HTML;
}

function WhoIsForDigitalEcommerceSolutionsArchitect(
  {
    backgroundImage,
    cardImage,
    title,
    paragraph1,
    emoji1,
    paragraph2,
    emoji2,
    paragraph3,
    emoji3,
  }: Props,
) {
  const [elementRef, isShown] = useScrollShow();
  return (
    <>
      <div
        ref={elementRef as Ref<HTMLDivElement>}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 120%",
          backgroundPosition: "120% 0",
          backgroundAttachment: "scroll !important",
        }}
        class="xs:pt-10 xs:px-[10px] md:py-16 md:px-5 lg:px-0 lg:py-24 xs:h-[600px] bg-gray-100"
      >
        <div class="z-auto max-w-[1120px] pr-0 mx-auto relative">
          <div class="mx-[-10px]">
            <div class="md:w-1/2 xs:w-full float-left xs:px-0 md:px-3 relative">
              <div
                class="md:w-[600px] md:h-[400px] xs:w-auto xs:h-[200px] md:clip-ploygon"
                style={{
                  backgroundImage: `url(${cardImage})`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "50%",
                  backgroundAttachment: "scroll !important",
                }}
              >
              </div>
            </div>
            <div class="md:w-1/2 xs:w-full float-left md:px-3 relative">
              <div
                class={`bg-white border-0 border-solid border-gray-300
                        rounded-md xs:pt-5 xs:pl-5 xs:pr-3 md:p-10 absolute md:top-[60px] bottom-auto md:left-[-68px] shadow-[4px_4px_7px_rgba(38,38,40,0.1)]
                        ${isShown ? "md:animate-slide-left" : ""}`}
              >
                <h2 class="md:my-5 block xs:text-2xl md:text-3xl xs:mt-3text-left font-bold font-AvenirNextLTPro">
                  <span dangerouslySetInnerHTML={{ __html: title }}></span>
                </h2>
                <div class="mx-0 overflow-hidden">
                  <div class="xs:pr-3 xs:left-auto xs:right-auto md:px-4 w-full md:w-1/3 float-left relative">
                    <span
                      class="text-3xl"
                      dangerouslySetInnerHTML={{ __html: emoji1 }}
                    >
                    </span>
                    <p class="text-left mb-3">
                      {paragraph1}
                    </p>
                  </div>
                  <div class="md:px-4 xs:w-full md:w-1/3 float-left relative">
                    <span
                      class="text-3xl"
                      dangerouslySetInnerHTML={{ __html: emoji2 }}
                    >
                    </span>
                    <p class="text-left mb-3">
                      {paragraph2}
                    </p>
                  </div>
                  <div class="xs:w-full md:w-1/3 float-left relative">
                    <span
                      class="text-3xl"
                      dangerouslySetInnerHTML={{ __html: emoji3 }}
                    >
                    </span>
                    <p class="text-left mb-3">
                      {paragraph3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoIsForDigitalEcommerceSolutionsArchitect;
