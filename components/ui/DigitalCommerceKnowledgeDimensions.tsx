import type {
    HTML,
    Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface Props {
    containerTitle: HTML;
    formTitle: HTML;
    content: HTML;
    image: {
        src: LiveImage;
        alt: string;
    }
}

function DigitalCommerceKnowledgeDimensions(
    { containerTitle, formTitle, image, content }: Props,
) {
    return (
        <div class="bg-[#f3f3f3] pt-[40px] pb-[60px]">
            <div class="max-w-[1120px] m-auto">
                <div class="
                        lg:max-w-[560px]
                        xs:max-w-[405px]
                        
                        lg:mx-auto
                        xs:mx-[10px]
                        
                        font-Gravity">
                    <div class="my-[40px]">
                        <div
                            class="
                                lg:text-[22px]
                                xs:text-[16px]

                                lg:leading-[30px]
                                xs:leading-[24px]"
                            dangerouslySetInnerHTML={{ __html: containerTitle }}
                        />

                        <img
                            class="
                                lg:max-w-[500px] 
                                xs:max-w-[300px]

                                m-auto"
                            src={ image.src }
                            alt={ image.alt }
                        />

                        <div
                            class="
                                lg:text-[16px]
                                xs:text-[14px]

                                lg:leading-[25.6px]
                                xs:leading-[22px]

                                text-[#262628]"
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </div>

                    <div>
                        <div
                            class="
                            lg:text-[16px]
                            xs:text-[14px]
                            
                            lg:leading-[25.6px]
                            xs:leading-[22px]

                            text-center
                            text-[#262628]"
                            dangerouslySetInnerHTML={{ __html: formTitle }}
                        />

                        <form class="mt-[25px] mx-auto p-[20px] text-left">
                            <div class="mb-[10px]">
                                <span class="text-[14px] font-bold mb-[5px] block">Full Name</span>
                                <input
                                    class="w-full p-[10px] border-[1px] border-[solid] border-[#dfdfdf] text-[14px]"
                                    type="text"
                                    placeholder="Type your name"
                                />
                            </div>
                            <div class="mb-[10px]">
                                <span class="text-[14px] font-bold mb-[5px] block">Email*</span>
                                <input
                                    class="w-full p-[10px] border-[1px] border-[solid] border-[#dfdfdf] text-[14px]"
                                    type="email"
                                    placeholder="Type your email"
                                />
                            </div>

                            <button class="
                                lg:text-[13px]
                                xs:text-[20px]

                                rounded
                                uppercase
                                cursor-pointer
                                bg-[#333]
                                p-[12px]
                                text-white
                            ">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DigitalCommerceKnowledgeDimensions;