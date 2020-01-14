/**
 *
 * TWSEDayTrnLogs
 *
 * @author ace
 *
 * @version 2013/09/20 初始版本。
 * @version 2015/03/12 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
 *
 * @return {Object} TWSEDayTrnLogs
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @require underscore.js
 * @require Ancestor.js
 *
 */
 
(function(root) { 

	var RequireJSConfig;
	
	var _;	// underscore.js
	
	var ancestor;
	
	var result = function() {

		var serialVersionUID = new Number(1);	// 保留
  
		var trnDate = '';   // 交易日期
		var openPoint = 0;  // 開盤指數
		var highPoint = 0;  // 最高指數
		var lowPoint = 0;		// 最低指數
		var closePoint = 0;	// 收盤指數
		var trnTotal = 0;   // 交易金額
  
		var uber = new ancestor();
  
		_.extend(this, uber);
		// this.prototype = uber;	// 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setTrnDate = function(value) {if (value) trnDate = value; return value;}
		this.setOpenPoint = function(value) {if (value) openPoint = value; return value;}
		this.setHighPoint = function(value) {if (value) highPoint = value; return value;}
		this.setLowPoint = function(value) {if (value) lowPoint = value; return value;}
		this.setClosePoint = function(value) {if (value) closePoint = value; return value;}
		this.setTrnTotal = function(value) {if (value) trnTotal = value; return value;}
  
		this.getTrnDate = function() {return trnDate;}
		this.getOpenPoint = function() {return openPoint;}
		this.getHighPoint = function() {return highPoint;}
		this.getLowPoint = function() {return lowPoint;}
		this.getClosePoint = function() {return closePoint;}
		this.getTrnTotal = function() {return trnTotal;}
  
		// JSON物件資料。
		this.toJSONObject = function() {
  
			var result = {
    
				'trn_date': trnDate,
				'open_point': openPoint,
				'high_point': highPoint,
				'low_point': lowPoint,
				'close_point': closePoint,
				'trn_total': trnTotal
			};
    
			return _.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSON = function(value) {
  
			uber.setValueFromJSON(value);
    
			this.setTrnDate(value['trn_date']);
			this.setOpenPoint(value['open_point']);
			this.setHighPoint(value['high_point']);
			this.setLowPoint(value['low_point']);
			this.setClosePoint(value['close_point']);
			this.setTrnTotal(value['trn_total']);
		}
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/TWSEDayTrnLogs';
			result.title = 'twse_day_trn_logs';
			
      result.properties.trn_date = {'description': '交易日期', 'type': 'string', 'maxLength': 8};
      result.properties.open_point = {'description': '開盤指數', 'type': 'number'};
      result.properties.high_point = {'description': '最高指數', 'type': 'number'};
			result.properties.low_point = {'description': '最低指數', 'type': 'number'};
      result.properties.close_point = {'description': '收盤指數', 'type': 'number'};
			result.properties.trn_total = {'description': '交易金額', 'type': 'number'};

      return result;
    }
	}
	
	if (typeof define === 'function') {
	
		define(['tw.ace33022.vo.Ancestor', 'underscore'], function(Ancestor) {
		
			_ = root._;
		
			ancestor = Ancestor;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/RequireJSConfig.js');
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestor = require(RequireJSConfig.paths['tw.ace33022.vo.Ancestor'] + '.js');
		
		module.exports = result;
	}
	else {

		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
	
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');
			
			if (typeof root.tw.ace33022.vo.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['tw.ace33022.vo.Ancestor'] + '.js');
		}
			
		_ = root._;
			
		ancestor = root.tw.ace33022.vo.Ancestor;
		
		root.tw.ace33022.vo.TWSEDayTrnLogs = result;
	}
})(this);