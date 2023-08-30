import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
  
  export interface Card {
    name: HTML;
    role: HTML;
    image: LiveImage;
    linkedinURL: string
  }
  
  export interface Props {
    title: HTML;
    text: HTML;
    cards: Card[];
		linkedinImage: {
			src: LiveImage;
			alt: string
		}
  }
  
  function ProgrammesAndCertification(
    { title, text, cards = [], linkedinImage }: Props,
  ) {
  
    return (
      <>
				<div
					class={`lg:py-[100px] md:py-[60px] md:px-5 lg:px-0 xs:px-[10px] xs:py-[40px] box-border`}
				>
					<div class="z-auto max-w-[1120px] pr-0 relative mx-auto">
						<h2 class="font-AvenirNextLTPro text-center block my-5 lg:text-[28px] lg:leading-[34px] xs:text-[26px] xs:leading-[32px]">
								<span dangerouslySetInnerHTML={{ __html: title }}></span>
						</h2>
						<div class="max-w-[560px] my-10 mx-auto pb-0 md:px-0 xs:px-[10px]">
							<p class="text-center font-Gravity mb-[10px] xs:text-[14px] xs:leading-[22px] md:leading-[1.6rem] md:text-[16px]">
								<span dangerouslySetInnerHTML={{ __html: text }}></span>
							</p>
						</div>
						<div class="text-center pt-[10px]">
							<div role="list" class="text-center flex-wrap justify-center items-center flex">
								{cards.map((card) => {
									return (
										<div class="lg:w-[23%] xs:w-full md:w-[30%] m-[10px] group">
											<div class="cursor-pointer bg-[#fff] border-solid border-[1px] border-[#dfdfdf] rounded mx-0 p-0">
												<div
													style={{
														backgroundImage: `url(${card.image})`,
														backgroundSize: "cover",
														backgroundPosition: "50% 40%",
													}}
													class="h-[190px] cursor-pointer hover:filter-none filter grayscale">
													</div>
													<div class="bg-[#f26f21] w-0 h-1 transition-all duration-1000 group-hover:w-full"></div>
													<div class="h-[100px] text-left py-[8px] pl-[16px] pr-[12px]">
														<h3 class="mt-[10px] mb-0 text-[16px] leading-[20px] font-AvenirNextLTPro">
															<span dangerouslySetInnerHTML={{ __html: card.name }}></span>
														</h3>
														<div class="text-left font-Gravity mb-[10px] xs:text-[14px] xs:leading-[18px]">
															<p>
																<span dangerouslySetInnerHTML={{ __html: card.role }}></span>
															</p>
														</div>
														<a href={card.linkedinURL} target="_blank" class="max-w-full inline-block cursor-pointer">
														<Image
																src={linkedinImage.src}
																alt={linkedinImage.alt}
																width={24}
																height={24}
																class="text-[#0a66c2] w-full align-middle inline-block h-[24px]"
																loading="lazy"
															/>
														</a>
													</div>
											</div>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</div>
      </>
    );
  }
  
  export default ProgrammesAndCertification;
  