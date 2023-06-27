import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Props {
  backgroundImage: LiveImage;
  cardImage: LiveImage;
  title: HTML;
  paragraph1: string;
  icon1: AvailableIcons;
  paragraph2: string;
  icon2: AvailableIcons;
  paragraph3: string;
  icon3: AvailableIcons;
}

function WhoIsForDigitalCommerceExpert(
  {
    backgroundImage,
    cardImage,
    title,
    paragraph1,
    icon1,
    paragraph2,
    icon2,
    paragraph3,
    icon3,
  }: Props,
) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 120%",
          backgroundPosition: "120% 0",
          backgroundAttachment: "scroll,",
        }}
        class="xs:p-5 md:py-16 md:px-5 lg:px-0 lg:py-24 xs:h-[500px] md:h-[600px] bg-gray-100"
      >
        <div class="z-auto max-w-[1120px] pr-0 mx-auto relative">
          <div class="mx-[-10px]">
            <div class="md:w-1/2 xs:w-full float-left xs:px-0 md:px-3 relative">
              <div
                class="md:w-[600px] md:h-[400px] xs:w-auto xs:h-[200px]"
                style={{
                  backgroundImage: `url(${cardImage})`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "cover",
                }}
              >
              </div>
            </div>
            <div class="md:w-1/2 xs:w-full float-left md:px-3 relative">
              <div class="bg-white border-0 border-solid border-gray-300
                        rounded-md xs:pt-5 xs:pl-5 xs:pr-3 md:p-10 absolute md:top-[60px] bottom-auto md:left-[-68px] shadow-md">
                <h2 class="md:my-5 block xs:text-2xl md:text-3xl xs:mt-3text-left font-bold">
                  <span dangerouslySetInnerHTML={{ __html: title }}></span>
                </h2>
                <div class="mx-0 overflow-hidden">
                  <div class="xs:pr-3 xs:left-auto xs:right-auto md:px-4 w-full md:w-1/3 float-left relative">
                    <Icon
                      id={icon1}
                      width={28}
                      height={28}
                      strokeWidth={2}
                    />
                    <p class="text-left mb-3">
                      {paragraph1}
                    </p>
                  </div>
                  <div class="md:px-4 xs:w-full md:w-1/3 float-left relative">
                    <Icon
                      id={icon2}
                      width={28}
                      height={28}
                      strokeWidth={2}
                    />
                    <p class="text-left mb-3">
                      {paragraph2}
                    </p>
                  </div>
                  <div class="xs:w-full md:w-1/3 float-left relative">
                    <Icon
                      id={icon2}
                      width={28}
                      height={28}
                      strokeWidth={2}
                    />
                    <p class="text-left mb-3">
                      {paragraph3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhoIsForDigitalCommerceExpert;
