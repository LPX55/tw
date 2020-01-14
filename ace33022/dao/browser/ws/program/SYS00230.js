/**
 *
 * SYS00230DAO
 *
 * @description
 *
 * @version 2018/07/03 初始版本。
 *
 * @author ace
 *
 * @see
 *
 * @comment
 *
 */

(function(root) {

	var ancestor;
	
	var result = function() {

		var serialVersionUID = new Number(1);	// 保留
		
		root._.extend(this, new ancestor());
		
		this.setProgramCode('SYS00230');
  }

	if (typeof define === 'function') {

		define(["tw.ace33022.dao.ws.program.Ancestor", "underscore"], function(Ancestor) {
		
			ancestor = Ancestor;

			return result;
		});
	}
	else {

		ancestor = root.tw.ace33022.dao.ws.program.Ancestor;

		root.tw.ace33022.dao.ws.program.SYS00230 = result;
	}
})(this);