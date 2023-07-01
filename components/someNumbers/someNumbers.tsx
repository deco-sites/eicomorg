import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface Card {
  number: HTML;
  subtitle: HTML;
  text: HTML;
  source: HTML;
}

export interface Props {
  backgroundImage: LiveImage;
  topText: HTML;
  leftCard: Card;
  rightCard: Card;
}

function SomeNumbers(
  { backgroundImage, topText, leftCard, rightCard }: Props,
) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 120%",
          backgroundPosition: "120% 0",
          backgroundAttachment: "scroll,",
        }}
        class="lg:px-24 md:px-5 md:pb-14 bg-gray-100 xs:h-[700px] md:h-[500px]"
      >
        <div class="max-w-[1120px] pr-0 relative mx-auto">
          <div class="max-w-[700px] mx-auto text-center pt-3 block">
            <p class="text-base">
              <span dangerouslySetInnerHTML={{ __html: topText }}></span>
            </p>
          </div>
          <div class="mx-[-10px] mb-5 px-10 xs:mt-16 md:mt-24 pt-0">
            <div class="xs:w-full md:w-1/2 mb-5 px-10 pt-0 float-left relative">
              <div class="border-b-4 border-solid border-orange-500 mb-3 block">
                <h1 class=" my-0 pr-5 font-bold text-6xl mb-[7px] inline-block">
                  <span dangerouslySetInnerHTML={{ __html: leftCard.number }}>
                  </span>
                </h1>
              </div>
              <p class="text-xl text-left mb-3 mt-0">
                <span dangerouslySetInnerHTML={{ __html: leftCard.subtitle }}>
                </span>
              </p>
              <p class="text-xl text-left mb-3 mt-0">
                <span dangerouslySetInnerHTML={{ __html: leftCard.text }}>
                </span>
              </p>
              <p class="text-sm mb-0">
                <span dangerouslySetInnerHTML={{ __html: leftCard.source }}>
                </span>
              </p>
            </div>
            <div class="xs:w-full md:w-1/2 px-10 pt-0 float-left relative">
              <div class="border-b-4 border-solid border-orange-500 mb-3 block">
                <h1 class=" my-0 pr-5 font-bold text-6xl mb-[7px] inline-block">
                  <span dangerouslySetInnerHTML={{ __html: rightCard.number }}>
                  </span>
                </h1>
              </div>
              <p class="text-xl text-left mb-3 mt-0">
                <span dangerouslySetInnerHTML={{ __html: rightCard.subtitle }}>
                </span>
              </p>
              <p class="text-xl text-left mb-3 mt-0">
                <span dangerouslySetInnerHTML={{ __html: rightCard.text }}>
                </span>
              </p>
              <p class="text-sm mb-0">
                <span dangerouslySetInnerHTML={{ __html: rightCard.source }}>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SomeNumbers;
