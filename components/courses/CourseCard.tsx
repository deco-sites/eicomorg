import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import { Ref } from "preact/hooks";
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
      flex flex-col md:max-w-[400px] justify-between items-stretch transition-all duration-200 relative lg:max-w-full"
      >
        <div class="bg-transparent border-none border-gray-300 rounded-md p-0 shadow-sm group">
          <div
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "0 0",
            }}
            class={`h-[180px] rounded-t-lg transition duration-200`}
          >
          </div>
          <div class="bg-[#f26f21] w-0 h-1 border-none transition-all duration-1000 lg:group-hover:w-full">
          </div>
        </div>
        <div
          id="text-part"
          class="flex flex-col justify-around py-[10px] px-5 h-[250px]"
        >
          <h2 class="text-[18px] leading-[24px] uppercase font-AvenirNextLTPro font-bold text-[#262628] mt-5 mb-[10px]">
            <span dangerouslySetInnerHTML={{ __html: title }}></span>
            <br />
          </h2>
          <p class="h-auto mt-0 mb-[10px] font-Gravity text-[15px] leading-[20px] text-left overflow-hidden">
            <span dangerouslySetInnerHTML={{ __html: subtitle }}></span>
          </p>
          <div class="justify-start items-center pt-0 pb-2 flex">
            {footerIcon && (
              <Icon
                id={footerIcon}
                width={24}
                height={24}
                strokeWidth={2}
                class="mr-[10px] max-w-full w-[24px] h-[24px] align-middle inline-block"
              />
            )}
            {footerText && (
              <p class="text-[13px] pr-1 font-Gravity leading-[16px] my-0 text-left">
                {footerText}
              </p>
            )}
          </div>
          {label && labelColor && (
            <div
              className={`z-auto rounded-2xl px-4 pb-[2px] absolute left-[6%] ${
                arraySize <= 3
                  ? " xs:top-[40%] md:top-[41%]  lg:top-[40%] xl:top-[45%]"
                  : "xs:top-[39%] lg:top-[40%] md:top-[40%] xl:top-[45%]"
              }`}
              style={{ backgroundColor: labelColor }}
            >
              <div class="text-white tracking-[.5px] uppercase self-center font-Gravity text-[9px] leading-[8px] inline-block">
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
