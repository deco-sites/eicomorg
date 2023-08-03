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
    positionStyle: string;
  };
  title: HTML;
  subtitle: HTML;
  label?: string;
  labelColor?: string;
  href: string;
  footerText?: string;
  footerIcon?: AvailableIcons;
}

function CourseCardForIndividuals(
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
      style={{ animationDelay: `${index * 120}ms` }}
      className={` 
        md:px-[15px] md:py-[10px] xs:py-[10px] xs:px-7 flex flex-row justify-between relative ${
        arraySize <= 3 ? "md:w-1/3" : "md:w-1/4"
      }
        xs:w-full
        ${isShown && index !== arraySize - 1 ? "animate-slide-bottom" : ""}
    
    `}
    >
      <a
        href={href}
        rel="noopener"
        class="cursor-pointer bg-white border border-[#dfdfdf] rounded-[4px]
        hover:shadow-[1px_1px_10px_rgba(0,0,0,0.2)]
      flex flex-col md:max-w-[400px] justify-between items-stretch transition-all duration-200 relative lg:max-w-full group"
      >
        <div class="bg-white border-none border-gray-300 rounded-[4px] p-0 shadow-sm">
          <div
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: image.positionStyle,
            }}
            class={`h-[180px] rounded-t-[4px] transition duration-200`}
          >
          </div>
          <div class="bg-[#f26f21] w-0 h-1 border-none transition-all duration-1000 lg:group-hover:w-full">
          </div>
        </div>
        <div
          id="text-part"
          class="flex flex-col py-[10px] px-5 xs:h-auto md:h-[320px] lg:h-[250px]"
        >
          <h2 class="text-[22px] leading-[28px] uppercase font-AvenirNextLTPro font-bold my-[10px]">
            <span dangerouslySetInnerHTML={{ __html: title }}></span>
          </h2>
          <p class="mt-0 mb-[10px] font-Gravity text-[16px] leading-[1.6rem] text-left overflow-hidden">
            <span dangerouslySetInnerHTML={{ __html: subtitle }}></span>
          </p>
        </div>
      </a>
    </div>
  );
}

export default CourseCardForIndividuals;
