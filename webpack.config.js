const path = require("path");

let name = "app";

module.exports = {
  entry: `./src/${name}.js`,
  output: {
    filename: `${name}.bundle.js`,
    path: path.resolve(__dirname, "dist"),
  },
};
