import type { Image } from "deco-sites/std/components/types.ts";
import AlumniTopPart from "./AlumniTopPart.tsx";
import AlumniCard from "./AlumniCard.tsx";

export interface AlumniTopPartProps {
  title: string;
  titleColor: string;
  text: string;
  textColor: string;
}

export interface AlumniCardProps {
  name: string;
  position: string;
  nationality: string;
  text: string;
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
      <div class="z-auto max-w-[1120px] flex-1 pr-0 relative py-24 mx-auto">
        <AlumniTopPart alumniTopPart={alumniTopPart} />
        <div class="grid grid-rows-4 grid-cols-5 gap-y-4 mt-3 grid-cols-auto gap-x-4">
          <span class="col-start-1 col-end-2 row-start-1 row-end-4 
        bg-white border-2 border-gray-300 mx-auto p-10 relative">
            <AlumniCard alumniInfo={alumni1} />
          </span>
        </div>
        <div class="grid" style="grid-area: 1 / 2 / 5 / 3;">
          <span class="col-start-1 col-end-2 row-start-1 row-end-4 
        bg-white border-2 border-gray-300 mx-auto p-10 relative">
            <AlumniCard alumniInfo={alumni2} />
          </span>
        </div>
        <div class="grid" style="grid-area: 1 / 3 / 4 / 4;;">
          <span class="col-start-1 col-end-2 row-start-1 row-end-4 
        bg-white border-2 border-gray-300 mx-auto p-10 relative">
            <AlumniCard alumniInfo={alumni3} />
          </span>
        </div>
        <div class="grid" style="grid-area: 4 / 1 / 7 / 2;">
          <span class="col-start-1 col-end-2 row-start-1 row-end-4 
        bg-white border-2 border-gray-300 mx-auto p-10 relative">
            <AlumniCard alumniInfo={alumni4} />
          </span>
        </div>
        <div class="grid" style="grid-area: 5 / 2 / 7 / 3">
          <span class="col-start-1 col-end-2 row-start-1 row-end-4 
        bg-white border-2 border-gray-300 mx-auto p-10 relative">
            <AlumniCard alumniInfo={alumni5} />
          </span>
        </div>
        <div class="grid" style="grid-area: span 3 / span 1 / span 3 / span 1;">
          <span class="col-start-1 col-end-2 row-start-1 row-end-4 
        bg-white border-2 border-gray-300 mx-auto p-10 relative">
            <AlumniCard alumniInfo={alumni6} />
          </span>
        </div>
      </div>
    </>
  );
}

export default Alumni;