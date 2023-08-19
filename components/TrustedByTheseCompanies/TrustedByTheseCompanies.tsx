import type {
  HTML,
  Image as LiveImage,
} from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title: HTML;
  company1: LiveImage;
  company2: LiveImage;
  company3: LiveImage;
  company4: LiveImage;
  company5: LiveImage;
}

function TrustedByTheseCompanies(
  { title, company1, company2, company3, company4, company5 }: Props,
) {
  return (
    <div class="mt-[120px]">
      <span
        class="text-center text-[18px] [&>*]:font-Gravity"
        dangerouslySetInnerHTML={{ __html: title }}
      >
      </span>
      <div class="flex items-center justify-center">
        <Image
          src={company1}
          width={149}
          height={98}
          class=""
        />
        <Image
          src={company2}
          width={149}
          height={98}
          class=""
        />
        <Image
          src={company3}
          width={149}
          height={98}
          class=""
        />
        <Image
          src={company4}
          width={149}
          height={98}
          class=""
        />
        <Image
          src={company5}
          width={149}
          height={98}
          class=""
        />
      </div>
    </div>
  );
}

export default TrustedByTheseCompanies;
