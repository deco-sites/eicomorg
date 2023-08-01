import type { HTML } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";
import { useState } from "preact/hooks";
import { useUI } from "$store/sdk/useUI.ts";

export interface QuestionsProps {
    question: HTML;
    answer: HTML;
  }

  function Question({ questionAnswer }: {
    questionAnswer: QuestionsProps;
  }) {
    const { answer, question } = questionAnswer;
    const [showDetails, setShowDetails] = useState(false);
    const { displayNavbarMenu } = useUI();
  
    const toggleExpand = () => {
      setShowDetails(!showDetails);
    };
  
    return (
      <>
        <div class=" pb-[10px] box-border" onClick={toggleExpand}>
            <div className={`text-left cursor-pointer leading-[1.6rem] text-[16px]  relative p-[10px] flex border justify-between border-solid font-Gravity border-gray-300 rounded-md
            ${showDetails ? "bg-[#696969]/10" : ""}`}>
                <p>
                <span
                    dangerouslySetInnerHTML={{ __html: question }}
                >
                </span>
                </p>
                <div class="h-[14px] w-[14px] mr-3 mt-1">
                <Icon
                id={(showDetails) ? "ChevronUp" : "ChevronDown"}
                width={14}
                height={14}
                strokeWidth={2}
                class=""
                />
                </div>
            </div>
            {showDetails && (
            <div class="block border border-solid  border-gray-300 rounded-b-[4px] mt-[-1px] mx-[4px] pt-[10px] pr-[10px] pb-[1px] pl-[20px]">
                <p class="text-[16px] mb-[10px]">
                <span
                    dangerouslySetInnerHTML={{ __html: answer }}
                >
                </span>
                </p>
            </div>
            )}
        </div>
      </>
    );
  }
  
  export default Question;