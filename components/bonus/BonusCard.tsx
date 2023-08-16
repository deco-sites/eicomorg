import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface BonusCard {
  image: {
    src: LiveImage;
    alt: string;
  };
  title: HTML;
  text: HTML;
}

function BonusCard({ bonusCard, delay }: { bonusCard: BonusCard, delay: string }) {
  const { image, title, text } = bonusCard;
  const [elementRef, isShown] = useScrollShow();
  return (
    <div class={`mt-5 px-10 pt-0 xs:w-full md:w-1/3 float-left relative block
    ${isShown && delay !== "0ms" ? "animate-slide-bottom" : ""}`}
    style={{ animationDelay: delay }}
    ref={elementRef as Ref<HTMLDivElement>}>
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
      <h3 class="mt-5 mb-3 font-bold text-[22px] leading-[28px]">
        <span dangerouslySetInnerHTML={{ __html: title }}></span>
      </h3>
      <p class="left text-base mb-3">
        <span dangerouslySetInnerHTML={{ __html: text }}></span>
      </p>
    </div>
  );
}

export default BonusCard;
