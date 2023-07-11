import type { HTML } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useId } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface PoliciesProps {
  label: HTML;
  href: string;
  closeButton: LiveImage;
}

function Policy({ policyData}: {
  policyData: PoliciesProps;
}) {
  const { label, href, closeButton } = policyData;
  const id = useId()
  return (
    <>
      <label htmlFor={id}>
        <li class="pb-1 text-base">
          <div class="w-embed w-iframe w-script">
            <span dangerouslySetInnerHTML={{ __html: label }}></span>
          </div>
        </li>
      </label>

      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal z-[9999]">
        <div className="modal-box max-w-[900px] h-[520px] bg-white rounded-md mx-auto shadow-md">
          <label
            htmlFor={id}
            class="h-4 float-right cursor-pointer left-6 bottom-6 relative"
          >
            <div
              style={{
                background: `url(${closeButton})`,
              }}
              class="h-6 w-6 block absoulte"
            >
            </div>
          </label>
          <div class="w-full h-full">
            <iframe src={href} class="w-full h-full p-0" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Policy;
