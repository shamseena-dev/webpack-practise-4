//1. created initial files: index.html, 
//index.js,second.js, third_depOnSecond.js
no export / import needed here , can access anything from other js files, becz we are adding all s files as <script> tags

//2. added to github
//---commit-initial---

//3. added notes.js
//----commit-2

/* 
4. //npm init//
(pkg.json added)

5. //npm install --save-dev webpack webpack-cli//

-(node-modules got added)
- in pkg.json --devdependencies got added as below

"devDependencies": {
    "webpack": "^4.41.4",
    "webpack-cli": "^3.3.10"
  }
 6.  remove "test" scripts (i think optional) in pkg.json,

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

 7. instead, add  "start" script

"scripts": {
    "start": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },



  8. //npm start

  but error--- i think there was no src/index.js file
-------------------------------------------------
  Insufficient number of arguments or no entry found.
Alternatively, run 'webpack(-cli) --help' for usage info.

Hash: ad58256b4251c3f18a7b
Version: webpack 4.41.4
Time: 126ms
Built at: 12/27/2019 3:14:56 PM

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

ERROR in Entry module not found: Error: Can't resolve './src' in 'C:\Users\Haneef\Desktop\webpack-practise'
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! webpack-practise@1.0.0 start: `webpack`
npm ERR! Exit status 2
npm ERR!
npm ERR! Failed at the webpack-practise@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Haneef\AppData\Roaming\npm-cache\_logs\2019-12-27T14_14_57_140Z-debug.log
-------------------------------------------------
9.. Added src/index.js
(blank)--just for testing

it worked,no error

new "dist"folder is created and "main.js" inside it created
with some minified code inside it

10.delete this "dist" folder
11. add CONFIG FILE
  -> webpack.config.js file //any name we can give
----------------
  const path = require('path');

module.exports = {
	entry: "./src/app/index.js",
	output: {
		filename : "main.js";
		path : path.resolve(__dirname, "dist");
	}
	
}
--------------------

12. add this to script in pkg.json
  "start": "webpack --config webpack.config.js",

  ERROR;
  filename : "main.js";
                                    ^

  because ';' used !!!!
  corrected

  ==="dist"/ main.js ===created , with some  minified code in it

 13. added 
 ==
 mode: "development",
 == 
 npm start

so dist/main.js-- >NOT MINIFIED any more, but with some eval

top==some webpack stuffs,
bottom ==our this code of index.js
/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var title = document.getElementById('title');\r\n\r\ntitle.innerHTML = \"Title changed\";\r\n//NB:- not innerHtml, but innerHTML//\n\n//# sourceURL=webpack:///./src/app/index.js?");

/***/ })

/******/ });
14.. added devtool: "none" , npm start

dist/main.js--  became more like our original code
----------
/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var title = document.getElementById('title');

title.innerHTML = "Title changed";
//NB:- not innerHtml, but innerHTML//

/***/ })

/******/ });


15..  remove other script tags and add this dist/main.js to index.html
//add
<script type="text/javascript" src= "./dist/main.js"></script>

//remove
<!--<script type="text/javascript" src= "./src/app/index.js"></script>
<script type="text/javascript" src= "./src/app/second.js"></script>
<script type="text/javascript" src= "./src/app/third_depOnSecond.js"></script>-->


16. refresh webpage , and so, title changes as per index.js
para dont change, so lets coonect second.js now ..how??


17.. change entry point from index.js -->> third_depOnSecond.js
---------------------------------------------
entry: "./src/app/third_depOnSecond.js",
-----------------------------------------------
third_depOnSecond:
-------------------
import {text} from './second'; ===// NB:_import {text} from 'second';--didnt work--ERRORRR

text.innerHTML = "paragraph changed";
//NB:- not innerHtml, but innerHTML//

-----------------------------------------
second.js:
-------------

export var text = document.getElementById('text');

----------------------------------------------------
it works... the paragraph changes
and title unchanged

WEBPACK PRACTISE
paragraph changed

============commit 4
=======================================================================================

CSS LOADER

18. renamed app->js folder
-- added new folder css / style.css- body{color:red}
(src/css/style.css)
corrected path names..


19. npm install --save-dev style-loader css-loader

20. added to third_depOnSecond.js (which is ENTRY POINT)
import "../css/style.css";

21. CONFIG --webpack.config.js
----------------
module : {
    rules : [
     {
      test: /\.css$/,
      use : ["style-loader","css-loader"]
     }
    ]
  }
------------------
22. npm start===it worked--RED color on webpage-aftr refreshing

23..  F12 -->ELEMENTS->> 

<head>

<style>body{ color: red; }</style >

</head>

==========commit 5==

SASS/SCSS

24.



