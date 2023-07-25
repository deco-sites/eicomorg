import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";
import { useId } from "preact/hooks";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Alert {
  text: HTML;
  backgroundColor: string;
  url?: string;
  x: LiveImage;
}

export interface Props {
  alert: Alert;
}

function Alert({ alert }: Props) {
  const { text, backgroundColor, url, x } = alert;
  const id = useId();
  const [showAlert, setShowAlert] = useState(true);

  const handleClick = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div
        id={id}
        className={showAlert
          ? "flex z-50 relative md:top-[70px] xs:top-[100px] h-[30px]"
          : "hidden "}
        style={{ backgroundColor: backgroundColor }}
      >
        <div class="md:block md:self-center md:flex-1">
          <a
            href={url}
            className="md:mt-0 block cursor-pointer md:w-full text-center m-auto text-[#f3f3f3] xs:w-11/12"
          >
            <span
              class="md:leading-[30px] md:text-center xs:leading-[13px] md:text-[13px] xs:text-[11px] break-words font-Gravity"
              dangerouslySetInnerHTML={{ __html: text }}
            >
            </span>
          </a>
        </div>
        <button
          class="absolute right-1 xs:p-[6px] md:py-[6px] md:px-[10px] opacity-80"
          onClick={handleClick}
        >
          <Image
            src={x}
            alt="x"
            width={16}
            height={16}
            class="text-white "
          />
        </button>
      </div>
    </>
  );
}

export default Alert;
