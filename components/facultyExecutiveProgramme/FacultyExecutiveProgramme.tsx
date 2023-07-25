import type { Image } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import FacultyExecutiveProgrammeTopPart from "./FacultyExecutiveProgrammeTopPart.tsx";
import FacultyExecutiveProgrammeCard from "./FacultyExecutiveProgrammeCard.tsx";

export interface FacultyTopPartProps {
  title: HTML;
}

export interface FacultyCardProps {
  name: HTML;
  position: HTML;
  text: HTML;
  linkedinURL: string;
  image: {
    src: Image;
    alt: string;
  };
}

export interface Props {
  facultyTopPart: FacultyTopPartProps;
  facultyMembers: FacultyCardProps[];
}

function FacultyExecutiveProgramme(
  { facultyTopPart, facultyMembers = [] }: Props,
) {
  return (
    <div className="flex justify-center pt-[80px] pb-10">
      <div className="z-auto max-w-[1120px] flex-1 pr-0 relative">
        <FacultyExecutiveProgrammeTopPart facultyTopPart={facultyTopPart} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center md:ml-20 lg:ml-0">
          {facultyMembers.map((facultyInfo, index) => (
            <div key={index}>
              <FacultyExecutiveProgrammeCard
                facultyInfo={facultyInfo}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FacultyExecutiveProgramme;
