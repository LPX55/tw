/**
 *
 * LoggedLogsDAO
 *
 * @author ace
 *
 * @version 2014/02/11 初始版本。
 * @version 2015/04/10 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 * @see <a href="http://www.nodebeginner.org/index-zh-tw.html">Node入門</a>
 *
 * @see <a href="https://github.com/mapbox/node-sqlite3">mapbox / node-sqlite3</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki">Home · mapbox/node-sqlite3 Wiki</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki/API">API · mapbox/node-sqlite3 Wiki</a>
 *
 * @description
 *
 * @require AncestorDAO.js
 * @require LoggedLogs.js
 *
 * @todo 
 *
 * @comment
 *
 */

(function() {

	var _;					// underscore.js
	
	var ancestorDAO;
	var accessVO;

  var result = function(conn) {
	
		var serialVersionUID = 1;	// 保留
		
		var tableName = 'logged_logs';

		var uber = new ancestorDAO(conn);
		
		_.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName(tableName);
		this.setAccessVO(accessVO);
		
    this.setRStoVO = function(rs, vo) {
  
      // 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
      vo.setRowId(rs.row_id);
      vo.setUserCode(rs.user_code);
      vo.setUserAccount(rs.user_account);
      vo.setLoggedDate(rs.logged_date);
      vo.setLoggedTime(rs.logged_time);
      vo.setLoggedStatus(rs.logged_status);
    }
  
    this.doInsert = function(vo, callback) {

      var strSQL = new String();
    
      vo.initInsertDateTime();
    
      strSQL = 'insert into ' + tableName + ' '
             + '(user_account, logged_status, invalid_flag, insert_date, insert_time, insert_user_code, update_date, update_time, update_user_code) '
             + 'values '
             + '($user_account, $logged_status, $invalid_flag, $insert_date, $insert_time, $insert_user_code, $update_date, $update_time, $update_user_code) ';
      conn.run(strSQL, {
      
          $user_account: vo.getUserAccount(),
          $logged_status: vo.getLoggedStatus(),
          $invalid_flag: vo.getInvalidFlag(),
          $insert_date: vo.getInsertDate(),
          $insert_time: vo.getInsertTime(),
          $insert_user_code: vo.getInsertUserCode(),
          $update_date: vo.getUpdateDate(),
          $update_time: vo.getUpdateTime(),
          $update_user_code: vo.getUpdateUserCode() 
        }, 
        function(lastID, changes) {
        
					if (lastID) console.log(changes);
					if (typeof callback === 'function') callback(lastID, changes);
        }
      );
    }
  }

	if (typeof define === 'function') {
	
		define(['underscore', 'AncestorDAO', 'LoggedLogs'], function(underscore, dAncestorDAO, dLoggedLogs) {
		
			_ = underscore;
			
			ancestorDAO = dAncestorDAO;
			
			accessVO = dLoggedLogs;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['LoggedLogs'] + '.js');
		
		module.exports = result;
	}
})();