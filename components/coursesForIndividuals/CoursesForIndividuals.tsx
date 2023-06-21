import type { Image } from "deco-sites/std/components/types.ts";
import type { AvailableIcons } from "../ui/Icon.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";
import CourseCardForIndividuals from "./CourseCardForIndividuals.tsx";

export interface CourseInfo {
  image: {
    src: Image;
    alt: string;
  };
  title: HTML;
  subtitle: HTML;
  href: string;
}

export interface Props {
  /**
   * @description Maximum of 4 courses
   */
  courses: CourseInfo[];
}

function CoursesForIndividuals(
  {
    courses,
  }: Props,
) {
  const arraySize = courses.length;
  return (
    <div class="container mx-auto block">
      <div class="flex xs:flex-col md:flex-row items-stretch mt-10 pt-16 mx-[-10px] justify-center">
        {courses.map((courseCard, index) => (
          <CourseCardForIndividuals
            courseCard={courseCard}
            arraySize={arraySize}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default CoursesForIndividuals;
