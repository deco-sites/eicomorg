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
        <div class="grid grid-cols-3 mt-10 grid-rows-4 gap-y-4 gap-x-4">
          <span class="col-start-1 col-end-2 row-start-1 row-end-4">
            <AlumniCard alumniInfo={alumni1} />
          </span>
          <span class="col-start-2 col-span-1 row-start-1 row-span-4">
            <AlumniCard alumniInfo={alumni2} />
          </span>
          <span class="col-start-3 col-span-1 row-start-1 row-span-3">
            <AlumniCard alumniInfo={alumni3} />
          </span>
          <span class="col-start-1 col-span-1 row-start-4 row-span-3">
            <AlumniCard alumniInfo={alumni4} />
          </span>
          <span class="ol-start-2 col-span-1 row-start-5 row-span-2">
            <AlumniCard alumniInfo={alumni5} />
          </span>
          <span class="col-span-1 row-span-3">
            <AlumniCard alumniInfo={alumni6} />
          </span>
        </div>
      </div>
    </>
  );
}

export default Alumni;
