import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import { Ref } from "preact/hooks";
import { useScrollShow } from "$store/sdk/useScrollShow.ts";

export interface ActionLink {
  title: HTML;
  href: string;
}

export interface Props {
  title: HTML;
  image: LiveImage;
  paragraph: HTML;
  actionsLinks: ActionLink[];
}

function ActionLinkComponent({ actionLink }: { actionLink: ActionLink }) {
  return (
    <a
      class="
        w-fit
        bold
        my-2
        font-bold
        hover:underline
        text-[#f26f21]
        uppercase
        tracking-[1px]
        relative
        font-AvenirNextLTPro

        lg:pr-[30px]
        lg:hover:pr-[34px]
        lg:block

        md:inline-block
        md:mr-8
        md:pr-[26px]
        md:hover:pr-[26px]

        xs:mr-3
        xs:pr-[30px]
        xs:text-[14px]

        bg-[length:20px] bg-[right] bg-no-repeat bg-[url(/icons/Arrow-right-ORANGE.svg)]
      "
      href={actionLink.href}
      dangerouslySetInnerHTML={{ __html: actionLink.title }}
    >
    </a>
  );
}

function HomeAboutSection(
  { title, image, paragraph, actionsLinks }: Props,
) {
  const [elementRef, isShown] = useScrollShow();

  return (
    <div
      ref={elementRef as Ref<HTMLDivElement>}
      class="container-fluid bg-gray-lines-texture bg-contain bg-no-repeat bg-[100%] xs:h-[640px] md:h-[760px] lg:py-[100px]"
    >
      <div class="lg:w-[70rem] relative m-auto block">
        <div
          class="
            lg:h-[400px]
            lg:w-[630px]
            
            md:container-fluid
            md:pb-[30px]
            md:py-[70px]
            md:px-[70px]
            md:pr-[110px]
            md:text-[38px]

            xs:pb-[10px]
            xs:py-[20px]
            xs:px-[20px]
            xs:pr-[10px]
            xs:text-[28px]

            font-AvenirNextLTPro
            font-bold
            leading-[44px]
            bg-[#dbdbdf]
          "
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </div>

        <div
          style={{ backgroundImage: `url('${image}')` }}
          class="
            lg:w-[600px]
            lg:h-[400px]
            lg:[clip-path:polygon(0%_0%,100%_0%,100%_75%,82%_100%,0%_100%)]
            lg:top-[50px]
            lg:left-[570px]

            md:w-[500px]
            md:h-[300px]
            md:top-[28.5rem]

            xs:w-[100%]
            xs:h-[200px]
            xs:top-[440px]

            bg-no-repeat
            bg-cover
            absolute
        "
        >
        </div>

        <div
          class={`
          bg-white
          rounded-sm
          border
          border-[#dfdfdf]
          pr-[40px]
          px-[24px]
          block
          m-auto
          z-10
          relative
          
          lg:bottom-[120px]
          lg:left-[-30px]
          lg:w-[710px]

          md:py-[40px]
          md:pb-[24px]
          md:bottom-[20px]
          md:left-[00px]
          md:w-[95%]

          xs:py-[14px]
          xs:pb-[0px]
          xs:w-[97%]

          ${isShown ? "animate-slide-right" : ""}
        `}
        >
          <span
            dangerouslySetInnerHTML={{ __html: paragraph }}
          >
          </span>

          <div class="my-5">
            {actionsLinks.map((actionLink) => (
              <ActionLinkComponent actionLink={actionLink} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutSection;
