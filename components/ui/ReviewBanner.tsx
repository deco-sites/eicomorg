import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  backgroundImage: LiveImage;
  logo: {
    src: LiveImage;
    alt: string;
  };
}

function ReviewBanner(
  {
    backgroundImage,
    logo,
  }: Props,
) {
  return (
    <>
      <div
        class="mt-[70px] box-border"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50%",
        }}
      >
        <div class="md:max-w-[1120px] xs:max-w-none mx-auto border-box z-auto relative">
          <div class="md:pt-10 md:pb-[20px] xs:pt-[30px] xs:pb-[10px] xs:px-[10px] lg:px-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              height={40}
              width={290}
              class="h-[40px] mt-[10px] md:mb-5 xs:mb-[10px] max-w-full align-middle inline-block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewBanner;
