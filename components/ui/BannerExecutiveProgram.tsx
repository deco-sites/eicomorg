import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface BannerBackground {
  desktop: LiveImage;
  mobile: LiveImage;
}

export interface Props {
  background: BannerBackground;

  title: HTML;
  subtitle: HTML;
}

function BannerExecutiveProgram(
  {
    background,
    title,
    subtitle,
  }: Props,
) {
  return (
    <div
      class={`container-fluid bg-[#252527] md:h-[560px] lg:h-[600px] xs:h-[510px] xs:pt-[100px] md:pt-0 relative`}
    >
      <div
        style={{ backgroundImage: `url(${background.desktop})` }}
        class="bg-contain bg-[0%] bg-no-repeat w-full h-full md:hidden xs:hidden lg:block"
      >
      </div>
      <div
        style={{
          backgroundImage: `url(${background.mobile})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "0 0",
        }}
        class="w-full md:h-[560px] items-end xs:h-[400px] lg:hidden md:block xs:block"
      >
      </div>

      <div class="absolute text-[#fefefe] lg:top-[200px] lg:right-[9%] md:top-[20rem] md:right-[10] lg:w-[30rem] xl:w-[50rem] xs:top-[19rem] xs:right-3 text-right">
        <span class="lg:text-[58px] md:text-[50px] md:leading-[68px] uppercase font-AvenirNextLTPro md:w-[35rem] xs:w-[20rem] xs:text-[32px] xs:leading-[42px] block">
          {title}
        </span>
        <div class="text-right lg:w-[450px] lg:left-[110px] md:left-[115px] md:relative">
          <span
            class="lg:text-[22px] md:leading-[30px] xs:leading-[24px] block md:w-[450px] font-Gravity text-right my-3 xs:w-[20rem] xs:text-[16px]"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          >
          </span>
        </div>
      </div>
    </div>
  );
}

export default BannerExecutiveProgram;
