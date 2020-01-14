/**
 *
 * SugarGroups
 *
 * @version 2017/06/10 初始版本。
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
  
		var sugarGroupCode = new String('');	// 群組代碼
		var sugarGroupName = new String('');	// 群組名稱
	
		var uber = new ancestor();
  
    root._.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setSugarGroupCode = function(value) {if (typeof value != 'undefined') sugarGroupCode = value; return value;}
		this.setSugarGroupName = function(value) {if (typeof value != 'undefined') sugarGroupName = value; return value;}
		
	  this.getSugarGroupCode = function() {return sugarGroupCode;}
    this.getSugarGroupName = function() {return sugarGroupName;}
		
    // JSON物件資料。
    this.toJSONObject = function() {
  
      var result = {
    
				"sugar_group_code": this.getSugarGroupCode(),
				"sugar_group_name": this.getSugarGroupName()
      };
    
      return root._.extend(result, uber.toJSONObject());
    }
  
    this.setValueFromJSONObject = function(value) {
  
      uber.setValueFromJSONObject(value);
    
		  this.setSugarGroupCode(value["sugar_group_code"]);
      this.setSugarGroupName(value["sugar_group_name"]);
    }
    
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/vo/sugar_groups';
			result.title = 'sugar_groups';
			
			result.properties["sugar_group_code"] = {"description": "群組代碼", "type": "string", "maxLength": 2};
			result.properties["sugar_group_name"] = {"description": "群組名稱", "type": "string", "maxLength": 8};
			
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
		
		root.tw.ace33022.vo.SugarGroups = result;
	}
})(this);