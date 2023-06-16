import Image from "deco-sites/std/components/Image.tsx";
import type { AvailableIcons } from "../ui/Icon.tsx";
import type {
    HTML,
    Image as LiveImage,
  } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";

export interface LabelProps {
    text: string;
    icon?: AvailableIcons;
}

export interface topTextProps {
    text: HTML;
}

export interface CardInfo {
  image: {
    desktop: LiveImage;
    mobile: string;
  };
  label1: LabelProps;
  label2: LabelProps;
  labelUrl: string;
  title: HTML;
  text: HTML;
  buttonText: string;
  buttonColor: string
  buttonUrl: string
}

export interface Props {
  topText: topTextProps;
  executiveProgramme: CardInfo;
}

function Courses(
  {
    topText,
    executiveProgramme,
  }: Props,
) {
    
  return (
    <>
        <div class="bg-gray-100 pb-20">
            <div class="h-24 pt-10"></div>
            <div class="md:max-w-[840px] lg:max-w-[1400px] relative pr-0 z-auto mx-auto">
                <div class="max-w-[700px] my-10 mx-auto pb-0 lg:text-3xl md:text-2xl text-center">
                <span dangerouslySetInnerHTML={{ __html: topText.text }}></span>
                </div>
                <div class="border-1 bg-white border-solid border-gray-300 rounded-md mt-10 mb-16 xs:mx-3 lg:mx-0 p-0 flex xs:flex-col md:flex-row">
                    <div
                        style={{
                            backgroundImage: `url(${executiveProgramme.image.desktop})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "0%",
                            zIndex: 0,
                            }}
                            class={`xs:w-full xs:h-[140px] md:w-[390px] md:h-[300px] lg:w-[769px] lg:h-[329px] max-w-[100%] max-h-[100%] bg-center bg-no-repeat bg-cover rounded-tl-md rounded-bl-md mt-0`}>
                    </div>
                    <div class="md:w-[45%] block">
                        <div class="bg-white rounded-tr-md rounded-br-md  xs:pt-3 lg:pt-8 pr-6 md:pb-2 xs:pb-2 lg:pb-8 pl-8 ">
                            <a href={executiveProgramme.labelUrl} class="cursor-pointer flex max-w-full text-xs items-center">
                                <div class="w-28 bg-[#144576] mr-1 px-2 py-2 flex items-center justify-center text-white rounded-2xl">
                                    {executiveProgramme.label1.icon  && (<Icon id={executiveProgramme.label1.icon} width={16} height={16} strokeWidth={2} class="mr-1"/>)}
                                    {executiveProgramme.label1.text}
                                </div>
                                <div class="bg-[#144576] px-4 py-2 text-white  rounded-2xl">
                                    {executiveProgramme.label2.text}
                                </div>
                            </a>
                            <div class="md:pt-1 lg:pt-6 mt-3 mb-1 lg:text-3xl md:text-lg font-semibold">
                                <h3><span dangerouslySetInnerHTML={{ __html: executiveProgramme.title }}></span></h3>
                            </div>
                            <div class="h-14 max-h-16  text-gray-700 mt-0 md:mb-14 lg:mb-12 lg:overflow-hidden md:text-base lg:text-xl">
                                <p><span dangerouslySetInnerHTML={{ __html: executiveProgramme.text }}></span></p>
                            </div>
                            <a href={executiveProgramme.buttonUrl} class="btn mx-auto md:mt-0 xs:mt-6 top-4 tracking-tight text-white cursor-pointer border-2 border-none rounded-md 
                            md:px-4 md:text-base lg:px-8 lg:py-2 lg:text-lg xs:text-lg lg:w-[170px] md:w-[127px] xs:w-full"
                                style={{backgroundColor: executiveProgramme.buttonColor}}
                            >{executiveProgramme.buttonText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Courses;
