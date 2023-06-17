import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface CourseCard {
  image: {
    src: LiveImage;
    alt: string;
  };
  title: HTML;
  subtitle: HTML;
  href: string;
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
    title,
    subtitle,
    href,
  } = courseCard;

  return (
    <div
      className={`opacity-100 transform translate-x-0 translate-y-0 translate-z-0 
    scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d 
    md:px-3 xs:p-5 flex flex-row justify-between relative ${
        arraySize <= 3 ? "md:w-96" : "lg:w-96"
      }
    xs:w-full`}
    >
      <a
        href={href}
        rel="noopener"
        class="cursor-pointer bg-white border border-gray-300 rounded-md
      flex flex-col items-stretch transition-all duration-200 relative max-w-full"
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
          <h2 class="text-xl font-extrabold text-[#262628] mt-5">
            <span dangerouslySetInnerHTML={{ __html: title }}></span>
            <br />
          </h2>
          <p class="h-auto mt-0 text-lg  overflow-hidden">
            <span dangerouslySetInnerHTML={{ __html: subtitle }}>
            </span>
          </p>
        </div>
      </a>
    </div>
  );
}

export default CourseCardForIndividuals;
