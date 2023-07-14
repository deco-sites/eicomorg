import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
  leftText: HTML;
  backGroundColor: string;
  buttonColor: string;
  buttonText: string;
  buttonUrl: string;
}

function ExecutiveProgrammeWarning(
  { leftText, backGroundColor, buttonColor, buttonText, buttonUrl }: Props,
) {
  return (
  <div
    class="xs:hidden md:block z-20 py-[10px] sticky top-[70px]"
    style={{ backgroundColor: backGroundColor }}
  >
    <div class="lg:mx-auto md:mx-2  max-w-[1120px] z-auto relative pr-0">
      <div class="w-full max-w-[1120px] justify-between items-center pt-0 pb-0 flex static">
        <div class="mb-0 pt-0 block leading-[22px] text-[1rem] text-left justify-start">
          <p dangerouslySetInnerHTML={{ __html: leftText }}></p>
        </div>

        <div class="w-[40%] justify-end flex static items-center">
          <a
            href={buttonUrl}
            class="btn border-2 border-solid border-orange-500 rounded-md mr-0 tracking-[0.5px] cursor-pointer py-[7px] px-[16px] text-[14px] ml-auto text-center font-bold w-[220px] h-[40px] min-h-[40px] text-white"
            style={{ backgroundColor: buttonColor }}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ExecutiveProgrammeWarning;
