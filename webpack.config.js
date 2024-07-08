const path = require("path");

let name = "app";

module.exports = {
  entry: `./src/${name}.ts`,
  output: {
    filename: `${name}.bundle.js`,
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // 정규식
      {
        test: /\.ts$/, // 타스인지 확인할거야
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
