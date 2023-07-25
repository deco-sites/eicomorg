import type { HTML } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  image: LiveImage
}

function Bar({image}: Props) {
  return (
    <div class="bg-[#272f35] relative top-[70px] py-[10px] px-[10px]">
      <img class="w-[170px] h-auto my-[auto] mx-[auto]" src={image} alt="" />
    </div>
  );
}

export default Bar;
