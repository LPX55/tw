/**
 *
 * FuturesDayTrnLogs(期貨每日交易資料)
 *
 * @author ace
 *
 * @version 2013/10/22 初始版本。
 * @version 2014/12/23 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
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
  
		var trnDate = '';     // 交易日期
		var conMonth = '';    // 契約月份
		var productCode = ''; // 商品代碼
		var openPoint = 0;    // 開盤價
		var highPoint = 0;    // 最高價
		var lowPoint = 0;     // 最低價
		var closePoint = 0;   // 收盤價
		var lastCalPoint = 0;	// 結算價
		var trnQty = 0;       // 成交口數
		var stayQty = 0;      // 本日未平倉口數
  
		var uber = new ancestor();
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setTrnDate = function(value) {if (value) trnDate = value; return value;}
		this.setConMonth = function(value) {if (value) conMonth = value; return value;}
		this.setProductCode = function(value) {if (value) productCode = value; return value;}
		this.setOpenPoint = function(value) {if (value) openPoint = value; return value;}
		this.setHighPoint = function(value) {if (value) highPoint = value; return value;}
		this.setLowPoint = function(value) {if (value) lowPoint = value; return value;}
		this.setClosePoint = function(value) {if (value) closePoint = value; return value;}
		this.setLastCalPoint = function(value) {if (value) lastCalPoint = value; return value;}
		this.setTrnQty = function(value) {if (value) trnQty = value; return value;}
		this.setStayQty = function(value) {if (value) stayQty = value; return value;}
  
		this.getTrnDate = function() {return trnDate;}
		this.getConMonth = function() {return conMonth;}
		this.getProductCode = function() {return productCode;}
		this.getOpenPoint = function() {return openPoint;}
		this.getHighPoint = function() {return highPoint;}
		this.getLowPoint = function() {return lowPoint;}
		this.getClosePoint = function() {return closePoint;}
		this.getLastCalPoint = function() {return lastCalPoint;}
		this.getTrnQty = function() {return trnQty;}
		this.getStayQty = function() {return stayQty;}
  
		// JSON物件資料。
		this.toJSONObject = function() {
  
			var result = {
    
				'trn_date': trnDate,
				'con_month': conMonth,
				'product_code': productCode,
				'open_point': openPoint,
				'high_point': highPoint,
				'low_point': lowPoint,
				'close_point': closePoint,
				'last_cal_point': lastCalPoint,
				'trn_qty': trnQty,
				'stay_qty': stayQty
			};
    
			return _.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSON = function(value) {
  
			uber.setValueFromJSON(value);
    
			this.setTrnDate(value['trn_date']);
			this.setConMonth(value['con_month']);
			this.setProductCode(value['product_code']);
			this.setOpenPoint(value['open_point']);
			this.setHighPoint(value['high_point']);
			this.setLowPoint(value['low_point']);
			this.setClosePoint(value['close_point']);
			this.setLastCalPoint(value['last_cal_point']);
			this.setTrnQty(value['trn_qty']);
			this.setStayQty(value['stay_qty']);
		}

    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/FuturesDayTrnLogs';
			result.title = 'futures_day_trn_logs';

      result.properties.trn_date = {'description': '交易日期', 'type': 'string', 'maxLength': 8};
      result.properties.con_month = {'description': '契約月份', 'type': 'string', 'maxLength': 6};
      result.properties.product_code = {'description': '商品代碼', 'type': 'string', 'maxLength': 3};
      result.properties.open_point = {'description': '開盤價', 'type': 'number'};
			result.properties.high_point = {'description': '最高價', 'type': 'number'};
			result.properties.low_point = {'description': '最低價', 'type': 'number'};
			result.properties.close_point = {'description': '收盤價', 'type': 'number'};
			result.properties.last_cal_point = {'description': '結算價', 'type': 'number'};
      result.properties.trn_qty = {'description': '成交口數', 'type': 'number'};
      result.properties.stay_qty = {'description': '本日未平口數', 'type': 'number'};
			
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
		
		root.tw.ace33022.vo.FuturesDayTrnLogs = result;
	}
})(this);