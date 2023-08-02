import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { AvailableIcons } from "../ui/Icon.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";
import BenefitTopRow from "./benefitTopRow.tsx";
import BenefitBottomRow from "./benefitBottomRow.tsx";

export interface BenefitProps {
  image: {
    src: LiveImage;
    alt: string;
  };
  title: HTML;
  text: HTML;
}

export interface Props {
  title: HTML;
  benefitsTopRow: BenefitProps[];
  benefitsBottomRow: BenefitProps[];
}

function EmpowerYourself(
  {
    title,
    benefitsTopRow = [],
    benefitsBottomRow = [],
  }: Props,
) {
  return (
    <div class="lg:pt-[100px] lg:pb-[300px] md:pt-[60px] md:pb-[340px] xs:pt-[40px] xs:pb-[1000px] xs:px-[15px] md:px-[20px] lg:px-0 box-border">
      <div class="max-w-[1120px] mx-auto">
        <div class="text-center pb-5">
          <h2 class="text-center xs:text-[26px] leading-[32px] md:text-[28px] md:leading-[34px] block my-5 font-AvenirNextLTPro uppercase">
            <span dangerouslySetInnerHTML={{ __html: title }}></span>
          </h2>
        </div>
        <div class="md:mt-[10px] mb-0 md:mx-[-10px]">
          {benefitsTopRow.map((benefit) => (
            <BenefitTopRow
              benefit={benefit}
            />
          ))}
        </div>
        <div class="mt-[280px]"></div>
        <div class="md:[mt-10px] mb-0 md:mx-[-10px]">
          {benefitsBottomRow.map((benefit) => (
            <BenefitBottomRow
              benefit={benefit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmpowerYourself;
