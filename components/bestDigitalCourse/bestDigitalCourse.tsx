import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { AvailableIcons } from "../ui/Icon.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";
import Benefit from "./benefit.tsx";

export interface BenefitProps {
    image: {
        src: LiveImage;
        alt: string
    }
    text: HTML;
}

export interface Props {
  title: HTML;
  content: HTML;
  benefits: BenefitProps[];
}

function BestDigitalCourse(
  {
    title,
    content,
    benefits = [],
  }: Props,
) {
  return (
    <div class="lg:py-[100px] md:py-[60px] xs:py-[40px] xs:px-[10px] md:px-[20px] lg:px-0 box-border">
      <div>
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
          <div class="max-w-[700px] mx-auto">
            <h2 class="text-center xs:text-[26px] leading-[32px] md:text-[28px] md:leading-[34px] block my-5 font-AvenirNextLTPro uppercase">
              <span dangerouslySetInnerHTML={{__html: title}}></span>
            </h2>
            <p class="text-center lg:text-[22px] md:text-[20px] xs:text-[16px] xs:leading-[24px]  md:leading-[28px] lg:leading-[30px] font-Gravity mb-[10px]">
              <span dangerouslySetInnerHTML={{__html: content}}></span>              
            </p>
          </div>
        </div>
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
          <div class="md:mt-10 mb-0 mx-[-10px]">
            {benefits.map((benefit, index) => (
              < Benefit
                benefit={benefit}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestDigitalCourse;
