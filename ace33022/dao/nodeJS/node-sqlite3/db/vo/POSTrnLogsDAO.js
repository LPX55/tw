/**
 *
 * POSTrnLogsDAO
 *
 * @author ace
 *
 * @version 2014/04/09 初始版本。
 * @version 2015/04/14 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="https://github.com/mapbox/node-sqlite3">mapbox / node-sqlite3</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki">Home · mapbox/node-sqlite3 Wiki</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki/API">API · mapbox/node-sqlite3 Wiki</a>
 *
 * @todo 
 *
 * @description
 *
 */

(function() {

	var _;					// underscore.js
	
	var ancestorDAO;
	var accessVO;

  var result = function(conn) {
  
		var serialVersionUID = 1;	// 保留
		
		var tableName = 'pos_trn_logs';

		var uber = new ancestorDAO(conn);
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName(tableName);
		this.setAccessVO(accessVO);

    this.setRStoVO = function(rs, vo) {
  
      // 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
      vo.setTrnNo(rs.trn_no);
      vo.setTrnDate(rs.trn_date);
			vo.setStoreCode(rs.store_code);
			vo.setPOSNo(rs.pos_no);
			vo.setUserCode(rs.user_code);
			vo.setUserName(rs.user_name);
			vo.setInvoiceType(rs.invoice_type);
			vo.setInvoiceDesc(rs.invoice_desc);
			vo.setMemberCode(rs.member_code);
			vo.setMemberName(rs.member_name);
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
             + '(trn_no, trn_date, store_code, pos_no, user_code, user_name, invoice_type, invoice_desc, member_code, member_name, '
						 + 'invalid_flag, insert_date, insert_time, insert_user_code, update_date, update_time, update_user_code) '
             + 'values '
             + '($trn_no, $trn_date, $store_code, $pos_no, $user_code, $user_name, $invoice_type, $invoice_desc, $member_code, $member_name, '
						 + '$invalid_flag, $insert_date, $insert_time, $insert_user_code, $update_date, $update_time, $update_user_code) ';
             
      conn.run(strSQL, {

          $trn_no: vo.getTrnNo(),
          $trn_date: vo.getTrnDate(),
					$store_code: vo.getStoreCode(),
					$pos_no: vo.getPOSNo(),
					$user_code: vo.getUserCode(),
					$user_name: vo.getUserName(),
					$invoice_type: vo.getInvoiceType(),
					$invoice_desc: vo.getInvoiceDesc(),
					$member_code: vo.getMemberCode(),
					$member_name: vo.getMemberName(),
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
  
    this.doSelectByTrnDate = function(trnDate, callback) {

			var thisDAO = this;
			
      var result = new Array();
    
      var strSQL = new String();
      var vo;
    
			strSQL = 'select * from ' + tableName + ' '
						 + 'where 1=1 '
             + 'and invalid_flag=$InvalidFlag '
						 + 'and trn_date=$trn_date '
						 + 'order by trn_no ';
      conn.each(strSQL, { 
			
			    $InvalidFlag : '0',
					$trn_date: trnDate
				}, 
        
        function(err, row) {
  
          vo = new POSTrnLogs();
					thisDAO.setRStoVO(row, vo);
    
          result.push(vo);
        }, 
        function(err, rowCount) {
          
				  if (err) console.log(err);
          if (typeof callback === 'function') callback(err, rowCount, result);
        }
      );
    }
  }
  
	if (typeof define === 'function') {
	
		define(['underscore', 'AncestorDAO', 'POSTrnLogs'], function(underscore, dAncestorDAO, dPOSTrnLogs) {

			_ = underscore;
			
			ancestorDAO = dAncestorDAO;
			
			accessVO = dPOSTrnLogs;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['POSTrnLogs'] + '.js');
		
		module.exports = result;
	}
})();