import { Card } from "./CmxLevels.tsx";

function CmxLevelCard(
  {
    card: {
      header,
      description,
      href,
      topics,
    },
  }: { card: Card },
) {
  return (
    <a
      href={href}
      class="lg:w-[340px] md:w-[524px] xs:w-[385px] md:block xs:block md:m-auto xs:m-auto md:mb-[20px] xs:mb-[20px] bg-[#fff] shadow-[1px_1px_10px_rgba(0,0,0,.2)] hover:shadow-[1px_1px_10px_rgba(0,0,0,.3)] rounded-tr-[41px]"
    >
      <header
        style={{ backgroundImage: `url(${header.backgroundImage})` }}
        class="h-[100px] rounded-tr-[41px] bg-cover bg-[50%] items-end justify-end flex pt-[20px] px-[20px] pb-[10px] [&>span]:mt-[20px] [&>span]:mb-[10px] [&>span]:text-[30px] [&>span]:leading-10 [&>span]:tracking-[1px] [&>span]:font-AvenirNextLTPro [&>span]:text-white [&>span]:font-bold text-right"
      >
        <span dangerouslySetInnerHTML={{ __html: header.title }} />
      </header>
      <div class="p-[30px] min-h-[340px] [&>*]:text-[#505050]">
        <div class="py-[10px] font-[15px] font-Gravity">
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </div>

        <div>
          {topics.map((topic) => (
            <div class="flex py-[10px]">
              <img class="h-[26px] mr-[4px]" src={topic.icon.image} />
              <div class="inline-block">
                <span dangerouslySetInnerHTML={{ __html: topic.title }}></span>
                {topic.subtitle
                  ? (
                    <span
                      class="block text-[#808080] [&>*]:text-[#808080] text-[14px] [&>*]:text-[14px]"
                      dangerouslySetInnerHTML={{ __html: topic.subtitle }}
                    >
                    </span>
                  )
                  : <></>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}

export default CmxLevelCard;
