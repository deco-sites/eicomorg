import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Enable View Transitions API */}
      <meta name="view-transition" content="same-origin" />

      {/* Tailwind v3 CSS file */}
      <link href={asset("/styles.css")} rel="stylesheet" />

      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon-32x32.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/favicon-16x16.png")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/favicon-32x32.png")}
      />

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* AvenirNextLTPro-Bold */
          @font-face {
            font-family: 'AvenirNextLTPro';
            font-style: bold;
            font-weight: 600;
            font-display: swap;
            src: url(${asset("/fonts/AvenirNextLTPro-Bold.woff2")})
          })  
            
        `,
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `@font-face {
        font-family: 'Gravity';
        src: url('https://uploads-ssl.webflow.com/611d568e03584148cb24ca2b/611e6e89afcb291fb0bf3870_Gravity-Regular.otf') format('opentype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }`,
        }}
      />

      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            `section[data-manifest-key="deco-sites/eicomorg/sections/ExecutiveProgrammeWarning.tsx"] { position: sticky; top: 70px; z-index: 100; }`,
        }}
      />
    </Head>
  );
}

export default GlobalTags;
