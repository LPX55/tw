/**
 *
 * @description DefaultConfiguratons
 *
 * @version 2015/11/13 ace 初始版本。
 * @version 2015/11/21 ace 新增logger物件。
 * @version 2015/11/21 ace 新增log4jPropertiesFile屬性。
 * @version 2015/11/21 ace 新增loggingPropertiesFile屬性。
 * @version 2018/08/13 ace 新增requirejsFile屬性。
 *
 * @author ace
 *
 */

(function(root) {

  var jsLibDir = 'javascript';
	var aceDir = 'tw/ace33022';
	
	var Database = function() { return null; };

	if (typeof process !== 'undefined') {

    // nodeJS執行環境
		
		if (typeof nw !== 'undefined') {
		
			process.env.NODE_DIR = process.env.NODE_PATH;
		}
		else {
		
			if (!process.env.NODE_DIR) throw new Error('NODE_DIR is undefined!');
		}

    jsLibDir = process.env.NODE_DIR;
	}
	else {

    if (typeof Packages !== 'undefined') {

      // Rhino執行環境
      jsLibDir = Packages.java.lang.System.getProperty('JSLibDir');
    }
	}

	/**
	 *
	 * 連線主機資訊
	 *
	 * @description 設定DAO元件的連線主機資訊，在瀏覽器環境使用window.location物件，在nwJS環境則可自行指定對應的主機資訊。
	 *
	 * @version 2015/11/13 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/location|Window.location - Web APIs | MDN}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/location|Document.location - Web APIs | MDN}
	 * @see {@link https://developer.mozilla.org/zh-TW/docs/Web/API/Location|Location - Web APIs | MDN}
	 *
	 * @todo 2015/10/28 主機資訊設定資料讀取外部設定檔？
	 * @todo 2015/10/28 nwJS環境下發生物件屬性是function時，取值會直接回傳該function程式碼，而非執行結果！？
	 *
	 * @comment 2015/10/28 nwJS環境下發生物件屬性是function時，取值會直接回傳該function程式碼，而非執行結果。目前的處理方式採用立即函數處理，等查明原因後再改寫？
	 *
	 */
	var ServerInfo = function() {

		var protocol =  'http:';
		var hostname = '127.0.0.1';
		var port = 8080;

		this.protocol = (function() {return protocol})();
		this.hostname = (function() {return hostname})();
		this.port = (function() {return port})();

		this.host = (function() {return hostname + ':' + new String(port)})();
		this.origin = (function() {return protocol + '//' + hostname + ':' + new String(port)})();

		if (typeof window !== 'undefined') {

			return window.location;
		}
		else {

			return this;
		}
	}

	/**
	 *
	 * @description logger
	 *
	 * @version 2019/02/15 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link http://logging.apache.org/|Welcome - Apache Logging Services}
	 * @see {@link http://logging.apache.org/log4j/1.2/|Apache log4j 1.2 -}
	 * @see {@link http://logging.apache.org/log4j/2.x/|Log4j – Apache Log4j 2 - Apache Log4j 2}
	 *
	 * @see {@link https://docs.oracle.com/javase/8/docs/api/java/util/logging/package-summary.html|java.util.logging (Java Platform SE 8 )}
	 * @see {@link https://docs.oracle.com/javase/8/docs/api/java/util/logging/Level.html|Level (Java Platform SE 8 )}
	 * @see {@link https://docs.oracle.com/javase/8/docs/api/java/util/logging/ConsoleHandler.html|ConsoleHandler (Java Platform SE 8 )}
	 *
	 */
	var logger = function() {

		var out;

		if (typeof console !== 'undefined') {

			// nodeJS執行環境
			out = console.log;
		}
		else if (typeof print !== 'undefined') {

			// Rhino執行環境
			out = print;
		}
		else {

			// LibreOffice沒有提供print函數。
			out = function(value) {};
		}

		this.trace = function(value) {out(value)};	// (the least serious)
		this.debug = function(value) {out(value)};
		this.info = function(value) {out(value)};
		this.warn = function(value) {out(value)};
		this.error = function(value) {out(value)};
		this.fatal = function(value) {out(value)};	// (the most serious)

		return this;
	}

	var result = {

		"Database": new Database(),
		"DateFormatString": "YYYYMMDD",
		"SaveDateFormatString": "YYYYMMDD",
		"ShowDateFormatString": "YYYY/MM/DD",
		"TimeFormatString": "HHmmss",
		"SaveTimeFormatString": "HHmmss",
		"ShowTimeFormatString": "HH:mm:ss",
		"JSLibDir": jsLibDir,
		"JSLibPath": jsLibDir + '/',
		"AceDir": aceDir,
		"VODir": aceDir + '/vo',
		"DAODir": aceDir + '/dao/Rhino',
		"BrowserUIDir": aceDir + '/browser/bootstrap',
		"DelphiBaseDir": 'K:/ReThink/Pascal/ExecuteEnv',
		"TempDir": 'K:/ReThink/Express/tmp',
		"location": new ServerInfo(),
		"programPath": "program/",
		"webServicePath": "ws/",
		"webServiceVOPath": "ws/vo/",
		"webServiceProgramPath": "ws/program/",
		"logger": new logger(),
		"log4jPropertiesFile": jsLibDir + '/tw/ace33022/util/Rhino/log4j.properties',
		"loggingPropertiesFile": jsLibDir + '/tw/ace33022/util/Rhino/logging.properties',
		"requirejsFile": "javascript/requirejs/require.js"
	};
	
	result["paths"] = new Object();
	
	/**
	 *
	 * @description loadCSS
	 *
	 * @param {String} src。
	 *
	 * @version 2019/02/15 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link https://stackoverflow.com/questions/10457870/is-there-any-way-to-load-css-and-javascript-from-a-string|html - Is there any way to load css and javascript from a string? - Stack Overflow}
	 *
	 */
	result.loadCSS = function(src) {
			
		var link = document.createElement('link');
		
		link.setAttribute('type', 'text/css');
		link.setAttribute('rel', 'stylesheet');
		link.setAttribute('href', src);

		document.head.appendChild(link);
	}
	
	/**
	 *
	 * @description loadJS
	 *
	 * @version 2019/02/15 ace 初始版本。
	 *
	 * @author ace
	 *
	 * @see {@link http://rocksaying.tw/archives/11847511.html|跨網站載入與執行 JavaScript 的方式 - 石頭閒語}
	 * @see {@link https://hype.codes/how-include-js-file-another-js-file|How to include JS file to another JS file? | Hype.Codes}
	 * @see {@link https://stackoverflow.com/questions/3248384/document-createelementscript-synchronously|javascript - document.createElement("script") synchronously - Stack Overflow}
	 *
	 */
	result.loadJS = function() {
		
    function RemoveAfterLoaded() {
		
      var eleScripts = document.getElementsByTagName('head')[0].getElementsByTagName('script');
			var index;
			
      for (index = 0; index < eleScripts.length ; index++) {
			
        // 將此節點自 DOM 中移除。(ps.需等待瀏覽器進行垃圾回收，回收效率並不高。)
        if (objJS === eleScripts[index]) document.getElementsByTagName('head')[0].removeChild(this); 
      }
    };
		
		var script = document.createElement('script');
		var callback;
		
		script.setAttribute('type', 'text/javascript');
		
		if (arguments.length === 3) {
		
			script.setAttribute('charset', arguments[0]);
			script.setAttribute('src', arguments[1]);
			
			callback = arguments[2];
		}
		else {
		
			script.setAttribute('src', arguments[0]);
			
			callback = arguments[1];
		}
		
		script.onload = function() { if (typeof callback === 'function') callback(); };
		
		document.head.appendChild(script);
	}
	
	result.loadNWInjectEnd = function() {
	
		var result = 'N';
		var index;

		var metas = document.getElementsByTagName('meta');

		for (index = 0; index < metas.length; index++) {

			if (metas[index].getAttribute('name') === 'load-nw_inject_end') {

				result = metas[index].getAttribute('content');
				break;
			}
		}

		return result;
	}
	
	if (typeof process !== 'undefined') {

		// nodeJS執行環境
		
		if ((typeof nw !== 'undefined') && (typeof module === 'undefined')) {
		
			// NW.js執行環境
			
			// 採用HTML標籤引入資料時不會有module物件。
			root.tw.ace33022.DefaultConfiguration = result;
		}
		else {
		
			module.exports = result;
		}
	}
	else {

		root.tw.ace33022.DefaultConfiguration = result;
	}
})(this);