/**
 *
 * @module StringUtils
 *
 * @see {@link https://demo.tc/post/813|建立良好的開發習慣，幫 js 檔案加上註解（jsdoc , vsdoc） | demo小鋪}
 * @see {@link https://codeday.me/bug/20171206/103929.html|javascript – 如何使用jsdoc-toolkit记录匿名函数(closure) - 代码日志}
 * @see {@link http://hant.ask.helplib.com/javascript/post_737062|如何使用jsdoc工具箱记录匿名函数( 关闭)_javascript_帮酷编程问答}
 *
 */

(function(root) { 

	var codeMapUtil;
	
	/**
	 *
	 * @description 刪除字串前後的空白、不可列印控制字元。
	 *
	 * @param {String} source 來源字串。
	 *
	 * @return {String} 運算結果字串。
	 *
	 * @memberof module:StringUtils
	 *
	 * @version 2012/02/07 ace 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link http://jsgears.com/thread-132-1-1.html|JavaScript Trim Function}
	 *
	 */
	function trim(source) {

		// return source.replace(/^\s*|\s*$/g, "");

		var start = -1;
		var end = source.length;

		while (source.charCodeAt(--end) < 33);
		while (source.charCodeAt(++start) < 33);

		return source.slice(start, end + 1);
	};
	
	/**
	 *
	 * @description 將encodeURI編碼的中文字UTF8碼對照encodedUTF8ToBIG5Map轉換成BIG5碼。
	 *
	 * @param {String} source 來源字串。
	 *
	 * @return {String} 結果字串。
	 *
	 * @memberof module:StringUtils
	 *
	 * @version 2017/02/20 ace 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://www.w3schools.com/jsref/jsref_escape.asp|JavaScript escape() Function}
	 * @see {@link https://www.w3schools.com/jsref/jsref_unescape.asp|JavaScript unescape() Function}
	 * @see {@link https://www.w3schools.com/jsref/jsref_encodeuri.asp|JavaScript encodeURI() Function}
	 * @see {@link https://www.w3schools.com/jsref/jsref_decodeuri.asp|JavaScript decodeURI() Function}
	 * @see {@link https://www.w3schools.com/jsref/jsref_encodeuricomponent.asp|JavaScript encodeURIComponent() Function}
	 * @see {@link https://www.w3schools.com/jsref/jsref_decodeuricomponent.asp|JavaScript decodeURIComponent() Function}
	 *
	 * @see {@link http://www.findbestopensource.com/product/utf8tobig5|Utf8tobig5 - A Javascript code which encode utf8 to big5}
	 * @see {@link https://code.google.com/archive/p/utf8tobig5/|Google Code Archive - Long-term storage for Google Code Project Hosting.}
	 *
	 */
	function encodeUTF8ToBig5(source) {

		function encodeUTF8ToBig5SUB(source, table) {

			if (source[0] === "%") {
		
				// var idxstr = source.substring(0, 3).toLowerCase();
				var idxstr = source.substring(0, 3).toUpperCase();
			
				if (table[idxstr]) {
		 
					var r = table[idxstr];
				
					if (typeof r === 'string') {
			 
						return {
				 
							"left": source.substring(3),
							"result": r
						};   
					} 
					else {
				
						return encodeUTF8ToBig5SUB(source.substring(3), r);
					}
				}	 
				else {
		 
					return {
			 
						"left": source.substring(3),
						"result": idxstr
					};
				}
			} 
			else {
		
				return {
			
					"left": source.substring(1),
					"result": source[0]
				};
			}
		};
		
		var left = source;
		var result = '';
	
		var cr;

		while (left.length > 0) {
	
			cr = encodeUTF8ToBig5SUB(left, codeMapUtil.encodedUTF8ToBIG5Map);
		
			left = cr.left;
			result += cr.result;
		}

		return result;
	};
	
	/**
	 *
	 * @description 轉換'rgb(dd, dd, dd)'為'XXXXXX'大寫16進位資料。
	 *
	 * @param {String} source 來源字串。
	 *
	 * @return {String} 轉換成功傳回大寫16進位資料字串，否則傳回來源字串。
	 *
	 * @memberof module:StringUtils
	 *
	 * @version 2017/05/06 ace 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript|JavaScript | MDN}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference|JavaScript reference - JavaScript | MDN}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects|Standard built-in objects - JavaScript | MDN}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp|RegExp - JavaScript | MDN}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String|String - JavaScript | MDN}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match|String.prototype.match() - JavaScript | MDN}
	 *
	 * @see {@link http://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value|javascript - How to get hex color value rather than RGB value? - Stack Overflow}
	 * @see {@link http://stackoverflow.com/questions/6177454/can-i-force-jquery-cssbackgroundcolor-returns-on-hexadecimal-format|rgb - Can I force jQuery.css("backgroundColor") returns on hexadecimal format? - Stack Overflow}
	 * @see {@link http://stackoverflow.com/questions/11871843/how-to-compare-against-jquery-rgb-value|javascript - How to compare against JQuery RGB value? - Stack Overflow}
	 * @see {@link http://www.phpied.com/rgb-color-parser-in-javascript/|RGB color parser in JavaScript / Stoyan's phpied.com}
	 *
	 */
	function rgb2hex(source) {
	
		function hex(digit) {return ('0' + parseInt(digit).toString(16)).toUpperCase().slice(-2);}
		
		var result = source;
		var rgb;
		
    if (source.search("rgb") !== -1) {
		
			rgb = source.match(/^rgba\(\s*(\d+),\s*(\d+),\s*(\d+),\s*.*\)$/);
			
			if (!rgb) rgb = source.match(/^rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\)$/);
			
			// if (rgb) result = '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
			if (rgb) result = hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
		}

		return result;
	};

	/**
	 *
	 * @description Get URL Parameters
	 *
	 * @param {string} url 網址
	 *
	 * @return {Object} JSON Object
	 *
	 * @version 2017/03/13 ace 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://en.wikipedia.org/wiki/Query_string|Query string - Wikipedia}
	 * @see {@link https://www.w3.org/TR/html4/interact/forms.html|Forms in HTML documents}
	 * @see {@link https://medium.com/raml-api/arrays-in-query-params-33189628fa68|Arrays in query params – RAML Playground – Medium}
	 * @see {@link https://stackoverflow.com/questions/6243051/how-to-pass-an-array-within-a-query-string|php - How to pass an array within a query string? - Stack Overflow}
	 *
	 */
	function getURLParameter(url) {
	
		var result = {
		
			"parameters": {}
		};

		var arrParam;
		
		var key;

		if (url.indexOf('?') !== -1) {

			arrParam = url.split('?')[1].split('&');

			for (var index in arrParam) {
			
				// result[decodeURI(arrParam[index].split('=')[0])] = decodeURI(arrParam[index].split('=')[1]);
				
				key = decodeURI(arrParam[index].split('=')[0]);
				
				result[key] = decodeURI(arrParam[index].split('=')[1]);
				
				if (typeof result["parameters"][key] === 'undefined') result["parameters"][key] = new Array();
				
				result["parameters"][key].push(decodeURI(arrParam[index].split('=')[1]));
			}
		}

		return result;
	};
		
	if (typeof define === 'function') {
	
		define(["tw.ace33022.util.CodeMapUtil"], function(CodeMapUtil) { 
		
			codeMapUtil = CodeMapUtil;
		
			return {
  
				trim: trim,
				encodeUTF8ToBig5: encodeUTF8ToBig5,
				rgb2hex: rgb2hex,
				getURLParameter: getURLParameter
			}
		});
	}
	else if (typeof exports !== 'undefined') {
	
		codeMapUtil = require('tw/ace33022/util/CodeMapUtil.js');
		
		module.exports.trim = trim;
		module.exports.encodeUTF8ToBig5 = encodeUTF8ToBig5;
		module.exports.rgb2hex = rgb2hex;
		module.exports.getURLParameter = getURLParameter;
	}
	else {
	
		if (typeof root.tw.ace33022.RequireJSConfig === 'undefined') throw new Error('tw.ace33022.RequireJSConfig is undefined.');
		
		load(root.tw.ace33022.RequireJSConfig.baseUrl + root.tw.ace33022.RequireJSConfig.paths["CodeMapUtil"] + '.js');
		
		codeMapUtil = root.tw.ace33022.util.CodeMapUtil;
		
		root.tw.ace33022.util.StringUtil.trim = trim;
		root.tw.ace33022.util.StringUtil.encodeUTF8ToBig5 = encodeUTF8ToBig5;
		root.tw.ace33022.util.StringUtil.rgb2hex = rgb2hex;
		root.tw.ace33022.util.StringUtil.getURLParameter = getURLParameter;
	}
})(this);