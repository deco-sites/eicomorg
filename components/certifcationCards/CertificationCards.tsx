import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface Props {
  title: HTML;
  subtitle: HTML;
}

function CertificationCards(
  {
    title,
    subtitle
  }: Props,
) {
  const [elementRef, isShown] = useScrollShow();

  return (
    <>
      <div class="max-w-[1120px]">
        <div>
          <span dangerouslySetInnerHTML={{__html: title}}></span>
          <span dangerouslySetInnerHTML={{__html: subtitle}}></span>
        </div>

        <div>
          <div class="w-5 h-5 bg-red-500"></div>
          <div class="w-5 h-5 bg-blue-500"></div>
        </div>
      </div>
    </>
  );
}

export default CertificationCards;
