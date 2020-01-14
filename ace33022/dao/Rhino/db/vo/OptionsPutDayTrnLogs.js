/**
 *
 * OptionsPutDayTrnLogs(選擇權賣權每日交易行情)
 *
 * @author ace
 *
 * @version 2013/11/01 初始版本。
 * @version 2015/03/13 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @return {Object} OptionsPutDayTrnLogsDAO
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
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// this.setTableName('options_put_day_trn_logs');
		this.setAccessVO(accessVO);
		this.setDAO(new Packages.tw.ace33022.dao.db.vo.OptionsPutDayTrnLogs(conn));
		
		this.doInsert = function(vo) {

			var javaVO = new Packages.tw.ace33022.vo.OptionsPutDayTrnLogs();

			javaVO.setValueFromJSONString(vo.toJSONString());
			
			return this.getDAO().doInsert(javaVO);
		}
	}

	if (typeof define === 'function') {
	
		define(["tw.ace33022.dao.db.vo.OptionsCallDayTrnLogs", "tw.ace33022.vo.OptionsPutDayTrnLogs", "underscore"], function(Ancestor, OptionsPutDayTrnLogs) {
		
			ancestor = Ancestor;
			accessVO = OptionsPutDayTrnLogs;
			
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		require(RequireJSConfig.paths["underscore"] + '.js');
	
		ancestor = require(RequireJSConfig.paths["tw.ace33022.dao.db.vo.OptionsCallDayTrnLogs"] + '.js');
		accessVO = require(RequireJSConfig.paths["tw.ace33022.vo.OptionsPutDayTrnLogs"] + '.js');
			
		module.exports = result;
	}
	else {

		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
		
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.dao.db.vo.OptionsCallDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.vo.OptionsCallDayTrnLogs"] + '.js');
			if (typeof root.tw.ace33022.vo.OptionsPutDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.OptionsPutDayTrnLogs"] + '.js');
		}
		
		ancestor = root.tw.ace33022.dao.db.vo.OptionsCallDayTrnLogs;
		accessVO = root.tw.ace33022.vo.OptionsPutDayTrnLogs;
		
		root.tw.ace33022.dao.db.vo.OptionsPutDayTrnLogs = result;
	}
})(this);