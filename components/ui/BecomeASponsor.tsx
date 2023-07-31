import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  title: HTML;
  content: HTML;
  firstInput: string;
  firstInputId: string;
  placeholderFirstInput: string;
  firstInputRequired?: boolean,
  secondInput: string;
  secondInputId: string;
  placeholderSecondInput: string;
  secondInputRequired?: boolean,
  buttonText: HTML;

}

function BecomeASponsor(
  {
    title,
    content,
    firstInput,
    firstInputId,
    placeholderFirstInput,
    firstInputRequired,
    secondInput,
    secondInputId,
    secondInputRequired,
    placeholderSecondInput,
    buttonText,
  }: Props,
) {
  return (
    <div class="bg-[#262628] pt-[10px] lg:px-0 xs:px-[10px] md:h-[300px] xs:h-[500px] pb-[40px] box-border">
      <div class="mx-auto z-auto pr-0 relative lg:max-w-[1120px] xs:px-0">
        <div class="md:mx-[-10px]">
          <div class="xs:w-full md:w-1/2 pt-[40px] float-left md:px-[10px] relative">
            <h2
              class="font-AvenirNextLTPro font-bold text-[28px] my-[10px] text-[#f3f3f3]"
              dangerouslySetInnerHTML={{ __html: title }}
            >
            </h2>
            <div
              class="text-[#f3f3f3] text-left mb-[10px] md:leading-[1.6rem] xs:leading-[22px] font-Gravity xs:text-[14px] md:text-[16px]"
              dangerouslySetInnerHTML={{ __html: content }}
            >
            </div>
          </div>
          <div class="xs:w-full md:w-1/2 float-left relative md:px-[10px]">
            <div class="">
              <form action="" class="max-w-full relative text-left mt-[25px] mx-auto mb-0 p-5 box-border text-[14px] leading-[1.6rem]">
                  <div class="font-Roboto w-full relative mb-[10px] max-w-full ">
                      <label htmlFor={firstInputId} class="text-[#f3f3f3] font-bold mb-[5px] block text-[14px]">
                        {firstInput}{firstInputRequired ? '*' : ''}
                      </label>
                      <div class="relative text-[14px] ">
                          <input type="text" id={firstInputId} required={firstInputRequired} placeholder={placeholderFirstInput}
                          class="block w-[100%] my-1 rounded-sm bg-[#343e47] outline-none p-1 h-[30px] border-[#979797] border-[1px] text-[14px] placeholder:text-[#6d6d6d]"/>
                      </div>
                  </div>
                  <div class="font-Roboto w-full relative mb-[10px] max-w-full">
                      <label htmlFor={secondInputId} required={secondInputRequired} class="font-bold mb-[5px] text-[#f3f3f3] block text-[14px]">
                        {secondInput}*
                      </label>
                      <div class="relative text-[14px] ">
                          <input type="text" id={secondInputId} placeholder={placeholderSecondInput} required={secondInputRequired}
                          class="block w-[100%] my-1 rounded-sm bg-[#343e47] outline-none p-1 h-[30px] border-[#979797] border-[1px] text-[14px] placeholder:text-[#6d6d6d]"/>
                      </div>
                  </div>
                  <button class="uppercase bg-[#f26f21] text-white rounded-sm md:text-[14px] xs:text-[1.5em] cursor-pointer p-2">
                    <span dangerouslySetInnerHTML={{ __html: buttonText }}></span>
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeASponsor;
