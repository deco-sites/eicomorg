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
  title: string;
  backgroundImage: BannerBackgroundImage;
  actionLinksContainer: ActionLinksContainer;
}

function BannerSectionForIndividuals(
  { title, backgroundImage, actionLinksContainer }: Props,
) {
  const titleContainer: JSX.CSSProperties = {
    backgroundColor: "#fff",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 85% 100%, 0% 100%)",
    color: "#262628",
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
      class="container-fluid top-[65px] grid relative px-4 lg:h-[720px]"
      style={{ backgroundColor: "#f3f3f3" }}
    >
      <div class="lg:w-1/3 lg:ml-6 lg:mx-0 xl:mx-56 sm:w-auto z-[1]">
        <div class="lg:mx-8 xl:mx-36 lg:my-16 w-full my-64 mb-0">
          <div
            class="
            lg:w-[820px]
            lg:h-[330px]
            lg:leading-[68px]
            lg:px-12
            lg:py-6 
            lg:text-[55px]
            
            md:text-[48px]
            md:leading-[60px]
            md:px-4 
            md:py-4

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
            {title}
          </div>
        </div>

        <div class="
          lg:w-[460px]
          lg:mx-20
          xl:mx-44
          lg:mt-[-50px]
          py-2
        ">
          <span
            class="text-[18px]"
            dangerouslySetInnerHTML={{ __html: actionLinksContainer.title }}
          >
          </span>
          <a
            class="w-fit block bold my-4 font-bold hover:underline pr-[30px] hover:pr-[34px] uppercase tracking-[1px] font-AvenirNextLTPro"
            style={actionLinkBtn}
            href={actionLinksContainer.firstButton.href}
          >
            {actionLinksContainer.firstButton.text}
          </a>
          <a
            class="w-fit block bold my-2 font-bold hover:underline pr-[30px] hover:pr-[34px] uppercase tracking-[1px] font-AvenirNextLTPro"
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
        class={`hidden lg:block w-5/6 xl:bg-[80%] lg:bg-[-45%_100%] h-full absolute top-0 right-0`}
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
        class={`lg:hidden w-full h-[300px] absolute top-0 right-0`}
      >
      </div>
    </div>
  );
}

export default BannerSectionForIndividuals;
