import { JSX } from "preact";
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

export interface ActionLinksContainer {
  title: HTML;
  firstButton: ActionLink;
  secondButton: ActionLink;
}

export interface Props {
  padding: string;
  title: HTML;
  backgroundImage: BannerBackgroundImage;
  actionLinksContainer: ActionLinksContainer;
}

function BannerSection(
  { padding, title, backgroundImage, actionLinksContainer }: Props,
) {
  const getSize = (size: string) => {
    if (size == "small") {
      return "100px";
    }

    return "100px";
  };

  const margin = getSize("small");
  const marginTitle = "3rem";
  const paddingTitle = "2rem";
  const paddingParagraph = "4rem";

  const titleContainer: JSX.CSSProperties = {
    backgroundColor: "#fff",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 85% 100%, 0% 100%)",
    color: "#262628",
    paddingTop: paddingTitle,
    paddingBottom: paddingTitle,
  };

  const actionLinkBtn: JSX.CSSProperties = {
    color: "#f4742d",
    backgroundImage: `url(/icons/Arrow-right-ORANGE.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "20px",
    backgroundPosition: "100%",
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
        <div
          class="lg:mx-8 xl:mx-36 w-full my-64 mb-0"
          style={{ marginTop: marginTitle, marginBottom: marginTitle }}
        >
          <div
            class="
            lg:w-[660px]
            lg:h-[300px]
            lg:leading-[54px]
            lg:px-12
            lg:text-[58px]
            
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
            <span
              class="text-[18px]"
              dangerouslySetInnerHTML={{ __html: title }}
            >
            </span>
          </div>
        </div>

        <div
          class="
          lg:w-[460px]
          lg:mx-20
          xl:mx-44

          md:px-4
        "
          style={{ marginTop: paddingParagraph }}
        >
          <span
            class="text-[18px] [&>*]:font-Gravity"
            dangerouslySetInnerHTML={{ __html: actionLinksContainer.title }}
          >
          </span>
          <a
            class="w-fit lg:text-[14px] xs:text-[14px] block bold lg:my-4 xs:my-2 font-bold hover:underline pr-[30px] hover:pr-[34px] uppercase tracking-[1px] font-AvenirNextLTPro"
            style={actionLinkBtn}
            href={actionLinksContainer.firstButton.href}
          >
            {actionLinksContainer.firstButton.text}
          </a>
          <a
            class="w-fit lg:text-[14px] xs:text-[14px] block bold lg:my-2 xs:my-4 font-bold hover:underline pr-[30px] hover:pr-[34px] uppercase tracking-[1px] font-AvenirNextLTPro"
            style={actionLinkBtn}
            href={actionLinksContainer.secondButton.href}
          >
            {actionLinksContainer.secondButton.text}
          </a>
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
          backgroundSize: "cover",
          backgroundPosition: "80%",
          zIndex: 0,
        }}
        class={`lg:hidden w-full h-[300px] absolute top-0 right-0 `}
      >
      </div>
    </div>
  );
}

export default BannerSection;
