import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import BonusCard from "./BonusCard.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface BonusCardProps {
  image: {
    src: LiveImage;
    alt: string;
  };
  title: HTML;
  text: HTML;
}

export interface Props {
  title: HTML;
  card1: BonusCardProps;
  card2: BonusCardProps;
  card3: BonusCardProps;
}

function Bonus(
  { title, card1, card2, card3 }: Props,
) {
  return (
    <div class="py-[100px] bg-gray-100 md:h-[610px] xs:h-[1200px] xs:w-[97%] md:w-full">
      <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
        <div class="max-w-[700px] mx-auto">
          <h2 class="mt-5 text-center text-3xl uppercase block font-AvenirNextLTPro">
            <span dangerouslySetInnerHTML={{ __html: title }}></span>
          </h2>
        </div>
        <div class="mx-[-10px]">
          <BonusCard bonusCard={card1} delay="120ms" />
          <BonusCard bonusCard={card2} delay="240ms"/>
          <BonusCard bonusCard={card3} delay="0ms"/>
        </div>
      </div>
    </div>
  );
}

export default Bonus;
