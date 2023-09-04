import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Card {
  title: HTML;
  text: HTML;
  image: {
    src: LiveImage;
    alt: string;
  };
}

export interface topImage {
  image: {
    src: LiveImage;
    alt: string;
  };
}

export interface Props {
  topText: HTML;
  title: HTML;
  topImage: topImage;
  card1: Card;
  card2: Card;
  card3: Card;
  card4: Card;
  card5: Card;
  card6: Card;
  card7: Card;
}

function Owners(
  { topText, title, topImage, card1, card2, card3, card4, card5, card6, card7 }: Props,
) {
  return (
    <>
      <div
        class={`lg:py-[100px] md:py-[60px] md:px-5 lg:px-0 xs:px-[10px] xs:py-[40px] box-border lg:h-[1500px] md:h-[1600px] xs:h-[2200px]`}
      >
        <div class="mx-auto max-w-[1220px]">
          <div class="mb-[60px] text-center mx-auto max-w-[710px]">
            <div class="text-center font-Gravity mb-[10px] xs:text-[14px] xs:leading-[22px] lg:leading-[1.6rem] md:leading-5 md:text-[16px]">
              <p>
                <span dangerouslySetInnerHTML={{__html: topText}}></span>
              </p>
            </div>
            <Image
                src={topImage.image.src}
                alt={topImage.image.alt}
                width={208}
                height={74}
                class="mt-[10px] mb-10 max-w-full align-middle inline-block w-[208px] h-[74px]"
                loading="lazy"
              />
          </div>
          <h1 class="font-AvenirNextLTPro text-center block my-5 md:text-[28px] md:leading-[34px] xs:text-[26px] xs:leading-[32px]">
            <span dangerouslySetInnerHTML={{__html: title}}></span>
          </h1>
          <div class="md:mx-[-10px] xs:mx-0">
            <div class="md:px-10 xs:px-[10px] my-0 p-5 md:w-1/2 xs:w-full float-left relative">
              <Image
                src={card1.image.src}
                alt={card1.image.alt}
                width={50}
                height={50}
                class="my-[10px] mr-[10px] max-w-full align-middle inline-block w-[50px] h-[50px]"
                loading="lazy"
              />
              <h3 class="text-[18px] leading-[24px] lg:mt-5 md:mt-[10px] font-AvenirNextLTPro mb-[10px]">
                <span dangerouslySetInnerHTML={{ __html: card1.title }}></span>
              </h3>
              <div class="text-left font-Gravity mb-[10px] xs:text-[14px] xs:leading-[22px] md:leading-[1.6rem] md:text-[16px]">
                <p>
                  <span dangerouslySetInnerHTML={{__html: card1.text}}></span>
                </p>
              </div>
            </div>
            <div class="md:px-10 xs:px-[10px] my-0 p-5 md:w-1/2 xs:w-full float-left relative">
              <Image
                src={card2.image.src}
                alt={card2.image.alt}
                width={50}
                height={50}
                class="my-[10px] mr-[10px] max-w-full align-middle inline-block w-[50px] h-[50px]"
                loading="lazy"
              />
              <h3 class="text-[18px] leading-[24px] lg:mt-5 md:mt-[10px] font-AvenirNextLTPro mb-[10px]">
                <span dangerouslySetInnerHTML={{ __html: card2.title }}></span>
              </h3>
              <div class="text-left font-Gravity mb-[10px] xs:text-[14px] xs:leading-[22px] md:leading-[1.6rem] md:text-[16px]">
                <p>
                  <span dangerouslySetInnerHTML={{__html: card2.text}}></span>
                </p>
              </div>
            </div>
          </div>
          <div class="md:mx-[-10px] xs:mx-0">
            <div class="md:px-10 xs:px-[10px] my-0 p-5 md:w-1/2 xs:w-full float-left relative">
              <Image
                src={card3.image.src}
                alt={card3.image.alt}
                width={50}
                height={50}
                class="my-[10px] mr-[10px] max-w-full align-middle inline-block w-[50px] h-[50px]"
                loading="lazy"
              />
              <h3 class="text-[18px] leading-[24px] lg:mt-5 md:mt-[10px] font-AvenirNextLTPro mb-[10px]">
                <span dangerouslySetInnerHTML={{ __html: card3.title }}></span>
              </h3>
              <div class="text-left font-Gravity mb-[10px] xs:text-[14px] xs:leading-[22px] md:leading-[1.6rem] md:text-[16px]">
                <p>
                  <span dangerouslySetInnerHTML={{__html: card3.text}}></span>
                </p>
              </div>
            </div>
            <div class="md:px-10 xs:px-[10px] my-0 p-5 md:w-1/2 xs:w-full float-left relative">
              <Image
                src={card4.image.src}
                alt={card4.image.alt}
                width={50}
                height={50}
                class="my-[10px] mr-[10px] max-w-full align-middle inline-block w-[50px] h-[50px]"
                loading="lazy"
              />
              <h3 class="text-[18px] leading-[24px] lg:mt-5 md:mt-[10px] font-AvenirNextLTPro mb-[10px]">
                <span dangerouslySetInnerHTML={{ __html: card4.title }}></span>
              </h3>
              <div class="text-left font-Gravity mb-[10px] xs:text-[14px] xs:leading-[22px] md:leading-[1.6rem] md:text-[16px]">
                <p>
                  <span dangerouslySetInnerHTML={{__html: card4.text}}></span>
                </p>
              </div>
            </div>
          </div>
          <div class="md:mx-[-10px] xs:mx-0">
            <div class="md:px-10 xs:px-[10px] my-0 p-5 md:w-1/2 xs:w-full float-left relative">
              <Image
                src={card5.image.src}
                alt={card5.image.alt}
                width={50}
                height={50}
                class="my-[10px] mr-[10px] max-w-full align-middle inline-block w-[50px] h-[50px]"
                loading="lazy"
              />
              <h3 class="text-[18px] leading-[24px] lg:mt-5 md:mt-[10px] font-AvenirNextLTPro mb-[10px]">
                <span dangerouslySetInnerHTML={{ __html: card5.title }}></span>
              </h3>
              <div class="text-left font-Gravity mb-[10px] xs:text-[14px] xs:leading-[22px] md:leading-[1.6rem] md:text-[16px]">
                <p>
                  <span dangerouslySetInnerHTML={{__html: card5.text}}></span>
                </p>
              </div>
            </div>
            <div class="md:px-10 xs:px-[10px] my-0 p-5 md:w-1/2 xs:w-full float-left relative">
              <Image
                src={card6.image.src}
                alt={card6.image.alt}
                width={50}
                height={50}
                class="my-[10px] mr-[10px] max-w-full align-middle inline-block w-[50px] h-[50px]"
                loading="lazy"
              />
              <h3 class="text-[18px] leading-[24px] lg:mt-5 md:mt-[10px] font-AvenirNextLTPro mb-[10px]">
                <span dangerouslySetInnerHTML={{ __html: card6.title }}></span>
              </h3>
              <div class="text-left font-Gravity mb-[10px] xs:text-[14px] xs:leading-[22px] md:leading-[1.6rem] md:text-[16px]">
                <p>
                  <span dangerouslySetInnerHTML={{__html: card6.text}}></span>
                </p>
              </div>
            </div>
          </div>
          <div class="md:mx-[-10px] xs:mx-0">
            <div class="my-0 p-5 md:px-[10px] lg:px-5 xs:px-0 py-[10px] md:w-1/4 xs:w-full float-left relative"></div>
            <div class="md:px-10 xs:px-[10px] my-0 p-5 md:w-1/2 xs:w-full float-left relative">
              <Image
                src={card7.image.src}
                alt={card7.image.alt}
                width={50}
                height={50}
                class="my-[10px] mr-[10px] max-w-full align-middle inline-block w-[50px] h-[50px]"
                loading="lazy"
              />
              <h3 class="text-[18px] leading-[24px] lg:mt-5 md:mt-[10px] font-AvenirNextLTPro mb-[10px]">
                <span dangerouslySetInnerHTML={{ __html: card7.title }}></span>
              </h3>
              <div class="text-left font-Gravity mb-[10px] xs:text-[14px] xs:leading-[22px] md:leading-[1.6rem] md:text-[16px]">
                <p>
                  <span dangerouslySetInnerHTML={{__html: card7.text}}></span>
                </p>
              </div>
            </div>
            <div class="my-0 p-5 w-1/4 float-left relative"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Owners;
