import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface Card {
  image: {
		src: LiveImage;
		alt: string;
	};
  title: HTML;
	mainText: HTML;
	boldText: HTML;
  bottomImage?: {
		src: LiveImage;
		alt: string;
	};
}

export interface Props {
  title: HTML;
	text: HTML;
  cards: Card[];
}

function Methodology(
  {
    title,
		text, 
    cards = [],
  }: Props,
) {
  const [elementRef, isShown] = useScrollShow();
  return (
    <>
      <div
        class={`lg:py-[100px] md:py-[60px] md:px-5 lg:px-0 xs:px-[10px] xs:py-[40px] box-border`}
        ref={elementRef as Ref<HTMLDivElement>}
      >
		<div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
			<div class="mb-0 py-5">
				<h1 class="font-AvenirNextLTPro text-center my-5 lg:text-[28px] lg:leading-[34px] xs:text-[26px] xs:leading-[32px]">
					<span dangerouslySetInnerHTML={{__html: title}}></span>
				</h1>
				<p class="text-center font-Gravity mb-[10px] xs:text-[14px] xs:leading-[22px] md:leading-[1.6rem] md:text-[16px]">
					<span dangerouslySetInnerHTML={{__html: text}}></span>
				</p>
			</div>
			{cards.map((card) => {
				return (
					<div class={`md:w-[600px] xs:w-auto bg-[#fff] border-solid border-[1px] boder-[#dfdfdf] items-start md:mb-5 xs:mb-10 xs:mx-0 md:mx-auto md:pt-[40px] md:pr-[30px] md:pb-[30px] md:pl-0 md:flex xs:block xs:p-[10px]
					${isShown ? "animate-slide-left" : ""}`}>
						<div class={`md:w-[80px] md:h-[80px] xs:w-[70px] xs:h-[70px] md:max-w-[80px] md:min-w-[80px] xs:max-w-[70px] xs:min-w-[70px] bg-white border-[1px] border-[#262628] rounded-[40px] justify-center items-center md:ml-[-40px] md:mr-[30px] md:my-0 xs:mt-[-35px] mx-auto mb-[20px] pt-0 flex shadow-[1px_1px_7px_rgba(0,0,0, 0.2)]
						${isShown ? "animate-slide-right" : ""}`}>
							<Image
							src={card.image.src}
							alt={card.image.alt}
							width={50}
							height={50}
							class={`max-w-[50px] align-middle inline-block border-0
							`}
							/>
						</div>
						<div class="">
							<h4 class="uppercase mt-0 mb-[10px] text-[12px] leading-[16px] font-Gravity">
								<span dangerouslySetInnerHTML={{__html: card.title}}></span>
							</h4>
							<p class="font-Gravity text-[16px] text-left leading-[1.6rem] mb-[10px]">
								<span dangerouslySetInnerHTML={{__html: card.mainText}}></span>
							</p>
							<h3 class="uppercase text-[18px] leading-[24px] mb-[10px] font-AvenirNextLTPro">
							<span dangerouslySetInnerHTML={{__html: card.boldText}}></span>
							</h3>
							{card.bottomImage && (
								<Image
								src={card.bottomImage.src}
								alt={card.bottomImage.alt}
								width={540}
								height={289}
								class="max-w-full pt-5 align-middle border-0"
								/>
							)}
						</div>
					</div>
				)
			})}
		</div>
	</div>
    </>
  );
}

export default Methodology;
