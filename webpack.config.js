const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const jsRules = {
  test: /\.js|[x]$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: "entry",
            corejs: "core-js@3",
            targets: {
              edge: "17",
              firefox: "60",
              chrome: "67",
              safari: "11.1",
            },
          },
        ],
        [
          "@babel/preset-react",
          {
            useBuiltIns: "entry",
            corejs: "core-js@3",
            targets: {
              edge: "17",
              firefox: "60",
              chrome: "67",
              safari: "11.1",
            },
          },
        ],
      ],
    },
  },
};

const cssRules = {
  test: /\.css$/i,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
  ],
};

const sassRules = {
  test: /\.s[ac]ss$/i,
  use: [
    "style-loader",
    { loader: "css-loader", options: { modules: true } },
    "sass-loader",
  ],
};

module.exports = (env, { mode }) => ({
  entry: "./src/index.js",
  output: {
    filename: "app.[contenthash].js",
    publicPath: "/",
  },
  mode: "development",
  resolve: {
    extensions: [".jsx", ".js", ".scss", ".css"],
  },
  module: {
    rules: [jsRules, cssRules, sassRules],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "To Do List",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin()
  ],
});
