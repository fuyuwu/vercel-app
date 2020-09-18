// nodejs path module
const path = require("path");
// webpack
const webpack = require("webpack");
// 這個插件可以用來提取CSS程式, 使其變成一個獨立CSS檔
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 這個變數儲存目前 env, 可以用這個變數決定要不要壓縮程式碼等等
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                url: false,
              },
            },
            {
              loader: "postcss-loader",
            },
            {
              loader: "sass-loader",
            },
          ],
        }),
      },
    ],
  },
};
