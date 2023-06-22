import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";

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

function FacultyExecutiveProgrammeCard({ facultyInfo, index }: {
  facultyInfo: FacultyCardProps;
  index: number;
}) {
  const { name, position, text, linkedinURL, image } = facultyInfo;
  const stringIndex = String(index);
  return (
    <>
      <label htmlFor={stringIndex}>
        <div class="lg:w-[334px] lg:h-[358px] md:h-[320px] md:w-[215px] float-left mx-3 lg:mb-5">
          <div class="cursor-pointer bg-white border border-gray-300 rounded-md ml-0 mr-0 p-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={332}
              height={222}
              class="bg-center bg-no-repeat bg-cover borde border-tl-[3px] border-tr-[3px] md:w-[500] w-full"
            />
            <div class="h-36 text-left px-4 py-2">
              <h3 class="mt-5">
                <span dangerouslySetInnerHTML={{ __html: name }}></span>
              </h3>
              <p>
                <span dangerouslySetInnerHTML={{ __html: position }}></span>
              </p>
            </div>
          </div>
        </div>
      </label>
      <input type="checkbox" id={stringIndex} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-[900px] h-[520px] bg-white rounded-md mx-auto p-5 shadow-md">
          <div className="modal-action">
            <label htmlFor={stringIndex} class="h-4 float-right cursor-pointer">
              <Icon id="XMark" width={20} height={20} strokeWidth={2} />
            </label>
          </div>
          <div class="border-r lg:border-solid lg:border-gray-300 pr-5 w-1/4 float-left min-h-1 px-3 relative 
          xs:justify-start xs:items-end md:pb-5 lg:pb-0 xs:flex md:flex lg:block xs:mb-5 lg:mb-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={190}
              height={190}
              class="border-b-6 max-w-[190px] border-solid border-orange-500 bg-center bg-no-repeat bg-cover"
            />
            <a
              href={linkedinURL}
              class="w-6 h-6 float-right cursor-pointer mt-6 xs:ml-6 lg:ml-0"
            >
              <Icon id="Linkedin" width={28} height={28} class="w-6 h-6"></Icon>
            </a>
          </div>
          <div class="pl-7 pr-5 lg:w-3/4 float-left min-h-1 xs:w-full md:w-full md:left-auto md:right-auto relative">
            <h3>
              <span dangerouslySetInnerHTML={{ __html: name }}></span>
            </h3>
            <p>
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
    </>
  );
}

export default FacultyExecutiveProgrammeCard;
