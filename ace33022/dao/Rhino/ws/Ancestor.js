/**
 *
 * Ancestor
 *
 * @author ace
 *
 * @version 2017/05/13 初始版本。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @description
 *
 * @todo 
 *
 */
 
(function(root) {

	var RequireJSConfig;
	
	var ancestor;
	
	var result = function() {

		var serialVersionUID = new Number(1);	// 保留
		
		var uber = new ancestor();
  
    root._.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
		
		this.doLogout = function() {return this.getDAO().doLogout();}
	}
	
	if (typeof define == 'function') {
	
		define(["underscore"], function() {
		
			return result;
		});
	}
	else if (typeof exports != 'undefined') {
	
		module.exports = result;
	}
	else {

		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load != 'undefined') {

			if (typeof root._ == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.dao.Ancestor == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.Ancestor"] + '.js');
		}	
		
		ancestor = root.tw.ace33022.dao.Ancestor;
	
		root.tw.ace33022.dao.ws.Ancestor = result;
	}
})(this);