/**
 *
 * FuturesLargeStayLogs(期貨大額交易人未沖銷部位)
 *
 * @author ace
 *
 * @version 2013/10/28 初始版本。
 * @version 2014/12/22 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @description
 *
 * @require underscore.js
 * @require Ancestor.js
 *
 * @todo 
 *
 */
 
(function(root) { 

	var RequireJSConfig;
	
	var _;	// underscore.js
	
	var ancestor;
	
	var result = function() {

		var serialVersionUID = new Number(1);	// 保留
  
		var conMonth = '';	// 契約月份
  
		var uber = new ancestor();
		
		_.extend(this, uber);
		// this.prototype = uber;	// 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.getConMonth = function() {return conMonth;}
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setConMonth = function(value) {if (value) conMonth = value; return value;}
  
		// JSON物件資料。
		this.toJSONObject = function() {
  
			var result = {
    
				'con_month': conMonth
			}
    
			return _.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSON = function(value) {
  
			uber.setValueFromJSON(value);
    
			this.setConMonth(value['con_month']);
		}
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.properties.con_month = { 'description': '契約月份', 'type': 'string', 'maxLength': 6 };

      return result;
    }
	}
	
	if (typeof define === 'function') {
	
		define(['tw.ace33022.vo.FuturesLargeStayAllLogs', 'underscore'], function(Ancestor) {
		
			_ = root._;
		
			ancestor = Ancestor;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/RequireJSConfig.js');
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestor = require(RequireJSConfig.paths['tw.ace33022.vo.FuturesLargeStayAllLogs'] + '.js');
		
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
	
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');
			
			if (typeof root.tw.ace33022.vo.FuturesLargeStayAllLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['tw.ace33022.vo.FuturesLargeStayAllLogs'] + '.js');
		}
			
		_ = root._;
			
		ancestor = root.tw.ace33022.vo.FuturesLargeStayAllLogs;
			
		root.tw.ace33022.vo.FuturesLargeStayLogs = result;
	}
})(this);