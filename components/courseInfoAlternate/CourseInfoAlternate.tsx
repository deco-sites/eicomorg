import type { HTML } from "deco-sites/std/components/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import CourseInfoDetail from "./CourseInfoDetail.tsx";

export interface topPartText {
  title: HTML;
  content?: HTML;
}

export interface backGroundInfo {
  desktop: LiveImage;
  mobile: LiveImage;
  color: string;
}

export interface Children {
  title: HTML;
  children?: string[];
}

export interface courseInfo {
  title: string;
  label?: HTML;
  children: Children[];
}

export interface Props {
  topText: topPartText;
  backgroundInfo: backGroundInfo;
  courseInfoDetails?: courseInfo[];
}

function CourseInfoAlternate(
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
        <div class="max-w-[1120px] md:mx-4 lg:mx-auto pr-0 relative">
          <div class="max-w-[720px]">
            <div class="text-left uppercase my-5 font-AvenirNextLTPro text-[30px] leading-[34px] block">
              <h2
                dangerouslySetInnerHTML={{ __html: topText.title }}
              >
              </h2>
            </div>
            {topText.content && (
              <p class="mb-5">
                <span
                  style={{ color: "#f3f3f3" }}
                  dangerouslySetInnerHTML={{ __html: topText.content }}
                >
                </span>
              </p>
            )}
            <div class="mt-5">
              {courseInfoDetails.map((course, index) => (
                <CourseInfoDetail
                  course={{ ...course, isMobile: false, itemIndex: index }}
                  backgroundColor={backgroundInfo.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div
        class={`py-[100px] px-4 xs:block md:hidden`}
        style={{
          backgroundImage: `url(${backgroundInfo.mobile})`,
          backgroundRepeat: "repeat",
          backgroundSize: "800px",
          backgroundPosition: "120% -5%",
          backgroundColor: backgroundInfo.color,
        }}
      >
        <div class="max-w-[1120px] mx-auto pr-0 relative">
          <div class="max-w-[720px]">
            <div class="font-AvenirNextLTPro text-[24px] text-left uppercase mb-5 mt-[10px] font-bold leading-[32px] block">
              <h2 dangerouslySetInnerHTML={{ __html: topText.title }}>
              </h2>
            </div>
            {topText.content && (
              <p class="mb-5 text-[14px] leading-[22px] text-left font-Gravity">
                <span
                  style={{ color: "#f3f3f3" }}
                  dangerouslySetInnerHTML={{ __html: topText.content }}
                >
                </span>
              </p>
            )}
            <div class="mt-5">
              {courseInfoDetails.map((course) => (
                <CourseInfoDetail
                  course={course}
                  backgroundColor={backgroundInfo.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CourseInfoAlternate;
