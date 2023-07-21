import type { HTML } from "deco-sites/std/components/types.ts";

export interface LeftText {
  title: HTML;
  subtitle: HTML;
  text: HTML;
}

export interface FormData {
  title: HTML;
  fields: Array<{
    placeholder: string;
    field: string;
    id: string;
  }>;
  action: string;
  buttonColor: string;
  buttonText: string;
}

export interface Props {
  leftText: LeftText;
  form: FormData;
}

function WaitingList(
  { leftText, form }: Props,
) {
  return (
    <>
      <div class="xs:py-10 xs:px-3 md:py-14 md:px-5 lg:px-0 lg:py-24 bg-gray-100 xs:h-[700px] md:h-[600px]">
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
          <h2 class="text-left my-5 xs:text-xl md:text-3xl font-bold block font-AvenirNextLTPro">
            <span dangerouslySetInnerHTML={{ __html: leftText.title }}></span>
          </h2>
          <div class="mx-[-10px] relative">
            <div class="pr-10 sticky top-24 md:w-1/1 lg:w-1/2 float-left md:mb-3 lg:mb-0 pl-3 ">
              <h3 class="text-lg md:mt-3 lg:mt-0 font-bold mt-5 mb-3 font-AvenirNextLTPro">
                <span dangerouslySetInnerHTML={{ __html: leftText.subtitle }}>
                </span>
              </h3>
              <p class="xs:text-[14px] xs:leading-[22px] xs:text-left md:text-[16px] font-Gravity font-normal  text-left mb-3">
                <span dangerouslySetInnerHTML={{ __html: leftText.text }}>
                </span>
              </p>
            </div>
            <div class="px-[10px] md:w-full md:mx-auto lg:w-1/2 float-left relative">
              <div class="bg-white p-[10px] xs:pr-10 md:pr-3">
                <h3 class="text-center text-lg mt-5 mb-[10px] font-AvenirNextLTPro">
                  <span dangerouslySetInnerHTML={{ __html: form.title }}></span>
                </h3>
                <div class="md:max-w-[550px] lg:max-w-[800px] mb-0 mx-auto pb-5">
                  <form
                    action={form.action}
                    class="text-[14px] leading-[1.6rem] relative text-left mt-[25px] mx-auto mb-0 py-5 xs:ml-5 md:ml-0 md:px-10 box-border"
                  >
                    {form.fields.map((field) => {
                      return (
                        <div class="w-full relative mb-3 max-w-full">
                          <label
                            htmlFor={field.id}
                            class="font-bold mb-2 block text-sm outline-0"
                          >
                            {field.field}
                          </label>
                          <div class="relative text-sm">
                            <input
                              type="text"
                              id={field.id}
                              name={field.id}
                              placeholder={field.placeholder}
                              data-name={field.id}
                              class="p-[8px] h-[35px] rounded-sm text-sm border border-[#bbbbbb] border-solid w-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                    <div class="w-full outline-0 ">
                      <button
                        type="submit"
                        class="btn cursor-pointer text-sm text-center font-light border-0 rounded text-white p-3 outline-0"
                        style={{
                          backgroundColor: form.buttonColor,
                          textTransform: "none",
                        }}
                      >
                        {form.buttonText}
                      </button>
                    </div>
                    <div class="clear-left"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WaitingList;
