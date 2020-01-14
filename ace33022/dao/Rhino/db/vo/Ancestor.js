/**
 *
 * Ancestor
 *
 * @author ace
 *
 * @version 2013/09/29 初始版本。
 * @version 2014/11/26 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a>
 *
 * @description
 *
 * @todo 
 *
 * @require
 *
 */
 
(function(root) {

	var RequireJSConfig;
	
	var ancestor;

	var result = function(conn) {

		var serialVersionUID = new Number(1);	// 保留

    root._.extend(this, new ancestor(conn));
		
		var tableName;
		var accessVO;
		
		this.setTableName = function(value) {tableName = value; return value;}
		this.setAccessVO = function(value) {accessVO = value; return value;}
		
		this.getTableName = function() {return tableName;}
		this.getAccessVO = function() {return accessVO;};
		
		this.setRStoVO = function(rs, vo) {
		
      vo.setInvalidFlag(rs.getString('invalid_flag'));
      vo.setInsertDate(rs.getString('insert_date'));
      vo.setInsertTime(rs.getString('insert_time'));
      vo.setInsertUserAccount(rs.getString('insert_user_account'));
      vo.setUpdateDate(rs.getString('update_date'));
      vo.setUpdateTime(rs.getString('update_time'));
      vo.setUpdateUserAccount(rs.getString('update_user_account'));
		};
		
		this.setSelectResult = function(rs, result) {
		
			var vo;
		
			while (rs.next() == true) {
 
				vo = new (this.getAccessVO())();
				this.setRStoVO(rs, vo);
      
				result.push(vo);
			}
		};
		
		this.tranIteratorToVO = function(ite) {
	
			var result = new Array();
		
			var javaVO;
			var vo;
			
			while (ite.hasNext()) {
			
				javaVO = ite.next();
				
				vo = new accessVO();
				vo.setValueFromJSONString(javaVO.toJSONString());
				
				result.push(vo);
			}
			
			return result;
		};
		
		this.doSelect = function() {return this.tranIteratorToVO(this.getDAO().doSelect().iterator());}
	}
	
	if (typeof define === 'function') {
	
		define(["tw.ace33022.dao.db.Ancestor"], function(Ancestor) {
		
			ancestor = Ancestor;
		
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		module.exports = result;
	}
	else {

		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {

			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			if (typeof root.tw.ace33022.dao.db.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.Ancestor"] + '.js');
		}
		
		ancestor = root.tw.ace33022.dao.db.Ancestor;
		
		root.tw.ace33022.dao.db.vo.Ancestor = result;
	}
})(this);