/**
 *
 * ProductNameStatistics(商品名稱統計資料表)
 *
 * @author ace
 *
 * @version 2013/11/08 初始版本。
 * @version 2013/11/25 以require.js之方式改寫。
 * @version 2014/03/05 新增使用者代碼欄位。
 * @version 2014/07/03 新增函數getSchemaJSONObject()。
 * @version 2014/08/15 JSON資料格式調整。
 * @version 2014/12/17 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
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

    var serialVersionUID = new Number(1); // 保留
  
    var productName = '';		// 商品名稱
    var numberOfTimes = 0;  // 累計次數
  
    var uber = new ancestor();
		
    _.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/01 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
    this.setProductName = function(value) {if (value) productName = value; return value;}
    this.setNumberOfTimes = function(value) {if (value) numberOfTimes = value; return value;}
  
    this.getProductName = function() {return productName;}
    this.getNumberOfTimes = function() {return numberOfTimes;}
  
    // JSON物件資料。
    this.toJSONObject = function() {
  
      var result = {
    
        'product_name': productName,
        'number_of_times': numberOfTimes
      };
    
      return _.extend(result, uber.toJSONObject());
    }
  
    this.setValueFromJSONObject = function(value) {
  
      uber.setValueFromJSONObject(value);
    
      this.setProductName(value['product_name']);
      this.setNumberOfTimes(value['number_of_times']);
    }
		
    this.getSchemaJSONObject = function () {

      var result = _.extend({}, uber.getSchemaJSONObject());
			
			result.$schema = '/json-schema/VO/ProductNameStatistics';
			result.title = 'product_name_statistics';

      result.properties.product_name = {'description': '', 'type': 'string', 'maxLength': 255};
			result.properties.number_of_times = {'description': '', 'type': 'number'};

      return result;
    }
  }
  
	if (typeof(define) == 'function') {
	
    define(['tw.ace33022.vo.Ancestor', 'underscore'], function(Ancestor) {

			_ = root._;

			ancestor = Ancestor;

			return result;
		});
	}
	else if (typeof(exports) != 'undefined') {
	
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
		
		root.tw.ace33022.vo.ProductNameStatistics = result;
	}
})(this);