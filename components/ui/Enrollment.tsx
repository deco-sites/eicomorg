import Image from "deco-sites/std/components/Image.tsx";
import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface Card {
  leftText: HTML
  rightText: HTML
}

export interface Props {
    cards: Card[]
}

function Enrollment(
  { cards = [] }: Props,
) {
  const [elementRef, isShown] = useScrollShow();

  return (
    <>
      <div
        ref={elementRef as Ref<HTMLDivElement>}
        class="md:pt-[100px] md:pb-[60px] xs:py-[40px] md:px-0 xs:px-5 box-border md:h-[550px] xs:h-[780px]"
      >
        <div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
					<div class="lg:w-[80%] md:w-auto float-left lg:mb-[60px] md:mb-5 md:px-5 lg:px-0 xs:mb-0 xs:px-0">
						<div>
							{cards.map((card, index) => {
								return (
									<>
										<div class={`md:mx-[-10px] xs:mx-0
										 ${isShown ? "animate-slide-left" : ""}`}
										style={{ animationDelay: `${index * 120}ms` }}>
											<div class="md:w-1/4 xs:w-full float-left md:px-[10px] xs:px-0 relative md:mb-10">
												<h3 class="my-[10px] text-[20px] font-AvenirNextLTPro leading-[28px]">
													<span dangerouslySetInnerHTML={{__html: card.leftText}}></span>
												</h3>
											</div>
											<div class="md:w-[75%] xs:w-full float-left md:px-[10px] xs:px-0 relative mb-10">
												<div class="md:border-l-[1px] md:border-l-solid md:border-l-[#dfdfdf] md:pl-[30px]">
													<p class="font-Gravity text-[16px] text-left mt-[10px] leading-[1.6rem]">
														<span dangerouslySetInnerHTML={{__html: card.rightText}}></span>
													</p>
												</div>
											</div>
										</div>
									</>
								)
							})}
						</div>
					</div>
        </div>
      </div>
    </>
  );
}

export default Enrollment;
