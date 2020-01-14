/**
 *
 * Size
 *
 * @version 2017/06/10 初始版本。
 *
 * @author ace
 *
 */

(function(root) {
 
	var RequireJSConfig;
	
	var ancestor;

  var result = function() {

    var serialVersionUID = new Number(1);	// 保留
  
		var sizeCode = new String('');
		var sizeName = new String('');
	
		var uber = new ancestor();
  
    root._.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
		
		this.setSizeCode = function(value) { if (value) sizeCode = value; return value; }
		this.setSizeName = function(value) { if (value) sizeName = value; return value; }
		
	  this.getSizeCode = function() { return sizeCode; }
    this.getSizeName = function() { return sizeName; }
		
    // JSON物件資料。
    this.toJSONObject = function() {
  
      var result = {
    
				"size_code": sizeCode,
				"size_name": sizeName
      };
    
			return root._.extend(result, uber.toJSONObject());
    }
  
    this.setValueFromJSONObject = function(value) {
  
      uber.setValueFromJSONObject(value);
    
		  this.setSizeCode(value["size_code"]);
      this.setSizeName(value["size_name"]);
    }
    
    this.getSchemaJSONObject = function() {

      var result = root._.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/vo/size';
			result.title = 'size';
			
			result.properties["size_code"] = {"description": "代碼", "type": "string", "maxLength": 2};
			result.properties["size_name"] = {"description": "名稱", "type": "string", "maxLength": 4};
			
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
		
		if (typeof load != 'undefined') {
	
			if (typeof root._ == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.vo.Ancestor == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.Ancestor"] + '.js');
		}
		
		ancestor = root.tw.ace33022.vo.Ancestor;
		
		root.tw.ace33022.vo.Size = result;
	}
})(this);