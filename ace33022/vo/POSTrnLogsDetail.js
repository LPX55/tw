/**
 *
 * POSTrnLogsDetail
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
	
	var ancestor;

  var result = function() {

    var serialVersionUID = new Number(1);	// 保留
  
		var trnDate = new String('');				// 營業日期(即開帳日期)
		var storeCode = new String('');			// 營業點代碼
		var POSNo = new String('');					// 收銀機代碼
	  var trnNo = new String('');         // 交易單號
		var serNo = new String('');         // 交易序號
		var productCode = new String('');   // 商品代碼
		var barcode = new String('');       // 商品條碼    
		var sdCode = new String('');        // 自訂編號    
		var productName = new String('');   // 商品名稱    
		var productPname = new String('');  // 發票列印名稱
		var taxType = new String('');       // 稅別代碼(code_contrast_detail.code_group='0002')
		var taxDesc = new String('');       // 稅別說明
		var taxRate = new Number(0.0);      // 稅率
		var productPrice = new Number(0.0);	// 商品定價
		var trnPrice = new Number(0.0);     // 交易單價
		var trnQty = new Number(0.0);				// 交易數量
		var trnAmt01 = new Number(0.0);     // 未稅金額
		var trnAmt02 = new Number(0.0);     // 稅額
		var trnAmt03 = new Number(0.0);     // 含稅金額
		var trnTotal = new Number(0.0);     // 交易金額
		
		var uber = new ancestor();
  
    root._.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setTrnDate = function(value) {if (typeof value != 'undefined') trnDate = value; return value;}
		this.setStoreCode = function(value) {if (typeof value != 'undefined') storeCode = value; return value;}
		this.setPOSNo = function(value) {if (typeof value != 'undefined') POSNo = value; return value;}
    this.setTrnNo = function(value) {if (typeof value != 'undefined') trnNo = value; return value;}
    this.setSerNo = function(value) {if (typeof value != 'undefined') serNo = value; return value;}
    this.setProductCode = function(value) {if (typeof value != 'undefined') productCode = value; return value;}
    this.setBarcode = function(value) {if (typeof value != 'undefined') barcode = value; return value;}
    this.setSdCode = function(value) {if (typeof value != 'undefined') sdCode = value; return value;}
    this.setProductName = function(value) {if (typeof value != 'undefined') productName = value; return value;}
		this.setProductPname = function(value) {if (typeof value != 'undefined') productPname = value; return value;}
    this.setTaxType = function(value) {if (typeof value != 'undefined') taxType = value; return value;}
    this.setTaxDesc = function(value) {if (typeof value != 'undefined') taxDesc = value; return value;}
		this.setTaxRate = function(value) {if (typeof value != 'undefined') taxRate = value; return value;}
		this.setProductPrice = function(value) {if (typeof value != 'undefined') productPrice = value; return value;}
		this.setTrnPrice = function(value) {if (typeof value != 'undefined') trnPrice = value; return value;}
		this.setTrnQty = function(value) {if (typeof value != 'undefined') trnQty = value; return value;}
		this.setTrnAmt01 = function(value) {if (typeof value != 'undefined') trnAmt01 = value; return value;}
		this.setTrnAmt02 = function(value) {if (typeof value != 'undefined') trnAmt02 = value; return value;}
		this.setTrnAmt03 = function(value) {if (typeof value != 'undefined') trnAmt03 = value; return value;}
		this.setTrnTotal = function(value) {if (typeof value != 'undefined') trnTotal = value; return value;}
		
		this.getTrnDate	= function() {return trnDate;}
		this.getStoreCode	= function() {return storeCode;}
		this.getPOSNo	= function() {return POSNo;}
	  this.getTrnNo	= function() {return trnNo;}
    this.getSerNo = function() {return serNo;}
		this.getProductCode = function() {return productCode;}
		this.getBarcode = function() {return barcode;}
		this.getSdCode = function() {return sdCode;}
		this.getProductName = function() {return productName;}
		this.getProductPname = function() {return productPname;}
		this.getTaxType = function() {return taxType;}
		this.getTaxDesc = function() {return taxDesc;}
		this.getTaxRate = function() {return taxRate;}
		this.getProductPrice = function() {return productPrice;}
		this.getTrnPrice = function() {return trnPrice;}
		this.getTrnQty = function() {return trnQty;}
		this.getTrnAmt01 = function() {return trnAmt01;}
		this.getTrnAmt02 = function() {return trnAmt02;}
		this.getTrnAmt03 = function() {return trnAmt03;}
		this.getTrnTotal = function() {return trnTotal;}
		
    // JSON物件資料。
    this.toJSONObject = function() {
  
      var result = {
    
				"trn_date": this.getTrnDate(),
				"store_code": this.getStoreCode(),
				"pos_no": this.getPOSNo(),
		    "trn_no": this.getTrnNo(),
				"ser_no": this.getSerNo(),
				"product_code": this.getProductCode(),
				"barcode": this.getBarcode(),
				"sd_code": this.getSdCode(),
				"product_name": this.getProductName(),
				"product_pname": this.getProductPname(),
				"tax_type": this.getTaxType(),
				"tax_desc": this.getTaxDesc(),
				"tax_rate": this.getTaxRate(),
				"product_price": this.getProductPrice(),
				"trn_price": this.getTrnPrice(),
				"trn_qty": this.getTrnQty(),
				"trn_amt01": this.getTrnAmt01(),
				"trn_amt02": this.getTrnAmt02(),
				"trn_amt03": this.getTrnAmt03(),
				"trn_total": this.getTrnTotal()
      };
    
      return root._.extend(result, uber.toJSONObject());
    }
  
    this.setValueFromJSONObject = function(value) {
  
      uber.setValueFromJSONObject(value);
    
			this.setTrnDate(value["trn_date"]);
			this.setStoreCode(value["store_code"]);
			this.setPOSNo(value["pos_no"]);
		  this.setTrnNo(value["trn_no"]);
      this.setSerNo(value["ser_no"]);
			this.setProductCode(value["product_code"]);
			this.setBarcode(value["barcode"]);
			this.setSdCode(value["sd_code"]);
			this.setProductName(value["product_name"]);
			this.setProductPname(value["product_pname"]);
			this.setTaxType(value["tax_type"]);
			this.setTaxDesc(value["tax_desc"]);
			this.setTaxRate(value["tax_rate"]);
			this.setProductPrice(value["product_price"]);
			this.setTrnPrice(value["trn_price"]);
			this.setTrnQty(value["trn_qty"]);
			this.setTrnAmt01(value["trn_amt01"]);
			this.setTrnAmt02(value["trn_amt02"]);
			this.setTrnAmt03(value["trn_amt03"]);
			this.setTrnTotal(value["trn_total"]);
    }
    
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/vo/pos_trn_logs_detail';
			result.title = 'pos_trn_logs_detail';
			
			result.properties["trn_date"] = {"description": "營業日期(即開帳日期)", "type": "string", "maxLength": 8};
			result.properties["store_code"] = {"description": "營業點代碼", "type": "string", "maxLength": 6};
			result.properties["pos_no"] = {"description": "收銀機代碼", "type": "string", "maxLength": 3};
      result.properties["trn_no"] = {"description": "交易單號", "type": "string", "maxLength": 5};
			result.properties["ser_no"] = {"description": "交易序號", "type": "string", "maxLength": 5};
      result.properties["product_code"] = {"description": "商品代碼", "type": "string", "maxLength": 16};
			result.properties["barcode"] = {"description": "商品條碼", "type": "string", "maxLength": 13};
			result.properties["sd_code"] = {"description": "自訂編號", "type": "string", "maxLength": 16};
			result.properties["product_name"] = {"description": "商品名稱", "type": "string", "maxLength": 255};
			result.properties["product_pname"] = {"description": "發票列印名稱", "type": "string", "maxLength": 20};
			result.properties["tax_type"] = {"description": "稅別代碼", "type": "string", "maxLength": 4};
			result.properties["tax_desc"] = {"description": "稅別說明", "type": "string", "maxLength": 32};
			result.properties["tax_rate"] = {"description": "稅率", "type": "number"};
			result.properties["product_price"] = {"description": "商品定價", "type": "number"};
			result.properties["trn_price"] = {"description": "交易單價", "type": "number"};
			result.properties["trn_qty"] = {"description": "交易數量", "type": "number"};
			result.properties["trn_amt01"] = {"description": "未稅金額", "type": "number"};
			result.properties["trn_amt02"] = {"description": "稅額", "type": "number"};
			result.properties["trn_amt03"] = {"description": "含稅金額", "type": "number"};
			result.properties["trn_total"] = {"description": "交易金額", "type": "number"};
			
      return result;
    }
  }

	if (typeof define == 'function') {
	
		define(["tw.ace33022.vo.Ancestor", "underscore"], function(Ancestor) {
		
			ancestor = Ancestor;
				
			return result;
		});
	}
	else if (typeof exports != 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/RequireJSConfig.js');
	
		require(RequireJSConfig.paths["underscore"] + '.js');
		
		ancestor = require(RequireJSConfig.paths["tw.ace33022.vo.Ancestor"] + '.js');
		
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load != 'undefined') {
	
			if (typeof root._ == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.vo.Ancestor == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.Ancestor"] + '.js');
		}
		
		ancestor = root.tw.ace33022.vo.Ancestor;
		
		root.tw.ace33022.vo.POSTrnLogsDetail = result;	
	}
})(this);