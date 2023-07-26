import type { Image } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import CourseCardForIndividuals from "./CourseCardForIndividuals.tsx";

export interface CourseInfo {
  image: {
    src: Image;
    alt: string;
    positionStyle: string;
  };
  title: HTML;
  subtitle: HTML;
  href: string;
}

export interface Props {
  title: HTML;
  content: HTML;
  /**
   * @description Maximum of 4 courses
   */
  courses: CourseInfo[];
}

function CoursesForIndividuals(
  {
    title,
    content,
    courses,
  }: Props,
) {
  const arraySize = courses.length;
  return (
    <div class="pt-[40px] pb-[100px] relative box-border">
      <div class="z-20 pb-5 pt-5 bg-white mb-0 text-center font-bold sticky uppercase xs:top-[88px] md:top-[68px] font-AvenirNextLTPro leading-[34px] text-[28px]">
        <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
      </div>
      <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
        <div class="">
          <div class="max-w-[700px] mx-auto box-border text-center font-Gravity text-[16px] mb-[10px] leading-[1.6rem] mt-0">
            <p dangerouslySetInnerHTML={{ __html: content }} class=""></p>
          </div>
          <div class="flex xs:flex-col md:flex-row mx-[-10px] mt-[40px] items-stretch justify-center">
            {courses.map((courseCard, index) => (
              <CourseCardForIndividuals
                courseCard={courseCard}
                arraySize={arraySize}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesForIndividuals;
