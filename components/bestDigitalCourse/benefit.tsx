import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface BenefitProps {
  image: {
    src: LiveImage;
    alt: string;
  };
  text: HTML;
}

function Benefit(
  { benefit, index }: {
    benefit: BenefitProps;
    index: number;
  },
) {
  const {
    image,
    text,
  } = benefit;

  const [elementRef, isShown] = useScrollShow();

  return (
    <div
      ref={elementRef as Ref<HTMLDivElement>}
      style={{ animationDelay: `${index * 120}ms` }}
      class={`md:pt-5 lg:pt-0 md:px-[40px] xs:w-full md:w-1/2 lg:w-1/4 float-left relative xs:text-center md:text-left xs:py-[10px] xs:px-0
        ${isShown ? "animate-slide-bottom" : ""}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={48}
        height={48}
        class="max-w-full align-middle inline-block mb-[10px] mx-auto xs:mr-5 md:mr-0"
      />
      <p class="md:text-[16px] xs:text-[14px] xs:leading-[22px] font-Gravity text-left mb-[10px] md:leading-[20px] lg:leading-[1.6rem]">
        <span dangerouslySetInnerHTML={{ __html: text }}></span>
      </p>
    </div>
  );
}

export default Benefit;
