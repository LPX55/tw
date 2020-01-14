/**
 *
 * MiddleClasses
 *
 * @version 2017/06/15 初始版本。
 *
 * @author ace
 *
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 */

(function(root) {

	var RequireJSConfig;
	
	var ancestor;

  var result = function() {

    var serialVersionUID = new Number(1);	// 保留
  
		var largeClassCode = new String('');
		var middleClassCode = new String('');
		var middleClassName = new String('');
	
		var uber = new ancestor();
  
    root._.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
		
		this.setLargeClassCode = function(value) {if (typeof value != 'undefined') largeClassCode = value; return value;}
		this.setMiddleClassCode = function(value) {if (typeof value != 'undefined') middleClassCode = value; return value;}
		this.setMiddleClassName = function(value) {if (typeof value != 'undefined') middleClassName = value; return value;}
		
	  this.getLargeClassCode = function() {return largeClassCode;}
		this.getMiddleClassCode = function() {return middleClassCode;}
    this.getMiddleClassName = function() {return middleClassName;}
		
    // JSON物件資料。
    this.toJSONObject = function() {
  
      var result = {
    
				"large_class_code": this.getLargeClassCode(),
				"middle_class_code": this.getMiddleClassCode(),
				"middle_class_name": this.getMiddleClassName()
      };
    
			return root._.extend(result, uber.toJSONObject());
    }
  
    this.setValueFromJSONObject = function(value) {
  
      uber.setValueFromJSONObject(value);
    
		  this.setLargeClassCode(value["large_class_code"]);
			this.setMiddleClassCode(value["middle_class_code"]);
      this.setMiddleClassName(value["middle_class_name"]);
    }
    
    this.getSchemaJSONObject = function() {

      var result = root._.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/vo/middle_classes';
			result.title = 'middle_classes';
			
			result.properties["large_class_code"] = {"description": "大分類代碼", "type": "string", "maxLength": 2};
			result.properties["middle_class_code"] = {"description": "代碼", "type": "string", "maxLength": 4};
			result.properties["middle_class_name"] = {"description": "名稱", "type": "string", "maxLength": 10};
			
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
		
		root.tw.ace33022.vo.MiddleClasses = result;
	}
})(this);