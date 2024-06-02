import { visit } from "unist-util-visit";

export const remarkImageSrcChanger = () => {
  const transformer = (ast) => {
    visit(ast, "image", (node) => {
      node.url = "./" + node.url.substring(3);
    });
  };
  return transformer;
};
