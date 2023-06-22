export interface Props {
  leftText: string;
  backGroundColor: string;
  buttonColor: string;
  buttonText: string;
  buttonUrl: string;
}

function ExecutiveProgrammeWarning(
  { leftText, backGroundColor, buttonColor, buttonText, buttonUrl }: Props,
) {
  return (
    <>
      <div
        class="xs:hidden md:block container-fluid sticky z-20 w-[100%] py-3 top-[70px]"
        style={{ backgroundColor: backGroundColor }}
      >
        <div class="lg:mx-auto md:mx-2  max-w-[1120px] z-auto relative pr-0">
          <div class="w-full max-w-[1320px] justify-between items-center pt-0 pb-0 flex static">
            <p class="m-0 p-0  text-white lg:font-semibold md:font-light block justify-start leading-5">
              {leftText}
            </p>
            <div class="w-[40%] justify-end flex static items-center">
              <a
                href={buttonUrl}
                class="btn py-2 px-4 uppercase w-auto text-white cursor-pointer border-2 border-none rounded-md font-light xs:text-base"
                style={{ backgroundColor: buttonColor }}
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExecutiveProgrammeWarning;
