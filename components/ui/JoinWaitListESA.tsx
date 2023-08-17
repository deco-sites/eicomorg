import type {
    HTML,
    Image as LiveImage,
  } from "deco-sites/std/components/types.ts";
  
  export interface LeftPart {
    topText: HTML;
    bottomText: HTML;
    benefits: HTML[]
  }
  
  export interface Form {
    input: FormInput[]
    buttonText: string;
  }
  
  export interface FormInput {
    input: string;
    inputId: string;
    placeholder: string;
    required?: boolean;
  }
  
  export interface Props {
    title: HTML;
    leftPart: LeftPart;
    form: Form;
  }
  
  function JoinWaitlistESA(
    { title, leftPart, form }: Props,
  ) {
    return (
      <>
        <div class="md:py-[100px] xs:py-[40px] xs:px-[10px] md:px-[0px] box-border">
          <div class="md:max-w-[1120px] xs:max-w-none mx-auto">
            <div class="max-w-[700px] mx-auto">
              <h2 class="uppercase mb-[60px] mt-5 block text-center font-AvenirNextLTPro text-[28px] leading-[34px]">
                <span dangerouslySetInnerHTML={{__html: title}}></span>
              </h2>
            </div>
            <div class="items-center md:flex-row xs:flex-col flex mx-[-10px]">
              <div class="pl-[10px] pr-[40px] md:w-1/2 xs:w-full left-auto right-auto float-left relative">
                <p class="text-left font-Gravity md:text-[16px] xs:text-[14px] xs:leading-[22px] mb-[10px] md:leading-[1.6rem] ">
                  <span dangerouslySetInnerHTML={{__html: leftPart.topText}}></span>
                </p>
                <p class="text-left font-Gravity text-[16px] xs:text-[14px] xs:leading-[22px] mb-[10px] leading-[1.6rem]">
                  <span dangerouslySetInnerHTML={{__html: leftPart.bottomText}}></span>
                </p>
                {leftPart.benefits.map((benefit) => {
                  return (
                    <p class="text-left font-Gravity text-[16px] xs:text-[14px] xs:leading-[22px] mb-[10px] leading-[1.6rem]">
                      <span dangerouslySetInnerHTML={{__html: benefit}}></span>
                    </p>
                  );
                })}
              </div>
              <div class="md:w-1/2 xs:w-full float-left px-[10px] relative">
                <div class="max-w-[700px] mx-auto">
                <form
                action=""
                class="max-w-full relative text-left mt-[25px] mx-auto mb-0 p-5 box-border text-[14px] leading-[1.6rem]"
                >
                  {form.input.map((input) => {
                    return (
                    <div class="font-Roboto w-full relative mb-[10px] max-w-full ">
                      <label
                        htmlFor={input.inputId}
                        class="font-bold mb-[5px] block text-[14px]"
                      >
                        {input.input}
                      </label>
                      <div class="relative text-[14px] ">
                        <input
                          type="text"
                          id={input.inputId}
                          required={input.required}
                          placeholder={input.placeholder}
                          class="block w-[100%] my-1 rounded-sm outline-none p-1 h-[30px] border-[#979797] border-[1px] text-[14px] placeholder:text-[#6d6d6d]"
                        />
                      </div>
                    </div>                    )
                  })}
                  <button class="bg-[#f26f21] text-white rounded-sm md:text-[14px] xs:text-[1.5em] cursor-pointer p-2">
                    {form.buttonText}
                  </button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default JoinWaitlistESA;