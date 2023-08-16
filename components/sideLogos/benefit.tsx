import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface BenefitProps {
  image: {
    src: LiveImage;
    alt: string;
  };
  title: HTML;
  text: HTML;
}

function Benefit(
  { benefit }: {
    benefit: BenefitProps;
  },
) {
  const {
    image,
    title,
    text,
  } = benefit;

  return (
    <div
      class={`md:pt-5 lg:pt-0 md:px-[40px] xs:w-full md:w-1/4 float-left relative xs:text-center md:text-left xs:py-[10px] xs:px-0`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={40}
        height={40}
        class="max-w-full align-middle inline-block mb-[00px] mx-auto xs:mr-5 md:mr-0"
      />
      <h3 class="text-[18px] leading-[24px] mt-5 font-AvenirNextLTPro mb-[10px]">
        <span dangerouslySetInnerHTML={{ __html: title }}></span>
      </h3>
      <p class="md:text-[16px] xs:text-[14px] xs:leading-[22px] font-Gravity text-left mb-[10px] md:leading-[20px] lg:leading-[1.6rem]">
        <span dangerouslySetInnerHTML={{ __html: text }}></span>
      </p>
    </div>
  );
}

export default Benefit;
