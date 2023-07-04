import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Props {
    title: HTML;
    image: LiveImage;
    rightText: HTML;
    bottomTextTopPart: HTML;
    bottomTextBottomPart: HTML
};

function ScaleUpCareer(
    { title, image, rightText, bottomTextTopPart, bottomTextBottomPart}: Props,
  ) {
    return (
        <div class="pb-[180px] pt-[140px] mb-[140px]">
            <div class="max-w-[1120px] relative mx-auto">
                <div class="text-center pb-5">
                    <h2 class="text-left uppercase mx-5 text-3xl font-bold block ">
                        <span dangerouslySetInnerHTML={{ __html: title }}></span>
                    </h2>
                </div>
                <div class="mx-[-10px] mt-[120px] relative">
                    <div class="w-1/2 float-left px-3 relative">
                        <div
                            style={{
                            backgroundImage: `url(${image})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "50%",
                            }}
                            class="h-[300px] bg-[#820047]"
                        >
                        </div>
                    </div>
                    <div class="w-1/2 float-left px-3 relative">
                        <div class="z-[-1] pl-[120px] pr-[60px] left-[-80px]
                        w-[630px] h-[400px] pt-[70px] absolute top-[-50px] bg-[#dbdbdf]">
                            <h1 class="text-3xl  mt-0 font-bold mb-3">
                                <span dangerouslySetInnerHTML={{ __html: rightText }}></span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="z-[1] w-[710px] bg-white border border-gray-300 rounded-md flex flex-col items-start pt-[25px] md:px-[40px] md:pb-[24px] absolute top-[420px] left-[136px]">
                    <p class="text-2xl mb-3 text-left pb-3">
                        <span dangerouslySetInnerHTML={{ __html: bottomTextTopPart }}></span>
                    </p>
                    <p class="text-base text-left mb-3">
                        <span dangerouslySetInnerHTML={{ __html: bottomTextBottomPart }}></span>
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
  export default ScaleUpCareer;