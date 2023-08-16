import type { HTML } from "deco-sites/std/components/types.ts";
import type { Children } from "./CourseInfoAlternate.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useState } from "preact/hooks";
import { useUI } from "$store/sdk/useUI.ts";

export interface courseInfoProps {
  title: string;
  label?: HTML;
  children: Children[];

  isMobile?: boolean;
  itemIndex?: number;
}

function CourseInfoDetail({ course, backgroundColor }: {
  course: courseInfoProps;
  backgroundColor: string;
}) {
  const { title, label, children = [], itemIndex, isMobile } = course;
  const [showDetails, setShowDetails] = useState(false);
  const { displayNavbarMenu } = useUI();

  const toggleExpand = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div class="pb-3" style={{ backgroundColor: backgroundColor }}>
        <div
          onClick={toggleExpand}
          className={`border-orange-500 cursor-pointer border rounded-md p-[10px] flex relative justify-between 
      `}
        >
          <div class="cursor-pointer mb-0 font-Gravity xs:text-[14px] xs:leading-[22px] md:text-[16px] text-left  md:leading-6 mt-0 text-[#f3f3f3]">
            <p>{title}</p>
          </div>
          <div class="text-white h-[14px] w-[14px] mr-3 mt-1">
            <Icon
              id={(showDetails) ? "ChevronUp" : "ChevronDown"}
              width={20}
              height={20}
              strokeWidth={2}
              class=" text-white"
            />
          </div>
        </div>
        {showDetails && (
          <div class="bg-[#333f53] toggle-content border-orange-500 border mt-[-1px] mx-[4px] xs:pt-[10px] xs:pr-[10px] xs:pb-[1px] xs:pl-[20px] md:py-3 md:px-5">
            {label && (
              <p class="text-left text-orange-500 xs:text-[14px] xs:leading-[22px] md:leading-6 md:text-[16px]">
                <span dangerouslySetInnerHTML={{ __html: label }}></span>
              </p>
            )}
            <ul class="text-white mt-0 mb-3 xs:pl-5 md:pl-10 list-square">
              {children.map((list) => (
                <li class="text-white xs:text-[14px] xs:leading-[22px] md:text-[16px]">
                  <span dangerouslySetInnerHTML={{ __html: list.title }}></span>
                  {list.children && (
                    <ul class="text-white mt-0 mb-3 pl-10 list-disc">
                      {list.children.map((children) => {
                        return (
                          <li class="text-[#f3f3f3] py-1">
                            <p class="mb-0 cursor-pointer text-left xs:text-[14px] xs:leading-[22px] md:leading-6 md:text-[16px]">
                              {children}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default CourseInfoDetail;
