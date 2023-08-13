import type { Image } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import ShouldCertifiedItem from './ShouldCertifiedItem.tsx'

export interface ItemIcon {
    image: Image;
    alt: string;
}

export interface Item {
    icon: ItemIcon;
    content: HTML;
}

export interface Props {
  title: HTML;
  items: Item[];
}

function ShouldCertified(
  {
    title,
    items
  }: Props,
) {
  return (
    <div class="container-fluid mx-auto md:py-[80px] xs:py-[40px] bg-[#f3f3f3]">
        <div class="text-center mx-auto [&>span]:leading-10 [&>span]:font-AvenirNextLTPro [&>span]:text-[32px] max-w-[710px] mb-[60px]">
          <span class="md:[&>*]:text-[32px] xs:[&>*]:text-[24px]" dangerouslySetInnerHTML={{ __html: title }} />
        </div>

        <div class="max-w-[1120px] md:grid md:grid-cols-3 xs:block mx-auto">
            {items.map(item =>
                <ShouldCertifiedItem item={item} />
            )}
        </div>
    </div>
  );
}

export default ShouldCertified;
