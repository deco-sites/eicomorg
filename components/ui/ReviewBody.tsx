import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Article {
    image: {
        src: LiveImage;
        alt: string;
    }
    type: HTML;
    title: HTML;
    text: HTML;
    date: HTML;
    href: string;
}


export interface Props {
  article1: Article;
  article2: Article;
  article3: Article;
  // featuredArticle: HTML;
  // article4: Article;
  // article5: Article;
  // article6: Article;
  // article7: Article;  
}

function ReviewBody(
  {
    article1, article2, article3
  }: Props,
) {
  return (
    <>
      <div class="min-h-[80vh] border-[1px] border-white border-solid lg:py-[60px] xs:pt-[10px] xs:px-[10px] md:pt-5 md:px-5 md:pb-0 lg:px-0">
        <div class="z-auto max-w-[1120px] md:px-0 relative mx-auto">

					{/* article 1 */}
					<div class="mb-[60px] py-0">
						<div role="list" class="">
							<div role="listitem">
								<a href={article1.href} class="cursor-pointer bg-white border-[1px] border-[#dfdfdf] border-solid rounded flex-row justify-between items-stretch flex relative max-w-full
								hover:shadow-[1px_1px_10px_rgba(0,0,0,0.2)] mx-auto group">
									<div class="bg-white border-[#dfdfdf] rounded pb-0">
										<div class="items-stretch mx-[-10px] lg:flex xs:block">
											<div class="self-end lg:w-[41.67%] xs:w-full xs:text-left md:text-center float-left lg:px-[10px] md:pl-0 md:pr-[10px] transition-all duration-200 relative">
												<Image
												src={article1.image.src}
												alt={article1.image.alt}
												height={454}
												width={454}
												loading="lazy"
												class="mix-blend-multiply lg:max-w-full xs:max-w-[300px] md:mx-auto align-middle inline-block"/>
												<div class="bg-[#f26f21] w-0 h-1 transition-all duration-1000 lg:group-hover:w-full"></div>
											</div>
											<div class="lg:pt-[60px] lg:pr-[60px] lg:pb-10 md:py-0 xs:px-10 lg:pl-5 lg:w-[58.33%] xs:w-full float-left relative">
												<div class="mt-[10px] mb-0 font-Gravity text-[13px] leading-[16px] pr-[2px] text-left">
													<p>
														<span dangerouslySetInnerHTML={{__html: article1.type}}></span>
													</p>
												</div>
												<div class="pt-[10px]">
													<h1 class="md:text-[48px] md:leading-[58px] xs:text-[32px] xs:leading-[38px] my-5 font-AvenirNextLTPro">
														<span dangerouslySetInnerHTML={{__html: article1.title}}></span>
													</h1>
												</div>
												<div class="pb-[10px]">
													<div class="font-Gravity md:text-[16px] lg:leading-[1.6rem] md:leading-5 xs:text-[14px] xs:leading-[22px] text-left mb-[10px]">
														<p>
															<span dangerouslySetInnerHTML={{__html: article1.text}}></span>
														</p>
													</div>
													<div class="flex-start mb-5 flex md:items-start xs:items-center">
														<div class="font-Gravity text-[13px] leading-[16px] text-left pr-1">
															<p>
																<span dangerouslySetInnerHTML={{__html: article1.date}}></span>
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>

					{/* articles 2 and 3 */}
					<div class="">
						<div role="list" class="md:mx-[-10px] xs:mx-[10px]">
							{/* article 2 */}
							<div role="listitem" class="md:w-1/2 xs:w-full float-left md:px-[10px] xs:px-0 md:mb-0 xs:mx-0 relative">
								<a href={article2.href} class="cursor-pointer bg-white border-[1px] border-[#dfdfdf] border-solid rounded flex-row justify-between items-stretch flex relative max-w-full
								hover:shadow-[1px_1px_10px_rgba(0,0,0,0.2)] mx-auto group mb-5">
									<div class="rounded p-0 md:max-w-[400px] lg:max-w-full md:mx-auto">
										<div
											style={{
												backgroundImage: `url(${article2.image.src})`,
												backgroundRepeat: "no-repeat",
												backgroundSize: "cover",
												backgroundColor: "#f5f6f6",
											}}
											class="h-[180px] border-t-[4px] lg:bg-[50% 40%] xs:bg-[50%]"></div>
										<div class="bg-[#f26f21] w-0 h-1 transition-all duration-1000 lg:group-hover:w-full"></div>
										<div class="md:h-[250px] xs:h-auto xs:pb-0 flex-col flex justify-around py-[10px] px-[20px]">
											<div class="mt-[10px] mb-0 font-Gravity text-[13px] leading-[16px] pr-[2px] text-left">
												<p>
													<span dangerouslySetInnerHTML={{__html: article2.type}}></span>
												</p>
											</div>
											<h3 class="mt-[10px] font-AvenirNextLTPro text-[22px] leading-[28px] mb-0">
												<span dangerouslySetInnerHTML={{__html: article2.title}}></span>
											</h3>
											<div class="h-[60px] max-h-[60px] mt-0 mb-[10px] font-Gravity text-[15px] leading-[20px] overflow-hidden text-left">
												<p>
													<span dangerouslySetInnerHTML={{__html: article2.text}}></span>
												</p>
											</div>
											<div class="flex-start mb-5 flex md:items-start xs:items-center pr-0">
												<div class="font-Gravity text-[13px] leading-[16px] text-left pr-1">
													<p>
														<span dangerouslySetInnerHTML={{__html: article1.date}}></span>
													</p>
												</div>
											</div>
										</div>
									</div>
								</a>
							</div>
							{/* article 3 */}
							<div role="listitem" class="md:w-1/2 xs:w-full float-left md:px-[10px] xs:px-0 md:mb-0 xs:mx-0 relative">
								<a href={article3.href} class="cursor-pointer bg-white border-[1px] border-[#dfdfdf] border-solid rounded flex-row justify-between items-stretch flex relative max-w-full
								hover:shadow-[1px_1px_10px_rgba(0,0,0,0.2)] mx-auto group mb-5">
									<div class="rounded p-0 md:max-w-[400px] lg:max-w-full md:mx-auto">
										<div
											style={{
												backgroundImage: `url(${article3.image.src})`,
												backgroundRepeat: "no-repeat",
												backgroundSize: "cover",
												backgroundColor: "#f5f6f6",
											}}
											class="h-[180px] border-t-[4px] lg:bg-[50% 40%] xs:bg-[50%]"></div>
										<div class="bg-[#f26f21] w-0 h-1 transition-all duration-1000 lg:group-hover:w-full"></div>
										<div class="md:h-[250px] xs:h-auto xs:pb-0 flex-col flex justify-around py-[10px] px-[20px]">
											<div class="mt-[10px] mb-0 font-Gravity text-[13px] leading-[16px] pr-[2px] text-left">
												<p>
													<span dangerouslySetInnerHTML={{__html: article3.type}}></span>
												</p>
											</div>
											<h3 class="mt-[10px] font-AvenirNextLTPro text-[22px] leading-[28px] mb-0">
												<span dangerouslySetInnerHTML={{__html: article3.title}}></span>
											</h3>
											<div class="h-[60px] max-h-[60px] mt-0 mb-[10px] font-Gravity text-[15px] leading-[20px] overflow-hidden text-left">
												<p>
													<span dangerouslySetInnerHTML={{__html: article3.text}}></span>
												</p>
											</div>
											<div class="flex-start mb-5 flex md:items-start xs:items-center pr-0">
												<div class="font-Gravity text-[13px] leading-[16px] text-left pr-1">
													<p>
														<span dangerouslySetInnerHTML={{__html: article3.date}}></span>
													</p>
												</div>
											</div>
										</div>
									</div>
								</a>
							</div>

						</div>
					</div>

					{/*  */}
        </div>
      </div>
    </>
  );
}

export default ReviewBody;
