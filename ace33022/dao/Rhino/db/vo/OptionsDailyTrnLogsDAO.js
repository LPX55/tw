/**
 *
 * OptionsDailyTrnLogsDAO
 *
 * @author ace
 *
 * @version 2015/12/24 初始版本。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 */
 
var OptionsDailyTrnLogsDAO = function(connn) {};
 
(function(root) {

	var RequireJSConfig;
	
	var accessVO;
	
	OptionsDailyTrnLogsDAO = function(conn) {

		var serialVersionUID = 1;	// 保留
  
		var dao = new Packages.tw.ace33022.dao.db.OptionsDailyTrnLogsDAO(conn);
  
		this.doSelectByProductCodeAndConMonthAndOptionsType = function(productCode, conMonth, optionsType) {
		
			var result = new Array();
			
			var arrVO = dao.doSelectByProductCodeAndConMonthAndOptionsType(productCode, conMonth, optionsType);
			
			var ite = arrVO.iterator();
			
			var javaVO;
			var vo;
			
			while (ite.hasNext()) {
			
				javaVO = ite.next();
				
				vo = new accessVO();
				
				vo.setValueFromJSONString(javaVO.toJSONObject().toString());
				
				result.push(vo);
			}
			
			return result;
		}
	}

	if (typeof define === 'function') {
	
		define(['OptionsDailyTrnLogs'], function(dOptionsDailyTrnLogs) {
		
			accessVO = dOptionsDailyTrnLogs;
			
			return OptionsDailyTrnLogsDAO;
		});
	}
	else if (typeof exports  !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		accessVO = require(RequireJSConfig.paths['OptionsDailyTrnLogs'] + '.js');

		module.exports = OptionsDailyTrnLogsDAO;
	}
	else {
		
		if (typeof root.RequireJSConfig !== 'undefined') RequireJSConfig = root.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
	
			if (typeof root.OptionsDailyTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['OptionsDailyTrnLogs'] + '.js');
		}	
		
		accessVO = root.OptionsDailyTrnLogs;
	}    
})(this);