import type { HTML } from "deco-sites/std/components/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface FormData {
  textFields: Array<{
    placeholder?: string;
    field: string;
    id: string;
    required: boolean;
  }>;
  selectField: {
    id: string;
    name: string;
    required: boolean;
    data_name: string;
    text: HTML;
    options: Array<{
      value: string;
      text: string;
    }>;
  };
  textArea: {
    text: HTML;
    id: string;
    name: string;
  };
  action: string;
  buttonColor: string;
  buttonText: string;
  buttonUrl: string;
}

export interface Props {
  leftTitle: HTML;
  leftText: HTML;
  form: FormData;
}

function Suggestion(
  {
    leftTitle,
    leftText,
    form,
  }: Props,
) {
  return (
    <>
      <div class="bg-[#343e47] pt-0 pb-5 box-border md:h-[420px] xs:h-[680px] lg:px-0 md:px-[10px]">
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
          <div class="md:mx-[-10px] xs:mx-0">
            <div class="md:w-1/2 xs:w-full float-left md:px-[10px] xs:pl-8 pr-[10px] relative">
              <div class="py-10">
                <h2 class="font-AvenirNextLTPro text-[28px] leading-[36px] my-[10px]">
                  <span dangerouslySetInnerHTML={{ __html: leftTitle }}></span>
                </h2>
                <div class="font-Gravity text-[14px] leading-[18px] block text-left mb-[10px]">
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: leftText }}></span>
                  </p>
                </div>
              </div>
            </div>
            <div class="md:w-1/2 xs:w-full float-left px-[10px] relative">
              <form
                action={form.action}
                method="POST"
                class="text-left relative mt-[25px] mx-auto mb-0 p-5 text-[14px] leading-[1.6rem] bg-[#343e47]"
              >
                <div>
                  {form.textFields.map((field) => {
                    return (
                      <div class="w-full relative mb-[10px] max-w-full">
                        <label
                          htmlFor={field.id}
                          class="font-bold mb-[5px] text-[14px] block outline-0 text-white"
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
                            class="p-[8px] h-[26px] block rounded text-sm border border-[#bcbcbc] border-solid w-full bg-[#343e47]"
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div class="w-full realtive mb-[10px] max-w-full">
                    <label htmlFor={form.selectField.id}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: form.selectField.text,
                        }}
                      >
                      </span>
                    </label>
                    <div class="relative text-[14px]">
                      <select
                        name={form.selectField.name}
                        id={form.selectField.id}
                        required={form.selectField.required}
                        data-name={form.selectField.data_name}
                        class="border-[1px] border-solid rounded-[1px] border-[#dfdfdf] p-[4px] block w-full box-border text-[14px] bg-[#343e47] text-white"
                      >
                        <option selected></option>
                        {form.selectField.options.map((option) => {
                          return (
                            <option value={option.value} class="text-white">
                              {option.text}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div class="w-full relative pb-[10px] max-w-full">
                    <label
                      htmlFor={form.textArea.id}
                      class="font-bold mb-[5px] block text-[14px]"
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: form.textArea.text }}
                      >
                      </span>
                    </label>
                    <div class="relative text-[14px]">
                      <textarea
                        id={form.textArea.id}
                        name={form.textArea.name}
                        class="h-[55px] block w-full box-border border-[1px] border-solid border-[#bcbcbc] p-[8px] text-[14px]  bg-[#343e47]"
                      >
                      </textarea>
                    </div>
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
    </>
  );
}

export default Suggestion;
