import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface AlumniCardProps {
  name: string;
  position: string;
  nationality: string;
  text: string;
  avatar: {
    src: LiveImage;
    alt: string;
  };
}

function AlumniCard({ alumniInfo }: {
  alumniInfo: AlumniCardProps;
}) {
  const { name, position, nationality, text, avatar } = alumniInfo;
  const parts = text.split("<b>");
  const textWithBold = (
    <p className="text-gray-900 border-t border-gray-300 mt-3 pt-8 py-3 font-gravity font-normal text-xl">
      {parts[0]}
      <b>{parts[1]}</b>
      {parts[2]}
    </p>
  );
  
  return (
    <>
      <div class="bg-white border border-gray-300 mx-auto px-8 py-5 relative">
        <p class="z-10 leading-4 inline-block font-semibold absolute text-base left-auto top-[5%] right-[5%]">
          {nationality}
          <br />
        </p>
        <div class="justify-start items-center flex">
          <div class="relative">
            <Image
              src={avatar.src}
              alt={avatar.alt}
              width={50}
              height={50}
              class="bg-center bg-cover border-3 border-gray-300 rounded-3xl relative w-14"
            />
          </div>
          <div class="flex flex-col items-start py-3 pl-5 w-52">
            <p class="text-gray-600 uppercase mb-0 font-gravity font-bold text-base leading-5 text-left">
              {name}
            </p>
            <p class="text-gray-600 mb-0 font-gravity text-sm leading-4">
              {position}
            </p>
          </div>
        </div>
        {textWithBold}
      </div>
    </>
  );
}

export default AlumniCard;
