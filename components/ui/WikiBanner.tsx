import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";


export interface Props {
    backgroundImage: LiveImage;
    logo: {
        src: LiveImage;
        alt: string;
    }
}

function WikiBanner(
  {
    backgroundImage, logo}: Props,
) {
  return (
    <>
      <div class="md:py-0 xs:py-5 bg-[#475769] md:mt-[70px] xs:mt-[90px] xs:px-[10px] lg:px-0"
      style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "0 0",
          backgroundAttachment: "scroll",
        }}>
        <div class="py-[60px] md:max-w-[1120px] xs:max-w-none mx-auto border-box">
          <div class="justify-start items-center pt-5 pb-[10px] flex ">
            <Image
            src={logo.src}
            alt={logo.alt}
            height={60}
            width={273}
            class="w-auto h-[60px] max-w-full align-middle inline-block"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default WikiBanner;
