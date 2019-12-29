const path = require('path');
const common= require('./webpack.common');
const merge = require("webpack-merge");
var CleanWebpackPlugin = require("webpack-cleanup-plugin");

module.exports = merge(common, {
	mode: "production",
	devtool: "none",
	output: {
		filename : "[name].[contentHash].bundle.js",
		path : path.resolve(__dirname, "dist")
	},
	plugins: [new CleanWebpackPlugin()]
	
});
