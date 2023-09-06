import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface FormData {
  textFields: Array<{
    placeholder?: string;
    field: string;
    id: string;
    required: boolean;
  }>;
  checkBoxFields: {
    title: HTML;
    questions: Array<{
      id: string;
      value: string;
      name: string
      text: HTML
    }>
  }
  textArea: {
    text: HTML;
    id: string;
    name: string;
  }
  action: string;
  buttonColor: string;
  buttonText: string;
  buttonUrl: string;
}

export interface Props {
  title: HTML;
  text: HTML;
  form: FormData;
}

function AnyQuestions(
  {

    title,
    text,
    form,
  }: Props,
) {
  return (
    <>
      <div
        class={`lg:py-[100px] md:py-[60px] md:px-5 lg:px-0 xs:px-[10px] xs:py-[40px] box-border`}
      >
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto blocl">
          <div class="text-center pb-5">
            <h1 class="font-AvenirNextLTPro text-center my-5 md:text-[28px] md:leading-[34px] xs:text-[26px] xs:leading-[32px] bloco">
              <span dangerouslySetInnerHTML={{ __html: title }}></span>
            </h1>
          </div>
          <div class="mb-[60px] mx-auto text-center max-w-[710px] ">
            <p
              class={`text-center font-Gravity mb-[10px] xs:text-[14px] xs:leading-[22px] md:leading-[1.6rem] md:text-[16px]`}
            >
              <span dangerouslySetInnerHTML={{ __html: text }}></span>
            </p>
          </div>
          <div class="mx-auto">
            <form
              action={form.action}
              method="POST"
              class="text-left relative max-w-[500px] mt-[25px] bg-white mx-auto mb-0 p-5 text-[14px] leading-[1.6rem]"
            >
              <div>
                {form.textFields.map((field) => {
                  return (
                    <div class="w-full relative mb-[10px] max-w-full">
                      <label
                        htmlFor={field.id}
                        class="font-bold mb-[5px] text-[14px] block outline-0"
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
                <div class="w-full relativ mb-[10px] max-w-full">
                  <fieldset class="pt-[0.01em] text-[14px">
                    <div class="flex">
                      <legend>
                        <span dangerouslySetInnerHTML={{ __html: form.checkBoxFields.title }}></span>
                      </legend>
                    </div>
                    {form.checkBoxFields.questions.map((question) => {
                      return (
                        <div class="flex text-[14px]">
                          <input type="checkbox" id={question.id} name={question.name} value={question.value}/>
                          <label htmlFor={question.id}>
                            <span dangerouslySetInnerHTML={{ __html: question.text }}></span>
                          </label>
                        </div>
                      )
                    })}
                  </fieldset>
                </div>
                <div class="w-full relative pb-[10px] max-w-full">
                  <label htmlFor={form.textArea.id} class="font-bold mb-[5px] block text-[14px]">
                    <span dangerouslySetInnerHTML={{ __html: form.textArea.text }}></span>
                  </label>
                  <div class="relative text-[14px]">
                    <textarea id={form.textArea.id} name={form.textArea.name} class="h-[160.75px] block w-full box-border border-[1px] border-solid border-[#bcbcbc] p-[8px] text-[14px]"></textarea>
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
    </>
  );
}

export default AnyQuestions;
