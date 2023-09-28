import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface CourseInfo {
  image: {
    src: LiveImage;
    backgroundPosition: string;
  };
  title: HTML;
  text?: HTML;
  paragraphWithIcon?: Array<{
    text: HTML;
    icon: {
      src: LiveImage;
      alt: string;
    };
  }>;
}

export interface ActionLink {
  text: string;
  href: string;
}

export interface ActionLinksContainer {
  firstButton: ActionLink;
  secondButton: ActionLink;
}

export interface Props {
  title: HTML;
  courses: CourseInfo[];
  /**
   * @description Maximum of 4 courses
   */
  buttons: ActionLinksContainer;
}

function Courses(
  {
    title,
    courses = [],
    buttons,
  }: Props,
) {
  const arraySize = courses.length;
  const [elementRef, isShown] = useScrollShow();
  return (
    <>
      <div
        class="lg:py-[100px] md:py-[60px] md:px-5 lg:px-0 xs:px-[10px] xs:py-[40px] box-border"
        ref={elementRef as Ref<HTMLDivElement>}
      >
        <div class="md:max-w-[1120px] xs:max-w-none mx-auto">
          <div class="text-center mx-auto max-w-[710px]">
            <p class="text-center font-Gravity text-[16px] md:leading-[20px] lg:leading-[1.6rem] mb-[10px]">
              <span dangerouslySetInnerHTML={{ __html: title }}></span>
            </p>
          </div>
          <div class="md:mx-[-10px] xs:mx-0 items-stretch mt-10 lg:flex md:block">
            {courses.map((course, index) => {
              return (
                <div
                  class={`justify-between py-[10px] lg:px-[15px] md:px-[5px] flex flex-row lg:w-1/3 md:w-full md:mx-auto md:left-auto md:right-auto float-left relative
                  ${isShown ? "animate-slide-bottom" : ""}`}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div class="bg-[#fff] border-[1px] border-[#dfdfdf] rounded-[4px] p-0 shadow-[1px_1px_6px_rgba(0,0,0,0.2)] md:max-w-[400px] md:mx-auto">
                    <div
                      style={{
                        backgroundImage: `url(${course.image.src})`,
                        backgroundPosition: course.image.backgroundPosition,
                        backgroundSize: "cover",
                        transition: "border .2s",
                      }}
                      class="h-[220px] rounded-t"
                    >
                    </div>
                    <div class="py-5 pl-5 pr-[30px] block">
                      <h3 class="font-AvenirNextLTPro mb-5 mt-[10px] uppercase text-[22px] leading-[28px]">
                        <span
                          dangerouslySetInnerHTML={{ __html: course.title }}
                        >
                        </span>
                      </h3>
                      {course.paragraphWithIcon && (
                        <div>
                          {course.paragraphWithIcon.map((paragraph) => {
                            return (
                              <div class="justify-start mb-5 flex items-start">
                                <Image
                                  src={paragraph.icon.src}
                                  alt={paragraph.icon.src}
                                  width={36}
                                  height={36}
                                  class="mr-[10px] mb-[10px] ml-auto max-w-full align-middle inline-block"
                                />
                                <div class="font-Gravity text-[14px] leading-[18px] block text-left mb-[10px]">
                                  <p class="">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: paragraph.text,
                                      }}
                                    >
                                    </span>
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {course.text && (
                        <div class="mb-0 justify-start flex items-start">
                          <p
                            class="font-Gravity text-[14px] leading-[18px] block text-left mb-[10px]"
                            dangerouslySetInnerHTML={{ __html: course.text }}
                          >
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div class="text-center mt-[60px]">
            <a
              href={buttons.firstButton.href}
              class={`mx-auto md:w-auto xs:w-full uppercase cursor-pointer bg-[#f26f21]
                hover:bg-[#f07d39] rounded md:py-[16px] md:px-[24px] xs:py-[12px] xs:px-[20px] font-Gravity text-[16px] font-bold text-white inline-block
              `}
            >
              {buttons.firstButton.text}
            </a>
            <a
              href={buttons.secondButton.href}
              class={`mr-auto md:w-auto xs:w-full uppercase outline-offset-[-2px]
              cursor-pointer md:bg-[#eeeeee] xs:bg-white hover:bg-[#f07d3] rounded md:py-[16px] md:px-[24px] xs:py-[12px] xs:px-[20px] 
              font-Gravity text-[16px] font-bold text-[#f26f21] md:hover:text-[#eee] outline md:hover:bg-[#f26f21] outline-2 outline-[#f26f21] md:ml-[10px] inline-block
              ${isShown ? "animate-button-expand" : ""}`}
              style={{ transition: "background-color .2s" }}
            >
              {buttons.secondButton.text}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
