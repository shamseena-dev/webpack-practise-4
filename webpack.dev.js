const path = require('path');
const common= require('./webpack.common');
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "development",
	devtool: "none",
	module: {
		rules:[
		   {
			test: /\.scss$/,
		 	use : ["style-loader","css-loader","sass-loader"]
		 }
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template : "./src/html/template.html"
		})],
	
	output: {
		filename : "[name].main.bundle.js",
		path : path.resolve(__dirname, "dist")
	}
});
