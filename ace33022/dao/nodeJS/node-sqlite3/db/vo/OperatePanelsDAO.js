/**
 *
 * OperatePanelsDAO
 *
 * @author ace
 *
 * @version 2015/11/01 初始版本。
 *
 * @description
 *
 * @see <a href="https://github.com/mapbox/node-sqlite3">mapbox / node-sqlite3</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki">Home · mapbox/node-sqlite3 Wiki</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki/API">API · mapbox/node-sqlite3 Wiki</a>
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
		
		var tableName = 'operate_panels';

		var uber = new ancestorDAO(conn);
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName(tableName);
		this.setAccessVO(accessVO);

    this.setRStoVO = function(rs, vo) {
  
      // 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
      vo.setOperatePanelCode(rs.operate_panel_code);
      vo.setOperatePanelName(rs.operate_panel_name);
      vo.setInvalidFlag(rs.invalid_flag);
      vo.setInsertDate(rs.insert_date);
      vo.setInsertTime(rs.insert_time);
      vo.setInsertUserCode(rs.insert_user_code);
      vo.setUpdateDate(rs.update_date);
      vo.setUpdateTime(rs.update_time);
      vo.setUpdateUserCode(rs.update_user_code);
    }
    
    this.doInsert = function (vo, callback) {
  
      var strSQL = new String();
    
      vo.initInsertDateTime();
      
			strSQL = 'insert into ' + tableName + ' '
             + '(operate_panel_code, operate_panel_name, invalid_flag, insert_date, insert_time, insert_user_code, update_date, update_time, update_user_code) '
             + 'values '
						 + '($operate_panel_code, $operate_panel_name, $invalid_flag, $insert_date, $insert_time, $insert_user_code, $update_date, $update_time, $update_user_code) ';
             
      conn.run(strSQL, {

          $operate_panel_code: vo.getOperatePanelCode(),
          $operate_panel_name: vo.getOperatePanelName(),
          $invalid_flag: vo.getInvalidFlag(),
          $insert_date: vo.getInsertDate(),
          $insert_time: vo.getInsertTime(),
          $insert_user_code: vo.getInsertUserCode(),
          $update_date: vo.getUpdateDate(),
          $update_time: vo.getUpdateTime(),
          $update_user_code: vo.getUpdateUserCode() 
        }, 
        function (lastID, changes) {
        
					if (lastID) console.log(changes);
					if (typeof callback === 'function') callback(lastID, changes);
        }
      );  
    }
  }
  
	if (typeof define === 'function') {
	
		define(['underscore', 'AncestorDAO', 'OperatePanels'], function(underscore, dAncestorDAO, dOperatePanels) {

			_ = underscore;
			
			ancestorDAO = dAncestorDAO;
			
			accessVO = dOperatePanels;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['OperatePanels'] + '.js');
		
		module.exports = result;
	}
})();