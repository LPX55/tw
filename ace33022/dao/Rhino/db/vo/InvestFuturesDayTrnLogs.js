/**
 *
 * 投信每日期貨交易統計資料(InvestFuturesDayTrnLogsDAO)
 *
 * @author ace
 *
 * @version 2013/10/30 初始版本。
 * @version 2015/01/07 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="http://ejohn.org/">John Resig</a>
 * @see <a href="https://github.com/jeresig/env-js">jeresig/env-js</a>
 *
 * @todo
 *
 * @description
 *
 * @require underscore/underscore.js
 * @require tw/ace33022/dao/db/Rhino/AncestorDAO.js
 * @require tw/ace33022/dao/db/Rhino/InvestFuturesDayTrnLogs.js
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

		this.setTableName('invest_futures_day_trn_logs');
		this.setAccessVO(accessVO);
  }

  if (typeof define === 'function') {

		define(["tw.ace33022.dao.db.vo.ForeignFuturesDayTrnLogs", "tw.ace33022.vo.InvestFuturesDayTrnLogs", "underscore"], function(Ancestor, InvestFuturesDayTrnLogs) {

			ancestor = Ancestor;
			accessVO = InvestFuturesDayTrnLogs;

      return result;
    });
  }
  else if (typeof exports !== 'undefined') {

		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		require(RequireJSConfig.paths["underscore"] + '.js');
	
		ancestor = require(RequireJSConfig.paths["tw.ace33022.dao.db.vo.FuturesDayTrnLogs"] + '.js');
		accessVO = require(RequireJSConfig.paths["tw.ace33022.vo.InvestFuturesDayTrnLogs"] + '.js');

    module.exports = result;
  }
  else {

		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
		
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
	
			if (typeof root.tw.ace33022.dao.db.vo.ForeignFuturesDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.vo.ForeignFuturesDayTrnLogs"] + '.js');
			if (typeof root.tw.ace33022.vo.InvestFuturesDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.InvestFuturesDayTrnLogs"] + '.js');
		}
		
		ancestor = root.tw.ace33022.dao.db.vo.ForeignFuturesDayTrnLogs;
		accessVO = root.tw.ace33022.vo.InvestFuturesDayTrnLogs;

		root.tw.ace33022.dao.db.vo.InvestFuturesDayTrnLogs = result;
  }
})(this);