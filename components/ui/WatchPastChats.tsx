import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Card {
  youtubeURL: string;
  youtubeImage: LiveImage;
  title: HTML;
  text: HTML;
  avatar: LiveImage;
  person: HTML;
}

export interface Navigation {
  text: HTML;
  url: string;
}

export interface Props {
  title: HTML;
  cards: Card[];
  clickImage: LiveImage;
  previous: Navigation;
  next: Navigation;
  firstPage?: boolean
  lastPage?: boolean
}

function WatchPastChats(
  {
    title,
    cards =[],
    clickImage,
    previous,
    next,
    firstPage,
    lastPage
  }: Props,
) {
  return (
    <>
      <div class="lg:py-[60px] xs:py-[40px] xs:px-[10px] lg:px-0 box-border bg-[#f3f3f3]">
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
          <div class="py-[40px] block"></div>
          <h1 class="text-left uppercase block my-5 font-AvenirNextLTPro md:leading-[34px] md:text-[30px] xs:leading-[32px] xs:text-[26px]">
            <span dangerouslySetInnerHTML={{__html: title}}></span>
          </h1>
          <div class="block">
            <div role="list" class="">
              {cards.map((card) => {
                return (
                  <div role="listitem" class="w-full text-left bg-[#f3f3f3] border-b-[1px] border-b-[#dfdfdf] border-b-solid rounded-sm flex-col justify-around mr-[16px] pt-[30px] pb-[20px] flex">
                    <div>
                      <div class="lg:w-1/3 xs:w-full xs:text-center lg:text-left float-left md:pr-[10px] xs:px-0 relative">
                        <a href={card.youtubeURL} class="md:w-[320px] md:h-[180px] xs:w-full xs:h-[200px]   max-w-full inline-block"
                        style={{
                          backgroundImage: `url(${card.youtubeImage})`,
                          backgroundPosition: "50%",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}>
                          <div class="md:w-[320px] md:h-[180px] xs:w-full xs:h-[200px] opacity-80 hover:opacity-100 cursor-pointer transition-opacity"
                            style={{
                              backgroundImage: `url(${clickImage})`,
                              backgroundPosition: "50%",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "60px 60px",
                              backgroundColor: "rgba(10, 34, 59, .42)"
                            }}></div>
                        </a>
                      </div>
                      <div class="lg:pl-0 lg:w-2/3 xs:w-full float-left lg:pr-[10px] relative xs:text-center lg:text-left md:px-5 xs:px-[10px]">
                        <h4 class="font-AvenirNextLTPro text-[20px] mb-[10px] leading-[24px] ">
                          <span dangerouslySetInnerHTML={{__html: card.title}}></span>
                        </h4>
                        <div class="font-Gravity text-[14px] leading-[20px] text-left mb-[10px]">
                          <p>
                            <span dangerouslySetInnerHTML={{__html: card.text}}></span>
                          </p>
                        </div>
                        <div class="items-center py-[10px] flex">
                          <div class="w-[45px] h-[45px] rounded-[40px] border-[2px] border-solid border-[#dfdfdf] mr-[10px]"
                          style={{
                            backgroundImage: `url(${card.avatar})`,
                            backgroundPosition: '50%',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                          }}>
                          </div>
                          <div class="font-Gravity text-[14px] leading-[20px]">
                            <span dangerouslySetInnerHTML={{__html: card.person}}></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div role="navigation" class="pt-5 block bg-[#f3f3f3] h-[80px]">
              {!firstPage && (
                <a href={previous.url} class="float-left bg-[#f3f3f3] border-[#f3f3f3] font-Gravity mx-[10px] py-[9px] px-[20px] text-[14px] block cursor-pointer hover:border-[#d9d9e2] hover:border-[1px] hover:border-solid">
                  <div class="max-w-full inline-flex items-center">
                  <Icon
                    id='ChevronLeft'
                    width={12}
                    height={12}
                    strokeWidth={2}
                    class="mr-[4px] text-[#f26f21] h-[12px]"
                  />
                    <span dangerouslySetInnerHTML={{__html: previous.text}}></span>
                  </div>
                </a>
              )}
              {!lastPage && (
              <a href={next.url} class="float-right bg-[#f3f3f3] border-[#f3f3f3] font-Gravity mx-[10px] py-[9px] px-[20px] text-[14px] block cursor-pointer static  hover:border-[#d9d9e2] hover:border-solid hover:border-[1px]">
                <div class="max-w-full inline-flex items-center">
                  <span dangerouslySetInnerHTML={{__html: next.text}}></span>
                  <Icon
                    id='ChevronRight'
                    width={12}
                    height={12}
                    strokeWidth={2}
                    class="ml-[4px] text-[#f26f21] h-[12px]"
                  />
                </div>
              </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchPastChats;
