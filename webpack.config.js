var webpack = require("webpack") 
var path = require("path")

module.exports = {
 devtool: "inline-source-map",
 entry: [
  "webpack-dev-server/client?http://127.0.0.1:8280/",
  "webpack/hot/only-dev-server",
  "./resources"
 ],

 output: {
  path: path.join(__dirname, "build"),
  filename: "./bundle.js"
 },
 resolve: {
  modulesDirectories: ["node_modules", "resources"],
  extensions: ["", ".js"]
 },
 module: {
  loaders: [
   {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ["react-hot", "babel?presets[]=react,presets[]=es2015"]
   },
   {
    test: /\.css?$/,
    exclude: /node_modules/,
    loaders: ["style", "css"]
   }
  ]
 },
 plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
 ]
}