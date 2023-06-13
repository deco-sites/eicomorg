import type { Image as LiveImage, HTML } from "deco-sites/std/components/types.ts";

import Markdown from "../Markdown.tsx";

export interface ContentBox {
  title: HTML;
  paragraph: HTML;
}

export interface ContainerImage {
  desktop: LiveImage;
  mobile: LiveImage;
}

export interface Props {
  title: string;
  image: ContainerImage;
  contentBox: ContentBox;
}

function HomeWhyEicomSection(
  { title, image, contentBox }: Props,
) {
  return (
    <div
      style={{ backgroundColor: "#f3f3f3" }}
      class="container-fluid py-[100px] pb-[100px] md:h-[43rem] xs:h-[50rem]"
    >
      <div class="lg:w-[1120px] m-auto relative">
        <span
          class="block text-center font-AvenirNextLTPro uppercase text-[28px]"
          style={{ color: "#f26f21", fontWeight: "bold" }}
        >
          {title}
        </span>

        <div class="
          xs:px-[10px]
        ">
          
        { /* DESKTOP VERSION */ }
        <div
          style={{
            backgroundImage: `url(${image.desktop})`,
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

        { /* MOBILE VERSION */ }
        <div
            style={{
              backgroundImage: `url(${image.mobile})`,
            }}
            class={`
              relative
              top-[50px]
              w-[100%]
              h-[200px]
              bg-repeat
              bg-cover
              bg-[50%]

              md:invisible
            `}
          >

        </div>
          <div
            style={{
              boxShadow: "4px 4px 7px rgba(38, 38, 40, .1)",
              borderRadius: "2px",
            }}
            class="
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
              
              bg-white"
          >
            <h2
              style={{ color: "#262628" }}
              class="
                pb-[10px]
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeWhyEicomSection;
