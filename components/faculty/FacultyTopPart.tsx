import type { FacultyTopPartProps } from "./Faculty.tsx";

function FacultyTopPart({ facultyTopPart }: {
  facultyTopPart: FacultyTopPartProps;
}) {
  const { title, text, } = facultyTopPart;
  return (
    <>
      <div>
        <h2 class="mt-5">
            <span dangerouslySetInnerHTML={{ __html: title }}></span>
        </h2>
        <p class="max-w-[560px] mx-auto my-10 pb-0 m-10">
            <span dangerouslySetInnerHTML={{ __html: text }}></span>
        </p>
      </div>
    </>
  );
}

export default FacultyTopPart;
