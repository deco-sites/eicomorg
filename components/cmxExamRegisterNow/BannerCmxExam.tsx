import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface Props {
  backgroundImage: LiveImage;
  title: HTML;
  paragraph: string;
  buttonText: string;
  linkText: string;
}

function BannerCmxExam(
  {
    backgroundImage,
    title,
    paragraph,
    buttonText,
    linkText,
  }: Props,
) {
  const [elementRef, isShown] = useScrollShow();
  return (
    <>
      <div>
        <div
          ref={elementRef as Ref<HTMLDivElement>}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "30%",
            maxHeight: "700px",
            minHeight: "500px",
            padding: "0 10px 40px",
            margin: "0",
          }}
          class="bg-[#f3f3f3] h-[70vh]"
        >
        </div>
        <div>
          <button class="rounded bg-[#f2a91d] px-[20px] py-[14px] w-auto text-[16px] font-bold text-white cursor-pointer text-[#f2a91d]">
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
}

export default BannerCmxExam;
