import type { HTML } from "deco-sites/std/components/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface ImageFooter {
  content: HTML;
  icon: AvailableIcons;
}

export interface MobileButton {
  content: string;
  href: string;
}

export interface MainImage {
  src: LiveImage;
  alt: string;
}

export interface SectionItemImage {
  source: LiveImage;
  alt: string;
}

export interface SectionItem {
  image: SectionItemImage;
  content: HTML;
}

export interface JoinCard {
  content: HTML;
  buttonContent: string;
  buttonHref: string;
  show: boolean;
}

export interface Props {
  title: HTML;
  containerTitle: HTML;

  imageFooter: ImageFooter;
  mainImage: MainImage;
  firstSectionItem: SectionItem;
  secondSectionItem: SectionItem;
  thirdSectionItem: SectionItem;

  joinCard: JoinCard;
}

function DetailsSection(
  {
    title,
    containerTitle,

    imageFooter,
    mainImage,
    firstSectionItem,
    secondSectionItem,
    thirdSectionItem,

    joinCard,
  }: Props,
) {
  return (
    <div class="container-fluid bg-[#f3f3f3]">
      <div class="max-w-[1120px] block m-auto md:mt-16 xs:mt-0">
        <div class="max-w-[710px] md:flex xs:block relative md:pt-[60px]">
          <div class="md:top-[-8.5rem] xs:top-0 relative items-end">
            <div
              style={{
                backgroundImage:
                  `url(${mainImage.src})`,
              }}
              class="lg:w-[400px] md:h-[420px] md:w-[300px] xs:w-full xs:h-[200px] bg-cover bg-[40%_50%]"
            />
            <div class="py-2 flex items-center text-[#696969]">
              <Icon
                id={imageFooter.icon}
                width={32}
                height={32}
                strokeWidth={1}
              />
              <span
                class="align-middle text-[14px] ml-2"
                dangerouslySetInnerHTML={{ __html: imageFooter.content }}
              >
              </span>
            </div>
          </div>

          <div class="lg:min-w-[560px] md:min-w-[60%] xs:w-[96%] xs:m-auto xl:ml-[160px] md:ml-[20px] lg:ml-[160px] justify-end">
            <span
              class="text-[#f26f21] md:text-[30px] xs:text-[24px] xs:mt-2 xs:p-4 lg:pl-0 lg:pb-0 md:mt-0 font-AvenirNextLTPro mb-5 block uppercase text-left leading-[34px]"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <div class="bg-white lg:w-full w-full min-h-[600px] p-[30px]">
              <div
                class="richtext"
                dangerouslySetInnerHTML={{ __html: containerTitle }}
              >
              </div>

              <div class="opacity-[0.6] my-5">
                <div class="flex p-2 relative">
                  <img
                    class="h-[32px] w-[32px] mr-3"
                    src={firstSectionItem.image.source}
                    alt={firstSectionItem.image.alt}
                  />
                  <div
                    class="richtext relative bottom-1"
                    dangerouslySetInnerHTML={{
                      __html: firstSectionItem.content,
                    }}
                  />
                </div>
                <div class="w-[95%] my-2 m-auto h-[1px] bg-[#b3b3b3] block">
                </div>
                <div class="flex p-2 mt-3 relative">
                  <img
                    class="h-[32px] w-[32px] mr-3"
                    src={secondSectionItem.image.source}
                    alt={secondSectionItem.image.alt}
                  />
                  <div
                    class="richtext relative bottom-1"
                    dangerouslySetInnerHTML={{
                      __html: secondSectionItem.content,
                    }}
                  />
                </div>
                <div class="flex p-2 mt-3 relative">
                  <img
                    class="h-[32px] w-[32px] mr-3"
                    src={thirdSectionItem.image.source}
                    alt={thirdSectionItem.image.alt}
                  />
                  <div
                    class="richtext relative bottom-1"
                    dangerouslySetInnerHTML={{
                      __html: thirdSectionItem.content,
                    }}
                  />
                </div>
              </div>

              <div
                class={`bg-[#d1dbe5] px-[20px] pt-[20px] pb-[40px] rounded-lg ${
                  !joinCard.show ? "hidden" : ""
                }`}
              >
                <div
                  class="richtext"
                  dangerouslySetInnerHTML={{ __html: joinCard.content }}
                />
                <a
                  href={joinCard.buttonHref}
                  class="bg-[#f26f21] text-[#fefefe] uppercase px-[16px] py-[7px] rounded relative top-4"
                >
                  {joinCard.buttonContent}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsSection;
