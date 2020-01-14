/**
 *
 * InvoiceLogsDAO
 *
 * @author ace
 *
 * @version 2016/04/01 初始版本。
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
	
  var result = function() {
	
		var serialVersionUID = new Number(1);	// 保留
  
		var uber = new ancestor();
		
		var urlPath;
		
		_.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。
		
		urlPath = uber.webServicePath + 'invoice_logs';

    this.doSelect = function(successCallback, errorCallback, completeCallback) {

			this.doAncestorSelect(urlPath, successCallback, errorCallback, completeCallback);
    }
		
    this.doSelectByInYearMonth = function(inYearMonth, successCallback, errorCallback, completeCallback) {

			this.doAncestorSelect(urlPath + '/' + inYearMonth, successCallback, errorCallback, completeCallback);
    }
		
    this.doSelectGroupByInYearMonthOrderByInYearMonth = function(successCallback, errorCallback, completeCallback) {
  
			this.doAncestorSelect(urlPath + '?method=doSelectGroupByInYearMonthOrderByInYearMonth', successCallback, errorCallback, completeCallback);
    }
		
    this.doInsert = function(vo, successCallback, errorCallback, completeCallback) {
  
			this.doAncestorInsert(urlPath, vo.toJSONString(), successCallback, errorCallback, completeCallback);
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

		root.tw.ace33022.dao.vo.InvoiceLogs = result;
	}
})(this);