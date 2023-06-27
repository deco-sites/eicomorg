import type {
    HTML,
  } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";

export interface Questions {
    question: HTML;
    answer: HTML;
}
  
export interface Props {
    title: HTML;
    questions: Questions[];
}


function Faq({ title, questions = [] }: Props) {
    return (
      <>
        <div class="py-24">
            <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
                <div>
                    <div>
                        <h1 class="text-center my-5 text-3xl uppercase bold">
                            <span dangerouslySetInnerHTML={{ __html: title }}></span>
                        </h1>
                    </div>
                </div>
                <div>
                {questions.map((question) => {
                      return (
                        <div class="pb-3">
                            <details class="cursor-pointer  flex relative">
                                <summary class="text-left justify-between p-4 flex border border-solid border-gray-300 rounded-md">
                                    <span dangerouslySetInnerHTML={{ __html: question.question }}></span>
                                    <Icon id="ChevronDown" width={20} height={20} strokeWidth={2} />
                                </summary>
                                <div class="border border-solid border-gray-300 rounded-b-md mt-[-1px] mx-1 pt-3 pl-3 pb-1 pr-5">
                                    <p><span dangerouslySetInnerHTML={{ __html: question.answer }}></span></p>
                                </div>
                            </details>
                        </div>
                      );
                    })}
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Faq;
  