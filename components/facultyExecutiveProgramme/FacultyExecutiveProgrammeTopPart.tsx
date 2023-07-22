import type { FacultyTopPartProps } from "./FacultyExecutiveProgramme.tsx";

function FacultyExecutiveProgrammeTopPart({ facultyTopPart }: {
  facultyTopPart: FacultyTopPartProps;
}) {
  const { title } = facultyTopPart;
  return (
    <>
      <div class="text-center">
        <h2 class="mt-5 text-[28px] leading-[34px] font-bold font-AvenirNextLTPro">
          <span dangerouslySetInnerHTML={{ __html: title }}></span>
        </h2>
      </div>
    </>
  );
}

export default FacultyExecutiveProgrammeTopPart;
