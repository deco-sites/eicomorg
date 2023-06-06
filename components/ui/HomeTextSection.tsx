export interface Props {
  title: string;
  content: string;
}

function HomeTextSection(
  { title, content }: Props,
) {
  return (
    <div class="container-fluid text-center py-[100px]">
      <span
        class="block font-AvenirNextLTPro uppercase text-[28px] mb-[40px] "
        style={{ color: "#f26f21", fontWeight: "bold" }}
      >
        {title}
      </span>
      <div class="md:w-[560px] xs:w-[420px] m-auto">
        <span style={{ color: "#696969" }}>{content}</span>
      </div>
    </div>
  );
}

export default HomeTextSection;
