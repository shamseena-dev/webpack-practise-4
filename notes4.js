<9> Multiple ENTRY POINTS 


1.

1.a) wp.common.js--
earlier :
------------------
     entry: "./src/js/third_depOnSecond.js" to 
---------------
Now::

	entry: {
		main: "./src/js/third_depOnSecond.js",
		vendor: "./src/js/index.js"
	},
============================
1. b)  wp.prod.js
-------------
output: {
		filename : "[name].[contentHash].bundle.js",
==========================
1.c)  wp.dev.js

output: {
		filename : "[name].main.bundle.js",

========================
2. npm install (to get node modules)
3.. npm start

WHHAAAATTTTT

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  imgs/travel.5d4c9ae71a945b41cbf06f1382202b71.jpg (1010 KiB)

  ================================================

  4... dist (NEW)--imgs-travel.5d-----.jpg
                 --index.html
                 --main.ed3----.js
                 --vendor.a554---.js


  4. b) dist// index.html
  -------------------
  <!DOCTYPE html>
<html>
<head>
	<title>Webpack demo</title>
</head>
<body>
	<h1 id="title">WEBPACK PRACTISE</h1>
	<img src= "[object Module]">
	<p id="text"> webpack paragraph text</p>
<!--<script type="text/javascript" src= "./dist/main.js"></script>-->
<!--<script type="text/javascript" src= "./src/app/index.js"></script>
<script type="text/javascript" src= "./src/app/second.js"></script>
<script type="text/javascript" src= "./src/app/third_depOnSecond.js"></script>-->

<script type="text/javascript" src="main.ed3e64d11c20084a86e3.bundle.js"></script>  ============//CHECK
<script type="text/javascript" src="vendor.a554a3cfbc3b06d6fdbc.bundle.js"></script></body> ===============//CHECK
</html>
==========================================================================
WOOOWWW

4........SASS/SCSS

4.a) added src/css/style2.SCSS

body{
	color: blue;
	h1{
       color:brown;
	}
	
}

4. b) 
/npm install sass-loader node-sass//

4.c) inside 
third_depOnSecond.js
------------------------
import "../css/style2.scss";

4.d)  wp.common.js
-----------------

{
		 	test: /\.scss$/,
		 	use : ["style-loader","css-loader","sass-loader"]
		 },
============================
//npm start
//npm run build

open dist/index.html
IT WORKS!!

