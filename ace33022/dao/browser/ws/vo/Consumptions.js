/**
 *
 * Consumptions
 *
 * @author ace
 *
 * @version 2013/09/29 初始版本。
 * @version 2013/11/21 Content-type屬性內容調整。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 */

(function(root) {

	var _;	// underscore.js

	var ancestor;

	var urlPath = new String(location.origin) + '/vo/consumptions';

  var result = function() {

		var serialVersionUID = new Number(1);	// 保留

		var uber = new ancestor();

		_.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。

    this.doSelectByProductNameOrderByTrnDate = function(productName, successCallback, errorCallback, completeCallback) {

			this.doAncestorSelect(urlPath + '/json' + '/' + productName, successCallback, errorCallback, completeCallback);
    };

    this.doSelectByProductNameOrderByTrnDateDesc = function(productName, successCallback, errorCallback, completeCallback) {

			this.doAncestorSelect(urlPath + '/json' + '/' + productName + '?' + 'orderByTrnDate=desc', successCallback, errorCallback, completeCallback);
    };

    this.doSelectLimitByProductNameOrderByTrnDate = function(limit, productName, successCallback, errorCallback, completeCallback) {

			this.doAncestorSelect(urlPath + '/json' + '/' + productName + '?' + 'limit=' + limit, successCallback, errorCallback, completeCallback);
    };

    this.doSelectLimitByProductNameOrderByTrnDateDesc = function(limit, productName, successCallback, errorCallback, completeCallback) {

			this.doAncestorSelect(urlPath + '/json' + '/' + productName + '?' + 'limit=' + limit + '&orderByTrnDate=desc', successCallback, errorCallback, completeCallback);
    };

		this.doSelectBetweenTrnDateOrderByTrnDate = function(beginTrnDate, endTrnDate, successCallback, errorCallback, completeCallback) {

			this.doAncestorSelect(urlPath + '/json' + '?' + 'between=trn_date&beginTrnDate=' + beginTrnDate + '&endTrnDate=' + endTrnDate + '&orderByTrnDate=', successCallback, errorCallback, completeCallback);
		};
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

		root.tw.ace33022.dao.vo.Consumptions = result;
	}
})(this);
