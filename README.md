# docs-platform-help

## How To

### Build
run `yarn build` to build all markdown files present under `intelligence`, and the output will be generated in `build` folder.

### Give Image Reference
always start image reference with this `../Images/{further_path}` so that it can be previewed in VSC and correctly mapped to HTML.

> there is a custom plugin which will convert only `../Images` to `./Images`, to map them correctly with scripts, so make sure to use `../Images` .


## Folder Structure

### intelligence
Put your source markdown files here.

### images
Put your images here.

### build
Will contain all the generated HTML files.

### assets
Contains template specific assets like images etc...

### html
Contains HTML template.

### css
Contains CSS.

### lib
Contains custom plugins code.
