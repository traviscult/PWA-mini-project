const path = require("path");
  
const config = {
  mode: "development",

  // add entry points for JavaScript files for the three pages, home, detail, and favorites.
  entry: {
      app: ["./assets/js/favorites.js", "./assets/js/index.js", "./assets/js/topic.js"]
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};

module.exports = config;
