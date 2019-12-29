const path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	devtool: "none",
	entry: {
		main: "./src/js/third_depOnSecond.js",
		vendor: "./src/js/index.js"
	},
	
	plugins: [new HtmlWebpackPlugin({
		template : "./src/html/template.html"
		})],
	
	module : {
		rules : [
		 {
		 	test: /\.css$/,
		 	use : ["style-loader","css-loader"]
		 },
		 {
		 	test: /\.scss$/,
		 	use : ["style-loader","css-loader","sass-loader"]
		 },
		 		 {
		 	test: /\.html$/,
		 	use:["html-loader"]
		 },
		 {
		 	test:/\.(svg|png|jpg|gif)$/,
		    use: {
		 	    loader: "file-loader",
		 		options: {
		 			name:"[name].[hash].[ext]",
		 			outputPath: "imgs"
		 		}
		 	}
		 }
		]
	}

}