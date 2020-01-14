/**
 *
 * MSC00010
 *
 * @author ace
 *
 * @version 2018/01/01 初始版本。
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
		
		this.setProgramCode('MSC00010');
  }

	if (typeof define === 'function') {

		define(["tw.ace33022.dao.ws.program.Ancestor", "underscore"], function(Ancestor) {
		
			ancestor = Ancestor;

			return result;
		});
	}
	else {

		ancestor = root.tw.ace33022.dao.ws.program.Ancestor;

		root.tw.ace33022.dao.ws.program.MSC00010 = result;
	}
})(this);