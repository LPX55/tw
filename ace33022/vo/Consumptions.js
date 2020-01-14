/**
 *
 * Consumptions
 *
 * @author ace
 *
 * @version 2013/09/28 初始版本。
 * @version 2013/11/23 以require.js之方式改寫。
 * @version 2014/06/09 新增函數getSchemaJSONObject。
 * @version 2014/08/15 JSON資料格式調整。
 * @version 2014/12/17 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
 * @version 2015/04/17 增加user_code欄位。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 * @see <a href="http://stackoverflow.com/questions/858181/how-to-check-a-not-defined-variable-in-javascript">How to check a not defined variable in javascript [duplicate]</a>
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

    var serialVersionUID = new Number(1); // 保留

    var trnDate = '';       // 消費日期
    var classifyName = '';	// 分類
    var productName = '';   // 名稱
    var trnPrice = 0;       // 金額

		var uber = new ancestor();

    _.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。

		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
    this.setTrnDate = function(value) {if (value) trnDate = value; return value;}
    this.setClassifyName = function(value) {if (value) classifyName = value; return value;}
    this.setProductName = function(value) {if (value) productName = value; return value;}
    this.setTrnPrice = function(value) {if (value) trnPrice = value; return value;}

    this.getTrnDate = function() {return trnDate;}
    this.getClassifyName = function() {return classifyName;}
    this.getProductName = function() {return productName;}
    this.getTrnPrice = function() {return trnPrice;}

		this.checkValue = function() {

      var result = {'return_value': 0};

			if ((result['return_value'] == 0) && (trnDate == '')) result = {'return_value': 1, 'field_name': 'trn_date', 'error_message': '消費日期不可空白'};
			if ((result['return_value'] == 0) && (classifyName == '')) result = {'return_value': 1, 'field_name': 'classify_name', 'error_message': '分類不可空白'};
			if ((result['return_value'] == 0) && (productName == '')) result = {'return_value': 1, 'field_name': 'product_name', 'error_message': '名稱不可空白'};
			if ((result['return_value'] == 0) && (trnPrice == 0)) result = {'return_value': 1, 'field_name': 'trn_price', 'error_message': '金額不可為零'};

			return result;
		};

    // JSON物件資料。
    this.toJSONObject = function() {

      var result = {

        'trn_date': trnDate,
        'classify_name': classifyName,
        'product_name': productName,
        'trn_price': trnPrice
      };

      return _.extend(result, uber.toJSONObject());
    };

    this.setValueFromJSONObject = function(value) {

      uber.setValueFromJSONObject(value);

      this.setTrnDate(value['trn_date']);
      this.setClassifyName(value['classify_name']);
      this.setProductName(value['product_name']);
      this.setTrnPrice(value['trn_price']);
    };

    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/Consumptions';
			result.title = 'consumptions';

      result.properties.trn_date = {'description': '消費日期', 'type': 'string', 'maxLength': 8};
      result.properties.classify_name = {'description': '分類分類', 'type': 'string', 'maxLength': 8};
      result.properties.product_name = {'description': '商品名稱', 'type': 'string', 'maxLength': 255};
      result.properties.trn_price = {'description': '金額', 'type': 'number'};

      return result;
    };
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

    root.tw.ace33022.vo.Consumptions = result;
	}
})(this);
