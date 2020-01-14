/**
 *
 * Program
 *
 * @version 2015/11/03 初始版本。
 *
 * @author ace
 *
 */

(function(root) {
 
	var RequireJSConfig;
	
	var ancestor;

  var result = function() {

    var serialVersionUID = new Number(1);	// 保留
  
		var programCode = '';			// 程式代碼
		var programName = '';			// 程式名稱
		var bplName = '';					// BPL檔案名稱
		var formClassName = '';		// 視窗類別名稱
		var params = '';					// 參數
		var programMemo = '';			// 程式備註
		var scriptContent = '';		// Script Code
		var forceLogin = 'Y';			// 程式是否需登入才可執行
	
		var uber = new ancestor();
  
    root._.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setProgramCode = function(value) { if (value) programCode = value; return value; }
		this.setProgramName = function(value) { if (value) programName = value; return value; }
		this.setBPLName = function(value) { if (value) bplName = value; return value; }
		this.setFormClassName = function(value) { if (value) formClassName = value; return value; }
		this.setParams = function(value) { if (value) params = value; return value; }
		this.setProgramMemo = function(value) { if (value) programMemo = value; return value; }
		this.setScriptContent = function(value) { if (value) scriptContent = value; return value; }
		this.setForceLogin = function(value) { if (value) forceLogin = value; return value; }
		
	  this.getProgramCode = function() { return programCode; }
    this.getProgramName = function() { return programName; }
		this.getBPLName = function() { return bplName; }
		this.getFormClassName = function() { return formClassName; }
		this.getParams = function() { return params; }
		this.getProgramMemo = function() { return programMemo; }
		this.getScriptContent = function() { return scriptContent; }
		this.getForceLogin = function() { return forceLogin; }
		
    // JSON物件資料。
    this.toJSONObject = function() {
  
      var result = {
    
				"program_code": programCode,
				"program_name": programName,
				"bpl_name": bplName,
				"form_class_name": formClassName,
				"params": params,
				"program_memo": programMemo,
				"script_content": scriptContent,
				"force_login": forceLogin
      };
    
			return result;
    }
  
    this.setValueFromJSONObject = function(value) {
  
      // uber.setValueFromJSONObject(value);
    
		  this.setProgramCode(value["program_code"]);
      this.setProgramName(value["program_name"]);
			this.setBPLName(value["bpl_name"]);
			this.setFormClassName(value["form_class_name"]);
			this.setParams(value["params"]);
			this.setProgramMemo(value["program_memo"]);
			this.setScriptContent(value["script_content"]);
			this.setForceLogin(value["force_login"]);
    }
    
    this.getSchemaJSONObject = function() {

      // var result = root._.extend({}, uber.getSchemaJSONObject());
			var result = {};
			
			result["$schema"] = '/json-schema/vo/program';
			result["title"] = 'program';
			
			result["properties"] = {};
			result["properties"]["program_code"] = {"description": "程式代碼", "type": "string", "maxLength": 16};
			result["properties"]["program_name"] = {"description": "程式名稱", "type": "string", "maxLength": 32};
			result["properties"]["bpl_name"] = {"description": "BPL檔案名稱", "type": "string", "maxLength": 16};
			result["properties"]["form_class_name"] = {"description": "視窗類別名稱", "type": "string", "maxLength": 32};
			result["properties"]["params"] = {"description": "參數", "type": "string", "maxLength": 128};
			result["properties"]["program_memo"] = {"description": "程式備註", "type": "text"};
			result["properties"]["script_content"] = {"description": "Script Code", "type": "text"};
			result["properties"]["force_login"] = {"description": "程式是否需登入才可執行", "type": "string", "maxLength": 1};
			
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
		
		root.tw.ace33022.vo.Program = result;
	}
})(this);