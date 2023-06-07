import type { AlumniTopPartProps } from "./Alumni.tsx";

function AlumniTopPart({ alumniTopPart }: {
  alumniTopPart: AlumniTopPartProps;
}) {
  const { title, titleColor, text, textColor } = alumniTopPart;
  return (
    <>
      <div>
        <h2
          class="text-center my-5 font-sans font-bold text-3xl leading-7"
          style={{ color: titleColor }}
        >
          {title}
        </h2>
        <p
          class="text-center text-xl font-normal mb-3"
          style={{ color: textColor }}
        >
          {text}
        </p>
      </div>
    </>
  );
}

export default AlumniTopPart;