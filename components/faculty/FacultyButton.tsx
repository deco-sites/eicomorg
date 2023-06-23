import type { FacultyButtonProps } from "./Faculty.tsx";

function FacultyButton({ facultyButton }: {
  facultyButton: FacultyButtonProps;
}) {
  const { url, color, text } = facultyButton;
  return (
    <>
      <a
        href={url}
        class="cursor-pointer rounded-md mx-auto md:mt-5 xs:mt-0 group"
      >
        <button
          class="text-[16px] btn-primary rounded-md px-6 md:py-4 xs:py-2 md:w-auto xs:block xs:w-11/12 xs:m-auto border-none hover:opacity-[0.9]"
          style={{ backgroundColor: color }}
        >
          <span dangerouslySetInnerHTML={{ __html: text }}></span>
        </button>
      </a>
    </>
  );
}

export default FacultyButton;
