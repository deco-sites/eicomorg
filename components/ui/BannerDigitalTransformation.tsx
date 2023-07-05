import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface ActionLink {
  text: string;
  href: string;
}

export interface BannerBackgroundImage {
  desktop: LiveImage;
  mobile: LiveImage;
}

export interface ActionButton {
  content: string;
  href: string;
}

export interface Image {
  source: LiveImage;
  alt: string;
}

export interface Props {
  image?: Image;
  title: string;
  button: ActionButton;
  backgroundImage: BannerBackgroundImage;
  footerContent: HTML;
}

function BannerDigitalTransformation(
  { title, image, backgroundImage, button, footerContent }: Props,
) {
  return (
    <div class="translate-y-[70px]">
      <div class="container-fluid grid relative lg:h-[640px] bg-[#585858]">
        <div class="lg:w-[1120px] md:w-full h-full block mx-auto z-[2]">
          <div class="md:py-[60px] xs:py-[30px] lg:w-7/12 md:w-full xs:w-11/12 xs:m-auto md:m-0 md:px-5 lg:px-0 md:leading-[62px] xs:leading-[42px] text-[#fefefe]">
            {image
              ? (
                <img
                  class="w-[152px] h-[54px] xs:hidden lg:block"
                  src={image.source}
                  alt={image.alt}
                />
              )
              : <></>}

            <div class="lg:my-9 md:my-3 lg:mb-[72px] md:mb-[40px] xs:mb-[35px]">
              <h1 class="lg:text-[58px] md:text-[52px] xs:text-[32px] font-AvenirNextLTPro">
                {title}
              </h1>
            </div>

            <a
              href={button.href}
              class="rounded bg-[#f26f21] font-bold uppercase px-[24px] xs:block md:inline-block xs:w-full md:w-auto cursor-pointer text-center"
            >
              {button.content}
            </a>

            <div
              class="richtext lg:my-6 md:my-0"
              dangerouslySetInnerHTML={{ __html: footerContent }}
            />
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${backgroundImage.desktop})` }}
          class={`hidden lg:block w-full bg-[100%] h-full absolute top-0 right-0 bg-contain bg-no-repeat z-0`}
        >
        </div>

        <div
          style={{ backgroundImage: `url(${backgroundImage.mobile})` }}
          class={`lg:hidden w-full md:bg-[80%] xs:bg-[100%] bg-cover bg-no-repeat md:h-[300px] xs:h-[200px] block z-0`}
        >
        </div>
      </div>
    </div>
  );
}

export default BannerDigitalTransformation;
