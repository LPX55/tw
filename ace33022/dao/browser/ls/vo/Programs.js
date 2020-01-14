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

	var urlPath;

  var result = function() {

		var serialVersionUID = new Number(1);	// 保留

		var uber = new ancestor();
		
		var urlPath = new String(root.Configurations.location.origin) + '/' + root.Configurations.webServiceVOPath + 'programs';

		_.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。
  }

	if (typeof define == 'function') {

		define(["tw.ace33022.dao.ls.vo.Ancestor", "underscore"], function(Ancestor) {

			ancestor = Ancestor;

			return result;
		});
	}
	else {

		ancestor = root.tw.ace33022.dao.ls.vo.Ancestor;

		root.tw.ace33022.dao.ls.vo.Programs = result;
	}
})(this);