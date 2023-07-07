import type { FacultyTopPartProps } from "./Faculty.tsx";

function FacultyTopPart({ facultyTopPart }: {
  facultyTopPart: FacultyTopPartProps;
}) {
  const { title, text } = facultyTopPart;
  return (
    <>
      <h2 class="text-center mt-8 text-3xl font-black tracking-tighter">
        <span dangerouslySetInnerHTML={{ __html: title }}></span>
      </h2>
      <div class="text-center max-w-[540px] mx-auto mt-11 pb-0 md:text-[16px] xs:text-[14px]">
        <span dangerouslySetInnerHTML={{ __html: text }}></span>
      </div>
    </>
  );
}

export default FacultyTopPart;
