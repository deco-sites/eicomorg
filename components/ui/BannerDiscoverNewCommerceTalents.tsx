import { JSX } from "preact";
import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface ActionButton {
  text: string;
  href: string;
}

export interface BannerBackgroundImage {
  desktop: LiveImage;
  mobile: LiveImage;
}

export interface ActionLinksContainer {
  title: HTML;
  button: ActionButton;
}

export interface Image {
  src: LiveImage;
  alt: string;
}

export interface Props {
  image: Image;
  title: string;
  backgroundImage: BannerBackgroundImage;
  actionLinksContainer: ActionLinksContainer;
}

function BannerSection(
  { image, title, backgroundImage, actionLinksContainer }: Props,
) {
  const titleContainer: JSX.CSSProperties = {
    backgroundColor: "#fff",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 85% 100%, 0% 100%)",
    color: "#262628",
  };

  return (
    <div
      class="container-fluid top-[65px] grid relative px-4 lg:h-[640px]"
      style={{ backgroundColor: "#f3f3f3" }}
    >
      <div class="
        lg:w-1/3
        lg:mx-[7rem]
        xl:mx-[35rem]
        sm:w-auto
        z-[1]
      ">
        <div class="lg:mx-8 xl:mx-36 lg:my-16 w-full my-64 mb-0">
          <div
            class="
            lg:w-[660px]
            lg:h-[300px]
            lg:leading-[54px]
            lg:px-12
            lg:py-12 
            lg:text-[44px]
            
            md:text-[52px]
            md:leading-[60px]
            md:px-5
            md:py-10

            xs:leading-[38px]
            xs:text-[32px]
            xs:py-8
            xs:px-8

            w-full
            h-auto

            font-bold
            font-AvenirNextLTPro"
            style={titleContainer}
          >
            <img
              class="lg:w-[210px] xs:w-[150px] pb-[40px]"
              src={image.src}
              alt={image.alt}
            />
            {title}
          </div>
        </div>

        <div class="
          lg:w-[460px]
          lg:mx-20
          xl:mx-44

          md:px-4

          py-8
        ">
          <span
            class="text-[16px]"
            dangerouslySetInnerHTML={{ __html: actionLinksContainer.title }}
          >
          </span>

          <div class="mt-6">
            <a
              class="bg-[#f26f21] font-Gravity uppercase py-[16px] px-[24px] text-white font-semibold rounded"
              href={actionLinksContainer.button.href}
            >
              {actionLinksContainer.button.text}
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${backgroundImage.desktop})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 0,
        }}
        class={`hidden lg:block w-[76%] xl:bg-[80%] h-full absolute top-0 right-0 animate-slide-banner-right`}
      >
      </div>

      <div
        style={{
          backgroundImage: `url(${backgroundImage.mobile})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          zIndex: 0,
        }}
        class={`lg:hidden w-full h-[200px] absolute top-0 right-0 `}
      >
      </div>
    </div>
  );
}

export default BannerSection;
