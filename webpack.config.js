const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack'); 
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./wwwroot/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: {
    main: "./wwwroot/main.js", // Entrée principale qui inclut styles.scss
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  plugins: [
    htmlPlugin,
    new webpack.DefinePlugin({
      'process.env.APS_DEFAULT_USER': JSON.stringify(process.env.APS_DEFAULT_USER)
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader','postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        ]
      },
    ]
  }
};
