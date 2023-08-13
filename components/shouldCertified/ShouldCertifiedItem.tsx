import { Item } from './ShouldCertified.tsx';

function ShouldCertifiedItem(
  { item: {
      icon,
      content
  }}: { item: Item },
) {
  return (
    <div class="md:px-[30px] xs:px-[20px] xs:mb-[10px] md:mb-0">
      <img class="h-[30px] w-[30px] mb-[10px]" src={ icon.image } alt={ icon.alt } />
      <span class="[&>*]:font-Gravity xs:[&>*]:text-[14px]" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default ShouldCertifiedItem;
