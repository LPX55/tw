/**
 *
 * RolesPrograms
 *
 * @author ace
 *
 * @version 2017/04/02 初始版本。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 */

(function(root) {

	var _;	// underscore.js

	var ancestor;

	var urlPath;

  var result = function() {

		var serialVersionUID = new Number(1);	// 保留

		var uber = new ancestor();

		_.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。
		
		urlPath = uber.webServicePath + 'roles_programs';

    this.doSelect = function(successCallback, errorCallback, completeCallback) {

			this.doAncestorSelect(urlPath, successCallback, errorCallback, completeCallback);
    }
  }

	if (typeof define == 'function') {

		define(["tw.ace33022.dao.vo.Ancestor", "underscore"], function(Ancestor) {

			_ = root._;

			ancestor = Ancestor;

			return result;
		});
	}
	else {

		_ = root._;

		ancestor = root.tw.ace33022.dao.vo.Ancestor;

		root.tw.ace33022.dao.vo.RolesPrograms = result;
	}
})(this);