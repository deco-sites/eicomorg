import type { HTML } from "deco-sites/std/components/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import CourseInfoDetail from "./CourseInfoDetail.tsx";

export interface topPartText {
  title: string;
  content: HTML;
}

export interface backGroundInfo {
  desktop: LiveImage;
  mobile: LiveImage;
  color: string;
}

export interface courseInfo {
  title: string;
  label: HTML;
  children: HTML[];
}

export interface Props {
  topText: topPartText;
  backgroundInfo: backGroundInfo;
  courseInfoDetails?: courseInfo[];
}

function CourseInfo(
  { topText, backgroundInfo, courseInfoDetails = [] }: Props,
) {
  return (
    <>
      {/* desktop view */}
      <div
        style={{
          backgroundImage: `url(${backgroundInfo.desktop})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 450px",
          backgroundPosition: "110% -40px",
          backgroundColor: backgroundInfo.color,
          zIndex: 0,
        }}
        class={`py-[100px] xs:hidden md:block`}
      >
        <div class="max-w-[1120px] mx-auto pr-0 relative">
          <div class="max-w-[720px]">
            <h2 class="text-orange-500 text-left uppercase my-5 font-bold text-3xl leading-9 block">
              {topText.title}
            </h2>
            <p class="mb-5">
              <span
                style={{ color: "#f3f3f3" }}
                dangerouslySetInnerHTML={{ __html: topText.content }}
              >
              </span>
            </p>
            <div class="mt-5">
              {courseInfoDetails.map((course) => (
                <CourseInfoDetail course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div
        class={`py-[100px] px-4 xs:block md:hidden`}
        style={{ backgroundColor: backgroundInfo.color }}
      >
        <div class="max-w-[1120px] mx-auto pr-0 relative">
          <div class="max-w-[720px]">
            <h2 class="text-orange-500 text-left uppercase my-5 font-bold text-3xl leading-9 block">
              {topText.title}
            </h2>
            <p class="mb-5">
              <span
                style={{ color: "#f3f3f3" }}
                dangerouslySetInnerHTML={{ __html: topText.content }}
              >
              </span>
            </p>
            <div class="mt-5">
              {courseInfoDetails.map((course) => (
                <CourseInfoDetail course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CourseInfo;
