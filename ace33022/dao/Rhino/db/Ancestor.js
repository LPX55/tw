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

	var RequireJSConfig;
	
	var ancestor;
	
	var result = function(conn) {

		var serialVersionUID = new Number(1);	// 保留
		
		this.getConnection = function() { return conn; };
		
    root._.extend(this, new ancestor());
	}
	
	if (typeof define === 'function') {
	
		define(["tw.ace33022.dao.Ancestor"], function(Ancestor) {
		
			ancestor = Ancestor;
			
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		module.exports = result;
	}
	else {

		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {

			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.dao.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.Ancestor"] + '.js');
		}	
		
		ancestor = root.tw.ace33022.dao.Ancestor;
		
		root.tw.ace33022.dao.db.Ancestor = result;
	}
})(this);