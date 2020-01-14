/**
 *
 * ForeignOptionsDayTrnLogs
 *
 * @author ace
 *
 * @version 2013/11/01 初始版本。
 * @version 2015/03/18 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @return {Object} ForeignOptionsDayTrnLogsDAO
 *
 * @see <a href="http://ejohn.org/">John Resig</a>
 * @see <a href="https://github.com/jeresig/env-js">jeresig/env-js</a>
 *
 * @require underscore.js
 * @require AncestorDAO.js
 * @require ForeignOptionsDayTrnLogs.js
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
		
		// this.setTableName('foreign_options_day_trn_logs');
		this.setAccessVO(accessVO);
		this.setDAO(new Packages.tw.ace33022.dao.db.vo.ForeignOptionsDayTrnLogs(conn));

		this.doInsert = function(vo) {

			var javaVO = new Packages.tw.ace33022.vo.ForeignOptionsDayTrnLogs();

			javaVO.setValueFromJSONString(vo.toJSONString());
			
			return this.getDAO().doInsert(javaVO);
		}
		
		this.doDelete = function(trnDate, productCode) {
		
			return this.getDAO().doDelete(new Packages.java.lang.String(trnDate), new Packages.java.lang.String(productCode));
		}
		
		this.doSelectBetweenTrnDateOrderByTrnDate = function(beginTrnDate, endTrnDate, productCode) {return this.tranIteratorToVO(this.getDAO().doSelectBetweenTrnDateOrderByTrnDate(beginTrnDate, endTrnDate, productCode).iterator());}
	}

	if (typeof define === 'function') {
	
		define(["tw.ace33022.dao.db.vo.Ancestor", "tw.ace33022.vo.ForeignOptionsDayTrnLogs", "underscore"], function(Ancestor, ForeignOptionsDayTrnLogs) {
		
			ancestor = Ancestor;
			accessVO = ForeignOptionsDayTrnLogs;
			
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		ancestor = require(RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');
		accessVO = require(RequireJSConfig.paths["tw.ace33022.vo.ForeignOptionsDayTrnLogs"] + '.js');
			
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
		
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
		
			if (typeof root.tw.ace33022.dao.db.vo.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');
			if (typeof root.tw.ace33022.vo.ForeignOptionsDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.ForeignOptionsDayTrnLogs"] + '.js');
		}
		
		ancestor = root.tw.ace33022.dao.db.vo.Ancestor;
		accessVO = root.tw.ace33022.vo.ForeignOptionsDayTrnLogs;
		
		root.tw.ace33022.dao.db.vo.ForeignOptionsDayTrnLogs = result;
	}    
})(this);