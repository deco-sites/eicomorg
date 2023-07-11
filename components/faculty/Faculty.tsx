import type { Image } from "deco-sites/std/components/types.ts";
import type { HTML } from "deco-sites/std/components/types.ts";
import FacultyTopPart from "./FacultyTopPart.tsx";
import FacultyCard from "./FacultyCard.tsx";
import FacultyButton from "./FacultyButton.tsx";

export interface FacultyTopPartProps {
  title: HTML;
  text: HTML;
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

export interface FacultyButtonProps {
  text: HTML;
  color: string;
  url: string;
}

export interface Props {
  facultyTopPart: FacultyTopPartProps;
  facultyMembers: FacultyCardProps[];
  facultyButton: FacultyButtonProps;
}

function Faculty(
  { facultyTopPart, facultyMembers = [], facultyButton }: Props,
) {
  return (
    <>
      <div className="flex justify-center lg:py-[100px] xs:py-8">
        <div className="z-auto max-w-[1120px] flex-1 pr-0 relative">
          <FacultyTopPart facultyTopPart={facultyTopPart} />
          <div className="text-left lg:flex-row xs:flex-col mt-8 md:flex-row justify-center md:ml-20 lg:ml-0">
            {facultyMembers.map((facultyInfo, index) => (
              <FacultyCard facultyInfo={facultyInfo} index={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="md:pt-10 xs:py-0 xs:pb-8 text-center md:my-16 lg:my-16 xs:my-0">
        <FacultyButton facultyButton={facultyButton} />
      </div>
    </>
  );
}

export default Faculty;
