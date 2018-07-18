const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pathConst = {
  out: `dist`,
  in: `src`
};
const template = `./${pathConst.in}/index.html`;
module.exports = {
  entry: `./${pathConst.in}/index`,
  devtool: "cheap-module-source-map",
  output: {
    path: path.join(__dirname, pathConst.out),
    filename: "[name]/index.js"
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: "pre",
        loader: "tslint-loader",
        options: { configFile: "./tslint.json" },
        include: [path.join(__dirname, pathConst.in)]
      },
      {
        test: /\.tsx?$/,
        use: ["awesome-typescript-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              sass: true,
              sourceMap: true,
              localIdentName: "[path][name]__[local]--[hash:base64:5]"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: "React homework",
      hash: true,
      template
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000
  }
};
