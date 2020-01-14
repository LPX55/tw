/**
 *
 * LargeClasses
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
		var largeClassName = new String('');
	
		var uber = new ancestor();
  
    root._.extend(this, uber);
		
		this.setLargeClassCode = function(value) {if (typeof value !== 'undefined') largeClassCode = value; return value;}
		this.setLargeClassName = function(value) {if (typeof value !== 'undefined') largeClassName = value; return value;}
		
	  this.getLargeClassCode = function() {return largeClassCode;}
    this.getLargeClassName = function() {return largeClassName;}
		
    // JSON物件資料。
    this.toJSONObject = function() {
  
      var result = {
    
				"large_class_code": this.getLargeClassCode(),
				"large_class_name": this.getLargeClassName()
      };
    
			return root._.extend(result, uber.toJSONObject());
    }
  
    this.setValueFromJSONObject = function(value) {
  
      uber.setValueFromJSONObject(value);
    
		  this.setLargeClassCode(value["large_class_code"]);
      this.setLargeClassName(value["large_class_name"]);
    }
    
    this.getSchemaJSONObject = function() {

      var result = root._.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/vo/large_classes';
			result.title = 'large_classes';
			
			result.properties["large_class_code"] = {"description": "代碼", "type": "string", "maxLength": 2};
			result.properties["large_class_name"] = {"description": "名稱", "type": "string", "maxLength": 10};
			
      return result;
    }
  }
  
	if (typeof define === 'function') {
	
		define(["tw.ace33022.vo.Ancestor", "underscore"], function(Ancestor) {
		
			ancestor = Ancestor;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/RequireJSConfig.js');
	
		require(RequireJSConfig.paths["underscore"] + '.js');
		
		ancestor = require(RequireJSConfig.paths["tw.ace33022.vo.Ancestor"] + '.js');
		
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
	
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.vo.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.Ancestor"] + '.js');
		}
		
		ancestor = root.tw.ace33022.vo.Ancestor;
		
		root.tw.ace33022.vo.LargeClasses = result;
	}
})(this);