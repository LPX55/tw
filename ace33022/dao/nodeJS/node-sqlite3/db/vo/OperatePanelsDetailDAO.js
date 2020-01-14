/**
 *
 * OperatePanelsDetailDAO
 *
 * @author ace
 *
 * @version 2015/11/01 初始版本。
 *
 * @see <a href="https://github.com/mapbox/node-sqlite3">mapbox / node-sqlite3</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki">Home · mapbox/node-sqlite3 Wiki</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki/API">API · mapbox/node-sqlite3 Wiki</a>
 *
 */

var OperatePanelsDetailDAO = function(conn) {}; 
 
(function() {

	var RequireJSConfig;
	
	var _;					// underscore.js
	
	var ancestorDAO;
	
	var accessVO;

  OperatePanelsDetailDAO = function(conn) {
  
		var serialVersionUID = 1;	// 保留
		
		var tableName = 'operate_panels_detail';

		var uber = new ancestorDAO(conn);
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName(tableName);
		this.setAccessVO(accessVO);

    this.setRStoVO = function(rs, vo) {
  
			uber.setRStoVO(rs, vo);
			
      vo.setOperatePanelCode(rs.operate_panel_code);
			vo.setSerNo(rs.ser_no);
			vo.setProgramCode(rs.program_code);
			vo.setTopPixel(rs.top_pixel);
			vo.setLeftPixel(rs.left_pixel);
    }
    
    this.doInsert = function (vo, callback) {
  
      var strSQL = new String();
    
      vo.initInsertDateTime();
      
			strSQL = 'insert into ' + tableName + ' '
             + '(operate_panel_code, ser_no, program_code, top_pixel, left_pixel, '
						 + 'invalid_flag, insert_date, insert_time, insert_user_code, update_date, update_time, update_user_code) '
             + 'values '
             + '($operate_panel_code, $ser_no, $program_code, $top_pixel, $left_pixel, '
						 + '$invalid_flag, $insert_date, $insert_time, $insert_user_code, $update_date, $update_time, $update_user_code) ';
             
      conn.run(strSQL, {

          $operate_panel_code: vo.getOperatePanelCode(),
          $ser_no: vo.getSerNo(),
					$program_code: vo.getProgramCode(),
					$top_pixel: vo.getTopPixel(),
					$left_pixel: vo.getLeftPixel(),
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
		
		this.doUpdate = function(vo, callback) {
		
      var sql = new String();
			
			vo.setNowUpdateDateTime();
    
			sql = 'update ' + tableName + ' '
					+ 'set '
					+ 'program_code=$program_code, '
					+ 'top_pixel=$top_pixel, '
					+ 'left_pixel=$left_pixel, '
					+ 'update_date=$update_date, '
					+ 'update_time=$update_time, '
					+ 'update_user_code=$update_user_code '
					+ 'where 1=1 '
					+ 'and (invalid_flag=$invalid_flag) '
					+ 'and (operate_panel_code=$operate_panel_code) '
					+ 'and (ser_no=$ser_no) '
					+ 'and (insert_user_code=$insert_user_code) ';
					
      conn.run(sql, {

					$program_code: vo.getProgramCode(),
					$top_pixel: vo.getTopPixel(),
					$left_pixel: vo.getLeftPixel(),
          $update_date: vo.getUpdateDate(),
          $update_time: vo.getUpdateTime(),
          $update_user_code: vo.getUpdateUserCode(),
					$invalid_flag: '0',
          $operate_panel_code: vo.getOperatePanelCode(),
          $ser_no: vo.getSerNo(),
					$insert_user_code: vo.getInsertUserCode()
        }, 
        function (lastID, changes) {
        
					if (lastID) console.log(changes);
					if (typeof callback === 'function') callback(lastID, changes);
        }
      );  
		}
		
    this.doSelectByOperatePanelCode = function(operatePanelCode, userCode, callback) {
    
			var thisDAO = this;
			
      var result = new Array();
    
      var sql = new String();
      var vo;
			
			sql = 'select * from ' + tableName + ' '
					+ 'where 1=1 '
					+ 'and (invalid_flag=$invalid_flag) '
					+ 'and (operate_panel_code=$operate_panel_code) '
					+ 'and (insert_user_code=$insert_user_code) ';
      conn.each(sql, { 
			
					$invalid_flag: '0',
			    $operate_panel_code: operatePanelCode,
					$insert_user_code: userCode
			  },
        function(err, row) {
  
					if (err) {
					
						console.log(err);
					}
					else {
					
						vo = new accessVO();
						thisDAO.setRStoVO(row, vo);
    
						result.push(vo);
					}	
        }, 
        function(err, rowCount) {
          
          if (typeof callback === 'function') callback(err, rowCount, result);
        }
      );
    }
  }
  
	if (typeof define === 'function') {
	
		define(['underscore', 'AncestorDAO', 'OperatePanelsDetail'], function(underscore, dAncestorDAO, dOperatePanelsDetail) {

			_ = underscore;
			
			ancestorDAO = dAncestorDAO;
			
			accessVO = dOperatePanelsDetail;
				
			return OperatePanelsDetailDAO;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['OperatePanelsDetail'] + '.js');
		
		module.exports = OperatePanelsDetailDAO;
	}
})();