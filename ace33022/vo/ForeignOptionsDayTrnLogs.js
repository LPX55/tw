/**
 *
 * ForeignOptionsDayTrnLogs
 *
 * @author ace
 *
 * @version 2013/11/01 初始版本。
 * @version 2015/03/16 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
 *
 * @return {Object} ForeignOptionsDayTrnLogs
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
  
		var productCode = '';       // 商品代碼
		var trnDate = '';           // 交易日期
		var callBuyQty = 0;         // 買進CALL權交易口數
		var callBuyTotal = 0;       // 買進CALL權交易金額
		var callSellQty = 0;        // 賣出CALL權交易口數
		var callSellTotal = 0;      // 賣出CALL權交易金額
		var putBuyQty = 0;          // 買進PUT權交易口數
		var putBuyTotal = 0;        // 買進PUT權交易金額
		var putSellQty = 0;         // 賣出PUT權交易口數
		var putSellTotal = 0;       // 賣出PUT權交易金額
		var stayCallBuyQty = 0;     // 未平倉買進CALL權口數
		var stayCallBuyTotal = 0;   // 未平倉買進CALL權交易金額
		var stayCallSellQty = 0;    // 未平倉賣出CALL權口數
		var stayCallSellTotal = 0;	// 未平倉賣出CALL權交易金額
		var stayPutBuyQty = 0;      // 未平倉買進PUT權口數
		var stayPutBuyTotal = 0;    // 未平倉買進PUT權交易金額
		var stayPutSellQty = 0;     // 未平倉賣出PUT權口數
		var stayPutSellTotal = 0;   // 未平倉賣出PUT權交易金額
  
		var uber = new ancestor();
		
		_.extend(this, uber);
		// this.prototype = uber;	// 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setProductCode = function(value) {if (value) productCode = value; return value;}
		this.setTrnDate = function(value) {if (value) trnDate = value; return value;}
		this.setCallBuyQty = function(value) {if (value) callBuyQty = value; return value;}
		this.setCallBuyTotal = function(value) {if (value) callBuyTotal = value; return value;}
		this.setCallSellQty = function(value) {if (value) callSellQty = value; return value;}
		this.setCallSellTotal = function(value) {if (value) callSellTotal = value; return value;}
		this.setPutBuyQty = function(value) {if (value) putBuyQty = value; return value;}
		this.setPutBuyTotal = function(value) {if (value) putBuyTotal = value; return value;}
		this.setPutSellQty = function(value) {if (value) putSellQty = value; return value;}
		this.setPutSellTotal = function(value) {if (value) putSellTotal = value; return value;}
		this.setStayCallBuyQty = function(value) {if (value) stayCallBuyQty = value; return value;}
		this.setStayCallBuyTotal = function(value) {if (value) stayCallBuyTotal = value; return value;}
		this.setStayCallSellQty = function(value) {if (value) stayCallSellQty = value; return value;}
		this.setStayCallSellTotal = function(value) {if (value) stayCallSellTotal = value; return value;}
		this.setStayPutBuyQty = function(value) {if (value) stayPutBuyQty = value; return value;}
		this.setStayPutBuyTotal = function(value) {if (value) stayPutBuyTotal = value; return value;}
		this.setStayPutSellQty = function(value) {if (value) stayPutSellQty = value; return value;}
		this.setStayPutSellTotal = function(value) {if (value) stayPutSellTotal = value; return value;}
  
		this.getProductCode = function() {return productCode;}
		this.getTrnDate = function() {return trnDate;}
		this.getCallBuyQty = function() {return callBuyQty;}
		this.getCallBuyTotal = function() {return callBuyTotal;}
		this.getCallSellQty = function() {return callSellQty;}
		this.getCallSellTotal = function() {return callSellTotal;}
		this.getPutBuyQty = function() {return putBuyQty;}
		this.getPutBuyTotal = function() {return putBuyTotal;}
		this.getPutSellQty = function() {return putSellQty;}
		this.getPutSellTotal = function() {return putSellTotal;}
		this.getStayCallBuyQty = function() {return stayCallBuyQty;}
		this.getStayCallBuyTotal = function() {return stayCallBuyTotal;}
		this.getStayCallSellQty = function() {return stayCallSellQty;}
		this.getStayCallSellTotal = function() {return stayCallSellTotal;}
		this.getStayPutBuyQty = function() {return stayPutBuyQty;}
		this.getStayPutBuyTotal = function() {return stayPutBuyTotal;}
		this.getStayPutSellQty = function() {return stayPutSellQty;}
		this.getStayPutSellTotal = function() {return stayPutSellTotal;}
  
		// JSON物件資料。
		this.toJSONObject = function () {
  
			var result = {
    
				'product_code': productCode,
				'trn_date': trnDate,
				'call_buy_qty': callBuyQty,
				'call_buy_total': callBuyTotal,
				'call_sell_qty': callSellQty,
				'call_sell_total': callSellTotal,
				'put_buy_qty': putBuyQty,
				'put_buy_total': putBuyTotal,
				'put_sell_qty': putSellQty,
				'put_sell_total': putSellTotal,
				'stay_call_buy_qty': stayCallBuyQty,
				'stay_call_buy_total': stayCallBuyTotal,
				'stay_call_sell_qty': stayCallSellQty,
				'stay_call_sell_total': stayCallSellTotal,
				'stay_put_buy_qty': stayPutBuyQty,
				'stay_put_buy_total': stayPutBuyTotal,
				'stay_put_sell_qty': stayPutSellQty,
				'stay_put_sell_total': stayPutSellTotal
			};
    
			return _.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSONObject = function(value) {
  
			uber.setValueFromJSONObject(value);
    
			this.setProductCode(value['product_code']);
			this.setTrnDate(value['trn_date']);
			this.setCallBuyQty(value['call_buy_qty']);
			this.setCallBuyTotal(value['call_buy_total']);
			this.setCallSellQty(value['call_sell_qty']);
			this.setCallSellTotal(value['call_sell_total']);
			this.setPutBuyQty(value['put_buy_qty']);
			this.setPutBuyTotal(value['put_buy_total']);
			this.setPutSellQty(value['put_sell_qty']);
			this.setPutSellTotal(value['put_sell_total']);
			this.setStayCallBuyQty(value['stay_call_buy_qty']);
			this.setStayCallBuyTotal(value['stay_call_buy_total']);
			this.setStayCallSellQty(value['stay_call_sell_qty']);
			this.setStayCallSellTotal(value['stay_call_sell_total']);
			this.setStayPutBuyQty(value['stay_put_buy_qty']);
			this.setStayPutBuyTotal(value['stay_put_buy_total']);
			this.setStayPutSellQty(value['stay_put_sell_qty']);
			this.setStayPutSellTotal(value['stay_put_sell_total']);
		}
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());
			
			result.$schema = '/json-schema/VO/ForeignOptionsDayTrnLogs';
			result.title = 'foreign_options_day_trn_logs';

      result.properties.product_code = {'description': '商品代碼', 'type': 'string', 'maxLength': 3};
      result.properties.trn_date = {'description': '交易日期', 'type': 'string', 'maxLength': 8};
      result.properties.call_buy_qty = {'description': '買進CALL權交易口數', 'type': 'number'};
			result.properties.call_buy_total = {'description': '買進CALL權交易金額', 'type': 'number'};
			result.properties.call_sell_qty = {'description': '賣出CALL權交易口數', 'type': 'number'};
			result.properties.call_sell_total = {'description': '賣出CALL權交易金額', 'type': 'number'};
      result.properties.put_buy_qty = {'description': '買進PUT權交易口數', 'type': 'number'};
			result.properties.put_buy_total = {'description': '買進PUT權交易金額', 'type': 'number'};
			result.properties.put_sell_qty = {'description': '賣出PUT權交易口數', 'type': 'number'};
			result.properties.put_sell_total = {'description': '賣出PUT權交易金額', 'type': 'number'};
      result.properties.stay_call_buy_qty = {'description': '未平倉買進CALL權口數', 'type': 'number'};
			result.properties.stay_call_buy_total = {'description': '未平倉買進CALL權交易金額', 'type': 'number'};
			result.properties.stay_call_sell_qty = {'description': '未平倉賣出CALL權口數', 'type': 'number'};
			result.properties.stay_call_sell_total = {'description': '未平倉賣出CALL權交易金額', 'type': 'number'};
      result.properties.stay_put_buy_qty = {'description': '未平倉買進PUT權口數', 'type': 'number'};
			result.properties.stay_put_buy_total = {'description': '未平倉買進PUT權交易金額', 'type': 'number'};
			result.properties.stay_put_sell_qty = {'description': '未平倉賣出PUT權口數', 'type': 'number'};
			result.properties.stay_put_sell_total = {'description': '未平倉賣出PUT權交易金額', 'type': 'number'};

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
		
		root.tw.ace33022.vo.ForeignOptionsDayTrnLogs = result;
	}
})(this);