CACHE BUSTING

1. contentHash

webpack.config.js
-------------------
output: {
		filename : "main.js",
		-->>

output: {
		filename : "main.[contentHash].js",

//add main.[contentHash].js

2. npm start

dist==>> main.5bdda50986----.js
//this main file is auto generated inside "dist"

3. but how to link this dynamically genertd main file in <script> tag in index.html??
for this we need a plugin

4==HTML WEBPACK PLUGIN==

5. npm install --save-dev html-weback-plugin

//now its inside devdepenedencies --in pkg.json

6. Add this plugin to config file
webpack.config.js
-------------------

+ var HtmlWebpackPlugin = require("html-webpack-plugin");
  module.exports= {

+ plugins: [new HtmlWebpackPlugin()],
  }

7.
===>> Now dist ==> "index.html"==//auto generated new file !!!
---------------------------------------------------
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
  </head>
  <body>
  <script type="text/javascript" src="main.5bdda50986d06f5d5708.js"></script></body>
</html>
------------------------------------------------------
==============
//here main.contenthash file is auto linked to <script> tag

-------------COMMIT 4------------------

8.Now we need to add contents of original "index.html" to this new index.html inside "dist"

9. create a new template.html (inside src)
src/html/template.html

10. copy contents of original index.html (except script tag and anythig else can be avoided)==>template.html
---------------
<!DOCTYPE html>
<html>
<head>
	<title>Webpack demo</title>
</head>
<body>
	<h1 id="title">WEBPACK PRACTISE</h1>
	<img src= "./src/images/travel.jpg">
	<p id="text"> webpack paragraph text</p>
<!--<script type="text/javascript" src= "./dist/main.js"></script>-->
<!--<script type="text/javascript" src= "./src/app/index.js"></script>
<script type="text/javascript" src= "./src/app/second.js"></script>
<script type="text/javascript" src= "./src/app/third_depOnSecond.js"></script>-->

</body>
</html>

----------------------
11. add it as a template in here:

webpack.config.js
-----------------
plugins: [new HtmlWebpackPlugin({
		template : "./src/html/template.html"
		}
		)],
----------------------

12. npm start

13.. WWOOWWW!!   now 7 ==>

dist/index.html
------------------------------
<!DOCTYPE html>
<html>
<head>
	<title>Webpack demo</title>
</head>
<body>
	<h1 id="title">WEBPACK PRACTISE</h1>
	<img src= "./src/images/travel.jpg">
	<p id="text"> webpack paragraph text</p>
<!--<script type="text/javascript" src= "./dist/main.js"></script>-->
<!--<script type="text/javascript" src= "./src/app/index.js"></script>
    <script type="text/javascript" src= "./src/app/second.js"></script>
     script type="text/javascript" src= "./src/app/third_depOnSecond.js"></script>  
-->

<script type="text/javascript" src="main.5bdda50986d06f5d5708.js"></script></body>
</html>

------------------------------------------------------------------


==================  COMMIT 5 ===============================

14. <7>.. SPLITTING DEV & PROD




