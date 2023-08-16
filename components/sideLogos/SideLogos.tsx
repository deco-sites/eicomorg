import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { AvailableIcons } from "../ui/Icon.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";
import Benefit from "./benefit.tsx";

export interface BenefitProps {
  image: {
    src: LiveImage;
    alt: string;
  };
  title: HTML;
  text: HTML;
}

export interface Props {
  benefits: BenefitProps[];
}

function SideLogos(
  {
    benefits = [],
  }: Props,
) {
  return (
    <div class="pb-[100px] lg:pt-10 xs:h-[700px] md:h-[400px] lg:h-[400px]">
      <div class="max-w-[1120px] pr-0 mx-auto">
        <div class="md:mt-10 mb-0 md:mx-[-10px]">
          {benefits.map((benefit, index) => (
            <Benefit
              benefit={benefit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideLogos;
