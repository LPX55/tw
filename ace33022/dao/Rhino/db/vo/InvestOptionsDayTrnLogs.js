/**
 *
 * InvestOptionsDayTrnLogs(投信每日選擇權交易統計資料)
 *
 * @author ace
 *
 * @version 2013/11/01 初始版本。
 * @version 2015/03/22 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @return {Object} InvestOptionsDayTrnLogsDAO
 *
 * @see <a href="http://ejohn.org/">John Resig</a>
 * @see <a href="https://github.com/jeresig/env-js">jeresig/env-js</a>
 *
 */
 
(function(root) {

	var RequireJSConfig;
	
	var ancestor;
	var accessVO;
	
	var result = function(conn) {
	
		var serialVersionUID = new Number(1);     // 保留

		root._.extend(this, new ancestor(conn));
		this.prototype = this;		// 由於已複製父類別Ancestor，因此原型類別指向自己。
		
		// this.setTableName('invest_options_day_trn_logs');
		this.setAccessVO(accessVO);
		this.setDAO(new Packages.tw.ace33022.dao.db.vo.InvestOptionsDayTrnLogs(conn));
		
		this.doInsert = function(vo) {

			var javaVO = new Packages.tw.ace33022.vo.InvestOptionsDayTrnLogs();

			javaVO.setValueFromJSONString(vo.toJSONString());
			
			return this.getDAO().doInsert(javaVO);
		}
	}

	if (typeof define === 'function') {
	
		define(["tw.ace33022.dao.db.vo.ForeignOptionsDayTrnLogs", "tw.ace33022.vo.InvestOptionsDayTrnLogs", "underscore"], function(Ancestor, InvestOptionsDayTrnLogs) {
		
			ancestor = Ancestor;
			accessVO = InvestOptionsDayTrnLogs;
			
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		require(RequireJSConfig.paths["underscore"] + '.js');
	
		ancestor = require(RequireJSConfig.paths["tw.ace33022.dao.db.vo.ForeignOptionsDayTrnLogs"] + '.js');
		accessVO = require(RequireJSConfig.paths["tw.ace33022.vo.InvestOptionsDayTrnLogs"] + '.js');
			
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
		
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
		
			if (typeof root.tw.ace33022.dao.db.vo.ForeignOptionsDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.vo.ForeignOptionsDayTrnLogs"] + '.js');
			if (typeof root.tw.ace33022.vo.InvestOptionsDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.InvestOptionsDayTrnLogs"] + '.js');
		}	
		
		ancestor = root.tw.ace33022.dao.db.vo.ForeignOptionsDayTrnLogs;
		accessVO = root.tw.ace33022.vo.InvestOptionsDayTrnLogs;
		
		root.tw.ace33022.dao.db.vo.InvestOptionsDayTrnLogs = result;
	}    
})(this);