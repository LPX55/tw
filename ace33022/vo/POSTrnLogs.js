/**
 *
 * POSTrnLogs
 *
 * @author ace
 *
 * @version 2014/04/08 初始版本。
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

(function(root) {
 
	var RequireJSConfig;
	
	var _;	// underscore.js
	
	var ancestor;

  var result = function() {

    var serialVersionUID = new Number(1);	// 保留
  
    var trnDate = '';     // 營業日期(即開帳日期)
		var storeCode = '';   // 營業點代碼
		var POSNo = '';       // 收銀機代碼
	  var trnNo = '';       // 交易單號
		var userAccount = ''; // 收銀員帳號
		var userName = '';    // 收銀員姓名
		var invoiceType = '';	// 發票聯式代碼(code_contrast_detail.code_group='0001')
		var invoiceDesc = ''; // 發票聯式說明
		var memberCode = '';  // 會員代碼
		var memberName = '';  // 會員姓名

		var uber = new ancestor();
  
    _.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
    this.setTrnDate = function(value) {if (value) trnDate = value; return value;}
    this.setStoreCode = function(value) {if (value) storeCode = value; return value;}
    this.setPOSNo = function(value) {if (value) POSNo = value; return value;}
    this.setTrnNo = function(value) {if (value) trnNo = value; return value;}
    this.setUserAccount = function(value) {if (value) userCode = value; return value;}
    this.setUserName = function(value) {if (value) userName = value; return value;}
    this.setInvoiceType = function(value) {if (value) invoiceType = value; return value;}
    this.setInvoiceDesc = function(value) {if (value) invoiceDesc = value; return value;}
    this.setMemberCode = function(value) {if (value) memberCode = value; return value;}
    this.setMemberName = function(value) {if (value) memberName = value; return value;}
	
    this.getTrnDate = function() {return trnDate;}
		this.getStoreCode = function() {return storeCode;}
		this.getPOSNo = function() {return POSNo;}
	  this.getTrnNo = function() {return trnNo;}
		this.getUserAccount = function() {return userAccount;}
		this.getUserName = function() {return userName;}
		this.getInvoiceType = function() {return invoiceType;}
		this.getInvoiceDesc = function() {return invoiceDesc;}
		this.getMemberCode = function() {return memberCode;}
		this.getMemberName = function() {return memberName;}
		
    // JSON物件資料。
    this.toJSONObject = function() {
  
      var result = {
    
        'trn_date': trnDate,
        'store_code': storeCode,
        'pos_no': POSNo,
		    'trn_no': trnNo,
        'user_account': userAccount,
				'user_name': userName,
				'invoice_type': invoiceType,
				'invoice_desc': invoiceDesc,
				'member_code': memberCode,
				'member_name': memberName
      };
    
      return _.extend(result, uber.toJSONObject());
    }
  
    this.setValueFromJSONObject = function(value) {
  
      uber.setValueFromJSONObject(value);
    
      this.setTrnDate(value['trn_date']);
			this.setStoreCode(value['store_code']);
			this.setPOSNo(value['pos_no']);
		  this.setTrnNo(value['trn_no']);
			this.setUserAccount(value['user_account']);
			this.setUserName(value['user_name']);
			this.setInvoiceType(value['invoice_type']);
			this.setInvoiceDesc(value['invoice_desc']);
			this.setMemberCode(value['member_code']);
			this.setMemberName(value['member_name']);
    }
    
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/vo/pos_trn_logs';
			result.title = 'pos_trn_logs';
			
			result.properties.trn_date = {'description': '營業日期(即開帳日期)', 'type': 'string', 'maxLength': 8};
      result.properties.store_code = {'description': '營業點代碼', 'type': 'string', 'maxLength': 6};
			result.properties.pos_no = {'description': '收銀機代碼', 'type': 'string', 'maxLength': 3};
      result.properties.trn_no = {'description': '交易單號', 'type': 'string', 'maxLength': 5};
			result.properties.user_account = {'description': '收銀員代碼', 'type': 'string', 'maxLength': 64};
			result.properties.user_name = {'description': '收銀員姓名', 'type': 'string', 'maxLength': 32};
			result.properties.invoice_type = {'description': '發票聯式代碼', 'type': 'string', 'maxLength': 4};
			result.properties.invoice_desc = {'description': '發票聯式說明', 'type': 'string', 'maxLength': 32};
			result.properties.member_code = {'description': '會員代碼', 'type': 'string', 'maxLength': 64};
			result.properties.member_name = {'description': '會員姓名', 'type': 'string', 'maxLength': 32};
			
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
		
		root.tw.ace33022.vo.POSTrnLogs = result;	
	}
})(this);