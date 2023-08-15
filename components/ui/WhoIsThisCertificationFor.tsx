import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";
import { JSX } from "preact";

export interface ContentBox {
  title: HTML;
  paragraph: HTML;
  textLink: string;
}

export interface ContainerImage {
  desktop: {
    src: LiveImage;
    alt: string;
  };
  mobile: {
    src: LiveImage;
    alt: string;
  };
}

const actionLinkBtn: JSX.CSSProperties = {
  color: "#000",
  backgroundImage: `url(/icons/Arrow-right-black.svg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "20px",
  backgroundPosition: "100%",
};

export interface Props {
  image: ContainerImage;
  contentBox: ContentBox;
}

function WhoIsThisCertificationFor(
  { image, contentBox }: Props,
) {
  const [elementRef, isShown] = useScrollShow();

  return (
    <div
      ref={elementRef as Ref<HTMLDivElement>}
      style={{ backgroundColor: "white" }}
      class="container-fluid py-[100px] pb-[100px] md:h-[43rem] xs:min-h-[42rem]"
    >
      <div class="lg:w-[1120px] m-auto relative">
        <div class="
          xs:px-[10px]
        ">
          {/* DESKTOP VERSION */}
          <div
            style={{
              backgroundImage: `url(${image.desktop.src})`,
            }}
            class={`
            absolute
            
            lg:left-[0px]
            top-[100px]
            
            md:left-[10px]

            lg:w-[600px]
            lg:h-[400px]

            md:w-[500px]
            md:h-[300px]
            
            lg:[clip-path:polygon(0%_0%,100%_0%,100%_75%,82%_100%,0%_100%)]

            bg-repeat
            bg-cover
            
            xs:invisible
            md:visible
          `}
          >
          </div>

          {/* MOBILE VERSION */}
          <div
            style={{
              backgroundImage: `url(${image.mobile.src})`,
            }}
            class={`
              relative
              top-[50px]
              w-[100%]
              h-[200px]
              bg-repeat
              bg-cover
              bg-[50%]

              md:hidden
            `}
          >
          </div>
          <div
            style={{
              boxShadow: "4px 4px 7px rgba(38, 38, 40, .1)",
              borderRadius: "2px",
            }}
            class={`
              md:absolute
              xs:relative
              
              lg:w-[640px]
              lg:h-[280px]

              md:w-[520px]
              md:h-[270px]

              lg:right-[-2px]
              md:top-[161px]
              
              xs:top-[50px]

              md:right-[10px]

              md:py-[40px]
              md:px-[40px]

              xs:py-[25px]
              xs:px-[15px]
              
              bg-white
              
              ${isShown ? "animate-slide-left" : ""}
            `}
          >
            <h2
              style={{ color: "#262628" }}
              class="
                md:pb-[10px]
                xs:pb-[15px]
                text-left
                font-medium
                lg:text-[22px]
                md:text-[20px]
                xs:text-[18px]
              "
              dangerouslySetInnerHTML={{ __html: contentBox.title }}
            >
            </h2>
            <p
              class="text-left md:text-[16px] xs:text-[14px]"
              dangerouslySetInnerHTML={{ __html: contentBox.paragraph }}
            >
            </p>
            <a
              class="w-fit lg:text-[14px] xs:text-[12px] block bold lg:my-4 xs:my-2 font-bold hover:underline pr-[30px] hover:pr-[34px] uppercase tracking-[1px] font-AvenirNextLTPro"
              style={actionLinkBtn}
              href="#"
            >
              CMX TITLEHOLDERS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoIsThisCertificationFor;
