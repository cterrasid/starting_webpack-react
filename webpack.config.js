const HtmlWebpackPlugin = require("html-webpack-plugin");

const javascriptRules = {
  test: /\.js$/, // Search for any file with .js extension, to...
  exclude: /node_modules/, //...exclude node_modules and...
  use: {
    //...use a loader (babel), as below:
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-react", "@babel/preset-env"]
    }
  }
};

module.exports = {
  output: {
    filename: "app.[contentHash].js"
  },
  module: {
    rules: [javascriptRules]
  },
  plugins: [new HtmlWebpackPlugin({
      title: "Starting webpack with React",
      template: "src/index.html"
  })]
};
