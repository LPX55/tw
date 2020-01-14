/**
 *
 * ForeignFuturesDayTrnLogs
 *
 * @author ace
 *
 * @version 2013/10/30 初始版本。
 * @version 2014/12/24 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
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
  
		var trnDate = '';       // 交易日期
		var productCode = '';   // 商品代碼
		var buyQty = 0;         // 多方交易口數
		var buyTotal = 0;       // 多方交易金額
		var sellQty = 0;        // 空方交易口數
		var sellTotal = 0;      // 空方交易金額
		var stayBuyQty = 0;     // 未平倉多方交易口數
		var stayBuyTotal = 0;   // 未平倉多方交易金額
		var staySellQty = 0;    // 未平倉空方交易口數
		var staySellTotal = 0;	// 未平倉空方交易金額
  
		var uber = new ancestor();
	
		_.extend(this, uber);
		// this.prototype = uber;	// 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setTrnDate = function(value) {if (value) trnDate = value; return value;}
		this.setProductCode = function(value) {if (value) productCode = value; return value;}
		this.setBuyQty = function(value) {if (value) buyQty = value; return value;}
		this.setBuyTotal = function(value) {if (value) buyTotal = value; return value;}
		this.setSellQty = function(value) {if (value) sellQty = value; return value;}
		this.setSellTotal = function(value) {if (value) sellTotal = value; return value;}
		this.setStayBuyQty = function(value) {if (value) stayBuyQty = value; return value;}
		this.setStayBuyTotal = function(value) {if (value) stayBuyTotal = value; return value;}
		this.setStaySellQty = function(value) {if (value) staySellQty = value; return value;}
		this.setStaySellTotal = function(value) {if (value) staySellTotal = value; return value;}
  
		this.getTrnDate = function() {return trnDate;}
		this.getProductCode = function() {return productCode;}
		this.getBuyQty = function() {return buyQty;}
		this.getBuyTotal = function() {return buyTotal;}
		this.getSellQty = function() {return sellQty;}
		this.getSellTotal = function() {return sellTotal;}
		this.getStayBuyQty = function() {return stayBuyQty;}
		this.getStayBuyTotal = function() {return stayBuyTotal;}
		this.getStaySellQty = function() {return staySellQty;}
		this.getStaySellTotal = function() {return staySellTotal;}
  
		// JSON物件資料。
		this.toJSONObject = function () {
  
			var result = {
    
				'trn_date': trnDate,
				'product_code': productCode,
				'buy_qty': buyQty,
				'buy_total': buyTotal,
				'sell_qty': sellQty,
				'sell_total': sellTotal,
				'stay_buy_qty': stayBuyQty,
				'stay_buy_total': stayBuyTotal,
				'stay_sell_qty': staySellQty,
				'stay_sell_total': staySellTotal
			};
    
			return _.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSON = function (value) {
  
			uber.setValueFromJSON(value);
    
			this.setTrnDate(value['trn_date']);
			this.setProductCode(value['product_code']);
			this.setBuyQty(value['buy_qty']);
			this.setBuyTotal(value['buy_total']);
			this.setSellQty(value['sell_qty']);
			this.setSellTotal(value['sell_total']);
			this.setStayBuyQty(value['stay_buy_qty']);
			this.setStayBuyTotal(value['stay_buy_total']);
			this.setStaySellQty(value['stay_sell_qty']);
			this.setStaySellTotal(value['stay_sell_total']);
		}
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/ForeignFuturesDayTrnLogs';
			result.title = 'foreign_futures_day_trn_logs';

      result.properties.trn_date = {'description': '交易日期', 'type': 'string', 'maxLength': 8};
      result.properties.product_code = {'description': '商品代碼', 'type': 'string', 'maxLength': 3};
      result.properties.buy_qty = {'description': '多方交易口數', 'type': 'number'};
      result.properties.buy_total = {'description': '多方交易金額', 'type': 'number'};
      result.properties.sell_qty = {'description': '空方交易口數', 'type': 'number'};
      result.properties.sell_total = {'description': '空方交易金額', 'type': 'number'};
      result.properties.stay_buy_qty = {'description': '未平倉多方交易口數', 'type': 'number'};
      result.properties.stay_buy_total = {'description': '未平倉多方交易金額', 'type': 'number'};
      result.properties.stay_sell_qty = {'description': '未平倉空方交易口數', 'type': 'number'};
      result.properties.stay_sell_total = {'description': '未平倉空方交易金額', 'type': 'number'};
			
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
		
		root.tw.ace33022.vo.ForeignFuturesDayTrnLogs = result;
	}
})(this);