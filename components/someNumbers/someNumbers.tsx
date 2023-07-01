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
    leftCard: Card;
    rightCard: Card
}

function WaitingList(
    { leftCard, rightCard, backgroundImage }: Props,
  ) {
    return (
      <>
        <div class="">
        </div>
      </>
    );
  }
  
  export default WaitingList;