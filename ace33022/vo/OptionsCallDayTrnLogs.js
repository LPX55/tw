/**
 *
 * OptionsCallDayTrnLogs(選擇權買權每日交易行情)
 *
 * @author ace
 *
 * @version 2013/10/31 初始版本。
 * @version 2014/12/12 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
 *
 * @return {Object} OptionsCallDayTrnLogs
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
  
		var productCode = ''; // 商品代碼
		var trnDate = '';     // 交易日期
		var conMonth = '';    // 契約月份
		var strikePrice = 0; 	// 履約價
		var openPrice = 0;    // 開盤價
		var highPrice = 0;    // 最高價
		var lowPrice = 0;     // 最低價
		var closePrice = 0;   // 收盤價
		var lastCalPrice = 0;	// 結算價
		var trnQty = 0;       // 成交量
		var stayQty = 0;      // 未沖銷契約量
		
		var uber = new ancestor();
		
		_.extend(this, uber);
		// this.prototype = uber;	// 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setProductCode = function(value) {if (value) productCode = value; return value;}
		this.setTrnDate = function(value) {if (value) trnDate = value; return value;}
		this.setConMonth = function(value) {if (value) conMonth = value; return value;}
		this.setStrikePrice = function(value) {if (value) strikePrice = value; return value;}
		this.setOpenPrice = function(value) {if (value) openPrice = value; return value;}
		this.setHighPrice = function(value) {if (value) highPrice = value; return value;}
		this.setLowPrice = function(value) {if (value) lowPrice = value; return value;}
		this.setClosePrice = function(value) {if (value) closePrice = value; return value;}
		this.setLastCalPrice = function(value) {if (value) lastCalPrice = value; return value;}
		this.setTrnQty = function(value) {if (value) trnQty = value; return value;}
		this.setStayQty = function(value) {if (value) stayQty = value; return value;}
  
		this.getProductCode = function() {return productCode;}
		this.getTrnDate	= function() {return trnDate;}
		this.getConMonth = function() {return conMonth;}
		this.getStrikePrice = function() {return strikePrice;}
		this.getOpenPrice = function() {return openPrice;}
		this.getHighPrice = function() {return highPrice;}
		this.getLowPrice = function() {return lowPrice;}
		this.getClosePrice = function() {return closePrice;}
		this.getLastCalPrice = function() {return lastCalPrice;}
		this.getTrnQty = function() {return trnQty;}
		this.getStayQty = function() {return stayQty;}
  
		// JSON物件資料。
		this.toJSONObject = function () {
  
			var result = {
    
				'product_code': productCode,
				'trn_date': trnDate,
				'con_month': conMonth,
				'strike_price': strikePrice,
				'open_price': openPrice,
				'high_price': highPrice,
				'low_price': lowPrice,
				'close_price': closePrice,
				'last_cal_price': lastCalPrice,
				'trn_qty': trnQty,
				'stay_qty': stayQty
			};
    
			return _.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSONObject = function(value) {
  
			uber.setValueFromJSONObject(value);
    
			this.setProductCode(value['product_code']);
			this.setTrnDate(value['trn_date']);
			this.setConMonth(value['con_month']);
			this.setStrikePrice(value['strike_price']);
			this.setOpenPrice(value['open_price']);
			this.setHighPrice(value['high_price']);
			this.setLowPrice(value['low_price']);
			this.setClosePrice(value['close_price']);
			this.setLastCalPrice(value['last_cal_price']);
			this.setTrnQty(value['trn_qty']);
			this.setStayQty(value['stay_qty']);
		}
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());
			
			result.$schema = '/json-schema/vo/options_call_day_trn_logs';
			result.title = 'options_call_day_trn_logs';

      result.properties.product_code = {'description': '商品代碼', 'type': 'string', 'maxLength': 3};
      result.properties.trn_date = {'description': '交易日期', 'type': 'string', 'maxLength': 8};
      result.properties.con_month = {'description': '契約月份', 'type': 'string', 'maxLength': 8};
			result.properties.strike_price = {'description': '履約價', 'type': 'number'};
      result.properties.open_price = {'description': '開盤價', 'type': 'number'};
			result.properties.high_price = {'description': '最高價', 'type': 'number'};
			result.properties.low_price = {'description': '最低價', 'type': 'number'};
			result.properties.close_price = {'description': '收盤價', 'type': 'number'};
			result.properties.last_cal_price = {'description': '結算價', 'type': 'number'};
      result.properties.trn_qty = {'description': '成交量', 'type': 'number'};
      result.properties.stay_qty = {'description': '未沖銷契約量', 'type': 'number'};

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
		
		root.tw.ace33022.vo.OptionsCallDayTrnLogs = result;
	}
})(this);