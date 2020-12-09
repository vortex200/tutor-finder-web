const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./client/src/index.js",
  output: {
    path: path.resolve(__dirname, "server", "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      Components: path.resolve(__dirname, "client", "src", "components"),
      Redux: path.resolve(__dirname, "client", "src", "redux"),
      Utils: path.resolve(__dirname, "client", "src", "utils"),
    },
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    compress: true,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "client/public/index.html",
    }),
    new Dotenv({
      path: "./client/src/.env",
    }),
  ],
};
