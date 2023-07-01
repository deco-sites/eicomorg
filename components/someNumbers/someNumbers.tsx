import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";

export interface Card {
  number: HTML;
  subtitle: HTML;
  text: HTML;
  source: HTML;
}

export interface Props {
  backgroundImage: LiveImage;
  topText: HTML;
  leftCard: Card;
  rightCard: Card;
}

function SomeNumbers(
  { backgroundImage, topText, leftCard, rightCard,  }: Props,
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
          class="px-24 bg-gray-100"
        >
            <div class="max-w-[1120px] pr-0 relative mx-auto">
                <div class="max-w-[700px] mx-auto mr-0 pt-3 block">
                    <div class="text-center">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default SomeNumbers;
