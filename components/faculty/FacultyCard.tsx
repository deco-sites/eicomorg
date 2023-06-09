import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";
import { useUI } from "$store/sdk/useUI.ts";

export interface FacultyCardProps {
  name: HTML;
  position: HTML;
  text: HTML;
  linkedinURL: string;
  image: {
    src: LiveImage;
    alt: string;
  };
}

function FacultyCard({ facultyInfo, index }: {
  facultyInfo: FacultyCardProps;
  index: number;
}) {
  const { name, position, text, linkedinURL, image } = facultyInfo;
  const stringIndex = String(index);
  return (
    <>
      <label htmlFor={stringIndex}>
        <div class="lg:w-64 lg:h-52 md:h-[335px] md:w-[335px] float-left mx-[10px] mb-5 group">
          <div class="cursor-pointer bg-white border border-gray-300 rounded-md xs:ml-4 md:ml-0 md:mr-0 p-0">
            <div
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "50%",
                overflow: "hidden",
              }}
              class="border border-tl-[3px] border-tr-[3px] xs:w-[350px] md:w-[333px] lg:w-[256px] h-[200px]"
            >
            </div>
            <div class="bg-[#f26f21] w-0 h-1 transition-all duration-1000 group-hover:w-full">
            </div>
            <div class="xs:h-[110px] md:h-[150px] text-left py-2 pr-3 pl-4">
              <div class="font-bold text-[#262628] font-AvenirNextLTPro text-[18px] my-[20px] mb-[8px]">
                <span dangerouslySetInnerHTML={{ __html: name }}></span>
              </div>
              <div class="text-[#696969] text-[14px]">
                <span dangerouslySetInnerHTML={{ __html: position }}></span>
              </div>
            </div>
          </div>
        </div>
      </label>

      <input type="checkbox" id={stringIndex} className="modal-toggle" />
      <div className="modal z-[9999] modal-action">
        <div className="modal-box max-w-[900px] h-auto bg-white rounded-md mx-auto shadow-md">
          <div className="modal-action">
            <label
              htmlFor={stringIndex}
              class="h-4 float-right cursor-pointer left-3 relative"
              style={{ marginTop: "-35px" }}
            >
              <Icon id="XMark" width={20} height={20} strokeWidth={2} />
            </label>
          </div>
          <div class="mx-[-10px] mt-[-15px]">
            <div class="border-r lg:border-solid lg:border-gray-300 pr-5 w-1/4 float-left min-h-1 px-3 relative 
          xs:justify-start xs:items-end md:pb-5 lg:pb-0 xs:flex md:flex lg:block xs:mb-5 lg:mb-0">
              <Image
                src={image.src}
                alt={image.alt}
                width={190}
                height={190}
                class="border-b-[6px] max-w-[190px] border-solid border-orange-500 bg-center bg-no-repeat bg-cover"
              />
              <a
                href={linkedinURL}
                class="w-6 h-6 float-right cursor-pointer mt-5 xs:ml-6 lg:ml-0"
                target="_blank"
              >
                <Icon id="Linkedin" width={28} height={28} class="w-6 h-6">
                </Icon>
              </a>
            </div>
            <div class="pl-7 pr-5 lg:w-3/4 float-left min-h-1 xs:w-full md:w-full md:left-auto md:right-auto relative">
              <h3 class="text-2xl font-bold ">
                <span dangerouslySetInnerHTML={{ __html: name }}></span>
              </h3>
              <p class="text-base">
                <span dangerouslySetInnerHTML={{ __html: position }}></span>
              </p>
              <div class="mt-3">
                <p>
                  <span dangerouslySetInnerHTML={{ __html: text }}></span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor={stringIndex}></label>
      </div>
    </>
  );
}

export default FacultyCard;
