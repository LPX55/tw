/**
 *
 * Programs
 *
 * @author ace
 *
 * @version 2015/11/03 初始版本。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 */

(function(root) {

	var ancestor;

  var result = function() {

		var serialVersionUID = new Number(1);	// 保留

		var uber = new ancestor();
		
		root._.extend(this, uber);
		
		this.setTableName('programs');
		
    this.doGetByProgramCode = function(programCode, successCallback, errorCallback, completeCallback) {
		
			uber.doGet(this.getURLPath() + '/' + programCode, successCallback, errorCallback, completeCallback);
    }
  }

	if (typeof define === 'function') {

		define(["tw.ace33022.dao.ws.vo.Ancestor", "underscore"], function(Ancestor) {

			ancestor = Ancestor;

			return result;
		});
	}
	else {

		ancestor = root.tw.ace33022.dao.ws.vo.Ancestor;

		root.tw.ace33022.dao.ws.vo.OperatePanels = result;
	}
})(this);