import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Brand {
  image: {
    src: LiveImage;
    alt: string;
  };
}

export interface Props {
  text: HTML;
  brands: Brand[];
}

function TrustedBy({ text, brands = [] }: Props) {
  return (
    <>
      <div class="py-[60px] bg-white box-border">
        <div class="max-w-[1120px] my-0 mx-auto">
          <div class="text-center w-auto mb-[10px] font-Gravity text-[1rem] leading-[1.6rem]">
            <p class="">
              <span dangerouslySetInnerHTML={{ __html: text }}></span>
            </p>
          </div>
          <div class="md:justify-center xs:justify-start items-center flex xs:overflow-auto">
            {brands.map((brand) => {
              return (
                <Image
                  src={brand.image.src}
                  alt={brand.image.alt}
                  height={98}
                  width={180}
                  class="h-[98px] mix-blend-multiply max-w-full align-middle inline-block"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TrustedBy;
