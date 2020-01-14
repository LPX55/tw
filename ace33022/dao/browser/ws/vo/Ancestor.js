/**
 *
 * Ancestor
 *
 * @author ace
 *
 * @version 2013/09/29 初始版本。
 * @version 2014/11/26 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a>
 *
 * @description
 *
 * @todo 
 *
 * @require
 *
 */

(function(root) {

	var ancestor;
	
	var result = function() {

		var serialVersionUID = new Number(1);	// 保留
		
		var tableName;
		
		var uber = new ancestor();
		
		root._.extend(this, uber);
		
		this.setTableName = function(value) {tableName = value; return value;};
		this.getURLPath = function() {return new String(root.Configurations.location.origin) + '/' + root.Configurations.webServiceVOPath + tableName;};
		
		this.doGet = function() {
		
			if (arguments.length === 3) {
			
				uber.doGet(this.getURLPath(), arguments[0], arguments[1], arguments[2]);
			}
			else {
			
				uber.doGet.apply(this, Array.prototype.slice.call(arguments));
			}
		};
		
		this.doPost = function(vo, successCallback, errorCallback, completeCallback) {
		
			uber.doPost(this.getURLPath(), vo.toJSONString(), successCallback, errorCallback, completeCallback);
		};
	}
	
	if (typeof define === 'function') {
	
		define(["tw.ace33022.dao.ws.Ancestor", "underscore"], function(Ancestor) {
		
			ancestor = Ancestor;
			
			return result;
		});
	}
	else {
	
		ancestor = root.tw.ace33022.dao.ws.Ancestor;
		
		root.tw.ace33022.dao.ws.vo.Ancestor = result;
	}
})(this);