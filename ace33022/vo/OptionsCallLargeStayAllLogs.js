/**
 *
 * OptionsCallLargeStayAllLogs
 *
 * @author ace
 *
 * @version 2013/11/01 初始版本。
 * @version 2015/03/18 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
 *
 * @return {Object} OptionsCallLargeStayAllLogs
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @require underscore.js
 *
 */

(function(root) {
 
	var RequireJSConfig;
	
	var _;	// underscore.js
	
	var ancestor;
		
	var result = function() {

		var serialVersionUID = new Number(1);	// 保留
  
		var productCode = '';   // 商品代碼
		var trnDate = '';       // 交易日期
		var preFiveBuy = 0;     // 買方前五大交易人合計
		var preFiveJurBuy = 0;  // 買方前五大交易人合計(特定法人)
		var preTenBuy = 0;      // 買方前十大交易人合計
		var preTenJurBuy = 0;   // 買方前十大交易人合計(特定法人)
		var preFiveSell = 0;    // 賣方前五大交易人合計
		var preFiveJurSell = 0;	// 賣方前五大交易人合計(特定法人)
		var preTenSell = 0;     // 賣方前十大交易人合計 
		var preTenJurSell = 0;  // 賣方前十大交易人合計(特定法人)
		var stayQty = 0;        // 全市場未沖銷部位數
  
		var uber = new ancestor();
		
		_.extend(this, uber);
		// this.prototype = uber;	// 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setProductCode = function(value) {if (value) productCode = value; return value;}
		this.setTrnDate = function(value) {if (value) trnDate = value; return value;}
		this.setPreFiveBuy = function(value) {if (value) preFiveBuy = value; return value;}
		this.setPreFiveJurBuy = function(value) {if (value) preFiveJurBuy = value; return value;}
		this.setPreTenBuy = function(value) {if (value) preTenBuy = value; return value;}
		this.setPreTenJurBuy = function(value) {if (value) preTenJurBuy = value; return value;}
		this.setPreFiveSell = function(value) {if (value) preFiveSell = value; return value;}
		this.setPreFiveJurSell = function(value) {if (value) preFiveJurSell = value; return value;}
		this.setPreTenSell = function(value) {if (value) preTenSell = value; return value;}
		this.setPreTenJurSell = function(value) {if (value) preTenJurSell = value; return value;}
		this.setStayQty = function(value) {if (value) stayQty = value; return value;}
		
		this.getProductCode = function() {return productCode;}
		this.getTrnDate = function() {return trnDate;}
		this.getPreFiveBuy = function() {return preFiveBuy;}
		this.getPreFiveJurBuy = function() {return preFiveJurBuy;}
		this.getPreTenBuy = function() {return preTenBuy;}
		this.getPreTenJurBuy = function() {return preTenJurBuy;}
		this.getPreFiveSell = function() {return preFiveSell;}
		this.getPreFiveJurSell = function() {return preFiveJurSell;}
		this.getPreTenSell = function() {return preTenSell;}
		this.getPreTenJurSell = function() {return preTenJurSell;}
		this.getStayQty = function() {return stayQty;}
  
		// JSON物件資料。
		this.toJSONObject = function() {
  
			var result = {
    
				'product_code': productCode,
				'trn_date': trnDate,
				'pre_five_buy': preFiveBuy,
				'pre_five_jur_buy': preFiveJurBuy,
				'pre_ten_buy': preTenBuy,
				'pre_ten_jur_buy': preTenJurBuy,
				'pre_five_sell': preFiveSell,
				'pre_five_jur_sell': preFiveJurSell,
				'pre_ten_sell': preTenSell,
				'pre_ten_jur_sell': preTenJurSell,
				'stay_qty': stayQty
			};
    
			return _.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSONObject = function(value) {
  
			uber.setValueFromJSONObject(value);
    
			this.setProductCode(value['product_code']);
			this.setTrnDate(value['trn_date']);
			this.setPreFiveBuy(value['pre_five_buy']);
			this.setPreFiveJurBuy(value['pre_five_jur_buy']);
			this.setPreTenBuy(value['pre_ten_buy']);
			this.setPreTenJurBuy(value['pre_ten_jur_buy']);
			this.setPreFiveSell(value['pre_five_sell']);
			this.setPreFiveJurSell(value['pre_five_jur_sell']);
			this.setPreTenSell(value['pre_ten_sell']);
			this.setPreTenJurSell(value['pre_ten_jur_sell']);
			this.setStayQty(value['stay_qty']);
		}
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/OptionsCallLargeStayAllLogs';
			result.title = 'options_call_large_stay_all_logs';
			
      result.properties.product_code = {'description': '商品代碼', 'type': 'string', 'maxLength': 3};
      result.properties.trn_date = {'description': '交易日期', 'type': 'string', 'maxLength': 8};
      result.properties.pre_five_buy = {'description': '買方前五大交易人合計', 'type': 'number'};
			result.properties.pre_five_jur_buy = {'description': '買方前五大交易人合計(特定法人)', 'type': 'number'};
      result.properties.pre_ten_buy = {'description': '買方前十大交易人合計', 'type': 'number'};
			result.properties.pre_ten_jur_buy = {'description': '買方前十大交易人合計(特定法人)', 'type': 'number'};
      result.properties.pre_five_sell = {'description': '賣方前五大交易人合計', 'type': 'number'};
			result.properties.pre_five_jur_sell = {'description': '賣方前五大交易人合計(特定法人)', 'type': 'number'};
      result.properties.pre_ten_sell = {'description': '賣方前十大交易人合計 ', 'type': 'number'};
			result.properties.pre_ten_jur_sell = {'description': '賣方前十大交易人合計(特定法人)', 'type': 'number'};
      result.properties.stay_qty = {'description': '全市場未沖銷部位數', 'type': 'number'};
			
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
		
		root.tw.ace33022.vo.OptionsCallLargeStayAllLogs = result;
	}
})(this);