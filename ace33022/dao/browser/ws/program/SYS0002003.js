/**
 *
 * SYS0002003
 *
 * @author ace
 *
 * @version 2016/03/16 初始版本。
 *
 * @description
 *
 * @see <a href="https://jquery.com/">jQuery</a>
 * @see <a href="http://api.jquery.com/jquery.ajax/">jQuery.ajax() | jQuery API Documentation</a>
 *
 */

(function(root) {

	var _;	// underscore.js

	var ancestor;

	var urlPath = new String(location.origin) + '/SYS0002003';

	var result = function() {

		var serialVersionUID = new Number(1);	// 保留

		var uber = new ancestor();

		_.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。

    this.doInsert = function(arrVO, successCallback, errorCallback, completeCallback) {

			var index;
			var arrJSONObject = new Array();
			var data;

			for (index = 0; index < arrVO.length; index++) arrJSONObject.push(arrVO[index].toJSONObject());

			data = '{' + '"InvoiceLogs": ' + JSON.stringify(arrJSONObject) + '}';

			this.doAncestorInsert(urlPath + '/json', data, successCallback, errorCallback, completeCallback);
    }
  }

	if (typeof define === 'function') {

		// 使用requirejs的環境設定。
		define(['tw.ace33022.dao.Ancestor', 'underscore'], function(Ancestor) {

			_ = root._;

			ancestor = Ancestor;

			return result;
		});
	}
	else {

		_ = root._;

		ancestor = root.tw.ace33022.dao.Ancestor;

		root.tw.ace33022.dao.SYS0002003 = result;
	}
})(this);
