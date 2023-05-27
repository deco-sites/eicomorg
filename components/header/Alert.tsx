import Slider from "$store/components/ui/Slider.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { useId } from "preact/hooks";
import { useEffect, useState } from "preact/hooks";

export interface Alert {
  text: string
  /** @description use the hexadecimal format such as #FFFFFF */ 
  backgroundColor: string
  /** @description value in pixels such as 13px */ 
  fontSize: string
  url?: string
}

export interface Props {
  alert: Alert
}

function Alert({ alert }: Props) {
  const { text, backgroundColor, fontSize, url } = alert;
  // const { displayAlert } = useUI();
  // const id = useId();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="alertBar">
      {open && (
        <Slider
          className="carousel carousel-center gap-6 scrollbar-none"
          style={{ backgroundColor: backgroundColor }}
        >
          <a
            href={url}
            className="text-secondary-content z-20 flex text-center justify-center items-center w-screen h-[38px]"
            style={{ fontSize: fontSize }}
          >
            {text}
          </a>
          <Button class="btn-ghost btn-circle" onClick={handleClose}>
            <Icon id="XMark" width={20} height={20} strokeWidth={2} />
          </Button>
        </Slider>
      )}
    </div>
  );
}

export default Alert;
