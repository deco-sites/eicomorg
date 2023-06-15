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
      <div id={id} className={showAlert ? "flex z-50 relative md:top-[70px] xs:top-[100px]" : "hidden "}
        style={{ backgroundColor: backgroundColor }}>
        <a
          href={url}
          className="text-secondary-content xs:mt-2 md:mt-0 flex text-center font-semibold xs:text-sm md:text-base justify-center items-center w-screen md:h-[38px] xs:h-[30px]"
        >
          <span dangerouslySetInnerHTML={{ __html: text }}></span>
        </a>
        <Button class="btn-ghost btn-circle float-right" onClick={handleClick}>
          <Icon id="XMark" width={20} height={20} strokeWidth={2} />
        </Button>
      </div>
    </>
  );
}

export default Alert;
