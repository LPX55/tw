/**
 *
 * OptionsDailyTrnLogs
 *
 * @author ace
 *
 * @version 2015/12/24 初始版本。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @require underscore.js
 * @require Ancestor.js
 *
 */
 
var OptionsDailyTrnLogs = function() {};
 
(function(root) {
 
	var RequireJSConfig;
	
	var _;	// underscore.js
	
	var ancestor;

  OptionsDailyTrnLogs = function() {

    var serialVersionUID = 1;	// 保留
  
		var trnDate = '';			// 交易日期
		var conMonth = '';		// 契約月份
		var productCode = '';	// 商品代碼
		var optionsType = '';	// 買賣權別
		var strikePrice = '';	// 履約價
		var trnPrice = 0.0;		// 成交價格
		var trnQty = 0.0;			// 成交量
	
		var uber = new ancestor();
  
    _.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setTrnDate = function(value) {if (value) trnDate = value; return value;}
		this.setConMonth = function(value) {if (value) conMonth = value; return value;}
		this.setProductCode = function(value) {if (value) productCode = value; return value;}
		this.setOptionsType = function(value) {if (value) optionsType = value; return value;}
		this.setStrikePrice = function(value) {if (value) strikePrice = value; return value;}
		this.setTrnPrice = function(value) {if (value) trnPrice = value; return value;}
		this.setTrnQty = function(value) {if (value) trnQty = value; return value;}
		
	  this.getTrnDate = function() {return trnDate;}
    this.getConMonth = function() {return conMonth;}
		this.getProductCode = function() {return productCode;}
		this.getOptionsType = function() {return optionsType;}
		this.getStrikePrice = function() {return strikePrice;}
		this.getTrnPrice = function() {return trnPrice;}
		this.getTrnQty = function() {return trnQty;}
		
    // JSON物件資料。
    this.toJSONObject = function() {
  
      var result = {
    
				'trn_date': trnDate,
				'con_month': conMonth,
				'product_code': productCode,
				'options_type': optionsType,
				'strike_price': strikePrice,
				'trn_price': trnPrice,
				'trn_qty': trnQty
      };
    
      return _.extend(result, uber.toJSONObject());
    }
  
    this.setValueFromJSONObject = function(value) {
  
      uber.setValueFromJSONObject(value);
    
		  this.setTrnDate(value['trn_date']);
      this.setConMonth(value['con_month']);
			this.setProductCode(value['product_code']);
			this.setOptionsType(value['options_type']);
			this.setStrikePrice(value['strike_price']);
			this.setTrnPrice(value['trn_price']);
			this.setTrnQty(value['trn_qty']);
    }
    
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/OptionsDailyTrnLogs';
			result.title = 'options_daily_trn_logs';
			
			result.properties.trn_date = {'description': '交易日期', 'type': 'string', 'maxLength': 8};
			result.properties.product_code = {'description': '商品代碼', 'type': 'string', 'maxLength': 3};
			result.properties.con_month = {'description': '契約月份', 'type': 'string', 'maxLength': 8};
			result.properties.options_type = {'description': '買賣權別', 'type': 'string', 'maxLength': 1};
			result.properties.strike_price = {'description': '履約價', 'type': 'string', 'maxLength': 5};
			result.properties.trn_price = {'description': '成交價格', 'type': 'number'};
			result.properties.trn_qty = {'description': '成交量', 'type': 'number'};
			
      return result;
    }
  }
  
	if (typeof define === 'function') {
	
		define(['underscore', 'Ancestor'], function(underscore, dAncestor) {
		
			_ = underscore;
				
			ancestor = dAncestor;
				
			return OptionsDailyTrnLogs;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestor = require(RequireJSConfig.paths['Ancestor'] + '.js');
		
		module.exports = OptionsDailyTrnLogs;
	}
	else {
	
		if (typeof root.RequireJSConfig !== 'undefined') RequireJSConfig = root.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
	
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');
			
			if (typeof root.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['Ancestor'] + '.js');
			
		}
		
		_ = root._;
		
		ancestor = root.Ancestor;
	}
})(this);