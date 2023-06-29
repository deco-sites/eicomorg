import type { HTML } from "deco-sites/std/components/types.ts";

export interface TestimonialPerson {
  name: string;
  role: string;
}

export interface Testimonial {
  content: HTML;
  person: TestimonialPerson;
}

export interface Props {
  title: HTML;
  testimonials: Testimonial[];
}

function TestimonialComponent(
  { testimonial, index }: { testimonial: Testimonial; index: number },
) {
  return (
    <div
      class={`pt-[20px] pr-[30px] pb-[10px] pl-[30px] bg-[length:20px] bg-[20px_20px] bg-no-repeat bg-[url(/icons/Quotation-Marks-Left.svg)] relative border border-[#dfdfdf] col-span-1 md:mb-0 xs:mb-3 ${
        index % 2 ? "row-span-1" : "row-span-2"
      }`}
    >
      <div
        class="bg-[length:20px] bg-[100%_95%] bg-no-repeat bg-[url(/icons/Quotation-Marks-Right.svg)] py-[30px] border-b border-b-[#eaeaea]"
        dangerouslySetInnerHTML={{ __html: testimonial.content }}
      />

      <div class="text-[#696969] block my-2">
        <span class="text-[14px] font-bold block">
          {testimonial.person.name}
        </span>
        <span class="text-[12px] block">{testimonial.person.role}</span>
      </div>
    </div>
  );
}

function TestimonialsSection(
  { title, testimonials }: Props,
) {
  return (
    <div class="md:container xs:container-fluid md:max-w-[1120px] xs:w-full p-4">
      <div
        class="text-center richtext py-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <div class="md:grid xs:block grid-cols-[0.75fr,1.5fr,0.75fr] gap-4">
        {testimonials?.map((testimonial, index) => (
          <TestimonialComponent testimonial={testimonial} index={index} />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;
