import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface FormData {
  textFields: Array<{
    placeholder?: string;
    field: string;
    id: string;
    required: boolean;
  }>;
  selectFields: Array<{
    id: string;
    name: string;
    required: boolean;
    data_name: string;
    text: HTML;
    options: Array<{
      value: string;
      text: string;
    }>;
  }>;
  textArea: Array<{
    text: HTML;
    id: string;
    name: string;
  }>;
  privacyPolicy: HTML;
  action: string;
  buttonColor: string;
  buttonText: string;
  buttonUrl: string;
}

export interface LeftSide {
  topText: HTML;
  phoneNumber: {
    text: HTML;
    href: string;
  };
  email: {
    text: HTML;
    href: string;
  };
  campus: HTML;
  bottomText: HTML;
}
export interface Props {
  title: HTML;
  leftSide: LeftSide;
  form: FormData;
}

function ContactUs(
  {
    title,
    leftSide,
    form,
  }: Props,
) {
  return (
    <>
      <div class="h-[70px]"></div>
      <div class="lg:block xs:hidden mt-0 lg:mb-[100px] pt-[60px] box-border h-[650px]">
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
          <div class="lg:px-0 md:px-5">
            <h1 class="font-AvenirNextLTPro text-left lg:my-5 md:mt-[10px] md:mb-5 md:text-[30px] md:leading-[34px] xs:text-[26px] xs:leading-[32px] block">
              <span dangerouslySetInnerHTML={{ __html: title }}></span>
            </h1>
            <div class="mx-[-10px]">
              <div class="lg:w-1/4 md:w-full pt-5 pl-[10px] pr-0 float-left relative">
                <div class="font-Gravity text-left text-[16px] leading-[1.6rem] mb-5">
                  <a>
                    <span
                      dangerouslySetInnerHTML={{ __html: leftSide.topText }}
                    >
                    </span>
                  </a>
                </div>
                <div class="font-Gravity text-left text-[16px] leading-[1.6rem] hover:underline mb-5 text-[#F36F21]">
                  <a href={leftSide.phoneNumber.href}>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: leftSide.phoneNumber.text,
                      }}
                    >
                    </span>
                  </a>
                </div>
                <div class="font-Gravity text-left text-[16px] leading-[1.6rem] hover:underline mb-5 text-[#F36F21]">
                  <a href={leftSide.email.href}>
                    <span
                      dangerouslySetInnerHTML={{ __html: leftSide.email.text }}
                    >
                    </span>
                  </a>
                </div>
                <h4 class="my-[10px] text-[18px] leading-[24px]">
                  <span dangerouslySetInnerHTML={{ __html: leftSide.campus }}>
                  </span>
                </h4>
                <div class="font-Gravity text-left text-[16px] leading-[1.6rem]">
                  <p>
                    <span
                      dangerouslySetInnerHTML={{ __html: leftSide.bottomText }}
                    >
                    </span>
                  </p>
                </div>
              </div>
              <div class="w-1/4 float-left px-[10px] relative">
                <div class="mb-0 top-[25px] w-1/2 h-[50px] 
                md:border-r-[1px]  md:border-r-solid md:border-r-[#000] relative">
                </div>
              </div>
              <div class="px-0 w-1/2 float-left relative">
                <form
                  action={form.action}
                  method="POST"
                  class="text-left relative  mt-[25px] bg-white mx-auto mb-0 p-5 text-[14px] leading-[1.6rem]"
                >
                  <div>
                    {form.textFields.map((field) => {
                      return (
                        <div class="w-full relative mb-[10px] max-w-full">
                          <label
                            htmlFor={field.id}
                            class="font-bold mb-[5px] text-[14px] block outline-0 text-[#000]"
                          >
                            {field.field}
                          </label>
                          <div class="relative text-[14px]">
                            <input
                              type="text"
                              placeholder={field.placeholder}
                              id={field.id}
                              name={field.id}
                              data-name={field.id}
                              required={field.required}
                              class="p-[8px] h-auto block rounded text-sm border border-[#bcbcbc] border-solid w-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                    {form.selectFields.map((select) => {
                      return (
                        <div class="w-full realtive mb-[10px] max-w-full">
                          <label htmlFor={select.id}>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: select.text,
                              }}
                            >
                            </span>
                          </label>
                          <div class="relative text-[14px]">
                            <select
                              name={select.name}
                              id={select.id}
                              required={select.required}
                              data-name={select.data_name}
                              class="border-[1px] border-solid rounded-[1px] border-[#dfdfdf] p-[4px] block w-full box-border text-[14px]"
                            >
                              <option selected></option>
                              {select.options.map((option) => {
                                return (
                                  <option value={option.value}>
                                    {option.text}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      );
                    })}
                    {form.textArea.map((textArea) => {
                      return (
                        <div class="w-full relative pb-[10px] max-w-full">
                          <label
                            htmlFor={textArea.id}
                            class="font-bold mb-[5px] block text-[14px]"
                          >
                            <span
                              dangerouslySetInnerHTML={{
                                __html: textArea.text,
                              }}
                            >
                            </span>
                          </label>
                          <div class="relative text-[14px]">
                            <textarea
                              id={textArea.id}
                              name={textArea.name}
                              class="h-auto block w-full box-border border-[1px] border-solid border-[#bcbcbc] p-[8px] text-[14px]"
                            >
                            </textarea>
                          </div>
                        </div>
                      );
                    })}
                    <div class="w-full clear-both mb-[10px]">
                      <p>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: form.privacyPolicy,
                          }}
                        >
                        </span>
                      </p>
                    </div>
                    <div class="w-full outline-0 ">
                      <button
                        type="submit"
                        class="btn cursor-pointer md:text-[14px] xs:text-[1.5em] text-center font-light border-0 rounded-lg text-white p-[12px] outline-0"
                        style={{
                          backgroundColor: form.buttonColor,
                          textTransform: "none",
                        }}
                      >
                        {form.buttonText}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:hidden xs:block h-auto mt-0 mb-0 pt-[70px] box-border">
        <div class="z-auto max-w-[1120px] px-0 relative mx-auto">
          <div class="px-5 xs:px-[10px]">
            <h1 class="font-AvenirNextLTPro text-left lg:my-5 md:mt-[10px] md:mb-5 md:text-[30px] md:leading-[34px] xs:text-[24px] xs:leading-[32px] block">
              <span dangerouslySetInnerHTML={{ __html: title }}></span>
            </h1>
            <div class="mx-[-10px]">
              <div class="lg:w-1/4 md:w-full pt-5 pl-[10px] pr-0 float-left relative">
                <div class="font-Gravity text-left text-[16px] leading-[1.6rem] mb-5">
                  <a>
                    <span
                      dangerouslySetInnerHTML={{ __html: leftSide.topText }}
                    >
                    </span>
                  </a>
                </div>
                <div class="font-Gravity text-left text-[16px] leading-[1.6rem] hover:underline mb-5 text-[#F36F21]">
                  <a href={leftSide.phoneNumber.href}>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: leftSide.phoneNumber.text,
                      }}
                    >
                    </span>
                  </a>
                </div>
              </div>
              <div class="md:block xs:hidden w-full left-auto right-auto float-left px-[10px] relative">
                <div class="mb-0 top-[25px] w-1/2 h-[50px] 
                md:border-r-[1px]  md:border-r-solid md:border-r-[#000] relative">
                </div>
              </div>
              <div class="md:px-28 xs:px-5 w-full left-auto right-auto float-left relative">
                <form
                  action={form.action}
                  method="POST"
                  class="text-left relative  mt-[25px] bg-white mx-auto mb-5 p-0 text-[14px] leading-[1.6rem]"
                >
                  <div>
                    {form.textFields.map((field) => {
                      return (
                        <div class="w-full relative mb-[10px] max-w-full">
                          <label
                            htmlFor={field.id}
                            class="font-bold mb-[5px] text-[14px] block outline-0 text-[#000]"
                          >
                            {field.field}
                          </label>
                          <div class="relative text-[14px]">
                            <input
                              type="text"
                              placeholder={field.placeholder}
                              id={field.id}
                              name={field.id}
                              data-name={field.id}
                              required={field.required}
                              class="p-[8px] h-auto block rounded text-sm border border-[#bcbcbc] border-solid w-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                    {form.selectFields.map((select) => {
                      return (
                        <div class="w-full realtive mb-[10px] max-w-full">
                          <label htmlFor={select.id}>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: select.text,
                              }}
                            >
                            </span>
                          </label>
                          <div class="relative text-[14px]">
                            <select
                              name={select.name}
                              id={select.id}
                              required={select.required}
                              data-name={select.data_name}
                              class="border-[1px] border-solid rounded-[1px] border-[#dfdfdf] p-[4px] block w-full box-border text-[14px]"
                            >
                              <option selected></option>
                              {select.options.map((option) => {
                                return (
                                  <option value={option.value}>
                                    {option.text}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      );
                    })}
                    {form.textArea.map((textArea) => {
                      return (
                        <div class="w-full relative pb-[10px] max-w-full">
                          <label
                            htmlFor={textArea.id}
                            class="font-bold mb-[5px] block text-[14px]"
                          >
                            <span
                              dangerouslySetInnerHTML={{
                                __html: textArea.text,
                              }}
                            >
                            </span>
                          </label>
                          <div class="relative text-[14px]">
                            <textarea
                              id={textArea.id}
                              name={textArea.name}
                              class="h-auto block w-full box-border border-[1px] border-solid border-[#bcbcbc] p-[8px] text-[14px]"
                            >
                            </textarea>
                          </div>
                        </div>
                      );
                    })}
                    <div class="w-full clear-both mb-[10px]">
                      <p>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: form.privacyPolicy,
                          }}
                        >
                        </span>
                      </p>
                    </div>
                    <div class="w-full outline-0 ">
                      <button
                        type="submit"
                        class="btn cursor-pointer md:text-[14px] xs:text-[1.5em] text-center font-light border-0 rounded-lg text-white p-[12px] outline-0"
                        style={{
                          backgroundColor: form.buttonColor,
                          textTransform: "none",
                        }}
                      >
                        {form.buttonText}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="bg-white text-white text-[2px]">
                .
              </div>
              <div class="pt-5 px-[10px] pb-[5px] bg-[#f3f3f3]">
                <h4 class="my-[10px] text-[20px] leading-[24px] font-Gravity block">
                  <span dangerouslySetInnerHTML={{ __html: leftSide.campus }}>
                  </span>
                </h4>
                <div class="font-Gravity text-left md:text-[16px] md:leading-[1.6rem] xs:text-[14px] xs:leading-[22px] block mb-[10px]">
                  <p>
                    <span
                      dangerouslySetInnerHTML={{ __html: leftSide.bottomText }}
                    >
                    </span>
                  </p>
                </div>
                <div class="font-Gravity text-left md:text-[16px] md:leading-[20px] xs:text-[14px] xs:leading-[22px] block hover:underline mb-5 text-[#F36F21] ">
                  <a href={leftSide.email.href}>
                    <span
                      dangerouslySetInnerHTML={{ __html: leftSide.email.text }}
                    >
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
