/**
 *
 * ForeignHandedStocksLogs
 *
 * @author ace
 *
 * @version 2013/10/26 初始版本。
 * @version 2015/03/19 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
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
		var stockCode = '';   // 股票代碼
		var publishedQty = 0;	// 發行股數
		var handedQty = 0;    // 持有股數
  
		var uber = new ancestor();
	
		_.extend(this, uber);
		// this.prototype = uber;	// 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setTrnDate = function(value) {if (value) trnDate = value; return value;}
		this.setStockCode = function(value) {if (value) stockCode = value; return value;}
		this.setPublishedQty = function(value) {if (value) publishedQty = value; return value;}
		this.setHandedQty = function(value) {if (value) handedQty = value; return value;}
  
		this.getTrnDate = function() {return trnDate;}
		this.getStockCode = function() {return stockCode;}
		this.getPublishedQty = function() {return publishedQty;}
		this.getHandedQty = function() {return handedQty;}
  
		// JSON物件資料。
		this.toJSONObject = function() {
  
			var result = {
    
				'trn_date': trnDate,
				'stock_code': stockCode,
				'PublishedQty': publishedQty,
				'HandedQty': handedQty
			};
    
			return _.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSON = function(value) {
  
			uber.setValueFromJSON(value);
    
			this.setTrnDate(value['trn_date']);
			this.setStockCode(value['stock_code']);
			this.setPublishedQty(value['published_qty']);
			this.setHandedQty(value['handed_qty']);
		}
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());
			
			result.$schema = '/json-schema/VO/ForeignHandedStocksLogs';
			result.title = 'foreign_handed_stocks_logs';

      result.properties.trn_date = {'description': '交易日期', 'type': 'string', 'maxLength': 8};
      result.properties.stock_code = {'description': '股票代碼', 'type': 'string', 'maxLength': 7};
      result.properties.published_qty = {'description': '發行股數', 'type': 'number'};
			result.properties.handed_qty = {'description': '持有股數', 'type': 'number'};

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
		
		root.tw.ace33022.vo.ForeignHandedStocksLogs = result;
	}
})(this);