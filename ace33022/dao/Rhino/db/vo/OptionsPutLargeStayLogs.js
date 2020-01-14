/**
 *
 * 選擇權賣權大額交易人未沖銷部位(OptionsPutLargeStayLogsDAO)
 *
 * @author ace
 *
 * @version 2013/11/05 初始版本。
 * @version 2015/03/18 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @return {Object} OptionsPutLargeStayLogsDAO
 *
 * @see <a href="http://ejohn.org/">John Resig</a>
 * @see <a href="https://github.com/jeresig/env-js">jeresig/env-js</a>
 *
 * @require underscore.js
 * @require AncestorDAO.js
 * @require OptionsPutLargeStayLogs.js
 * 
 */

(function(root) {

	var RequireJSConfig;
	
	var ancestor;
	var accessVO;
	
	var result = function(conn) {
	
		var serialVersionUID = new Number(1);	// 保留
  
		root._.extend(this, new ancestor(conn));
		// this.prototype = uber;	// 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// this.setTableName('options_put_large_stay_logs');
		this.setAccessVO(accessVO);
		this.setDAO(new Packages.tw.ace33022.dao.db.vo.OptionsPutLargeStayLogs(conn));
		
		this.doInsert = function(vo) {

			var javaVO = new Packages.tw.ace33022.vo.OptionsPutLargeStayLogs();

			javaVO.setValueFromJSONString(vo.toJSONString());
			
			return this.getDAO().doInsert(javaVO);
		}
	}

	if (typeof define === 'function') {
	
		define(["tw.ace33022.dao.db.vo.OptionsCallLargeStayLogs", "tw.ace33022.vo.OptionsPutLargeStayLogs", "underscore"], function(OptionsCallLargeStayLogsDAO, OptionsPutLargeStayLogs) {
		
			ancestor = OptionsCallLargeStayLogsDAO;
			accessVO = OptionsPutLargeStayLogs;
			
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		require(RequireJSConfig.paths["underscore"] + '.js');
	
		ancestor = require(RequireJSConfig.paths["tw.ace33022.dao.db.vo.OptionsCallLargeStayLogs"] + '.js');
		accessVO = require(RequireJSConfig.paths["tw.ace33022.vo.OptionsPutLargeStayLogs"] + '.js');
			
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
	
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');

			if (typeof root.tw.ace33022.dao.db.vo.OptionsCallLargeStayLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.vo.OptionsCallLargeStayLogs"] + '.js');
			if (typeof root.tw.ace33022.vo.OptionsPutLargeStayLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.OptionsPutLargeStayLogs"] + '.js');
		}	
		
		ancestor = root.tw.ace33022.dao.db.vo.OptionsCallLargeStayLogs;
		accessVO = root.tw.ace33022.vo.OptionsPutLargeStayLogs;
		
		root.tw.ace33022.dao.db.vo.OptionsPutLargeStayLogs = result;
	}
})(this);