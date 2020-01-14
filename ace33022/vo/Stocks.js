/**
 *
 * Stocks
 *
 * @author ace
 *
 * @version 2013/05/03 初始版本。
 * @version 2014/08/28 改寫成require.js之格式。
 * @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @description
 *
 * @require 
 *
 * @todo 
 *
 */
 
var Stocks = function() {}; 

(function(root) {
 
	var RequireJSConfig;
	
	var _;	// underscore.js
	
	var ancestor;
	
	Stocks = function() {
	
		var serialVersionUID = 1; // 保留
  
		var stockCode = '';       // 股票代碼
		var stockName = '';       // 股票名稱
		var stockShortName = '';  // 股票簡稱
  
		var uber = new ancestor();
  
    _.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setStockCode = function(value) {if (value) stockCode = value; return value;}
		this.setStockName = function(value) {if (value) stockName = value; return value;}
		this.setStockShortName = function(value) {if (value) stockShortName = value; return value;}
  
		this.getStockCode = function() {return stockCode;}
		this.getStockName = function() {return stockName;}
		this.getStockShortName = function() {return stockShortName;}
  
		// JSON物件資料。
		this.toJSONObject = function() {
  
			var result = {
    
				'stock_code': stockCode,
				'stock_name': stockName,
				'stock_short_name': stockShortName
			};
    
			return _.extend(result, uber.toJSONObject());
		}
		
    this.setValueFromJSONObject = function(value) {

      uber.setValueFromJSONObject(value);

      this.setStockCode(value['stock_code']);
      this.setStockName(value['stock_name']);
      this.setStockShortName(value['stock_short_name']);
    }

    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/Stocks';
			result.title = 'stocks';
			
      result.properties.stock_code = {'description': '股票代碼', 'type': 'string', 'maxLength': 7};
      result.properties.stock_name = {'description': '股票名稱', 'type': 'string', 'maxLength': 20};
      result.properties.stock_short_name = {'description': '股票簡稱', 'type': 'string', 'maxLength': 20};

      return result;
    }
	}
	
	if (typeof define === 'function') {
	
		define(['underscore', 'Ancestor'], function(underscore, dAncestor) {
		
			_ = underscore;
				
			ancestor = dAncestor;
				
			return Stocks;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestor = require(RequireJSConfig.paths['Ancestor'] + '.js');
		
		module.exports = Stocks;
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