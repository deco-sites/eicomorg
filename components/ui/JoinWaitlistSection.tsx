import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface Header {
  title: HTML;
  description: HTML;
}

export interface ContentImage {
  source: LiveImage;
  alt: string;
}

export interface Content {
  image: ContentImage;
  text: HTML;
}

export interface Props {
  header: Header;
  content: Content;
  submitButtonText: string;
}

function JoinWaitlistSection(
  { header, content, submitButtonText }: Props,
) {
  return (
    <div class="bg-[#f3f3f3] md:py-14 xs:py-4">
      <div class="md:container xs:container-fluid md:max-w-[1120px] xs:w-full p-4">
        <div>
          <div
            class="text-center richtext py-4"
            dangerouslySetInnerHTML={{ __html: header.title }}
          />
          <div
            class="text-center richtext py-1"
            dangerouslySetInnerHTML={{ __html: header.description }}
          />
        </div>

        <div class="md:flex xs:block my-2">
          <div class="md:w-2/5 xs:w-11/12 m-auto">
            <img
              class="w-[460px] border-b-4 border-[#f26f21]"
              src={content.image.source}
              alt={content.image.alt}
            />
            <div
              class="text-left richtext py-1"
              dangerouslySetInnerHTML={{ __html: content.text }}
            />
          </div>

          <div class="md:w-2/5 xs:w-11/12 mx-auto p-[20px]">
            <div class="mt-[25px] text-[14px]">
              <div>
                <span class="font-bold">Full Name</span>
                <input
                  class="block mt-1 w-full p-1"
                  type="text"
                  placeholder="Type your name"
                />
              </div>
              <div class="mt-4">
                <span class="font-bold">Email*</span>
                <input
                  class="block mt-1 w-full p-1"
                  type="email"
                  placeholder="Type your email"
                />
              </div>
              <button class="rounded bg-[#f26f28] p-[10px] cursor-pointer text-[#fefefe] my-4">
                {submitButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinWaitlistSection;
