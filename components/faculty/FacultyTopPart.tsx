import type { FacultyTopPartProps } from "./Faculty.tsx";

function FacultyTopPart({ facultyTopPart }: {
  facultyTopPart: FacultyTopPartProps;
}) {
  const { title, text } = facultyTopPart;
  return (
    <>
      <div class="text-center">
        <h2 class="mt-5">
          <span class="[&>h1]:text-3xl" dangerouslySetInnerHTML={{ __html: title }}></span>
        </h2>
        <div class="max-w-[540px] mx-auto my-10 pb-0 m-10 md:text-[16px] xs:text-[14px]">
          <span dangerouslySetInnerHTML={{ __html: text }}></span>
        </div>
      </div>
    </>
  );
}

export default FacultyTopPart;
