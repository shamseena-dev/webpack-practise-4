const path = require('path');

module.exports = {
	mode: "development",
	devtool: "none",
	entry: {
		main: "./src/js/third_depOnSecond.js",
		vendor: "./src/js/index.js"
	},
	
	module : {
		rules : [
		 {
		 	test: /\.css$/,
		 	use : ["style-loader","css-loader"]
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