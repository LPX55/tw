/**
 *
 * DealerOptionsDayTrnLogs
 *
 * @author ace
 *
 * @version 2013/11/01 初始版本。
 * @version 2015/03/17 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @return {Object} DealerOptionsDayTrnLogs
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
		// this.prototype = uber;	// 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/DealerOptionsDayTrnLogs';
			result.title = 'dealer_options_day_trn_logs';

      return result;
    }
	}

	if (typeof define === 'function') {
	
		define(['tw.ace33022.vo.ForeignOptionsDayTrnLogs', 'underscore'], function(ForeignOptionsDayTrnLogs) {
		
			_ = root._;
				
			ancestor = ForeignOptionsDayTrnLogs;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/RequireJSConfig.js');
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
			
		ancestor = require(RequireJSConfig.paths['tw.ace33022.vo.ForeignOptionsDayTrnLogs'] + '.js');
			
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {

			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');

			if (typeof root.tw.ace33022.vo.ForeignOptionsDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['tw.ace33022.vo.ForeignOptionsDayTrnLogs'] + '.js');
		}
		
		_ = root._;
		
		ancestor = root.tw.ace33022.vo.ForeignOptionsDayTrnLogs;
			
		root.tw.ace33022.vo.DealerOptionsDayTrnLogs = result;
	}
})(this);