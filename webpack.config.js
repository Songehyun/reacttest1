const path = require("path");

let name = "app";

module.exports = {
  entry: `./src/${name}.tsx`,
  output: {
    filename: `${name}.bundle.js`,
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // 정규식
      {
        test: /\.js$/, // 자스인지 확인할거야
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/, // 타스인지 확인할거야
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
};
