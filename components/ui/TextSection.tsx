import type { HTML } from "deco-sites/std/components/types.ts";

export interface MobileButton {
  content: string;
  href: string;
}

export interface Props {
  content: HTML;
  mobileButton: MobileButton;
}

function TextSection(
  { content, mobileButton }: Props,
) {
  return (
    <div class="max-w-[1120px] block m-auto md:py-[100px] md:px-[0px] xs:py-[40px] xs:px-[10px]">
      <div class="max-w-[710px]">
        <span
          class="md:text-[16px] xs:text-[14px]"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <a
          class="w-[95%] m-auto md:hidden xs:block text-center p-2 uppercase border-[#f26f21] border-2 rounded my-2 text-[#f26f21] font-bold text-[14px]"
          href={mobileButton.href}
        >
          {mobileButton.content}
        </a>
      </div>
    </div>
  );
}

export default TextSection;
