import type { HTML } from "deco-sites/std/components/types.ts";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface topPartText {
  title: string;
  content: HTML;
}

export interface graphicImage {
  graphic: LiveImage;
  title: string;
}

export interface Props {
  topText: topPartText;
  graphic1: graphicImage;
  graphic2: graphicImage;
}

function Graphics(
  { topText, graphic1, graphic2 }: Props,
) {
  return (
    <div class="container-fluid text-center py-[100px] xs:mb-[700px] md:mb-[800px] lg:mb-[450px] ">
      <div>
        <span
          class="block uppercase text-[28px] mb-[40px] "
          style={{ color: "#f26f21", fontWeight: "bold" }}
        >
          {topText.title}
        </span>
        <div class="md:w-[560px] xs:w-[380px] m-auto mb-14">
          <span
            style={{ color: "#696969" }}
            dangerouslySetInnerHTML={{ __html: topText.content }}
          >
          </span>
        </div>
      </div>
      <div class="mx-3 px-[-10px]">
        <div class="lg:w-1/2 xs:w-full float-left min-h-1 relative">
          <div class="text-gray-900 uppercase text-lg font-bold leading-6 mt-5">
            {graphic1.title}
          </div>
          <div>
            <Image
              src={graphic1.graphic}
              alt={graphic1.title}
              width={433}
              height={360}
              class="lg:h-[360px]  mx-auto max-w-full inline-block align-middle"
            />
          </div>
        </div>
        <div class="lg:w-1/2 xs:w-full float-left min-h-1 px-3 relative">
          <div class="text-gray-900 uppercase text-lg font-bold leading-6 mt-5">
            {graphic2.title}
          </div>
          <div>
            <Image
              src={graphic2.graphic}
              alt={graphic2.title}
              width={433}
              height={360}
              class="lg:h-[360px]  mx-auto max-w-full inline-block align-middle"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphics;
