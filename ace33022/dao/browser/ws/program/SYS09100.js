/**
 *
 * SYS09100
 *
 * @author ace
 *
 * @version 2018/02/16 初始版本。
 *
 * @description
 *
 * @see <a href="https://jquery.com/">jQuery</a>
 *
 */

(function(root) {

	var ancestor;

	var result = function() {

		var serialVersionUID = new Number(1);	// 保留

		var uber = new ancestor();
		
		root._.extend(this, uber);
		
		this.setProgramCode('SYS09100');
		
		this.doGet = function(path, successCallback, errorCallback, completeCallback) {
		
			if (path !== '') {
			
				uber.doGet(uber.getURLPath() + path, successCallback, errorCallback, completeCallback);
			}
			else {
			
				uber.doGet(successCallback, errorCallback, completeCallback);
			}
		};
  }

	if (typeof define === 'function') {

		define(["tw.ace33022.dao.ws.program.Ancestor", "underscore"], function(Ancestor) {

			ancestor = Ancestor;

			return result;
		});
	}
	else {

		ancestor = root.tw.ace33022.dao.ws.program.Ancestor;

		root.tw.ace33022.dao.ws.program.BAS09030 = result;
	}
})(this);