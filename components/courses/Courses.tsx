import type { Image } from "deco-sites/std/components/types.ts";
import type { AvailableIcons } from "../ui/Icon.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";
import CourseCard from "$store/islands/CourseCard.tsx";

export interface CourseInfo {
  image: {
    src: Image;
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

export interface Props {
  /**
   * @description Maximum of 4 courses
   */
  courses: CourseInfo[];
}

function Courses(
  {
    courses,
  }: Props,
) {
  const arraySize = courses.length;
  return (
    <div class="container mx-auto block">
      <div class="flex xs:flex-col md:flex-row items-stretch mt-10 pt-16 mx-[-10px] justify-center">
        {courses.map((courseCard, index) => (
          <CourseCard
            courseCard={courseCard}
            arraySize={arraySize}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
