import { HTMLtemplate } from "./html/template.js";
import PColors from "ansi-colors";
import Progress from "cli-progress";
import extractFrontmatter from "remark-extract-frontmatter";
import fs from "fs-extra";
import { h } from "hastscript";
import { parse } from "yaml";
import path from "path";
import rehypeInline from "rehype-inline";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import rehypeToc from "@jsdevtools/rehype-toc";
import remarkAdmon from "./lib/addAdmonitions.js";
import remarkDirective from "remark-directive";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import { remarkImageSrcChanger } from "./lib/changeImagePath.js";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { template } from "rehype-template";
import { unified } from "unified";

const cliProgress = new Progress.SingleBar({
  format:
    "Generating HTML Files | " +
    PColors.green("{bar}") +
    " | {percentage}% || {value}/{total} Files",
  barCompleteChar: "\u2588",
  barIncompleteChar: "\u2591",
  hideCursor: true,
});

const outputDir = "build";

const listDir = (dir, fileList = []) => {
  let files = fs.readdirSync(dir);

  files.forEach((file) => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      fileList = listDir(path.join(dir, file), fileList);
    } else {
      if (/\.md$/.test(file)) {
        let src = path.join(dir, file);
        fileList.push({ path: src, name: file.slice(0, file.length - 3) });
      }
    }
  });
};

const processor = unified()
  .use(remarkParse)
  .use(remarkFrontmatter)
  .use(extractFrontmatter, { yaml: parse })
  .use(remarkGfm)
  .use(remarkDirective)
  .use(remarkAdmon)
  .use(remarkImageSrcChanger)
  .use(remarkRehype)
  .use(template, { template: HTMLtemplate })
  .use(rehypeSlug)
  .use(rehypeToc, {
    cssClasses: {
      toc: "menu thin-scrollbar menu_SIkG",
      list: "theme-doc-sidebar-menu menu__list",
      listItem: "theme-doc-sidebar-item-link  menu__list-item",
      link: "menu__link",
    },
    customizeTOC: (toc) => {
      const toc_new = h(
        "aside",
        {
          class: "theme-doc-sidebar-container docSidebarContainer_YfHR",
        },
        [
          h("div", { class: "sidebarViewport_aRkj" }, [
            h("div", { class: "sidebar_njMd" }, [toc]),
          ]),
        ]
      );
      return toc_new;
    },
  })
  .use(rehypeInline)
  .use(rehypeStringify);

function main() {
  if (fs.pathExistsSync(path.resolve("./", outputDir)))
    fs.removeSync(path.resolve("./", outputDir));
  fs.mkdirSync(path.resolve("./", outputDir));

  let foundFiles = [];
  listDir("./intelligence", foundFiles);
  cliProgress.start(foundFiles.length, 0);
  foundFiles.forEach((f, i, arr) => {
    cliProgress.increment();
    const generatedFile = processor
      .processSync(
        fs.readFileSync(path.resolve("./", f.path), { encoding: "utf8" })
      )
      .toString();
    fs.writeFileSync(
      path.resolve("./", "build", f.name + ".html"),
      generatedFile
    );
  });
  cliProgress.stop();
}

main();
