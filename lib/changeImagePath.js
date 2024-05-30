import fs from "fs-extra";
import path from "path";
import { visit } from "unist-util-visit";

export const remarkImageSrcChanger = () => {
  const transformer = (ast, vfile) => {
    visit(ast, "image", (node) => {
      node.url = "./" + node.url.substring(3);
    });
  };
  return transformer;
};
