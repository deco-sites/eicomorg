import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface BonusCard {
  image: {
    src: LiveImage;
    alt: string;
  };
  title: HTML;
  text: HTML;
}

function BonusCard({ bonusCard }: { bonusCard: BonusCard }) {
  const { image, title, text } = bonusCard;
  return (
    <div class="mt-5 px-10 pt-0 xs:w-full md:w-1/3 float-left relative block">
      <div
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
        class="h-[182px]"
      >
      </div>
      <div class="border-b-4 border-solid border-orange-500 mb-3"></div>
      <h3 class="mt-5 mb-3 font-semibold text-2xl">
        <span dangerouslySetInnerHTML={{ __html: title }}></span>
      </h3>
      <p class="left text-base mb-3">
        <span dangerouslySetInnerHTML={{ __html: text }}></span>
      </p>
    </div>
  );
}

export default BonusCard;
