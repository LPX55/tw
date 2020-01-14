/**
 *
 * Lottery649Logs
 *
 * @version 2017/04/24 初始版本。
 *
 * @author ace
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 */

(function(root) {

	var RequireJSConfig;
	
	var ancestor;
	var accessVO;
	
	var result = function(conn) {

		var serialVersionUID = new Number(1);	// 保留

		var uber = new ancestor();
  
    root._.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。

		this.setAccessVO(accessVO);
		this.setDAO(new Packages.tw.ace33022.dao.db.vo.Lottery649Logs(conn));
		
		this.doInsert = function(vo) {

			var javaVO = new Packages.tw.ace33022.vo.Lottery649Logs();

			javaVO.setValueFromJSONString(vo.toJSONString());
			
			return this.getDAO().doInsert(javaVO);
		}
		
		this.doDelete = function(period) {

			return this.getDAO().doDelete(new Packages.java.lang.String(period));
		}
	}

	if (typeof define == 'function') {
	
		define(["tw.ace33022.vo.Lottery649Logs", "tw.ace33022.dao.db.vo.Ancestor", "underscore"], function(Lottery649Logs, Ancestor) {
		
			accessVO = Lottery649Logs;
			ancestor = Ancestor;
			
			return result;
		});
	}
	else if (typeof exports  != 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		_ = require(RequireJSConfig.paths["underscore"] + '.js');
		
		accessVO = require(RequireJSConfig.paths["tw.ace33022.vo.Lottery649Logs"] + '.js');
		ancestor = require(RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');

		module.exports = result;
	}
	else {
		
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load != 'undefined') {

			if (typeof root._ == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.vo.Lottery649Logs == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.Lottery649Logs"] + '.js');
			if (typeof root.tw.ace33022.dao.db.vo.Ancestor == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');
		}	
		
		accessVO = root.tw.ace33022.vo.Lottery649Logs;
		ancestor = root.tw.ace33022.dao.db.vo.Ancestor;
		
		root.tw.ace33022.dao.db.vo.Lottery649Logs = result;
	}    
})(this);