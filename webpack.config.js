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
    filename: "app.js"
  },
  module: {
    rules: [javascriptRules]
  }
};
