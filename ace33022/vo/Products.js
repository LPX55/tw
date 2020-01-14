/**
 *
 * Products
 *
 * @author ace
 *
 * @version 2013/10/22 初始版本。
 * @version 2014/04/10 以require.js格式改寫。
 * @version 2014/08/20 JSON資料格式調整。
 * @version 2015/03/27 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/01 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof - JavaScript | MDN</a>
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
  
		var productCode = new String('');     // 代碼
		var barcode = new String('');         // 條碼
		var sdCode = new String('');          // 自訂編號
		var productName = new String('');     // 名稱
		var productPname = new String('');    // 發票列印名稱
		var productPrice = new Number(0);     // 定價
		var departmentCode = new String('');	// 商品部門代碼
		var taxRate = new Number(0);          // 稅率
  
		var uber = new ancestor();
  
    root._.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/01 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setProductCode = function(value) {if (typeof value != 'undefined') productCode = value; return value;}
		this.setBarcode = function(value) {if (typeof value != 'undefined') barcode = value; return value;}
		this.setSdCode = function(value) {if (typeof value != 'undefined') sdCode = value; return value;}
		this.setProductName = function(value) {if (typeof value != 'undefined') productName = value; return value;}
		this.setProductPname = function(value) {if (typeof value != 'undefined') productPname = value; return value;}
		this.setProductPrice = function(value) {if (typeof value != 'undefined') productPrice = value; return value;}
		this.setDepartmentCode = function(value) {if (typeof value != 'undefined') departmentCode = value; return value;}
		this.setTaxRate = function(value) {if (typeof value != 'undefined') taxRate = value; return value;}
		
		this.getProductCode = function() {return productCode;}
		this.getBarcode = function() {return barcode;}
		this.getSdCode = function() {return sdCode;}
		this.getProductName = function() {return productName;}
		this.getProductPname = function() {return productPname;}
		this.getProductPrice = function() {return productPrice;}
		this.getDepartmentCode = function() {return departmentCode;}
		this.getTaxRate = function() {return taxRate;}
 
		this.toJSONObject = function() {
  
			var result = {
    
				"product_code": this.getProductCode(),
				"barcode": this.getBarcode(),
				"sd_code": this.getSdCode(),
				"product_name": this.getProductName(),
				"product_pname": this.getProductPname(),
				"product_price": this.getProductPrice(),
				"department_code": this.getDepartmentCode(),
				"tax_rate": this.getTaxRate()
			};
  
			return root._.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSONObject = function(value) {
  
			uber.setValueFromJSONObject(value);
    
			this.setProductCode(value["product_code"]);
			this.setBarcode(value["barcode"]);
			this.setSdCode(value["sd_code"]);                  
			this.setProductName(value["product_name"]);             
			this.setProductPname(value["product_pname"]);            
			this.setProductPrice(value["product_price"]);            
			this.setDepartmentCode(value["department_code"]);
			this.setTaxRate(value["tax_rate"]);
		}
		
    this.getSchemaJSONObject = function() {

      var result = root._.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/vo/products';
			result.title = 'products';
			
      result.properties["product_code"] = {"description": "商品代碼", "type": "string", "maxLength": 16};
			result.properties["barcode"] = {"description": "條碼", "type": "string", "maxLength": 13};
      result.properties["sd_code"] = {"description": "自訂編號", "type": "string", "maxLength": 16};
			result.properties["product_name"] = {"description": "商品名稱", "type": "string", "maxLength": 255};
			result.properties["product_pname"] = {"description": "發票列印名稱", "type": "string", "maxLength": 20};
			result.properties["product_price"] = {"description": "定價", "type": "number"};
			result.properties["department_code"] = {"description": "商品部門代碼", "type": "string", "maxLength": 8};
			result.properties["tax_rate"] = {"description": "稅率", "type": "number"};
			
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
		
		root.tw.ace33022.vo.Products = result;
	}
})(this);