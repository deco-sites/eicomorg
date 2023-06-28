import type { HTML } from "deco-sites/std/components/types.ts";
import type { Children } from "./CourseInfo.tsx"
import Icon from "$store/components/ui/Icon.tsx";

export interface courseInfoProps {
  title: string;
  label?: HTML;
  children: Children[];
}

function CourseInfoDetail({ course }: {
  course: courseInfoProps;
}) {
  const { title, label, children = [] } = course;
  return (
    <>
      <div class="pb-3 bg-[#262628]">
        <details class="text-[#f3f3f3] text-base text-left font-normal border-orange-500 cursor-pointer border rounded-md p-4 flex relative">
          <summary class="flex justify-between">
            {title}
          <Icon
              id="ChevronDown"
              width={20}
              height={20}
              strokeWidth={2}
            />
          </summary>
          <div class="bg-[#262628] toggle-content mt-[-1px] mx-2 py-3 px-5">
            { label && (
            <p class="text-left text-orange-500">
              <span dangerouslySetInnerHTML={{ __html: label }}></span>
            </p>
            )
            }
            <ul class="text-white mt-0 mb-3 pl-10 list-square">
              {children.map((list) => (
                <li class="text-white py-1 text-base">
                  <span dangerouslySetInnerHTML={{ __html: list.title }}></span>
                  {list.children && (
                    <ul class="text-white mt-0 mb-3 pl-10 list-disc">
                      {list.children.map((children) => {
                        return (
                        <li class="text-[#f3f3f3] py-1 text-base">
                          <p class="mb-0 cursor-pointer text-left text-base">{children}</p>
                        </li>
                        )
                      })} 
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </>
  );
}

export default CourseInfoDetail;
