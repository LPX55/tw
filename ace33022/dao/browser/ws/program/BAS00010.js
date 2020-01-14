/**
 *
 * SYS00030DAO
 *
 * @description
 *
 * @version 2017/03/22 初始版本。
 *
 * @author ace
 *
 * @see <a href="https://jquery.com/">jQuery</a>
 *
 */

(function(root) {

	var ancestor;
	
	var result = function() {

		var serialVersionUID = new Number(1);	// 保留
		
		root._.extend(this, new ancestor());
		
		this.setProgramCode('BAS00010');
  }

	if (typeof define === 'function') {

		define(["tw.ace33022.dao.ws.program.Ancestor", "underscore"], function(Ancestor) {
		
			ancestor = Ancestor;

			return result;
		});
	}
	else {

		ancestor = root.tw.ace33022.dao.ws.program.Ancestor;

		root.tw.ace33022.dao.ws.program.BAS00010 = result;
	}
})(this);