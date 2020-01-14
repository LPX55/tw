/**
 *
 * InvoiceLogs
 *
 * @author ace
 *
 * @version 2013/10/11 初始版本。
 * @version 2014/01/24 以require.js之方式改寫。
 * @version 2014/02/21 移除使用者代碼欄位。
 * @version 2014/08/15 JSON資料格式調整。
 * @version 2015/03/27 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
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

    var invoiceNo = '';		// 發票號碼
    var inYearMonth = ''; // 發票所屬年月

		var uber = new ancestor();
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。

		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
    this.setInvoiceNo = function(value) {if (value) invoiceNo = value; return value;}
    this.setInYearMonth = function(value) {if (value) inYearMonth = value; return value;}

    this.getInvoiceNo = function() {return invoiceNo;}
    this.getInYearMonth = function() {return inYearMonth;}

    // JSON物件資料。
    this.toJSONObject = function() {

      var result = {

        'invoice_no': invoiceNo,
        'in_year_month': inYearMonth
      };

      return _.extend(result, uber.toJSONObject());
    }

    this.setValueFromJSONObject = function(value) {

      uber.setValueFromJSONObject(value);

      this.setInvoiceNo(value['invoice_no']);
      this.setInYearMonth(value['in_year_month']);
    }

    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/InvoiceLogs';
			result.title = 'invoice_logs';
			
      result.properties.invoice_no = {'description': '發票號碼', 'type': 'string', 'maxLength': 10};
      result.properties.in_year_month = {'description': '發票所屬年月', 'type': 'string', 'maxLength': 6};

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
		
		root.tw.ace33022.vo.InvoiceLogs = result;
	}
})(this);