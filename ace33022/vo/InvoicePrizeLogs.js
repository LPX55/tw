/**
 *
 * InvoicePrizeLogs
 *
 * @author ace
 *
 * @version 2013/11/11 初始版本。
 * @version 2014/05/14 以require.js格式改寫。
 * @version 2015/03/27 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @description
 *
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
  
		var inYearMonth = ''; // 發票所屬年月
		var invoiceNo = '';   // 發票號碼
		var prizeItem = '';   // 獎別

		var uber = new ancestor();
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setInYearMonth = function(value) {if (value) inYearMonth = value; return value;}
		this.setInvoiceNo = function(value) {if (value) invoiceNo = value; return value;}
		this.setPrizeItem = function(value) {if (value) prizeItem = value; return value;}
  
		this.getInYearMonth = function() {return inYearMonth;}
		this.getInvoiceNo = function() {return invoiceNo;}
		this.getPrizeItem = function() {return prizeItem;}
  
		// JSON物件資料。
		this.toJSONObject = function() {
  
			var result = {
    
        'in_year_month': inYearMonth,
        'invoice_no': invoiceNo,
				'prize_item': prizeItem
			};
    
			return _.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSONObject = function (value) {
  
			uber.setValueFromJSONObject(value);
    
      this.setInYearMonth(value['in_year_month']);
      this.setInvoiceNo(value['invoice_no']);
			this.setPrizeItem(value['prize_item']);
		}
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/InvoicePrizeLogs';
			result.title = 'invoice_prize_logs';
			
      result.properties.in_year_month = {'description': '發票所屬年月', 'type': 'string', 'maxLength': 6};
      result.properties.invoice_no = {'description': '發票號碼', 'type': 'string', 'maxLength': 10};
			result.properties.prize_item = {'description': '獎別', 'type': 'string', 'maxLength': 4};

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
		
		root.tw.ace33022.vo.InvoicePrizeLogs = result;
	}
})(this);