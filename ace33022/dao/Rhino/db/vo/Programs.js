/**
 *
 * Programs
 *
 * @author ace
 *
 * @version 2015/11/11 初始版本。
 * @version 2015/11/30 使用Java的ProgramsDAO作為實際存取資料的元件。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 */

(function(root) {

	var RequireJSConfig;
	
	var _;	// underscore.js
	
	var ancestor;
	var accessVO;
	
	var result = function(conn) {

		var serialVersionUID = new Number(1);	// 保留

		var uber = new ancestor();
  
    _.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。

		this.setAccessVO(accessVO);
		this.setDAO(new Packages.tw.ace33022.dao.db.vo.Programs(conn));
		
		this.doSelectByProgramCode = function(programCode) {return this.tranIteratorToVO(this.getDAO().doSelectByProgramCode(programCode).iterator());};
	}

	if (typeof define == 'function') {
	
		define(['tw.ace33022.vo.Programs', 'tw.ace33022.dao.vo.Ancestor', 'underscore'], function(Programs, Ancestor) {
		
			_ = root._;
			
			accessVO = Programs;
			ancestor = Ancestor;
			
			return result;
		});
	}
	else if (typeof exports  != 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['tw.ace33022.vo.Programs'] + '.js');
		ancestor = require(RequireJSConfig.paths['tw.ace33022.dao.vo.Ancestor'] + '.js');

		module.exports = result;
	}
	else {
		
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load != 'undefined') {

			if (typeof root._ == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');
			
			if (typeof root.tw.ace33022.vo.Programs == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['tw.ace33022.vo.Programs'] + '.js');
			if (typeof root.tw.ace33022.dao.vo.Ancestor == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['tw.ace33022.dao.vo.Ancestor'] + '.js');
		}	
		
		_ = root._;
		
		accessVO = root.tw.ace33022.vo.Programs;
		ancestor = root.tw.ace33022.dao.vo.Ancestor;
		
		root.tw.ace33022.dao.vo.Programs = result;
	}    
})(this);