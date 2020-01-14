/**
 *
 * POS00010
 *
 * @author ace
 *
 * @version 2014/04/29 初始版本。
 *
 * @description
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @comment
 *
 * @todo
 *
 */

(function(root) {

	var _;	// underscore.js

	var ancestor;
	
	var urlPath = new String(location.origin) + '/POS00010';
	
  var result = function() {

		var serialVersionUID = new Number(1);	// 保留

		var uber = new ancestor();
		
		_.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。
		
    this.doInsert = function(posTrnLogs, arrPOSTrnLogsDetail, successCallback, errorCallback, completeCallback) {

			var index;
			var data = new String();
			var arrJSONObject = new Array();
			
  		for (index = 0; index < arrPOSTrnLogsDetail.length; index++) arrJSONObject.push(arrPOSTrnLogsDetail[index].toJSONObject());
			
			data = '{'
					 + '"POSTrnLogs": ' + JSON.stringify(posTrnLogs.toJSONObject()) + ', '
			     + '"POSTrnLogsDetail": ' + JSON.stringify(arrJSONObject)
					 + '}';
			this.doAncestorInsert(urlPath + '/json', data, successCallback, errorCallback, completeCallback);
    }
  }

	if (typeof define === 'function') {
	
		define(['tw.ace33022.dao.Ancestor', 'underscore'], function(Ancestor) {

			_ = root._;

			ancestor = Ancestor;

			return result;
		});
	}
	else {

		_ = root._;

		ancestor = root.tw.ace33022.dao.Ancestor;

		root.tw.ace33022.dao.POS00010 = result;
	}
})(this);