const path = require('path');

module.exports = {
  mode: 'production',
  entry: "./src/initial.ts",
    output: {
      path: path.join(__dirname, "build"),
      filename: "main.js",
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
};