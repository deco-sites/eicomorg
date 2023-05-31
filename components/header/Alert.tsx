import Slider from "$store/components/ui/Slider.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useState } from 'preact/hooks'
import { useId, useRef } from "preact/hooks";

export interface Alert {
  text: string;
  /** @description use the hexadecimal format such as #FFFFFF */
  backgroundColor: string;
  /** @description value in pixels such as 13px */
  fontSize: string;
  fontColor: string;
  url?: string;
}

export interface Props {
  alert: Alert;
}

function Alert({ alert }: Props) {
  const { text, backgroundColor, fontSize, fontColor, url } = alert;
  const id = useId();
  const [showAlert, setShowAlert] = useState(true)

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
            style={{ fontSize: fontSize, color: fontColor }}
          >
            {text}
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
