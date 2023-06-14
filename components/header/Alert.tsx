import Slider from "$store/components/ui/Slider.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useState } from "preact/hooks";
import { useId, useRef } from "preact/hooks";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Alert {
  text: HTML;
  backgroundColor: string;
  /** @description value in pixels such as 13px */
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
      <div id={id} className={showAlert ? "" : "hidden"}>
        <Slider
          className="carousel carousel-center gap-6 scrollbar-none"
          style={{ backgroundColor: backgroundColor }}
        >
          <a
            href={url}
            className="text-secondary-content z-20 flex text-center font-semibold justify-center items-center w-screen h-[38px]"
          >
            <span dangerouslySetInnerHTML={{ __html: text }}></span>
          </a>
          <Button class="btn-ghost btn-circle" onClick={handleClick}>
            <Icon id="XMark" width={20} height={20} strokeWidth={2} />
          </Button>
        </Slider>
      </div>
    </>
  );
}

export default Alert;
