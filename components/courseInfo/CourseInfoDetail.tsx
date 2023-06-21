import type { HTML } from "deco-sites/std/components/types.ts";

export interface courseInfoProps {
    title: string;
    label: HTML;
    children: HTML[]
}

function CourseInfoDetail({ course }: {
    course: courseInfoProps;
  }) {
    const { title, label, children = [] } = course;
    return (
      <>
        <div class="pb-3 bg-[#262628]">
            <details class="text-[#f3f3f3] text-base text-left font-normal border-orange-500 cursor-pointer border rounded-md p-4 flex relative">
                <summary>
                {title}
                </summary>
                <div class= "bg-[#262628] toggle-content mt-[-1px] mx-2 py-3 px-5">
                    <p class="text-left text-orange-500"><span dangerouslySetInnerHTML={{ __html: label }}></span></p>
                    <ul class="text-white mt-0 mb-3 pl-10 list-square">
                        {children.map((list) => (
                            <li class="text-white py-1 text-base"><span dangerouslySetInnerHTML={{ __html: list }}></span></li>
                        ))}
                    </ul>
                </div>
            </details>
        </div>
      </>
    );
  }
  
  export default CourseInfoDetail;
