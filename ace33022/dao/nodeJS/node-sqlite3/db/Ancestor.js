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
 */

(function(root) {

	result = function(conn) {

		var serialVersionUID = 1;	// 保留
	}
	
	if (typeof define === 'function') {
	
		define([], function() {
		
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		module.exports = result;
	}
	else {
	
		// 主要使用在nodeJS環境，不需要直接增加全域變數。
	}
})(this);