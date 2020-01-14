/**
 *
 * SmallClasses
 *
 * @version 2017/06/16 初始版本。
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
		this.setDAO(new Packages.tw.ace33022.dao.db.vo.SmallClasses(conn));
		
		this.doInsert = function(vo) {

			var javaVO = new Packages.tw.ace33022.vo.SmallClasses();

			javaVO.setValueFromJSONString(vo.toJSONString());
			
			return this.getDAO().doInsert(javaVO);
		}
	}

	if (typeof define == 'function') {
	
		define(["tw.ace33022.vo.SmallClasses", "tw.ace33022.dao.db.vo.Ancestor", "underscore"], function(SmallClasses, Ancestor) {
		
			accessVO = SmallClasses;
			ancestor = Ancestor;
			
			return result;
		});
	}
	else if (typeof exports  != 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		require(RequireJSConfig.paths["underscore"] + '.js');
		
		accessVO = require(RequireJSConfig.paths["tw.ace33022.vo.SmallClasses"] + '.js');
		ancestor = require(RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');

		module.exports = result;
	}
	else {
		
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load != 'undefined') {

			if (typeof root._ == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.vo.SmallClasses == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.SmallClasses"] + '.js');
			if (typeof root.tw.ace33022.dao.db.vo.Ancestor == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');
		}	
		
		accessVO = root.tw.ace33022.vo.SmallClasses;
		ancestor = root.tw.ace33022.dao.db.vo.Ancestor;
		
		root.tw.ace33022.dao.db.vo.SmallClasses = result;
	}    
})(this);