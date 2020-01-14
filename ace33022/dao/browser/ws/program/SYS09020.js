/**
 *
 * SYS09020
 *
 * @author ace
 *
 * @version 2016/11/30 初始版本。
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
		
		this.setProgramCode('SYS09020');
		
		this.doPost = function(arrLottery649Logs, successCallback, errorCallback, completeCallback) {

			var data = {};
			
			data["lottery649_logs"] = new Array();

			arrLottery649Logs.forEach(function(element, index, array) {data["lottery649_logs"].push(element.toJSONObject());});
			
			uber.doPost(this.getURLPath(), JSON.stringify(data), successCallback, errorCallback, completeCallback);
    }
  }

	if (typeof define === 'function') {

		define(["tw.ace33022.dao.ws.program.Ancestor", "underscore"], function(Ancestor) {
		
			ancestor = Ancestor;

			return result;
		});
	}
	else {

		ancestor = root.tw.ace33022.dao.ws.program.Ancestor;

		root.tw.ace33022.dao.ws.program.SYS00010 = result;
	}
})(this);