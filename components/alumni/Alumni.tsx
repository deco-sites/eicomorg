import type { Image } from "deco-sites/std/components/types.ts";
import { AvailableIcons } from "$store/components/ui/Icon.tsx";
import AlumniTopPart from "./AlumniTopPart.tsx";
import AlumniCard from "./AlumniCard.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface AlumniTopPartProps {
  title: HTML;
  text: HTML;
}

export interface AlumniCardProps {
  name: string;
  position: string;
  graduation?: string;
  nationality: AvailableIcons;
  /**
   * @description To make a part of the text bold add the <b> before and after the desired part. Only one part per text
   */
  text: HTML;
  avatar: {
    src: Image;
    alt: string;
  };
}

export interface Props {
  alumniTopPart: AlumniTopPartProps;
  alumni1: AlumniCardProps;
  alumni2: AlumniCardProps;
  alumni3: AlumniCardProps;
  alumni4: AlumniCardProps;
  alumni5: AlumniCardProps;
  alumni6: AlumniCardProps;
}

function Alumni(
  {
    alumniTopPart,
    alumni1,
    alumni2,
    alumni3,
    alumni4,
    alumni5,
    alumni6,
  }: Props,
) {
  return (
    <>
      <div class="bg-gray-100">
        <div class="z-auto max-w-[1120px] flex-1 pr-0 relative py-24 mx-auto">
          <AlumniTopPart alumniTopPart={alumniTopPart} />
          <div class="grid lg:grid-cols-3 mt-10 md:px-2 lg:px-0 lg:grid-rows-4 gap-y-4 gap-x-4">
            <span class="lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-end-4
          md:grid-cols-4 md:grid-rows-2 md:col-span-4 md:row-span-2">
              <AlumniCard alumniInfo={alumni1} />
            </span>
            <span class="lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-4
          md:col-span-2 md:row-span-2">
              <AlumniCard alumniInfo={alumni2} />
            </span>
            <span class="lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-3
          md:col-span-2 md:row-span-2 lg:mb-5">
              <AlumniCard alumniInfo={alumni3} />
            </span>
            <span class="lg:col-start-1 lg:col-span-1 lg:row-start-4 lg:row-span-3
          md:grid-cols-4 md:grid-rows-2 md:col-span-4 md:row-span-2 lg:mt-[-50px]">
              <AlumniCard alumniInfo={alumni4} />
            </span>
            <span class="lg:col-start-2 lg:col-span-1 lg:row-start-5 lg:row-span-2
          md:col-span-2 md:row-span-3 lg:mb-0 md:pb-5">
              <AlumniCard alumniInfo={alumni5} />
            </span>
            <span class="lg:col-span-1 lg:row-span-3 
          md:col-span-2 md:row-span-3">
              <AlumniCard alumniInfo={alumni6} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Alumni;
