import type { Image } from "deco-sites/std/components/types.ts";
import type { AvailableIcons } from "../ui/Icon.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";
import CourseCard from "$store/islands/CourseCard.tsx";

export interface CourseInfo {
  image: {
    src: Image;
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

export interface Props {
  title: HTML;
  content: HTML;
  /**
   * @description Maximum of 4 courses
   */
  courses: CourseInfo[];
}

function Courses(
  {
    title,
    content,
    courses,
  }: Props,
) {
  const arraySize = courses.length;
  return (
    <div class="md:pt-[168px] xs:pt-[80px] pb-5">
      <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
        <div class="text-center font-bold uppercase block my-5 font-AvenirNextLTPro leading-[34px] text-[28px]">
          <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
        </div>
        <div class="max-w-[560px] mt-10 xs:p-0 md:p-0 xs:mb-[10px] md:mb-[50px] tracking-wider mx-auto pb-0 text-center xs:text-[14px] md:text-[16px] font-Gravity font-normal xs:leading[22px] md:leading-6">
          <p dangerouslySetInnerHTML={{ __html: content }} class=""></p>
        </div>
        <div class="flex xs:flex-col md:flex-row md:pt-[60px] mx-[-10px] mt-[40px] items-stretch justify-center">
          {courses.map((courseCard, index) => (
            <CourseCard
              courseCard={courseCard}
              arraySize={arraySize}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
