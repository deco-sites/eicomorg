import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface Highlights {
  image: {
    src: LiveImage;
    alt: string;
  };
  title: HTML
}

export interface Props {
  title: HTML;
  topText: HTML
  highlights: Highlights[];
  youtubeText: HTML;
  youtubeURL: string;
}

function ShapeTheFuture(
  {
    title,
    topText,
    highlights = [],
    youtubeText,
    youtubeURL,
  }: Props,
) {
  return (
    <>
      <div class="py-[100px] bg-[#f3f3f3] box-border">
				<div class="max-w-[1120px] mx-auto ">
					<div class="mb-0 py-5">
							<h1 class="text-center font-AvenirNextLTPro my-5 block text-[28px] leading-[34px]">
								<span dangerouslySetInnerHTML={{__html: title}}></span>
							</h1>
							<div class="text-center text-[16px] leading-[1.6rem] mb-[10px] mt-0">
							<p >
								<span dangerouslySetInnerHTML={{__html: topText}}></span>
							</p>
							</div>
					</div>
					<div class="mx-[-10px]">
						{highlights.map((highlight) => {
							return (
								<div class="justify-start mb-5 flex items-start md:w-1/3 float-left px-[10px] relative">
									<Image
									src={highlight.image.src}
									alt={highlight.image.alt}
									width={60}
									height={60}
									class="w-[60px] h-[60px] mt-[10px] mr-[10px] max-w-full align-middle inline-block"/>
									<h3 class="text-[18px] leading-[24px] font-AvenirNextLTPro mt-5 mb-[10px] ">
										<span dangerouslySetInnerHTML={{__html: highlight.title}}></span>
									</h3>
								</div>
							)
						})}
					</div>
					<div class="py-10">
						<div class="text-center text-[16px] leading-[1.6rem] font-Gravity mb-[20px] mt-0">
							<p>
								<span dangerouslySetInnerHTML={{__html: youtubeText}}></span>
							</p>
						</div>
						{/* <div class="max-w-[700px] mx-auto py-0">
							<div style={{paddingTop: "56.17021276595745%"}} class="w-full relative p-0">
								<iframe 
								class="w-full h-full border-0 absolute left-0 right-0"
								src={`${youtubeURL}`}
								scrolling="no"
								allowFullScreen
								title="In-Company Digital Commerce Education | Testimonials from VTEX Digital Commerce Specialist students">
								</iframe>
							</div>
						</div> */}
					</div>
				</div>
			</div>
    </>
  );
}

export default ShapeTheFuture;
