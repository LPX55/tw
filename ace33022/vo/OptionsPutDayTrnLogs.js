/**
 *
 * OptionsPutDayTrnLogs(選擇權賣權每日交易行情)
 *
 * @author ace
 *
 * @version 2013/10/31 初始版本。
 * @version 2015/03/13 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @return {Object} OptionsCallDayTrnLogs
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @require underscore.js
 * @require Ancestor.js
 *
 */
 
(function(root) {
 
	var RequireJSConfig;
	
	var _;	// underscore.js
	
	var ancestor;
	
	var result = function() {

		var serialVersionUID = new Number(1);	// 保留
  
		var uber = new ancestor();
		
		_.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/vo/options_put_day_trn_logs';
			result.title = 'options_put_day_trn_logs';

      return result;
    }
	}

	if (typeof define === 'function') {
	
		define(['tw.ace33022.vo.OptionsCallDayTrnLogs', 'underscore'], function(OptionsCallDayTrnLogs) {
		
			_ = root._;
		
			ancestor = OptionsCallDayTrnLogs;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/RequireJSConfig.js');
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestor = require(RequireJSConfig.paths['tw.ace33022.vo.OptionsCallDayTrnLogs'] + '.js');
		
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
	
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');
			
			if (typeof root.tw.ace33022.vo.OptionsCallDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['tw.ace33022.vo.OptionsCallDayTrnLogs'] + '.js');
		}
		
		_ = root._;
		
		ancestor = root.tw.ace33022.vo.OptionsCallDayTrnLogs;
		
		root.tw.ace33022.vo.OptionsPutDayTrnLogs = result;
	}
})(this);