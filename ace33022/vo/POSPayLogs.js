/**
 *
 * POSPayLogs
 *
 * @author ace
 *
 * @version 2014/07/18 初始版本。
 * @version 2014/08/19 JSON資料格式調整。
 * @version 2015/03/29 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 * @see <a href="http://stackoverflow.com/questions/858181/how-to-check-a-not-defined-variable-in-javascript">How to check a not defined variable in javascript [duplicate]</a>
 *
 * @description
 *
 * @require Ancestor.js
 *
 * @todo 
 *
 */
 
(function() {
 
	var root = this;
	
	var _;					// underscore.js
	
	var ancestor;

  var result = function() {

    var serialVersionUID = 1; // 保留
  
	  var trnNo = '';   // 交易單號
    var serNo = '';   // 序號
		var payCode = '';	// 付款代碼(code_contrast_detail.code_group='0002')
		var payDesc = ''; // 付款說明
		var payPrice = 0;	// 付款金額

		var uber = new ancestor();
  
    _.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
    this.setTrnNo = function(value) {if (value) trnNo = value; return value;}
    this.setSerNo = function(value) {if (value) serNo = value; return value;}
    this.setPayCode = function(value) {if (value) payCode = value; return value;}
    this.setPayDesc = function(value) {if (value) payDesc = value; return value;}
    this.setPayPrice = function(value) {if (value) payPrice = value; return value;}
	
	  this.getTrnNo = function() {return trnNo;}
    this.getSerNo = function() {return serNo;}
		this.getPayCode = function() {return payCode;}
		this.getPayDesc = function() {return PayDesc;}
		this.getPayPrice = function() {return PayPrice;}
		
    // JSON物件資料。
    this.toJSONObject = function() {
  
      var result = {
    
		    'trn_no': trnNo,
        'ser_no': serNo,
        'pay_ocde': payCode,
        'pay_desc': payDesc,
        'pay_price': payprice
      };
    
      return _.extend(result, uber.toJSONObject());
    }
  
    this.setValueFromJSONObject = function(value) {
  
      uber.setValueFromJSONObject(value);
    
		  this.setTrnNo(value['trn_no']);
      this.setSerNo(value['ser_no']);
			this.setPayCode(value['pay_code']);
			this.setPayDesc(value['pay_desc']);
			this.setPayPrice(value['pay_price']);
    }
    
    this.getSchemaJSONObject = function () {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/POSPayLogs';
			result.title = 'pos_pay_logs';
			
      result.properties.trn_no = {'description': '交易單號', 'type': 'string', 'maxLength': 5};
			result.properties.ser_no = {'description': '序號', 'type': 'string', 'maxLength': 3};
      result.properties.pay_code = {'description': '付款代碼', 'type': 'string', 'maxLength': 4};
			result.properties.pay_desc = {'description': '付款說明', 'type': 'string', 'maxLength': 32};
			result.properties.pay_price = {'description': '付款金額', 'type': 'number'};
			
      return result;
    }
  }

	if (typeof define === 'function') {
	
		define(['underscore', 'Ancestor'], function(underscore, dAncestor) {
		
			_ = underscore;
				
			ancestor = dAncestor;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestor = require(RequireJSConfig.paths['Ancestor'] + '.js');
		
		module.exports = result;
	}
	else {
	
		if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');
		if (typeof root.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['Ancestor'] + '.js');
		
		_ = root._;
		
		ancestor = root.Ancestor;
		
		root['POSPayLogs'] = result;
	}
})();