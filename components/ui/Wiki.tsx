import type { HTML } from "deco-sites/std/components/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Pages {
  title: HTML;
  text: HTML;
  href: string;
}

export interface Subjects {
  title: HTML;
  subjects: Array<{
    text: HTML;
    href: string;
  }>;
}

export interface Props {
  topText: HTML;
  subjects: Subjects;
  pages: Pages[];
  arrowImage: LiveImage;
}

function Wiki(
  {
    topText,
    subjects,
    pages = [],
    arrowImage,
  }: Props,
) {
  return (
    <>
      <div class="mt-0 md:pt-[40px] md:pb-[60px] xs:pb-[10px] xs:pt-0 relative box-border lg:h-[4160px] md:h-[3850px] xs:h-[3600px]">
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
          <div class="ml-0 max-w-[560px] md:my-10 xs:mb-0 xs:mt-10 mx-auto pb-0">
            <div class="md:text-[16px] xs:text-[14px] xs:leading-[22px] font-Gravity text-left mb-[10px] md:leading-[1.6rem]">
              <p>
                <span dangerouslySetInnerHTML={{ __html: topText }}></span>
              </p>
            </div>
          </div>
          <div class="lg:px-[10px] lg:pt-10">
            <div class="md:mx-[-10px] xs:mx-0">
              <div class="lg:w-1/3 md:w-full md:mt-5 lg:mt-0 float-left px-[10px] relative">
                <h1 class="mt-0 mb-[10px] pt-[10px] font-AvenirNextLTPro text-[14px] leading-[20px] ">
                  <span dangerouslySetInnerHTML={{ __html: subjects.title }}>
                  </span>
                </h1>
                <div class="">
                  <div role="list" class="xs:flex xs:flex-wrap lg:block">
                    {subjects.subjects.map((subject) => {
                      return (
                        <div role="listitem" class="">
                          <div class="pb-[10px] md:inline-block md:pr-[10px] lg:pr-0">
                            <a
                              href={subject.href}
                              class="cursor-pointer bg-[#475769] rounded-2xl py-[4px] px-[16px] max-w-full inline-block hover:bg-[#f26f21]"
                              style={{
                                transition: "background-color .3s",
                              }}
                            >
                              <div class="font-Gravity text-[12px] leading-[16px]">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: subject.text,
                                  }}
                                >
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div class="lg:w-2/3 md:w-full float-left px-[10px] md:mt-5 lg:mt-0 relative">
                <div class="">
                  <div role="list">
                    {pages.map((page) => {
                      return (
                        <div role="listitem">
                          <div class="py-0 lg:px-[10px] md:px-0">
                            <a
                              href={page.href}
                              class="w-full border-b-[1px] border-b-solid border-b-[#eaeaea] 
                            lg:py-[10px] md:pt-[10px] md:pb-[4px] xs:py-[5px] pr-[40px] pl-[10px] max-w-full inline-block hover:bg-[#fcfcfc] bg-[98%] hover:bg-[99%]"
                              style={{
                                backgroundImage: `url(${arrowImage})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "18px",
                              }}
                            >
                              <h3 class="py-[4px] font-medium text-[16px] leading-[18px] cursor-pointer my-0 ">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: page.title,
                                  }}
                                >
                                </span>
                              </h3>
                              <div class="font-Gravity lg:h-[40px] xs:h-[34px] lg:text-[14px] lg:leading-[20px] md:text-[12px] md:leading-[16px] xs:text-[14px] xs:leading-[18px] block overflow-hidden text-left mb-[10px]">
                                <p>
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: page.text,
                                    }}
                                  >
                                  </span>
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wiki;
