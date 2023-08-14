import type { Image } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

import CmxLevelCard from "./CmxLevelCard.tsx";

export interface CardTopic {
  title: HTML;
  subtitle?: HTML;
  icon: {
    alt: string;
    image: Image;
  };
}

export interface Card {
  header: {
    backgroundImage: Image;
    title: HTML;
  };
  href: string;
  description: HTML;
  topics: CardTopic[];
}

export interface Button {
  title: string;
  href: string;
}

export interface Props {
  title: HTML;
  cards: Card[];
  button: Button;
}

function CmxLevels(
  {
    title,
    cards,
    button,
  }: Props,
) {
  const [elementRef, isShown] = useScrollShow();

  return (
    <div
      class="max-w-[1120px] mx-auto py-[80px] mt-20"
      ref={elementRef as Ref<HTMLDivElement>}
    >
      <div class="text-center mx-auto [&>span]:leading-10 [&>span]:font-AvenirNextLTPro max-w-[710px] mb-[60px]">
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </div>

      <div class="lg:flex lg:gap-10 md:block">
        {cards.map((card, index) => <CmxLevelCard card={card} index={index} />)}
      </div>

      <div class="mt-[50px] text-center">
        <a
          class={`bg-[#f2a91d] py-[14px] px-[20px] font-bold font-Gravity uppercase rounded text-white ${
            isShown ? "animate-button-expand" : ""
          }`}
          href={button.href}
        >
          {button.title}
        </a>
      </div>
    </div>
  );
}

export default CmxLevels;
