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
      class="container-fluid top-[65px] grid relative px-4 md:h-[700px] lg:h-[680px] box-border"
      style={{ backgroundColor: "#f3f3f3" }}
    >
      <div class="z-[1] md:h-auto lg:h-[640px] xs:px-0 md:px-5 lg:px-0 md:pb-5 lg:pb-0 max-w-[1120px] box-border relative">
        <div class="lg:ml-[60px] h-[680px] flex flex-col md:justify-between md:pt-0 lg:pt-[60px] md:pb-0 lg:pb-[40px] relative items-start box-border">
          <div
            class="z-10 bg-[#FFFFFF] flex flex-col justify-center items-start

            lg:w-[660px]
            lg:h-[300px]
            lg:leading-[56px]
            lg:px-[40px]
            lg:pt-5
            lg:pb-[10px] 
            lg:text-[40px]
            md:text-[44px] 
            md:leading-[54px]     

            md:px-4 
            md:py-4

            xs:leading-[38px]
            xs:text-[32px]
            xs:py-8
            xs:px-8"
            style={titleContainer}
          >
            <h1
              class="font-bold my-5 font-AvenirNextLTPro"
              style={{ letterSpacing: ".1px" }}
            >
              {title}
            </h1>
          </div>

          <div class="
            lg:w-[460px]
            md:pt-5
            xs:pt-[10px]
            flex-col flex
            xs:pl-[10px]
            lg:pl-10
            static

          ">
            <div class="mb-5 font-Gravity xs:text-[14px] md:text-[16px] text-left leading-[1.6rem] mt-0">
              <span
                class=""
                dangerouslySetInnerHTML={{ __html: actionLinksContainer.title }}
              >
              </span>
            </div>
            <a
              class="w-fit cursor-pointer pl-0 block bold my-[9px] font-bold hover:underline pr-[30px] hover:pr-[34px] uppercase tracking-[1px] text-[14px] font-AvenirNextLTPro"
              style={actionLinkBtn}
              href={actionLinksContainer.firstButton.href}
            >
              {actionLinksContainer.firstButton.text}
            </a>
            <a
              class="w-fit cursor-pointer pl-0 block bold my-[9px] font-bold hover:underline pr-[30px] hover:pr-[34px] uppercase tracking-[1px] text-[14px] font-AvenirNextLTPro"
              style={actionLinkBtn}
              href={actionLinksContainer.secondButton.href}
            >
              {actionLinksContainer.secondButton.text}
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage.desktop})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "0%",
          zIndex: 0,
        }}
        class={`hidden lg:block w-[76%] max-w-none xl:bg-[80%] lg:bg-[-45%_100%] h-[680px] absolute top-auto bottom-0 right-0`}
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
        class={`xs:hidden w-full h-[300px] absolute top-0 right-0`}
      >
      </div>
    </div>
  );
}

export default BannerSectionForIndividuals;
