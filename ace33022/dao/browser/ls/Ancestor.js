/**
 *
 * Ancestor
 *
 * @author ace
 *
 * @version 2017/05/29 初始版本。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @description Local Storage
 *
 * @todo 
 *
 * @require
 *
 */

(function(root) {

	var ancestor;

	if ((typeof window['localStorage'] == 'undefined') && (window['localStorage'] === null)) throw new Error('localStorage is not support!');

	var result = function() {

		var serialVersionUID = new Number(1);	// 保留
		
		var uber = new ancestor();
		
		root._.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。
	}
	
	if (typeof define == 'function') {
	
		define(["tw.ace33022.dao.Ancestor", "underscore"], function(Ancestor) {
		
			ancestor = Ancestor;
			
			return result;
		});
	}
	else {
	
		ancestor = root.tw.ace33022.dao.Ancestor;
	
		root.tw.ace33022.dao.ls.Ancestor = result;
	}
})(this);