/**
 *
 * ProgramsDAO
 *
 * @author ace
 *
 * @version 2015/11/11 初始版本。
 *
 * @description
 *
 * @see <a href="https://github.com/felixge/node-mysql/">felixge/node-mysql</a>
 *
 * @todo 
 *
 * @comment
 *
 */

(function() {

	var RequireJSConfig;
	var _;					// underscore.js
	
	var ancestorDAO;
	var accessVO;

  var result = function(conn) {
  
		var serialVersionUID = 1;	// 保留
		
		var tableName = 'programs';

		var uber = new ancestorDAO(conn);
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName(tableName);
		this.setAccessVO(accessVO);

    this.setRStoVO = function(rs, vo) {
  
      // 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
			vo.setRowId(rs.row_id);
			vo.setProgramCode(rs.program_code);
			vo.setProgramName(rs.program_name);
			vo.setProgramMemo(rs.program_memo);
			vo.setBPLName(rs.bpl_name);
			vo.setFormClassName(rs.form_class_name);
			vo.setParams(rs.params);
			vo.setURLPath(rs.url_path);
			vo.setScriptContent(rs.script_content);
      vo.setInvalidFlag(rs.invalid_flag);
      vo.setInsertDate(rs.insert_date);
      vo.setInsertTime(rs.insert_time);
      vo.setInsertUserCode(rs.insert_user_code);
      vo.setUpdateDate(rs.update_date);
      vo.setUpdateTime(rs.update_time);
      vo.setUpdateUserCode(rs.update_user_code);
    }
  }
  
	if (typeof define === 'function') {
	
		define(['underscore', 'AncestorDAO', 'Programs'], function(underscore, dAncestorDAO, dPrograms) {

			_ = underscore;
			
			ancestorDAO = dAncestorDAO;
			
			accessVO = dPrograms;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['Programs'] + '.js');
		
		module.exports = result;
	}
})();