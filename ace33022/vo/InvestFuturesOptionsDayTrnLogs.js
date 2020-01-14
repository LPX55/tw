/**
 *
 * InestFuturesOptionsDayTrnLogs(投信每日期貨/選擇權交易統計資料)
 *
 * @author ace
 *
 * @version 2013/11/06 初始版本。
 * @version 2015/03/10 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @description
 *
 * @require underscore.js
 * @require Ancestor.js
 *
 * @todo 
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

			result.$schema = '/json-schema/VO/InvestFuturesOptionsDayTrnLogs';
			result.title = 'invest_futures_options_day_trn_logs';

      return result;
    }
	}

	if (typeof define === 'function') {
	
		define(['tw.ace33022.vo.ForeignFuturesOptionsDayTrnLogs', 'underscore'], function(ForeignFuturesOptionsDayTrnLogs) {
		
			_ = root._;
		
			ancestor = ForeignFuturesOptionsDayTrnLogs;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/RequireJSConfig.js');
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
			
		ancestor = require(RequireJSConfig.paths['tw.ace33022.vo.ForeignFuturesOptionsDayTrnLogs'] + '.js');
			
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {

			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');

			if (typeof root.tw.ace33022.vo.ForeignFuturesOptionsDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['tw.ace33022.vo.ForeignFuturesOptionsDayTrnLogs'] + '.js');
		}
		
		_ = root._;
			
		ancestor = root.tw.ace33022.vo.ForeignFuturesOptionsDayTrnLogs;
			
		root.tw.ace33022.vo.InvestFuturesOptionsDayTrnLogs = result;
	}
})(this);