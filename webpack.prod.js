const path = require('path');
const common= require('./webpack.common');
const merge = require("webpack-merge");
var CleanWebpackPlugin = require("webpack-cleanup-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	devtool: "none",
	output: {
		filename : "[name].[contentHash].bundle.js",
		path : path.resolve(__dirname, "dist")
	},
	module: {
		rules:[
		   {
			test: /\.scss$/,
		 	use : [MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
		 }
		]
	},
	optimization :{
		minimizer: [new OptimizeCssAssetsPlugin(),new TerserPlugin()]
	},
	plugins: [
	   new MiniCssExtractPlugin({filename:"[name].[contentHash].css"}),
	   new CleanWebpackPlugin()]
});
