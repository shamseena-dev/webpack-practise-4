AFTER STEP3, i did these 

since using .gitignore-node_modules

-run npm install

//this will generate node-modules (i think as per pkg.json file, all necessary for this)
-npm start
==>> empty "dist" folder generatd!!!!

//must be bcz, i changed config file

    "start": "webpack --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
------------------------------------------------------------

<7> SPLITTING DEV & PROD

3 CONFIG FILES- dev, prod, common

1.create 3 config files (any names):-

  webpack.dev.js
  webpack.prod.js
  webpack.common.js (can rename existing webpack.config.js to this)

2. make changes like --
================
mode: "development",
	devtool: "none",
	output: {
		filename : "main.js",

================
use:
main.js==in prod
main.[contentHash].js== in dev

DEV==bcz for "dev" ,we will use DEV-SERVER ,which would take files from memory,so its not required to use contenthash for this..it works fine otherwise itself..

3. "scripts": {
    "start": "webpack --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  },

4. WEBPACK_MERGE

//npm install --save-dev webpack-merge//

5. Use:-in prod, dev config files

----------------------------------
const common= require('./webpack.common');
const merge = require("webpack-merge");

module.exports = merge(common, {


--------------------------------

5.
//npm start
dist-> index.html, main.js(not minified too)

--delete dist folder---
6.
//npm run build

dist--> index.html, main.5a2f----40.js (minified too)

7. DEV-SERVER

npm install --save-dev webpack-dev-server

8.

"scripts": {
    "start": "webpack-dev-server --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  },



9.npm start// compiled succesfully,BUT LIVE SERVER DIDNT WORK FOR ME :(

10. npm run build //works ---but image didnt load

11. IMAGES
-------------

11.a) HTML-LOADER====

//npm install --save-dev html-loader //

--it helps to require all images (automatically)  it see ..
--------------------------------
{
		 	test: /\.html$/,
		 	use:["html-loader"]
		 }
-------------------------------

//npm run build//
==>>ERROR

11 .b) FILE_LOADER
 tells WP how to handle these required images

 //npm install --save-dev file-loader//
------------------------
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
----------------------------
12.. npm start==some ERROR< ok
corrected thispath in template.html==> <img src= "../images/travel.jpg">

earlier ==<img src= "./src/images/travel.jpg">

13.. so dist/imgs(NEW) /travel.5d4c9----.jpg (NEW)

YESSSSSSS

14.. && dist/index.html becomes
-------------------------------
<!DOCTYPE html>
<html>
<head>
	<title>Webpack demo</title>
</head>
<body>
	<h1 id="title">WEBPACK PRACTISE</h1>
	<img src= "[object Module]">   ----------------//CHECK
	<p id="text"> webpack paragraph text</p>
<!--<script type="text/javascript" src= "./dist/main.js"></script>-->
<!--<script type="text/javascript" src= "./src/app/index.js"></script>
<script type="text/javascript" src= "./src/app/second.js"></script>
<script type="text/javascript" src= "./src/app/third_depOnSecond.js"></script>-->

<script type="text/javascript" src="main.5a2f9f8989922d955e40.js"></script></body>
</html>
--------------------------------------------------------------------------------------
====================COMMIT 5==============================

15. CLEAN-WEBPACK

15.a)//npm install --save-dev clean-webpack-plugin

15.b) webpack.prod.js
-------------------------------------------------------------
const CleanWebpackPlugin = require("clean-webpack-plugin");

- - - - - - -
 plugins : [new CleanWebpackPlugin()];

 _------------------------------------------------------------------

 SOME ERRORS---it said its nota constructr

 so UNINSTALLED  IT=

 //npm uninstall  clean-webpack-plugin//

REFERED=== https://www.npmjs.com/package/webpack-cleanup-plugin
//npm install webpack-cleanup-plugin --save-dev //


 installed 
 ------------

 var CleanWebpackPlugin = require("webpack-cleanup-plugin");

plugins : [new CleanWebpackPlugin()];

------------
================COMMIT 6========================================

