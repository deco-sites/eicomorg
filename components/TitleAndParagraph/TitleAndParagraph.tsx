import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  title: HTML;
  paragraph: HTML;
}

function TitleAndParagraph(
  { title, paragraph }: Props,
) {
  return (
    <div class="mt-[120px] mx-auto max-w-[700px]">
      <div class="mb-[20px]">
        <span
          class="text-center text-[18px] [&>*]:font-AvenirNextLTPro"
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </span>
      </div>

      <span
        class="text-center text-[16px] [&>*]:font-Gravity"
        dangerouslySetInnerHTML={{ __html: paragraph }}
      >
      </span>
    </div>
  );
}

export default TitleAndParagraph;
