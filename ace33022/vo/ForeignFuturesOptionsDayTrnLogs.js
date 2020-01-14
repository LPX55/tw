/**
 *
 * ForeignFuturesOptionsDayTrnLogs(外資每日期貨/選擇權交易統計資料)
 *
 * @author ace
 *
 * @version 2013/11/06 初始版本。
 * @version 2015/03/10 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
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

		var trnDate = '';           // 交易日期
		var futuresBuyQty = 0;      // 期貨多方交易口數
		var optionsBuyQty = 0;      // 選擇權多方交易口數
		var futuresSellQty = 0;     // 期貨空方交易口數
		var optionsSellQty = 0;     // 選擇權空方交易口數
		var futuresStayBuyQty = 0;  // 期貨多方未平倉口數
		var optionsStayBuyQty = 0;  // 選擇權多方未平倉口數
		var futuresStaySellQty = 0; // 期貨空方未平倉口數
		var optionsStaySellQty = 0; // 選擇權空方未平倉口數
		
		var uber = new ancestor();
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
		
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setTrnDate = function(value) {if (value) trnDate = value; return value;}
		this.setFuturesBuyQty = function(value) {if (value) futuresBuyQty = value; return value;}
		this.setOptionsBuyQty = function(value) {if (value) optionsBuyQty = value; return value;}
		this.setFuturesSellQty = function(value) {if (value) futuresSellQty = value; return value;}
		this.setOptionsSellQty = function(value) {if (value) optionsSellQty = value; return value;}
		this.setFuturesStayBuyQty = function(value) {if (value) futuresStayBuyQty = value; return value;}
		this.setOptionsStayBuyQty = function(value) {if (value) optionsStayBuyQty = value; return value;}
		this.setFuturesStaySellQty = function(value) {if (value) futuresStaySellQty = value; return value;}
		this.setOptionsStaySellQty = function(value) {if (value) optionsStaySellQty = value; return value;}
		
		this.getTrnDate = function() {return trnDate;}
		this.getFuturesBuyQty = function() {return futuresBuyQty;}
		this.getOptionsBuyQty = function() {return optionsBuyQty;}
		this.getFuturesSellQty = function() {return futuresSellQty;}
		this.getOptionsSellQty = function() {return optionsSellQty;}
		this.getFuturesStayBuyQty = function() {return futuresStayBuyQty;}
		this.getOptionsStayBuyQty = function() {return optionsStayBuyQty;}
		this.getFuturesStaySellQty = function() {return futuresStaySellQty;}
		this.getOptionsStaySellQty = function() {return optionsStaySellQty;}
  
		// JSON物件資料。
		this.toJSONObject = function() {
  
			var result = {
    
				'trn_date': trnDate,
				'futures_buy_qty': futuresBuyQty,
				'options_buy_qty': optionsBuyQty,
				'futures_sell_qty': futuresSellQty,
				'options_sell_qty': optionsSellQty,
				'futures_stay_buy_qty': futuresStayBuyQty,
				'options_stay_buy_qty': optionsStayBuyQty,
				'futures_stay_sell_qty': futuresStaySellQty,
				'options_stay_sell_qty': optionsStaySellQty
			};
    
			return _.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSON = function(value) {
  
			uber.setValueFromJSON(value);
    
			this.setTrnDate(value[trn_date]);
			this.setFuturesBuyQty(value[futures_buy_qty]);
			this.setOptionsBuyQty(value[options_buy_qty]);
			this.setFuturesSellQty(value[futures_sell_qty]);
			this.setOptionsSellQty(value[options_sell_qty]);
			this.setFuturesStayBuyQty(value[futures_stay_buy_qty]);
			this.setOptionsStayBuyQty(value[options_stay_buy_qty]);
			this.setFuturesStaySellQty(value[futures_stay_sell_qty]);
			this.setOptionsStaySellQty(value[options_stay_sell_qty]);
		}
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/ForeignFuturesOptionsDayTrnLogs';
			result.title = 'foreign_futures_options_day_trn_logs';
			
      result.properties.trn_date = {'description': '交易日期', 'type': 'string', 'maxLength': 8};
      result.properties.futures_buy_qty = {'description': '期貨多方交易口數', 'type': 'number'};
			result.properties.options_buy_qty = {'description': '選擇權多方交易口數', 'type': 'number'};
      result.properties.futures_sell_qty = {'description': '期貨空方交易口數', 'type': 'number'};
			result.properties.options_sell_qty = {'description': '選擇權空方交易口數', 'type': 'number'};
      result.properties.futures_stay_buy_qty = {'description': '期貨多方未平倉口數', 'type': 'number'};
			result.properties.options_stay_buy_qty = {'description': '選擇權多方未平倉口數', 'type': 'number'};
      result.properties.futures_stay_sell_qty = {'description': '期貨空方未平倉口數', 'type': 'number'};
			result.properties.options_stay_sell_qty = {'description': '選擇權空方未平倉口數', 'type': 'number'};

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
		
		root.tw.ace33022.vo.ForeignFuturesOptionsDayTrnLogs = result;
	}
})(this);