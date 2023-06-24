import Image from "deco-sites/std/components/Image.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface AlumniCardProps {
  name: string;
  position: string;
  graduation?: string;
  nationality: AvailableIcons;
  text: HTML;
  avatar: {
    src: LiveImage;
    alt: string;
  };
}

function AlumniCard({ alumniInfo }: {
  alumniInfo: AlumniCardProps;
}) {
  const { name, position, graduation, nationality, text, avatar } = alumniInfo;
  return (
    <>
      <div class="bg-white border border-gray-300 mx-auto px-8 py-5 relative">
        <p class="z-10 leading-4 inline-block absolute left-auto top-[5%] right-[5%]">
          <Icon
            id={nationality}
            width={28}
            height={28}
            strokeWidth={2}
            class="ml-1"
          />
          <br />
        </p>
        <div class="justify-start items-center flex">
          <div class="relative">
            <Image
              src={avatar.src}
              alt={avatar.alt}
              width={50}
              height={50}
              className="bg-center bg-cover border-[3px] border-solid border-gray-300 rounded-[40px] relative w-14"
            />
          </div>
          <div class="flex flex-col items-start py-3 pl-5 w-52">
            <p class="text-gray-600 uppercase mb-0 font-gravity font-bold text-base leading-5 text-left">
              {name}
            </p>
            <p class="text-gray-600 mb-0 font-gravity text-sm leading-4">
              {position}
            </p>
            {graduation && (
              <p class="text-gray-600 mb-0 italic font-gravity text-xs leading-4">
                {graduation}
              </p>
            )}
          </div>
        </div>
        <span dangerouslySetInnerHTML={{ __html: text }}></span>
      </div>
    </>
  );
}

export default AlumniCard;
