/**
 *
 * LoggedLogs
 *
 * @author ace
 *
 * @version 2014/02/10 初始版本。
 * @version 2014/08/15 JSON資料格式調整。
 * @version 2015/03/27 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 * @see <a href="http://www.nodebeginner.org/index-zh-tw.html">Node入門</a>
 *
 * @require underscore.js
 * @require Ancestor.js
 *
 */
 
var LoggedLogs = function() {};

(function(root) {

	var RequireJSConfig;
	
	var _;					// underscore.js
	
	var ancestor;

  LoggedLogs = function () {

    var serialVersionUID = 1; // 保留

    var userAccount = '';   // 登入帳號
    var loggedStatus = '';	// 登入狀態

		var uber = new ancestor();
  
    _.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。

		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
    this.setUserAccount = function(value) {if (value) userAccount = value; return value;}
    this.setLoggedStatus = function(value) {if (value) loggedStatus = value; return value;}

    this.getUserAccount = function() {return userAccount;}
    this.getLoggedStatus = function() {return loggedStatus;}

    // JSON物件資料。
    this.toJSONObject = function () {

      var result = {

        'user_account': UserAccount,
        'logged_status': loggedStatus
      };

      return _.extend(result, uber.toJSONObject());
    }

    this.setValueFromJSONObject = function (value) {

      uber.setValueFromJSONObject(value);

      this.setUserAccount(value['user_account']);
      this.setLoggedStatus(value['logged_status']);
    }

    this.getSchemaJSONObject = function () {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/LoggedLogs';
			result.title = 'logged_logs';
			
      result.properties.user_account = {'description': '使用者帳號', 'type': 'string', 'maxLength': 32};
      result.properties.logged_status = {'description': '登入狀態', 'type': 'string', 'maxLength': 1};

      return result;
    }
  }

	if (typeof define === 'function') {
	
		define(['underscore', 'Ancestor'], function(underscore, dAncestor) {
		
			_ = underscore;
				
			ancestor = dAncestor;
				
			return LoggedLogs;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestor = require(RequireJSConfig.paths['Ancestor'] + '.js');
		
		module.exports = LoggedLogs;
	}
	else {
	
		if (typeof root.RequireJSConfig !== 'undefined') RequireJSConfig = root.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
		
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');
			
			if (typeof root.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['Ancestor'] + '.js');
		}	
		
		_ = root._;
		
		ancestor = root.Ancestor;
	}
})(this);