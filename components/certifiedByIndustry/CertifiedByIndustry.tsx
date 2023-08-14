import type { HTML } from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface Button {
  title: string;
  href: string;
}

export interface Props {
  title: HTML;
  content: HTML;
  button: Button;
}

function CertifiedByIndustry(
  {
    title,
    content,
    button,
  }: Props,
) {
  const [elementRef, isShown] = useScrollShow();

  return (
    <div class="container-fluid mx-auto md:py-[80px] xs:py-[40px] bg-[#f3f3f3]">
      <div class="text-center mx-auto [&>span]:leading-10 [&>span]:font-AvenirNextLTPro [&>span]:text-[32px] max-w-[710px] mb-[10px]">
        <span
          class="md:[&>*]:text-[32px] xs:[&>*]:text-[24px]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <div class="md:max-w-[710px] xs:max-w-[385px] mx-auto text-center">
        <span
          class="[&>*]:font-Gravity [&>p]:mb-[10px] md:[&>*]:text-[16px] xs:[&>*]:text-[14px]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      <div class="md:mt-[50px] xs:mt-[20px] text-center">
        <a
          class={`bg-[#f2a91d] py-[14px] px-[20px] font-bold font-Gravity uppercase rounded text-white md:inline-block md:w-auto xs:block xs:w-11/12 xs:m-auto ${
            isShown ? "animate-long-slide-right" : ""
          }`}
          ref={elementRef as Ref<HTMLAnchorElement>}
          href={button.href}
        >
          {button.title}
        </a>
      </div>
    </div>
  );
}

export default CertifiedByIndustry;
