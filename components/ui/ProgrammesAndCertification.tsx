import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface Card {
  title: HTML;
  list: Array<{
    text: HTML;
    href: string;
  }>;
}

export interface Props {
  title: HTML;
  text: HTML;
  image: LiveImage;
  cards: Card[];
  arrowImage: LiveImage;
}

function ProgrammesAndCertification(
  { title, text, image, cards = [], arrowImage }: Props,
) {
  const [elementRef, isShown] = useScrollShow();

  return (
    <>
      <div
        class="bg-[#f3f3f3] box-border lg:py-[60px] md:pt-10 md:pb-0 md:pr-5 xs:w-full xs:pb-10 xs:px-0 xs:pt-0 relative"
        ref={elementRef as Ref<HTMLDivElement>}
      >
        <div class="z-auto max-w-[1120px] pr-0 mx-auto relative">
          <div class="justify-end md:flex md:mx-0 xs:mx-auto xs:block">
            <div
              class={`lg:h-[480px] md:h-[350px] lg:w-[400px] md:w-[300px] xs:w-full xs:h-[300px]
              md:absolute xs:relative lg:top-[-23%] md:top-[-15%] xs:top-[-10px] bottom-auto
              right-auto md:left-0 xs:left-auto xs:bg-[50%] md:bg-[50% 100%]
              ${isShown ? "animate-slide-right" : ""}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
              }}
            >
            </div>
            <div class="lg:w-1/2 md:w-[56%] xs:w-full ml-auto pt-0 md:px-0 xs:px-[10px] block">
              <h2 class="text-left uppercase lg:my-5 xs:mt-[10px] xs:mb-5 font-AvenirNextLTPro md:text-[30px] md:leading-[34px] xs:text-[24px] xs:leading-[32px] block">
                <span dangerouslySetInnerHTML={{ __html: title }}></span>
              </h2>
              <p
                class={`text-left font-Gravity md:text-[16px] xs:text-[14px] mb-[10px] md:leading-[1.6rem] xs:leading-[22px]
              ${isShown ? "animate-slide-left" : ""}`}
              >
                <span dangerouslySetInnerHTML={{ __html: text }}></span>
              </p>
              {cards.map((card) => {
                return (
                  <div class="md:bg-[#fff] xs:bg-[#dfdfdf] rounded md:mt-10 md:pt-5 md:pr-5 md:pb-[10px] md:pl-[30px] xs:mt-5 xs:pb-0 xs:pt-[10px] xs:pl-[20px] block shadow-[1px_1px_3px_rgba(0,0,0,0.1)]">
                    <h3 class="mt-[10px] font-AvenirNextLTPro text-[22px] leading-[28px] mb-0">
                      <span dangerouslySetInnerHTML={{ __html: card.title }}>
                      </span>
                    </h3>
                    <div class="flex-col py-5 pl-0 flex">
                      {card.list.map((listItem) => {
                        return (
                          <a
                            href={listItem.href}
                            class="hover:underline tracking-[1px] cursor-pointer pl-0 pr-[30px] py-[9px] font-AvenirNextLTPro inline-block"
                            style={{
                              backgroundImage: `url(${arrowImage})`,
                              backgroundSize: "16px 20px",
                              backgroundPosition: "100% 100%",
                              backgroundRepeat: "no-repeat, no-repeat",
                              backgroundColor: "rgba(0, 0, 0, 0)",
                            }}
                          >
                            <span
                              dangerouslySetInnerHTML={{
                                __html: listItem.text,
                              }}
                            >
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgrammesAndCertification;
