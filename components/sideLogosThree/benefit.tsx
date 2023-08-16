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
  title: HTML;
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
    title,
    text,
  } = benefit;

  const [elementRef, isShown] = useScrollShow();
  return (
    <div
      ref={elementRef as Ref<HTMLDivElement>}
      style={{ animationDelay: `${index * 120}ms` }}
      class={`md:pt-5 lg:pt-0 md:px-[30px] xs:w-full md:w-2/6 float-left relative xs:text-center md:text-left xs:py-[10px] xs:px-0
      ${isShown ? "animate-slide-bottom" : ""}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={48}
        height={48}
        class="max-w-full align-middle inline-block mb-[10px] w-[48px] mx-auto xs:mr-5 md:mr-0"
      />
      <h3 class="text-[18px] leading-[24px] mt-5 font-Gravity mb-[10px]">
        <span dangerouslySetInnerHTML={{ __html: title }}></span>
      </h3>
      <p class="md:text-[16px] xs:text-[14px] xs:leading-[22px] font-Gravity text-left mb-[10px] md:leading-[20px] lg:leading-[1.6rem]">
        <span dangerouslySetInnerHTML={{ __html: text }}></span>
      </p>
    </div>
  );
}

export default Benefit;
