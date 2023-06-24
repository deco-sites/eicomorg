import type {
    HTML,
    Image as LiveImage,
  } from "deco-sites/std/components/types.ts";


export interface TopText {
  title: HTML;
  text: HTML;
}

export interface FormData {
  fields: Array<{
    placeholder: string;
    field: string;
    id: string;
    required: boolean;
  }>;
  action: string;
  buttonColor: string;
  buttonText: string;
  buttonUrl: string;
}

export interface Props {
  backgroundImage: LiveImage;
  topText: TopText;
  form: FormData;
}

function Brochure(
    { topText, form, backgroundImage }: Props,
  ) {
    return (
      <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 500px",
          backgroundPosition: "0 0",
        }}
        class="py-24"
      >
        <div class="max-w-[1120px] mx-auto">
            <div class="text-center mt-14 py-0">
                <h2 class="text-center my-5 block text-3xl">
                  <span dangerouslySetInnerHTML={{ __html: topText.title }}></span>
                </h2>
                <p class="text-center md:text-base font-normal mb-3">
                  <span dangerouslySetInnerHTML={{ __html: topText.text }}></span>
                </p>
                <div class="max-w-[700px] mx-auto">
                  <div>
                    <form action={form.action} class="text-left relative max-w-[500px] my-6 mx-auto mb-0 p-5">
                      <div>
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
                                data-name={field.id}
                                required={field.required}
                                class="p-2 h-auto block rounded text-sm border border-[#dfdfdf] border-solid w-full"
                              />
                            </div>
                          </div>
                        );
                      })}
                      <div class="w-full outline-0 ">
                        <button
                          type="submit"
                          class="btn cursor-pointer text-sm text-center font-light border-0 rounded text-white p-4 outline-0"
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
      </>
    );
  }
  
  export default Brochure;