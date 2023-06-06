import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

import Markdown from "../Markdown.tsx";

export interface Block {
  title: string;
  content: HTML;
  icon: LiveImage;
}

export interface SectionButton {
  text: string;
  backgroundColor: string;
  textColor: string;
}

export interface Props {
  blocks: Block[];
  sectionButton: SectionButton;
}

interface SectionBlockProps {
  block: Block;
}

function SectionBlock({ block }: SectionBlockProps) {
  return (
    <div class="xs:px-6 xs:my-4">
      <img
        class="h-[48px] w-[48px] mb-[25px] block"
        src={block.icon}
        alt=""
      />
      <h2 class="uppercase text-left font-AvenirNextLTPro text-[18px] font-semibold">
        {block.title}
      </h2>
      <span
        class="my-3 block font-medium text-[#353536]"
        dangerouslySetInnerHTML={{ __html: block.content }}
      >
      </span>
    </div>
  );
}

function HomeWhyEicomBlocksSection(
  { blocks, sectionButton }: Props,
) {
  return (
    <div
      style={{ backgroundColor: "#f3f3f3" }}
      class="container-fluid pb-[20px]"
    >
      <div class="grid lg:grid-cols-[repeat(auto-fit,_20%)] md:grid-cols-[repeat(auto-fit,_30%)] m-aut justify-center gap-3">
        {blocks.map((block) => <SectionBlock block={block} />)}
      </div>

      <div class="text-center my-[60px]">
        <a
          style={{
            backgroundColor: sectionButton.backgroundColor,
            color: sectionButton.textColor,
          }}
          class="rounded uppercase font-bold py-[16px] px-[24px] xs:w-[90%] md:w-auto mx-auto inline-block"
          href="#"
        >
          {sectionButton.text}
        </a>
      </div>
    </div>
  );
}

export default HomeWhyEicomBlocksSection;
