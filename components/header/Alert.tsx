import Slider from "$store/components/ui/Slider.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useState } from "preact/hooks";
import { useId, useRef } from "preact/hooks";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Alert {
  text: HTML;
  backgroundColor: string;
  url?: string;
}

export interface Props {
  alert: Alert;
}

function Alert({ alert }: Props) {
  const { text, backgroundColor, url } = alert;
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
        <a
          href={url}
          className="md:mt-0 block text-center m-auto text-[#f3f3f3] xs:w-11/12"
        >
          <span
            class="md:leading-[30px] xs:leading-[13px] xs:text-[11px] break-words"
            dangerouslySetInnerHTML={{ __html: text }}
          >
          </span>
        </a>
        <button class="absolute right-1 bottom-[6px]" onClick={handleClick}>
          <Icon
            id="XMark"
            width={20}
            height={20}
            strokeWidth={2}
            class="text-white"
          />
        </button>
      </div>
    </>
  );
}

export default Alert;
