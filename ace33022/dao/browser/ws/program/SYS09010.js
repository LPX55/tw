/**
 *
 * SYS09010
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

	var _;	// underscore.js

	var ancestor;

	var result = function() {

		var serialVersionUID = new Number(1);	// 保留

		var uber = new ancestor();
		
		var urlPath;

		_.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。
		
		urlPath = new String(root.Configurations.location.origin) + '/' + root.Configurations.webServiceProgramPath + 'SYS09010';

		this.doPost = function(userCode, arrOperatePanelsJSONObject, arrOperatePanelsDetailJSONObject, successCallback, errorCallback, completeCallback) {

			var data = {};
			
			data["user_code"] = userCode;
			data["operate_panels"] = arrOperatePanelsJSONObject;
			data["operate_panels_detail"] = arrOperatePanelsDetailJSONObject;
			
			this.doAncestorPost(urlPath, JSON.stringify(data), successCallback, errorCallback, completeCallback);
    }
  }

	if (typeof define === 'function') {

		define(["tw.ace33022.dao.ws.program.Ancestor", "underscore"], function(Ancestor) {

			_ = root._;

			ancestor = Ancestor;

			return result;
		});
	}
	else {

		_ = root._;

		ancestor = root.tw.ace33022.dao.Ancestor;

		root.tw.ace33022.dao.SYS09010 = result;
	}
})(this);