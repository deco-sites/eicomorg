import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  title: HTML;
  content: HTML;
  firstInput: string;
  secondInput: string;
  placeholderFirstInput: string;
  placeholderSecondInput: string;
  buttonText: HTML;
}

function Newsletter(
  {
    title,
    content,
    firstInput,
    secondInput,
    placeholderFirstInput,
    placeholderSecondInput,
    buttonText,
  }: Props,
) {
  return (
    <div class="container-fluid bg-[#262628]">
      <div class="
        md:flex
        xs:block

        m-auto
        py-10
        text-[#f3f3f3]
        
        lg:w-[1052px]
      ">
        <div class="
          md:w-2/4
          xs:w-11/12

          ml-5
        ">
          <h2
            class="font-AvenirNextLTPro font-bold text-[28px]"
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </h2>
          <div
            class="my-4 [&>p>a]:text-[#f26f21] font:semibold text-[16px]"
            dangerouslySetInnerHTML={{ __html: content }}
          >
          </div>
        </div>
        <div class="
          lg:ml-5
          md:ml-8
          md:my-0

          lg:w-2/4
          md:w-2/5
          xs:w-10/12

          xs:my-8
          xs:m-auto
        ">
          <div>
            <span class="font-bold">{firstInput}</span>
            <input
              class="block w-[100%] my-1 rounded-sm bg-[#343e47] outline-none p-1 border-[#979797] border-[1px] text-[14px] placeholder:text-[#6d6d6d]"
              placeholder={placeholderFirstInput}
              type="text"
              required
            />
          </div>
          <div class="my-5">
            <span class="font-bold">{secondInput}*</span>
            <input
              class="block w-[100%] my-1 rounded-sm bg-[#343e47] outline-none p-1 border-[#979797] border-[1px] text-[14px] placeholder:text-[#6d6d6d]"
              placeholder={placeholderSecondInput}
              type="email"
              required
            />
          </div>

          <button class="uppercase bg-[#f26f21] text-white rounded-sm text-[14px] cursor-pointer p-2">
            <span dangerouslySetInnerHTML={{ __html: buttonText }}></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
