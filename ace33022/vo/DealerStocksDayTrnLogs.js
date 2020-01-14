/**
 *
 * DealerStocksDayTrnLogs
 *
 * @author ace
 *
 * @version 2013/10/20 初始版本。
 * @version 2015/03/19 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
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
 
(function() {

	var root = this;
	
	var _;					// underscore.js
	
	var foreignStocksDayTrnLogs;

	var result = function() {
	
		var serialVersionUID = 1; // 保留
		
		var uber = new foreignStocksDayTrnLogs();
  
		_.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/DealerStocksDayTrnLogs';
			result.title = 'dealer_stocks_day_trn_logs';

      return result;
    }
	}

	if (typeof define === 'function') {
	
		define(['underscore', 'ForeignStocksDayTrnLogs'], function(underscore, dForeignStocksDayTrnLogs) {
		
			_ = underscore;
				
			foreignStocksDayTrnLogs = dForeignStocksDayTrnLogs;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
			
		foreignStocksDayTrnLogs = require(RequireJSConfig.paths['ForeignStocksDayTrnLogs'] + '.js');
			
		module.exports = result;
	}
	else {
	
		if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');
		if (typeof root.ForeignStocksDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['ForeignStocksDayTrnLogs'] + '.js');
			
		_ = root._;
			
		foreignStocksDayTrnLogs = root.ForeignStocksDayTrnLogs;
			
		root['DealerStocksDayTrnLogs'] = result;
	}
})();