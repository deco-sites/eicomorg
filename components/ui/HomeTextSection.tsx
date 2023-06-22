import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  content: HTML;
}

function HomeTextSection(
  { title, content }: Props,
) {
  return (
    <div class="container-fluid translate-y-20 text-center md:py-[100px] xs:py-[10px]">
      <span
        class="block font-AvenirNextLTPro uppercase text-[28px] mb-[40px] "
        style={{ color: "#f26f21", fontWeight: "bold" }}
      >
        {title}
      </span>
      <div class="md:w-[560px] xs:w-[420px] m-auto">
        <span
          style={{ color: "#696969" }}
          class="xs:text-[14px] xs:leading-[22px] md:text-[16px]"
          dangerouslySetInnerHTML={{ __html: content }}
        >
        </span>
      </div>
    </div>
  );
}

export default HomeTextSection;
