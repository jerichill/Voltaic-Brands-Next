import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6 {  margin: 0;  padding: 0;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: Maven Pro;\n    font-size: 18px;\n  }\n\n  body {\n    font-weight: 500;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.25;\n    color: var(--dl-color-gray-black);\n    background-color: var(--dl-color-gray-white);\n    \n  }\n\n  \n',
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="shortcut icon"
            href="/playground_assets/favicon.ico"
            type="icon/png"
            sizes="32x32"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
            data-tag="font"
          ></link>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                '</noscript><script src="https://cdn.websitepolicies.io/lib/cookieconsent/1.0.3/cookieconsent.min.js" defer></script><script>window.addEventListener("load",function(){window.wpcc.init({"border":"thin","corners":"small","colors":{"popup":{"background":"#f6f6f6","text":"#000000","border":"#555555"},"button":{"background":"#555555","text":"#ffffff"}},"content":{"link":"Privacy Policy","href":"https://www.voltaicbrands.com/privacy-policy","button":"Accept"}})});</script>\n\n<!-- OpenMedium -->\n<script>\n  var _paq = window._paq = window._paq || [];\n  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */\n  _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);\n  _paq.push(["setCookieDomain", "*.iamgalactify.com"]);\n  _paq.push(["setDomains", ["*.iamgalactify.com","*.epicabstractions.com","*.etherfelis.com","*.mutantblobs.com","*.radpups.com","*.rareorbs.com","*.sinisterassassins.com","*.theparksreimagined.com","*.turbovirtual.com"]]);\n  _paq.push(["enableCrossDomainLinking"]);\n  _paq.push([\'trackPageView\']);\n  _paq.push([\'enableLinkTracking\']);\n  (function() {\n    var u="https://analytics.openmedium.cloud/";\n    _paq.push([\'setTrackerUrl\', u+\'js/tracker.php\']);\n    _paq.push([\'setSiteId\', \'27\']);\n    var d=document, g=d.createElement(\'script\'), s=d.getElementsByTagName(\'script\')[0];\n    g.async=true; g.src=u+\'js/tracker.php\'; s.parentNode.insertBefore(g,s);\n  })();\n</script>\n<!-- End OpenMedium Code --><noscript>',
            }}
          ></noscript>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<script src='https://unpkg.com/@teleporthq/teleport-custom-scripts'></script>",
            }}
          ></div>
        </body>
      </Html>
    )
  }
}

export default CustomDocument
