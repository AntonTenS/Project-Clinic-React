const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              //modules: true,
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      // {
      //   test: /\.(svg|jpe?g)$/,
      //   use: "file-loader",
      // },
      // {
      //   test: /\.png$/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         mimetype: "image/png",
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};

module.exports = config;
