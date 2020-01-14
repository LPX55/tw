/**
 *
 * ProductNameStatistics(商品名稱統計資料)
 *
 * @author ace
 *
 * @version 2014/08/24 初始版本。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 */

(function(root) {

	var _;	// underscore.js

	var ancestor;
	
	var urlPath = new String(root.Configurations.location.origin) + '/vo/product_name_statistics';
	
  var result = function() {

		var serialVersionUID = new Number(1);	// 保留
		
		var uber = new ancestor();
		
		_.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。
		
    this.doSelectLikeProductName = function(productName, successCallback, errorCallback, completeCallback) {

			this.doAncestorSelect(urlPath + '/json' + '/like/' + productName, successCallback, errorCallback, completeCallback);
    }
  }

	if (typeof define === 'function') {
	
		define(['tw.ace33022.dao.vo.Ancestor', 'underscore'], function(Ancestor) {

			_ = root._;

			ancestor = Ancestor;

			return result;
		});
	}
	else {

		_ = root._;

		ancestor = root.tw.ace33022.dao.vo.Ancestor;

		root.tw.ace33022.dao.vo.ProductNameStatistics = result;
	}
})(this);