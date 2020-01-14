/**
 *
 * Ancestor
 *
 * @author ace
 *
 * @version 2013/09/29 初始版本。
 * @version 2014/11/26 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web">Web technology For developers | MDN</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript | MDN</a>
 *
 * @see <a href="https://jquery.com/">jQuery</a>
 * @see <a href="https://api.jquery.com/">jQuery API Documentation</a>
 *
 * @description
 *
 * @todo 
 *
 * @require
 *
 */

(function(root) {

	var ancestor;
	
	var result = function() {

		var serialVersionUID = new Number(1);	// 保留
		
		var ajaxSettings = {
		
      contentType: "application/json; charset=utf-8",
			dataType: "json"
		};
		
		// var uber = new ancestor();
		
		root._.extend(this, new ancestor());
		
		// this.prototype = uber;  // 保留原型鍊。
		// this.prototype = this;  // 由於已複製父類別Ancestor，將原型類別指向自己。
		
    this.doGet = function(url, successCallback, errorCallback, completeCallback) {

			ajaxSettings['url'] = url;
			ajaxSettings['type'] = 'GET';
			ajaxSettings['success'] = function(data, textStatus, jqXHR) {if (typeof successCallback === 'function') successCallback(data, textStatus, jqXHR);};
      ajaxSettings['error'] = function(jqXHR, textStatus, errorThrown) {if (typeof errorCallback === 'function') errorCallback(jqXHR, textStatus, errorThrown);};
			ajaxSettings['complete'] = function(jqXHR, textStatus) {if (typeof completeCallback === 'function') completeCallback(jqXHR, textStatus);};
			
			root.jQuery.ajax(ajaxSettings);
    }
		
		this.doPost = function(url, data, successCallback, errorCallback, completeCallback) {
		
			ajaxSettings['url'] = url;
			ajaxSettings['data'] = data;
			ajaxSettings['type'] = 'POST';
			ajaxSettings['success'] = function(data, textStatus, jqXHR) {if (typeof successCallback === 'function') successCallback(data, textStatus, jqXHR);};
      ajaxSettings['error'] = function(jqXHR, textStatus, errorThrown) {if (typeof errorCallback === 'function') errorCallback(jqXHR, textStatus, errorThrown);};
			ajaxSettings['complete'] = function(jqXHR, textStatus) {if (typeof completeCallback === 'function') completeCallback(jqXHR, textStatus);};
			
			root.jQuery.ajax(ajaxSettings);
		};
		
		this.doPut = function(url, data, successCallback, errorCallback, completeCallback) {
		
			ajaxSettings['url'] = url;
			ajaxSettings['type'] = 'PUT';
			ajaxSettings['data'] = data;
			ajaxSettings['success'] = function(data, textStatus, jqXHR) {if (typeof successCallback === 'function') successCallback(data, textStatus, jqXHR);};
      ajaxSettings['error'] = function(jqXHR, textStatus, errorThrown) {if (typeof errorCallback === 'function') errorCallback(jqXHR, textStatus, errorThrown);};
			ajaxSettings['complete'] = function(jqXHR, textStatus) {if (typeof completeCallback === 'function') completeCallback(jqXHR, textStatus);};
			
			root.jQuery.ajax(ajaxSettings);
		};
		
		this.doDelete = function(url, successCallback, errorCallback, completeCallback) {
		
			ajaxSettings['url'] = url;
			ajaxSettings['type'] = 'DELETE';
			ajaxSettings['success'] = function(data, textStatus, jqXHR) {if (typeof successCallback === 'function') successCallback(data, textStatus, jqXHR);};
      ajaxSettings['error'] = function(jqXHR, textStatus, errorThrown) {if (typeof errorCallback === 'function') errorCallback(jqXHR, textStatus, errorThrown);};
			ajaxSettings['complete'] = function(jqXHR, textStatus) {if (typeof completeCallback === 'function') completeCallback(jqXHR, textStatus);};
			
			root.jQuery.ajax(ajaxSettings);
		};
	}
	
	if (typeof define === 'function') {
	
		define(["tw.ace33022.dao.Ancestor", "underscore", "jquery"], function(Ancestor) {
		
			ancestor = Ancestor;
			
			return result;
		});
	}
	else {
	
		ancestor = root.tw.ace33022.dao.Ancestor;
		
		root.tw.ace33022.dao.ws.Ancestor = result;
	}
})(this);