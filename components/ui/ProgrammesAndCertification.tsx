import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface Card {
  title: HTML;
  list: Array<{
    text: HTML,
    href: string;
  }>
}

export interface Props {
  title: HTML;
  text: HTML;
  image: LiveImage;
  cards: Card[]
  arrowImage: LiveImage;
}


function ProgrammesAndCertification(
  { title, text, image, cards = [], arrowImage }: Props,
) {
  const [elementRef, isShown] = useScrollShow();

  return (
    <>
      <div
        class="bg-[#f3f3f3] box-border py-[60px] relative"
        ref={elementRef as Ref<HTMLDivElement>}
      >
        <div class="z-auto max-w-[1120px] pr-0 mx-auto relative">
          <div class="justify-end flex">
            <div class="h-[480px] w-[400px] absolute top-[-23%] bottom-auto right-auto left-0"
              style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 100%",
            }}>
            </div>
            <div class="w-1/2 ml-auto pt-0 block">
              <h2 class="text-left uppercase md:my-5 xs:mt-[10px] xs:mb-5 font-AvenirNextLTPro md:text-[30px] md:leading-[34px] xs:text-[24px] xs:leading-[32px] block">
                <span dangerouslySetInnerHTML={{ __html: title }}></span>
              </h2>
              <p class="text-left font-Gravity text-[16px] mb-[10px] leading-[1.6rem]">
                <span dangerouslySetInnerHTML={{ __html: text }}></span>
              </p>
              {cards.map((card) => {
                return (
                  <div class="bg-[#fff] rounded mt-10 pt-5 pr-5 pb-[10px] pl-[30px] block shadow-[1px_1px_3px_rgba(0,0,0,0.1)]">
                    <h3 class="mt-[10px] font-AvenirNextLTPro text-[22px] leading-[28px] mb-0">
                      <span dangerouslySetInnerHTML={{ __html: card.title }}></span>
                    </h3>
                    <div class="flex-col py-5 pl-0 flex">
                      {card.list.map((listItem) => {
                        return (
                          <a href={listItem.href} class="hover:underline tracking-[1px] cursor-pointer pl-0 pr-[30px] py-[9px] font-AvenirNextLTPro inline-block" 
                          style={{
                            backgroundImage: `url(${arrowImage})`,
                            backgroundSize: "16px 20px",
                            backgroundPosition: "100% 100%",
                            backgroundRepeat: "no-repeat, no-repeat",
                            backgroundColor: "rgba(0, 0, 0, 0)"
                          }}>
                            <span dangerouslySetInnerHTML={{ __html: listItem.text }}></span>
                          </a>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgrammesAndCertification;
