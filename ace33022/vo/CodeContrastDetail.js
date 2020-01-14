/**
 *
 * CodeContrastDetail
 *
 * @author ace
 *
 * @version 2016/03/30 初始版本。
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
  
		var codeGroup = ''; // 編碼組別
		var code = '';   		// 代碼
		var codeDesc = '';  // 說明

		var uber = new ancestor();
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setCodeGroup = function(value) {if (value) codeGroup = value; return value;}
		this.setCode = function(value) {if (value) code = value; return value;}
		this.setCodeDesc = function(value) {if (value) codeDesc = value; return value;}
  
		this.getCodeGroup = function() {return codeGroup;}
		this.getCode = function() {return code;}
		this.getCodeDesc = function() {return codeDesc;}
  
		// JSON物件資料。
		this.toJSONObject = function() {
  
			var result = {
    
        'code_group': codeGroup,
        'code': code,
				'code_desc': codeDesc
			};
    
			return _.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSONObject = function (value) {
  
			uber.setValueFromJSONObject(value);
    
      this.setCodeGroup(value['code_group']);
      this.setCode(value['code']);
			this.setCodeDesc(value['code_desc']);
		}
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/CodeContrastDetail';
			result.title = 'code_contrast_detail';
			
      result.properties.code_group = {'description': '編碼組別', 'type': 'string', 'maxLength': 4};
      result.properties.code = {'description': '代碼', 'type': 'string', 'maxLength': 4};
			result.properties.code_desc = {'description': '說明', 'type': 'string', 'maxLength': 32};

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
		
		root.tw.ace33022.vo.CodeContrastDetail = result;
	}
})(this);