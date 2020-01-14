/**
 *
 * FoundationAmountDayTrnLogs
 *
 * @author ace
 *
 * @version 2013/10/27 初始版本。
 * @version 2015/03/12 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
 * @version 2016/06/03 新增避險資料。
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
  
		var trnDate = new String('');     		// 交易日期
		var dealerBuy = new Number(0);    		// 自營商買進金額
		var dealerSell = new Number(0);   		// 自營商賣出金額
		var dealerHedgeBuy = new Number(0);   // 自營商避險買進金額
		var dealerHedgeSell = new Number(0);	// 自營商避險賣出金額
		var investBuy = new Number(0);    		// 投信買進金額
		var investSell = new Number(0);   		// 投信賣出金額
		var foreignBuy = new Number(0);   		// 外資及陸資買進金額
		var foreignSell = new Number(0);			// 外資及陸資賣出金額
  
		var uber = new ancestor();
  
		_.extend(this, uber);
		// this.prototype = uber;	// 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setTrnDate = function(value) {if (value) trnDate = value; return value;}
		this.setDealerBuy = function(value) {if (value) dealerBuy = value; return value;}
		this.setDealerSell = function(value) {if (value) dealerSell = value; return value;}
		this.setDealerHedgeBuy = function(value) {if (value) dealerHedgeBuy = value; return value;}
		this.setDealerHedgeSell = function(value) {if (value) dealerHedgeSell = value; return value;}
		this.setInvestBuy = function(value) {if (value) investBuy = value; return value;}
		this.setInvestSell = function(value) {if (value) investSell = value; return value;}
		this.setForeignBuy = function(value) {if (value) foreignBuy = value; return value;}
		this.setForeignSell = function(value) {if (value) foreignSell = value; return value;}
  
		this.getTrnDate = function() {return trnDate;}
		this.getDealerBuy = function() {return dealerBuy;}
		this.getDealerSell = function() {return dealerSell;}
		this.getDealerHedgeBuy = function() {return dealerHedgeBuy;}
		this.getDealerHedgeSell = function() {return dealerHedgeSell;}
		this.getInvestBuy = function() {return investBuy;}
		this.getInvestSell = function() {return investSell;}
		this.getForeignBuy = function() {return foreignBuy;}
		this.getForeignSell = function() {return foreignSell;}
  
		// JSON物件資料。
		this.toJSONObject = function () {
  
			var result = {
    
				"trn_date": trnDate,
				"dealer_buy": dealerBuy,
				"dealer_sell": dealerSell,
				"dealer_hedge_buy": dealerHedgeBuy,
				"dealer_hedge_sell": dealerHedgeSell,
				"invest_buy": investBuy,
				"invest_sell": investSell,
				"foreign_buy": foreignBuy,
				"foreign_sell": foreignSell
			};
    
			return _.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSONObject = function (value) {
  
			uber.setValueFromJSONObject(value);
    
			this.setTrnDate(value["trn_date"]);
			this.setDealerBuy(value["dealer_buy"]);
			this.setDealerSell(value["dealer_sell"]);
			this.setHedgeDealerBuy(value["dealer_hedge_buy"]);
			this.setHedgeDealerSell(value["dealer_hedge_sell"]);
			this.setInvestBuy(value["invest_buy"]);
			this.setInvestSell(value["invest_sell"]);
			this.setForeignBuy(value["foreign_buy"]);
			this.setForeignSell(value["foreign_sell"]);
		}
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			// result.$schema = '/json-schema/VO/FoundationAmountDayTrnLogs';
			result.title = 'foundation_amount_day_trn_logs';
			
      result.properties.trn_date = {"description": "交易日期", "type": "string", "maxLength": 8};
      result.properties.dealer_buy = {"description": "自營商買進金額", "type": "number"};
      result.properties.dealer_sell = {"description": "自營商賣出金額", "type": "number"};
      result.properties.dealer_hedge_buy = {"description": "自營商避險買進金額", "type": "number"};
      result.properties.dealer_hedge_sell = {"description": "自營商避險賣出金額", "type": "number"};
			result.properties.invest_buy = {"description": "投信買進金額", "type": "number"};
      result.properties.invest_sell = {"description": "投信賣出金額", "type": "number"};
			result.properties.foreign_buy = {"description": "外資及陸資買進金額", "type": "number"};
			result.properties.foreign_sell = {"description": "外資及陸資賣出金額", "type": "number"};

      return result;
    }
	}

	if (typeof define === 'function') {
	
		define(["tw.ace33022.vo.Ancestor", "underscore"], function(Ancestor) {
		
			_ = root._;
		
			ancestor = Ancestor;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/RequireJSConfig.js');
	
		_ = require(RequireJSConfig.paths["underscore"] + '.js');
		
		ancestor = require(RequireJSConfig.paths["tw.ace33022.vo.Ancestor"] + '.js');
		
		module.exports = result;
	}
	else {

		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
	
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.vo.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.Ancestor"] + '.js');
		}
			
		_ = root._;
			
		ancestor = root.tw.ace33022.vo.Ancestor;
		
		root.tw.ace33022.vo.FoundationAmountDayTrnLogs = result;
	}
})(this);