/**
 *
 * XLSX Loader
 *
 * @author ace
 *
 * @version 2017/02/11 初始版本。
 *
 * @see <a href="http://requirejs.org/">RequireJS</a>
 * @see <a href="http://requirejs.org/docs/whyamd.html">Why AMD?</a>
 * @see <a href="https://github.com/amdjs/amdjs-api/wiki/AMD">AMD · amdjs/amdjs-api Wiki</a>
 *
 * @see <a href="https://github.com/SheetJS/js-xlsx">SheetJS/js-xlsx: XLSX / XLSM / XLSB / XLS / SpreadsheetML (Excel Spreadsheet) / ODS parser and writer</a>
 * @see <a href="http://stuk.github.io/jszip/">JSZip</a>
 *
 * @see <a href="https://github.com/SheetJS/js-xlsx/issues/299">xlsx.js does not work but xlsx.full.min.js does · Issue #299 · SheetJS/js-xlsx</a>
 * @see <a href="http://stackoverflow.com/questions/32539040/how-to-include-jszip-with-requirejs-jszip-is-not-defined">javascript - How to include jszip with requirejs : jszip is not defined - Stack Overflow</a>
 *
 * @see <a href="http://stackoverflow.com/questions/9507606/when-should-i-use-require-and-when-to-use-define">requirejs - When should I use require() and when to use define()? - Stack Overflow</a>
 *
 * @description 
 *
 * @comment 
 *
 * @todo
 *
 */

(function(root) { 

	if (typeof define == 'function') {
	
		define(["jszip"], function(jszip) { 

			// root.JSZip = jszip;
			window.JSZip = jszip;
		});
	}
	else if (typeof exports != 'undefined') {
	
	}
	else {
	
	}
})(this);