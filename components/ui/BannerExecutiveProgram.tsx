import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface BannerBackground {
  desktop: LiveImage;
  mobile: LiveImage;
}

export interface FooterItem {
  icon: AvailableIcons;
  content: string;
}

export interface FooterButton {
  text: string;
  href: string;
}

export interface Props {
  background: BannerBackground;

  title: string;
  subtitle: HTML;

  firstItem: FooterItem;
  secondItem: FooterItem;

  downloadButton: FooterButton;
  applyButton: FooterButton;
}

function BannerExecutiveProgram(
  {
    background,
    title,
    subtitle,
    firstItem,
    secondItem,
    downloadButton,
    applyButton,
  }: Props,
) {
  return (
    <div
      class={`container-fluid bg-[#252527] md:h-[560px] xs:h-[400px] relative`}
    >
      <div
        style={{ backgroundImage: `url(${background.desktop})` }}
        class="bg-contain bg-[0%] bg-no-repeat w-full h-full md:hidden xs:hidden lg:block"
      >
      </div>
      <div
        style={{ backgroundImage: `url(${background.mobile})` }}
        class="bg-contain bg-no-repeat w-full md:h-[560px] xs:h-[400px] lg:hidden md:block xs:block"
      >
      </div>

      <div class="absolute text-[#fefefe] lg:top-28 lg:right-[15%] md:top-[20rem] md:right-[1rem] lg:w-[30rem] xl:w-[50rem] xs:top-[12rem] xs:right-3 text-right">
        <span class="lg:text-[58px] md:text-[50px] uppercase font-AvenirNextLTPro md:w-[35rem] xs:w-[20rem] xs:text-[32px] block">
          {title}
        </span>
        <span
          class="lg:text-[22px] leading-[30px] block md:w-[35rem] text-right my-3 xs:w-[20rem] xs:text-[16px]"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        >
        </span>
      </div>

      {
        /* <div class="w-full xs:hidden md:flex p-2 bg-[#252527]">
        <div class="flex relative lg:top-3 md:top-0 text-[#fefefe] font-bold lg:ml-[10%] xl:ml-[25%] lg:text-[16px] md:text-[14px]">
          <div class="flex lg:w-auto md:w-[10rem]">
            <Icon
              id={firstItem.icon}
              width={26}
              height={26}
              strokeWidth={1}
              class="mr-3 bottom-[2px] relative"
            />
            <span>{firstItem.content}</span>
          </div>

          <div class="flex lg:w-auto md:w-[13rem] lg:ml-28 md:ml-0">
            <Icon
              id={secondItem.icon}
              width={26}
              height={26}
              strokeWidth={1}
              class="mr-3 bottom-[2px] relative"
            />
            <span>{secondItem.content}</span>
          </div>
        </div>

        <div class="flex lg:ml-28 md:ml-10 md:text-[14px] bottom-0 relative font-bold">
          <a
            href={downloadButton.href}
            class="border-2 border-[#f26f21] text-[#f26f21] hover:bg-[#f26f21] hover:text-[#fefefe] py-1 md:py-2 px-4 rounded-sm uppercase"
          >
            {downloadButton.text}
          </a>
          <a
            href={applyButton.href}
            class="border-2 border-[#f26f21] text-[# bg-[#f26f21] text-[#fefefe] py-1 px-4 md:py-2 rounded-sm uppercase ml-3"
          >
            {applyButton.text}
          </a>
        </div>
      </div> */
      }
    </div>
  );
}

export default BannerExecutiveProgram;
