import type { AlumniTopPartProps } from "./Alumni.tsx";

function AlumniTopPart({ alumniTopPart }: {
  alumniTopPart: AlumniTopPartProps;
}) {
  const { title, text, } = alumniTopPart;
  return (
    <>
      <div>
        <h2
          class="text-center my-5 font-sans font-bold text-3xl leading-7"
        >
        <span dangerouslySetInnerHTML={{ __html: title }}></span>
        </h2>
        <p
          class="text-center text-xl font-normal mb-3"
        >
        <span dangerouslySetInnerHTML={{ __html: text }}></span>
        </p>
      </div>
    </>
  );
}

export default AlumniTopPart;
