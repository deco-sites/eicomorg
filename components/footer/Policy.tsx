import type { HTML } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useId } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface PoliciesProps {
  label: HTML;
  href: string;
  closeButton: LiveImage;
}

function Policy({ policyData }: {
  policyData: PoliciesProps;
}) {
  const { label, href, closeButton } = policyData;
  const id = useId();
  return (
    <>
      <label htmlFor={id + 1}>
        <li class="pb-1 text-base cursor-pointer">
          <div class="w-embed w-iframe w-script">
            <span dangerouslySetInnerHTML={{ __html: label }}></span>
          </div>
        </li>
      </label>

      <input type="checkbox" id={id + 1} className="modal-toggle" />
      <div className="modal z-[9999]">
        <div className="modal-box max-w-[800px] h-[800px] bg-white rounded-md mx-auto shadow-md overflow-hidden">
          <label
            htmlFor={id + 1}
            class="h-4 float-right cursor-pointer left-6 top-[1px]"
          >
            <div
              style={{
                background: `url(${closeButton})`,
              }}
              class="h-6 w-6 block absolute z-10"
            >
            </div>
          </label>

          <iframe
            src={href}
            class="absolute w-full h-full top-0 left-0 overflow-hidden"
            frameBorder={0}
            cellSpacing={0}
            scrolling={"no"}
          />
        </div>
      </div>
    </>
  );
}

export default Policy;
