import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface ListItems {
  image: LiveImage;
  text: HTML;
}

export interface Props {
  backgroundImage: LiveImage;
  image: LiveImage;
  title: HTML;
  listItems: ListItems[];
  /**
   * @description Maximum of 4 courses
   */
}

function Courses(
  {
    backgroundImage,
    image,
    title,
    listItems = [],
  }: Props,
) {
  const [elementRef, isShown] = useScrollShow();
  return (
    <>
      <div
        class="lg:py-[100px] md:py-[60px] md:px-5 lg:px-0 xs:px-[10px] xs:py-[40px] box-border"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 500px",
          backgroundPosition: "0 0",
        }}
        ref={elementRef as Ref<HTMLDivElement>}
      >
        <div class="md:max-w-[1120px] xs:max-w-none mx-auto">
          <div class="md:mx-[-10px] xs:mx-0">
            <div class="md:w-1/2 xs:w-full left-auto right-auto float-left px-[10px] relative">
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "cover",
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 75%, 82% 100%, 0% 100%)",
                }}
                class="lg:block xs:hidden lg:w-[600px] lg:h-[400px]"
              >
              </div>
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 75%, 82% 100%, 0% 100%)",
                }}
                class="lg:hidden xs:hidden md:block w-[500px] h-[300px]"
              >
              </div>
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "50%",
                  clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
                }}
                class="md:hidden xs:block w-auto h-[200px]"
              >
              </div>
            </div>
            <div
              class={`md:w-1/2 xs:w-[98%] left-auto right-auto float-left px-[10px] relative
							`}
            >
              <div
                class={`rounded-sm bg-[#fff] md:p-10 xs:pt-5 xs:pl-5 xs:pr-[10px] absolute md:top-[60px] bottom-auto md:left-[-68px]
							shadow-[4px_4px_7px_rgba(38,38,40,0.1)]  ${
                  isShown ? "animate-slide-left" : ""
                }`}
              >
                <div class="text-left pb-[10px] font-Gravity lg:text-[22px] lg:leading-[30px] md:text-[20px] md:leading-[28px] xs:text-[16px] xs:leading-[24px] mb-[10px">
                  <p>
                    <span dangerouslySetInnerHTML={{ __html: title }}></span>
                  </p>
                </div>
                <ul role="list" class="pl-0 list-none mt-0 mb-[10px]">
                  {listItems.map((listItem) => {
                    return (
                      <li
                        style={{
                          backgroundImage: `url(${listItem.image})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "16px",
                          backgroundPosition: "0%",
                        }}
                        class="py-[10px] pl-[30px]"
                      >
                        <div class="text-left font-Gravity text-[16px] lg:leading-[24px] md:leading-[20px] xs:text-[16px] xs:leading-[24px]">
                          <p>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: listItem.text,
                              }}
                            >
                            </span>
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
