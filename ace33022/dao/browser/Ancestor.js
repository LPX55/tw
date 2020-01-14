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

	var result = function() {

		var serialVersionUID = new Number(1);	// 保留
	}
	
	if (typeof define === 'function') {
	
		define([], function() {
		
			return result;
		});
	}
	else {
	
		root.tw.ace33022.dao.Ancestor = result;
	}
})(this);