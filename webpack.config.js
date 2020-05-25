const path = require("path");

module.exports = {
  entry: "./src",
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
    filename: "bundle.js",
  }
};
