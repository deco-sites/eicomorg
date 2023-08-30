import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Link {
  text: HTML
  arrowImage: LiveImage;
  href: string;
}

export interface Props {
  title: HTML;
  logo: {
    src: LiveImage;
    alt: string;
  }
  text: HTML
  link: Link;
}

function Brand(
  { title, text, logo, link }: Props,
) {
  return (
    <>
      <div
        class={`bg-[#f3f3f3] lg:py-[100px] md:py-[60px] lg:h-[400px] md:h-[320px] xs:h-[350px] md:px-5 lg:px-0 xs:px-[10px] xs:py-[40px] box-border`}
      >
				<div class="md:max-w-[1120px] xs:max-w-none mx-auto">
					<div class="md:mx-[-10px] xs:mx-0">
						<div class="md:w-1/3 xs:w-full float-left px-[10px] relative text-right">
						<Image
									loading="lazy"
                  src={logo.src}
                  alt={logo.alt}
                  width={240}
                  height={90}
                  class="w-[240px] h-[90px] text-right py-[4px] block max-w-full align-middle"
                />
						</div>
						<div class="md:w-2/3 xs:w-full float-left px-[10px] relative">
							<h2 class="font-AvenirNextLTPro text-left block my-5 md:text-[30px] md:leading-[34px] xs:text-[26px] xs:leading-[32px]">
								<span dangerouslySetInnerHTML={{ __html: title }}></span>
							</h2>
							<div class="text-left font-Gravity mb-[10px] xs:text-[14px] xs:leading-[22px] md:leading-[1.6rem] md:text-[16px]">
								<p class="">
									<span dangerouslySetInnerHTML={{ __html: text }}></span>
								</p>
							</div>
							<a
								href={link.href}
								class="tracking-[1px] uppercase cursor-pointer font-AvenirNextLTPro font-bold inline-block
								border-0 py-[9px] pr-[30px] text-[14px] lg:hover:pr-[34px] lg:hover:underline text-[#f26f21]"
								style={{
									backgroundImage: `url(${link.arrowImage})`,
									backgroundRepeat: "no-repeat",
									backgroundPosition: "100%",
									backgroundSize: "20px",
									backgroundColor: "rgba(0, 0, 0, 0)",
								}}
							>
								<span dangerouslySetInnerHTML={{ __html: link.text }}></span>
							</a>
						</div>
					</div>
				</div>
      </div>
    </>
  );
}

export default Brand;
