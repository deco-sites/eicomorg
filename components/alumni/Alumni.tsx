import type { Image } from "deco-sites/std/components/types.ts";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import type { HTML } from "deco-sites/std/components/types.ts";

export interface Card {
  name: string;
  position: string;
  graduation?: string;
  nationality: AvailableIcons;
  text: HTML;
  avatar: {
    src: Image;
    alt: string;
  };
}

export interface Props {
  title: HTML;
  content: HTML;
  cards: Card[];
}

function AlumniCard(
  {
    card: {
      name,
      position,
      graduation,
      nationality,
      text,
      avatar,
    },
    index,
  }: { card: Card; index: number },
) {
  const gridPositions: { [index: number]: string } = {
    0: "lg:row-span-3 lg:col-start-1 lg:row-start-1",
    1: "lg:row-span-4",
    2: "lg:row-span-3 lg:col-start-3 lg:row-start-1",
    3: "lg:row-span-3 lg:col-start-3 lg:row-start-4",
    4: "lg:row-span-2 lg:col-start-2 lg:row-start-5",
    5: "lg:row-span-3 lg:col-start-1 lg:row-start-4 lg:bg-red-400",
  };

  return (
    <div
      class={`border border-solid bg-white border-[#dfdfdf] w-full mx-auto pt-[20px] px-[30px] pb-[10px] relative ${
        gridPositions[index]
      } xs:col-span-3 xs:w-[97%]`}
    >
      <div class="items-center flex justify-start">
        <Icon
          id={nationality}
          width={28}
          height={28}
          strokeWidth={2}
          class="absolute right-2 top-1"
        />
        <img
          class="w-[50px] h-[50px] rounded-[40px] border-solid border-[3px] border-[#dfdfdf]"
          src={avatar.src}
          alt={avatar.alt}
        />
        <div class="font-Gravity text-[#696969] pl-[20px] py-[10px]">
          <span class="block text-[14px] leading-[22px] uppercase font-bold">
            {name}
          </span>
          <span class="block text-[12px] leading-[16px]">{position}</span>
        </div>
      </div>

      <div class="text-[#262628] border-t-[1px] border-solid border-t-[#dfdfdf] mt-[10px] pt-[30px] pb-[10px]">
        <span
          class="[&>*]:text-[#262628] [&>*]:font-normal [&>*]:font-Gravity [&>*]:leading-[1.6rem] "
          dangerouslySetInnerHTML={{ __html: text }}
        >
        </span>
      </div>
    </div>
  );
}

function Alumni(
  {
    title,
    content,
    cards,
  }: Props,
) {
  return (
    <>
      <div class="bg-[#f3f3f3] py-[100px]">
        <div class="max-w-[700px] m-auto">
          <h2 class="text-center mb-5 font-sans font-bold text-3xl leading-7">
            <span dangerouslySetInnerHTML={{ __html: title }}></span>
          </h2>
          <p class="text-[16px] mb-3">
            <span
              class="[&>*]:font-Gravity"
              dangerouslySetInnerHTML={{ __html: content }}
            >
            </span>
          </p>
        </div>

        <div class="max-w-[1120px] grid grid-cols-3 gap-[16px] mx-auto mt-[40px]">
          {cards.map((item, index) => <AlumniCard card={item} index={index} />)}
        </div>
      </div>
    </>
  );
}

export default Alumni;
