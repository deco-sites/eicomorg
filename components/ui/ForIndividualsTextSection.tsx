import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
}

function ForIndividualsTextSection(
  { title }: Props,
) {
  return (
    <div class="container-fluid translate-y-20 text-center py-[100px]">
      <span
        class="block font-AvenirNextLTPro uppercase text-[28px] mb-[40px] "
        style={{ color: "#f26f21", fontWeight: "bold" }}
      >
        {title}
      </span>
    </div>
  );
}

export default ForIndividualsTextSection;
