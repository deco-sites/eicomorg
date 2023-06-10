import type { FacultyButtonProps } from "./Faculty.tsx";

function FacultyButton({ facultyButton }: {
  facultyButton: FacultyButtonProps;
}) {
  const { url, color, text } = facultyButton;
  return (
    <>
      <a href={url} class="cursor-pointer rounded-md mx-auto mt-5">
        <button
          class="btn-lg btn-primary rounded-md px-6 py-4 border-none"
          style={{ backgroundColor: color }}
        >
          <span dangerouslySetInnerHTML={{ __html: text }}></span>
        </button>
      </a>
    </>
  );
}

export default FacultyButton;
