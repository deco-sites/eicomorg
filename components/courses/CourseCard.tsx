import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import { Ref } from 'preact/hooks';
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface CourseCard {
  image: {
    src: LiveImage;
    alt: string;
  };
  title: HTML;
  subtitle: HTML;
  label?: string;
  labelColor?: string;
  href: string;
  footerText?: string;
  footerIcon?: AvailableIcons;
}

function CourseCard(
  { courseCard, arraySize, index }: {
    courseCard: CourseCard;
    arraySize: number;
    index: number;
  },
) {
  if (index > 3) {
    return null; // Maximum of 5 courses
  }

  const {
    image,
    label,
    labelColor,
    title,
    subtitle,
    footerText,
    href,
    footerIcon,
  } = courseCard;

  const [elementRef, isShown] = useScrollShow();

  return (
    <div
      ref={elementRef as Ref<HTMLDivElement>}
      className={`
        opacity-100 transform translate-x-0 translate-y-0 translate-z-0 
        scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d 
        md:px-3 xs:p-5 flex flex-row justify-between relative ${
        arraySize <= 3 ? "md:w-96" : "lg:w-96"
      }
        xs:w-full
        ${isShown ? "animate-slide-bottom" : ""}
    
    `}
    >
      <a
        href={href}
        rel="noopener"
        class="cursor-pointer bg-white border border-gray-300 rounded-md
      flex flex-col justify-between items-stretch transition-all duration-200 relative max-w-full"
      >
        <div class="bg-transparent border border-gray-300 rounded-md p-0 shadow-sm">
          <div>
            <Image
              class="text-gray-700 rounded-t-md transition-border duration-200"
              src={image.src}
              alt={image.alt}
              width={arraySize <= 3 ? 460 : 360}
              height={arraySize <= 3 ? 260 : 203}
            />
          </div>
          <div class="bg-[#f26f21] block h-1 w-0"></div>
        </div>
        <div id="text-part" class="flex flex-col justify-around py-3 px-5">
          <h2 class="text-lg font-bold text-[#262628] mt-5 mb-3">
            <span dangerouslySetInnerHTML={{ __html: title }}></span>
            <br />
          </h2>
          <p class="h-auto mt-0 mb-3 text-base leading-5 overflow-hidden">
            <span dangerouslySetInnerHTML={{ __html: subtitle }}></span>
            </p>
          <div class="justify-start items-center pt-0 pb-2 flex">
            {footerIcon && (
              <Icon
                id={footerIcon}
                width={24}
                height={24}
                strokeWidth={2}
                class="mr-3 max-w-full align-middle inline-block"
              />
            )}
            {footerText && <p class="text-sm text-left">{footerText}</p>}
          </div>
          {label && labelColor && (
            <div
              className={`z-auto rounded-2xl px-4 pb-[2px] absolute left-[6%] ${
                arraySize <= 3
                  ? " xs:top-[40%] md:top-[30%]  lg:top-[40%] xl:top-[45%]"
                  : "xs:top-[39%] lg:top-[30%] md:top-[25%] xl:top-[45%]"
              }`}
              style={{ backgroundColor: labelColor }}
            >
              <div class="text-white tracking-wider uppercase self-center font-gravity text-xs leading-4 inline-block">
                {label}
              </div>
            </div>
          )}
        </div>
      </a>
    </div>
  );
}

export default CourseCard;
