/**
 *
 * SYS09100
 *
 * @author ace
 *
 * @version 2018/02/19 初始版本。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a>
 *
 * @see <a href="https://stackoverflow.com/questions/456177/function-overloading-in-javascript-best-practices">Function overloading in Javascript - Best practices - Stack Overflow</a>
 * @see <a href="https://coderwall.com/p/bdadoa/javascript-function-overloading">JavaScript function overloading (Example)</a>
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

    root._.extend(this, new ancestor(conn));
		
		this.setDAO(new Packages.tw.ace33022.dao.db.program.SYS09100(conn));
		
		this.doInsert = function(file) { this.getDAO().doInsert(file); }
		this.doSelect = function(yearMonth) { return this.getDAO().doSelect(new Packages.java.lang.String(yearMonth)); }
	}
	
	if (typeof define === 'function') {
	
		define(["tw.ace33022.dao.db.program.Ancestor"], function(Ancestor) {
		
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
			if (typeof root.tw.ace33022.dao.db.program.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.program.Ancestor"] + '.js');
		}
		
		ancestor = root.tw.ace33022.dao.db.Ancestor;
		
		root.tw.ace33022.dao.db.program.SYS09100 = result;
	}
})(this);