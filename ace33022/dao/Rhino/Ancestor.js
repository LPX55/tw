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

	var result = function() {

		var serialVersionUID = new Number(1);	// 保留
		
		var dao;
		
		this.setDAO = function(value) {dao = value; return value;}
		
		this.getDAO = function() {return dao;}
	};
	
	if (typeof define == 'function') {
	
		define([], function() {
		
			return result;
		});
	}
	else if (typeof exports != 'undefined') {
	
		module.exports = result;
	}
	else {

		root.tw.ace33022.dao.Ancestor = result;
	}
})(this);