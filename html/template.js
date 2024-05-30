import { html, doctype } from "rehype-template";

export const HTMLtemplate = (node, frontmatter) => html`
  ${doctype}
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${frontmatter.title || "title"}</title>
      <link rel="stylesheet" href="./css/main.css" />
    </head>
    <body>
      <div id="__docusaurus">
        <nav class="navbar navbar--fixed-top">
          <div class="navbar__inner">
            <div class="navbar__items">
              <div class="navbar__brand">
                <div class="navbar__logo">
                  <img
                    src="./assets/digital-ai/Digital_ai-FC-RGB-Lrg.png"
                    alt="My Site Logo"
                    class="themedComponent_mlkZ themedComponent--light_NVdE"
                  />
                </div>
                <b class="navbar__title text--truncate"
                  >${frontmatter.product || "product"}</b
                >
              </div>
            </div>
            <div class="navbar__items navbar__items--right"></div>
          </div>
        </nav>
        <main class="docRoot_UBD9">
          <div class="docMainContainer_TBSr">
            <div class="container padding-top--md padding-bottom--lg">
              <div class="main-wrapper">
                <div class="theme-doc-markdown markdown">
                  <div class="row">
                    <div class="col">${node}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer class="footer footer--dark">
        <div class="footer__bottom text--center">
          <div class="margin-bottom--sm">
            <a
              href="https://digital.ai/"
              rel="noopener noreferrer"
              class="footerLogoLink_---node_modules-@docusaurus-theme-classic-lib-theme-Footer-Logo-styles-module"
            >
              <img
                src="./assets/digital-ai/Digital_ai-FC-Reverse-RGB-Lrg.png"
                alt="My Site Logo"
                class="footer__logo themedComponent_---node_modules-@docusaurus-theme-common-lib-components-ThemedComponent-styles-module themedComponent--light_---node_modules-@docusaurus-theme-common-lib-components-ThemedComponent-styles-module"
              />
            </a>
          </div>
          <div class="footer__copyright">
            Copyright © ${new Date().getFullYear()} - DIGITAL.AI, ALL RIGHTS
            RESERVED
          </div>
        </div>
      </footer>
    </body>
  </html>
`;
