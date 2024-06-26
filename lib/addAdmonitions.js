/** @typedef {import('remark-directive')} */
/** @typedef {import('unified').Plugin<[Settings], import('mdast').Root>} Plugin */

import { h, s } from "hastscript";

import { visit } from "unist-util-visit";

/**
 * @typedef {{ title?: string, size?: number }} Attributes
 * @typedef {Object} Settings
 */

const types = {
  secondary: "note",
  info: "important",
  success: "tip",
  danger: "warning",
};

const callouts = {
  note: {
    ifmClass: "secondary",
    keyword: "note",
    title: "Note",
    emoji: "ℹ️", // '&#x2139;'
    svg: {
      width: "14",
      height: "16",
      viewBox: "0 0 14 16",
      path: {
        fillRule: "evenodd",
        d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z",
      },
      use: '<path fill-rule="evenodd" d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"/>',
    },
    tt: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"></svg>',
  },
  tip: {
    ifmClass: "success",
    keyword: "tip",
    title: "Tip",
    emoji: "💡", //'&#x1F4A1;'
    svg: {
      width: "12",
      height: "16",
      viewBox: "0 0 12 16",
      path: {
        fillRule: "evenodd",
        d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z",
      },
      use: '<path fill-rule="evenodd" d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"/>',
    },
    tt: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"></svg>',
  },
  warning: {
    ifmClass: "danger",
    keyword: "warning",
    title: "Warning",
    emoji: "🔥", //'&#x1F525;'
    svg: {
      width: "12",
      height: "16",
      viewBox: "0 0 12 16",
      path: {
        fillRule: "evenodd",
        d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z",
      },
      use: '<path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"/>',
    },
    tt: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16"></svg>',
  },
  info: {
    ifmClass: "info",
    keyword: "important",
    emoji: "❗️", //'&#x2757;'
    title: "Info",
    svg: {
      width: "14",
      height: "16",
      viewBox: "0 0 14 16",
      path: {
        fillRule: "evenodd",
        d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z",
      },
      use: '<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/>',
    },
    tt: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16"></svg>',
  },
  danger: {
    ifmClass: "warning",
    keyword: "caution",
    title: "Danger",
    emoji: "⚠️", // '&#x26A0;&#xFE0F;'
    svg: {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      path: {
        fillRule: "evenodd",
        d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z",
      },
      use: '<path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/>',
    },
    tt: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"></svg>',
  },
};

const iconSizeMap = /** @type {Record<number, string>} */ ({
  4: "large",
  5: "medium",
  6: "small",
});
const spacingMap = /** @type {Record<number, string>} */ ({
  4: "300",
  5: "200",
  6: "100",
});

/**
 * Recursively walk a `hast` tree and decorate each node with the metadata
 * required for `remark-directive`
 *
 * @param {JSX.Element} node
 */
const decorateHast = (node) => {
  Object.assign(node.data ?? (node.data = {}), {
    hName: node.tagName,
    hProperties: node.properties,
  });

  if (node.children && Array.isArray(node.children)) {
    node.children.forEach(decorateHast);
  }
};

/**
 * Check if directive `name` is a supported callout
 *
 * @param {string} name
 * @returns {name is keyof typeof callouts}
 */
const isSupportedCallout = (name) => Object.keys(callouts).includes(name);

/**
 * Remark plugin to support block-quote style callouts with the same syntax
 * introduced in `remark-admonition` which is apparently no longer supported in
 * the latest version of Remark.
 *
 * @see {@link https://github.com/elviswolcott/remark-admonitions/issues/49#issuecomment-1162400177}
 * @see {@link https://github.com/remarkjs/remark-directive#examples}
 *
 * @type {Plugin}
 */
const plugin = () => (tree) => {
  visit(tree, (node) => {
    if (
      !(
        node.type === "textDirective" ||
        node.type === "leafDirective" ||
        node.type === "containerDirective"
      )
    ) {
      return;
    }

    if (!isSupportedCallout(node.name)) return;

    // Grab attributes from the directive and apply defaults

    const {
      ifmClass: color,
      icon,
      title: defaultTitle,
      svg: SVG,
      keyword: kw,
      emoji: emote,
    } = callouts[node.name];
    const { title = defaultTitle, size = "6" } = node.attributes ?? {};

    // Next, build up all of the elements that are going to make up the
    // callout DOM structure in `hast`. These are separated out as nesting all
    // of the `hastscript` `h` and `s` calls would get a little unweildy
    // compared to something like JSX.

    // Icon -----------------

    const iconSize = iconSizeMap[size] ?? "small";
    const svg = h("span", { class: "admonitionIcon_Rf37" }, [
      s(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          // width: SVG.width,
          // height: SVG.height,
          viewBox: SVG.viewBox,
        },

        [s("path", { fillRule: SVG.path.fillRule, d: SVG.path.d })]
      ),
    ]);

    // Heading --------------

    const heading = h(`div`, { class: `admonitionHeading_Gvgb` }, [
      svg,
      { type: "text", value: title },
    ]);

    // Title --------------

    const spacing = spacingMap[size] ?? "100";
    const titleContainer =
      // Wrapping just the title container in `.hover-bootstrap`
      // to apply the Bootstrap theme for the icon and heading
      h("span", { class: "hover-bootstrap" }, [
        h(
          "span",
          {
            class: `d-inline-flex align-items-center gap-${spacing} mb-${spacing}`,
          },
          [svg, heading]
        ),
      ]);

    //content

    const content = h("div", { class: "admonitionContent_BuS1" }, [
      ...node.children,
    ]);

    node.tagName = node.type === "textDirective" ? "span" : "div";
    node.properties = {
      class: `theme-admonition theme-admonition-${kw} admonition_xJq3 alert alert--${color} `,
      "data-color-scheme": color,
    };
    node.children = [heading, content];

    // Finally we need to walk this whole `hast` tree we've built and augment
    // each node with the metadata that `remark-directive` requires

    decorateHast(node);
  });
};

export default plugin;
