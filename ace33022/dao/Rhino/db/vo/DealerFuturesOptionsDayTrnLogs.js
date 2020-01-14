/**
 *
 * DealerFuturesOptionsDayTrnLogs(自營商每日期貨/選擇權交易統計資料)
 *
 * @author ace
 *
 * @version 2013/11/07 初始版本。
 * @version 2015/03/10 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="http://ejohn.org/">John Resig</a>
 * @see <a href="https://github.com/jeresig/env-js">jeresig/env-js</a>
 *
 * @description
 *
 * @todo 
 *
 */

(function(root) {

	var RequireJSConfig;
	
	var _;	// underscore.js
	
	var ancestor;
	var accessVO;
	
	var result = function(conn) {

		var serialVersionUID = new Number(1);	// 保留
		
		var uber = new ancestor(conn);
		
		_.extend(this, uber);
		// this.prototype = uber;	// 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName('dealer_futures_options_day_trn_logs');
		this.setAccessVO(accessVO);
	}

	if (typeof define === 'function') {
	
		define(['tw.ace33022.vo.DealerFuturesOptionsDayTrnLogs', 'tw.ace33022.dao.vo.ForeignFuturesOptionsDayTrnLogs', 'underscore'], function(DealerFuturesOptionsDayTrnLogs, ForeignFuturesOptionsDayTrnLogs) {
		
			_ = root._;

			accessVO = DealerFuturesOptionsDayTrnLogs;
			ancestor = ForeignFuturesOptionsDayTrnLogs;
			
			return result;
		});
	}
	else if (typeof exports  !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['tw.ace33022.vo.DealerFuturesOptionsDayTrnLogs'] + '.js');
		ancestor = require(RequireJSConfig.paths['tw.ace33022.dao.vo.ForeignFuturesOptionsDayTrnLogs'] + '.js');
			
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
	
		if (typeof load !== 'undefined') {
		
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');
			
			if (typeof root.tw.ace33022.vo.DealerFuturesOptionsDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['tw.ace33022.vo.DealerFuturesOptionsDayTrnLogs'] + '.js');
			if (typeof root.tw.ace33022.dao.vo.ForeignFuturesOptionsDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['tw.ace33022.dao.vo.ForeignFuturesOptionsDayTrnLogs'] + '.js');
		}
		
		_ = root._;
		
		accessVO = root.tw.ace33022.vo.DealerFuturesOptionsDayTrnLogs;
		ancestor = root.tw.ace33022.dao.vo.ForeignFuturesOptionsDayTrnLogs;
			
		root.tw.ace33022.dao.vo.DealerFuturesOptionsDayTrnLogs = result;
	}    
})(this);