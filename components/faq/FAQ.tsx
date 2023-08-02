import type { HTML } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";
import { useState } from "preact/hooks";
import { useUI } from "$store/sdk/useUI.ts";
import Question from "./Questions.tsx";

export interface Questions {
  question: HTML;
  answer: HTML;
}

export interface Props {
  title: HTML;
  questions: Questions[];
}

function Faq({ title, questions = [] }: Props) {
  const [showDetails, setShowDetails] = useState(false);
  const { displayNavbarMenu } = useUI();

  const toggleExpand = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div class="py-[100px]">
        <div class="z-auto max-w-[1120px] lg:pr-0 lg:pl-0 xs:px-3 relative mx-auto">
          <div>
            <div>
              <h1 class="text-center my-5 text-3xl uppercase bold font-AvenirNextLTPro">
                <span dangerouslySetInnerHTML={{ __html: title }}></span>
              </h1>
            </div>
          </div>
          {questions.map((question, index) => (
            <Question
              questionAnswer={{ ...question }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
