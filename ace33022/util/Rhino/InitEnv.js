/**
 *
 * InitEnv
 *
 * @author ace
 *
 * @version 2011/08/22 初始版本。
 * @version 2013/03/04 新增alert函數對應print函數。
 * @version 2013/03/04 新增window物件模擬瀏覽器部份功能。
 * @version 2013/03/13 補強jQuery.ajax函數之POST功能。
 * @version 2013/10/05 新增require函數對應load函數。
 * @version 2013/10/14 新增載入require.js(https://github.com/micmath/Rhino-Require)。
 * @version 2013/11/21 調整Content-type屬性之指定方式。
 * @version 2014/12/11 新增全域變數JSLibDir。
 * @version 2015/02/25 全域變數JSLibDir改以Configurations.JSLibDir取代。
 * @version 2015/11/13 載入RequireJS時，新增定義requirejs函數。
 * @version 2015/11/21 替換Configurations的logger物件。
 *
 * @description Rhino環境初始設定。
 *
 * @see <a href="https://github.com/micmath/Rhino-Require">micmath/Rhino-Require · GitHub</a>
 *
 * @see <a href="http://logging.apache.org/">Welcome - Apache Logging Services</a>
 * @see <a href="http://logging.apache.org/log4j/1.2/">Apache log4j 1.2 -</a>
 * @see <a href="http://logging.apache.org/log4j/2.x/">Log4j – Log4j 2 Guide - Apache Log4j 2</a>
 *
 * @see <a href="http://docs.oracle.com/javase/8/docs/api/java/util/logging/package-summary.html">java.util.logging (Java Platform SE 8)</a>
 * @see <a href="http://docs.oracle.com/javase/8/docs/api/java/util/logging/Level.html">Level (Java Platform SE 8)</a>
 * @see <a href="http://docs.oracle.com/javase/8/docs/api/java/util/logging/ConsoleHandler.html">ConsoleHandler (Java Platform SE 8)</a>
 *
 * @see <a href="https://docs.oracle.com/javase/tutorial/essential/environment/properties.html">Properties (The Java™ Tutorials > Essential Classes > The Platform Environment)</a>
 * @see <a href="https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html">System Properties (The Java™ Tutorials > Essential Classes > The Platform Environment)</a>
 *
 * @see <a href="https://cyntech.wordpress.com/2009/01/09/how-to-use-commons-logging/">How to use Commons Logging</a>
 * @see <a href="http://java-logy.blogspot.tw/2007/11/commons-logging.html">Commons Logging</a>
 * @see <a href="http://stackoverflow.com/questions/6315699/why-are-the-level-fine-logging-messages-not-showing">java - Why are the Level.FINE logging messages not showing? - Stack Overflow</a>
 *
 * @see <a href="http://blog.xuite.net/chihho32/blog/9121126-%5BJAVA%5D+Log4J">[JAVA] Log4J</a>
 * @see <a href="http://www.ewdna.com/2009/11/javalog4j.html">Java：Log4j 的簡單教學</a>
 * @see <a href="http://www.ewdna.com/2011/10/logback-log4j.html">Logback, Log4j 設定檔自動產生器</a>
 * @see <a href="http://stanleyweblife.blogspot.tw/2013/04/jsplog4j.html">那些年的網頁大小事: [JSP]log4j 中文亂碼解決問題</a>
 *
 * @see <a href="http://singleant.iteye.com/blog/934593">java日志，需要知道的几件事</a>
 * @see <a href="http://lavasoft.blog.51cto.com/blog/62575/26134">Apache通用日志工具commons-logging和Log4j使用总结</a>
 *
 * @see <a href="http://www.tutorialspoint.com/java/lang/system_setproperty.htm">Java.lang.System.setProperty() Method Example</a>
 * @see <a href="http://eric1300460.pixnet.net/blog/post/27586127-logger%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95%5Bjava%5D">Logger使用方法[JAVA]</a>
 *
 * @todo 2015/11/21 修改Rhino-Require可指定公用目錄取得共用函數。
 * 
 * @comment 2015/11/12 Rhino-Require預設讀取工作目錄做基準點，因此只可取得工作目錄下的node_modules目錄。
 *
 */

// 設定console輸出資料為Big5編碼格式。
Packages.java.lang.System.setOut(new Packages.java.io.PrintStream(Packages.java.lang.System.out, true, 'BIG5'));
Packages.java.lang.System.setErr(new Packages.java.io.PrintStream(Packages.java.lang.System.err, true, 'BIG5'));

// @version 2013/03/04 新增alert函數對應print函數。
if (typeof print === 'undefined') print = function(msg) {Packages.java.lang.System.out.println(msg);}

// if (typeof alert === 'undefined') alert = function(msg) {Packages.javax.swing.JOptionPane.showMessageDialog(null, msg);}
alert = print;

if (typeof module === 'undefined') {

	// CommonJS功能改由Rhino-Require處理。
	// module = {};
	// module.exports = {};
}

if (typeof window === 'undefined') {

	window = {
  
		document: {}
	}
}
	
if (typeof window.console === 'undefined') {

	window.console = {};
		
	window.console.log = alert;
}

if (typeof console === 'undefined') console = window.console;

// @version 2014/12/11 新增全域變數JSLibDir。
// @version 2015/02/25 全域變數JSLibDir改以Configurations.JSLibDir取代。
// var JSLibDir = 'L:/js';

// @version 2013/10/14 新增載入require.js(https://github.com/micmath/Rhino-Require)。
// @version 2013/11/24 取消載入require.js(https://github.com/micmath/Rhino-Require)，與require.js(http://requirejs.org/)衝突。
// require = load;
// load('L:/js/tw/ace33022/Rhino/require.js');
// requirejs = require;

// json2.js中使用alert函數進行警告提示，在沒有定義alert的狀況下載入會造成例外狀況發生。
// @version 2015/02/25 全域變數JSLibDir改以Configurations.JSLibDir取代。
load(Configurations['JSLibDir'] + '/tw/ace33022/json2.js');
	
load(Configurations['JSLibDir'] + '/tw/ace33022/RequireJSConfig.js');

if (!tw.ace33022.RequireJSConfig.baseUrl.endsWith('/')) tw.ace33022.RequireJSConfig.baseUrl += '/';
	
// importClass(Packages.javax.swing.JOptionPane); JOptionPane.showMessageDialog(null, 'Start Load');
// Libre Office的Rhino版本進行load的順序有問題？改成各別檔案依需求增加判斷再載入。
// for (var key in RequireJSConfig.paths) load(RequireJSConfig.baseUrl + RequireJSConfig.paths[key] + '.js');
	
// 是否使用require功能應該由各別程式自行指定。
// load(JSLibDir + 'tw/ace33022/Rhino/require.js');
	
if (typeof define === 'function') {

	// @version 2015/11/13 載入RequireJS時，新增定義requirejs函數。
	requirejs = require;
		
	requirejs.config(tw.ace33022.util.RequireJSConfig);
}	
else if (typeof exports !== 'undefined') {

	// 沒有載入RequireJS時則載入Rhino-Require(會有node_modules目錄讀取問題)？
	// load(Configurations.JSLibDir + '/tw/ace33022/util/Rhino/require.js');	
}

(function() {
	
	// @version 2015/11/21 替換Configurations的logger物件。
	var _logger = {};
	var log;
	var loggerName = 'org.mozilla.javascript.tools.shell.Main';
	
	if (typeof Configurations.loggerName !== 'undefined') loggerName = Configurations.loggerName;

	if (typeof Packages.org.apache.commons.logging.LogFactory === 'function') {

		// commons-loggin
		if (typeof Packages.org.apache.log4j.PropertyConfigurator.configure === 'function') {
			
			// Log4JLogger
			Packages.java.lang.System.setProperty('org.apache.commons.logging.Log', 'org.apache.commons.logging.impl.Log4JLogger');
			Packages.org.apache.log4j.PropertyConfigurator.configure(Configurations.log4jPropertiesFile);
		}
		else {
			
			// Jdk14Logger
			Packages.java.lang.System.setProperty('org.apache.commons.logging.Log', 'org.apache.commons.logging.impl.Jdk14Logger');
			Packages.java.lang.System.setProperty('java.util.logging.config.file', Configurations.loggingPropertiesFile);
		}

		loggerName = 'org.mozilla.javascript.tools.shell.Main';
		if (typeof Configurations.loggerName !== 'undefined') loggerName = Configurations.loggerName;
		
		// _logger = org.apache.commons.logging.LogFactory.getLog(org.mozilla.javascript.tools.shell.Main);
		_logger = Packages.org.apache.commons.logging.LogFactory.getLog(loggerName);
	}
	else {
			
		// java.util.logging
		// 沒有載入commons-loggin套件時！
		// java.util.logging.Logger使用log(Level level, String msg)處理日誌檔的存取；commons-loggin使用fatal、error、warn、info、debug、trace等函數處理日誌檔的存取。
		// 需根據以下對照關係自行處理：
		//   fatal = Level.SEVERE
		//   error = Level.SEVERE
		//   warn  = Level.WARNING
		//   info  = Level.INFO
		//   debug = Level.FINE
		//   trace = Level.FINEST		

		Packages.java.lang.System.setProperty('java.util.logging.config.file', Configurations.loggingPropertiesFile);
	
		// _logger = Configurations.logger;
		
		// _log = java.util.logging.Logger.getLogger(org.mozilla.javascript.tools.shell.Main);
		_log = Packages.java.util.logging.Logger.getLogger(loggerName);
		
		_logger.fatal = function(value) {_log.log(java.util.logging.Level.SEVERE, value)};
		_logger.error = function(value) {_log.log(java.util.logging.Level.SEVERE, value)};
		_logger.warn  = function(value) {_log.log(java.util.logging.Level.WARNING, value)};
		_logger.info  = function(value) {_log.log(java.util.logging.Level.INFO, value)};
		_logger.debug = function(value) {_log.log(java.util.logging.Level.FINE, value)};
		_logger.trace = function(value) {_log.log(java.util.logging.Level.FINEST, value)};
	}
	
	Configurations.logger = _logger;
})();

(function(window, undefined) {

  // todo: 補強jQuery物件之相關操作。
  // todo: 取回資料流應依contentType指定之編碼格式。
  
  // var jQuery = function(selector, context) {}
  
  var jQuery = {}
  
  jQuery.ajax = function(obj) {
  
    // Hypertext Transfer Protocol -- HTTP/1.1(http://www.ietf.org/rfc/rfc2616.txt)
    
    var HttpRequest;
    var HttpClient = new Packages.org.apache.http.impl.client.DefaultHttpClient();
    var StringEntity;
    
    var strHtml = new String();
    var strTemp = new String();
    
    var BufferedReader;
    
    if (obj.type.toUpperCase() == 'GET') {
    
      HttpRequest = new Packages.org.apache.http.client.methods.HttpGet(obj.url);
    }
    else if (obj.type.toUpperCase() == 'POST') {

      HttpClient.setRedirectStrategy(new Packages.org.apache.http.impl.client.LaxRedirectStrategy());
      
      HttpRequest = new Packages.org.apache.http.client.methods.HttpPost(obj.url);
      
      // @version 2013/11/21 調整Content-type屬性之指定方式。
      // HttpRequest.setHeader('Content-type', 'application/x-www-form-urlencoded; text/html; charset=utf-8');
      HttpRequest.setHeader('Content-type', obj.contentType);
      
      StringEntity = new Packages.org.apache.http.entity.StringEntity(obj.data, 'UTF-8');
      // @version 2013/11/21 調整Content-type屬性之指定方式。
      // StringEntity.setContentType('application/x-www-form-urlencoded; text/html; charset=utf-8');
      // StringEntity.setContentType(obj.contentType);
      
      HttpRequest.setEntity(StringEntity);
    }
    
    HttpResponse = HttpClient.execute(HttpRequest);
     
    BufferedReader = new Packages.java.io.BufferedReader(new Packages.java.io.InputStreamReader(HttpResponse.getEntity().getContent(), 'UTF-8'));
    while ((strTemp = BufferedReader.readLine()) != null) strHtml = strHtml + strTemp;
      
    obj.success(strHtml);
  }

  window.jQuery = window.$ = jQuery;
})(window);