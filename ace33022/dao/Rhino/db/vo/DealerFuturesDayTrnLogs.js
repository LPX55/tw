/**
 *
 * 自營商每日期貨交易統計資料(DealerFuturesDayTrnLogs)
 *
 * @author ace
 *
 * @version 2013/10/30 初始版本。
 * @version 2014/12/26 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/01/09 Add method doSelectByProductCodeRangeTrnDateOrderByTrnDate。
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
 * @require tw/ace33022/dao/db/Rhino/DealerFuturesDayTrnLogs.js
 * 
 */

(function(root) {

	var RequireJSConfig;
	
	var ancestor;
	var accessVO;
	
	var result = function(conn) {

		var serialVersionUID = new Number(1);	// 保留
		
		root._.extend(this, new ancestor(conn));
		this.prototype = this;		// 由於已複製父類別Ancestor，因此原型類別指向自己。
		
		this.setTableName('dealer_futures_day_trn_logs');
		this.setAccessVO(accessVO);
	}
	
	if (typeof define === 'function') {
	
		define(["tw.ace33022.dao.db.vo.ForeignFuturesDayTrnLogs", "tw.ace33022.vo.DealerFuturesDayTrnLogs", "underscore"], function(Ancestor, DealerFuturesDayTrnLogs) {
		
			ancestor = Ancestor;
			accessVO = DealerFuturesDayTrnLogs;
			
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		require(RequireJSConfig.paths['underscore'] + '.js');
	
		ancestor = require(RequireJSConfig.paths["tw.ace33022.dao.db.vo.FuturesDayTrnLogs"] + '.js');
		accessVO = require(RequireJSConfig.paths["tw.ace33022.vo.DealerFuturesDayTrnLogs"] + '.js');
			
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
		
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
		
			if (typeof root.tw.ace33022.dao.db.vo.ForeignFuturesDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.vo.ForeignFuturesDayTrnLogs"] + '.js');
			if (typeof root.tw.ace33022.vo.DealerFuturesDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.DealerFuturesDayTrnLogs"] + '.js');
		}
		
		ancestor = root.tw.ace33022.dao.db.vo.ForeignFuturesDayTrnLogs;
		accessVO = root.tw.ace33022.vo.DealerFuturesDayTrnLogs;
		
		root.tw.ace33022.dao.db.vo.DealerFuturesDayTrnLogs = result;
	} 
})(this);