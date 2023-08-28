import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface FormData {
  fields: Array<{
    placeholder?: string;
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
  title: HTML;
	text: HTML;
  form: FormData;
}

function GetYourBrochure(
  {
		backgroundImage,
    title,
		text,
    form,
  }: Props,
) {
  const [elementRef, isShown] = useScrollShow();
  return (
    <>
      <div
        class={`lg:py-[100px] md:py-[60px] md:px-5 lg:px-0 xs:px-[10px] xs:py-[40px] box-border bg-[#f3f3f3]`}
        ref={elementRef as Ref<HTMLDivElement>}
				style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 500px",
          backgroundPosition: "0 0",
        }}
      >
				<div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
					<div class="mb-0 py-5">
						<h1 class="font-AvenirNextLTPro text-center my-5 lg:text-[28px] lg:leading-[34px] xs:text-[26px] xs:leading-[32px] bloco">
							<span dangerouslySetInnerHTML={{__html: title}}></span>
						</h1>
						<p class={`text-center font-Gravity mb-[10px] xs:text-[14px] xs:leading-[22px] md:leading-[1.6rem] md:text-[16px]
						${isShown ? "animate-slide-left" : ""}`}>
							<span dangerouslySetInnerHTML={{__html: text}}></span>
						</p>
					</div>
				</div>
				<div class="max-w-[700px] mx-auto">
					<div>
						<form
							action={form.action}
							method="POST"
							class="text-left relative max-w-[500px] mt-[25px] bg-white mx-auto mb-0 p-5"
						>
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
													placeholder={field.placeholder}
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
										class="btn cursor-pointer text-[14px]  text-center font-light border-0 rounded text-white p-4 outline-0"
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

export default GetYourBrochure;
