/**
 *
 * InvoiceLogsDAO
 *
 * @author ace
 *
 * @version 2013/10/11 初始版本。
 * @version 2014/01/24 改寫成require.js之格式。
 * @version 2014/02/21 移除使用者代碼欄位。
 * @version 2015/04/13 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3">mapbox / node-sqlite3</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki">Home · mapbox/node-sqlite3 Wiki</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki/API">API · mapbox/node-sqlite3 Wiki</a>
 *
 */
 
(function(root) {

	var RequireJSConfig;
	
	var _;	// underscore.js
	
	var ancestor;
	
	var accessVO;

  var result = function(conn) {

		var serialVersionUID = 1;	// 保留
		
		var uber = new ancestor(conn);
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName('invoice_logs');
		this.setAccessVO(accessVO);
	
    this.setRStoVO = function(rs, vo) {
  
      uber.setRStoVO(rs, vo);
			
      vo.setRowId(rs.row_id);
			
      vo.setInvoiceNo(rs.invoice_no);
      vo.setInYearMonth(rs.in_year_month);
    }
		
    this.doInsert = function(vo, callback) {
  
      var sql = 'insert into ' + this.getTableName() + ' '
							+ '(invoice_no, in_year_month, invalid_flag, insert_date, insert_time, insert_user_code, update_date, update_time, update_user_code) '
							+ 'values '
							+ '($invoice_no, $in_year_month, $invalid_flag, $insert_date, $insert_time, $insert_user_code, $update_date, $update_time, $update_user_code) ';
              
      conn.run(sql, {
			
          $invoice_no: vo.getInvoiceNo(),
          $in_year_month: vo.getInYearMonth(),
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

    this.doSelect = function(userCode, callback) {

			var dao = this;
			
      var result = new Array();
    
			var sql = 'select * from '+ this.getTableName() + ' '
							+ 'where 1=1 '
							+ 'and invalid_flag=$invalid_flag '
							+ 'and insert_user_code=$insert_user_code '
							+ 'order by row_id ';
      conn.each(sql, {
      
					$invalid_flag : '0',
          $insert_user_code : userCode
        }, 
				function(err, row) {dao.setSelectResult(err, row, result);},
        function(err, rowCount) {
          
				  if (err) console.log(err);
          if (typeof callback === 'function') callback(err, rowCount, result);
        }
      );
    }
		
    this.doSelectLikeInvoiceNo = function(insertUserCode, inYearMonth, invoiceNo, callback) {

			var dao = this;
			
      var result = new Array();
    
			var sql = 'select * from '+ this.getTableName() + ' '
						  + 'where 1=1 '
              + 'and invalid_flag=$invalid_flag '
              + 'and insert_user_code=$insert_user_code '
						  + 'and in_year_month=$in_year_month '
						  + 'and invoice_no like $invoice_no '
              + 'order by row_id ';
      conn.each(sql, { 
        
          $invalid_flag: '0',
          $insert_user_code: insertUserCode,
					$in_year_month: inYearMonth,
					$invoice_no: invoiceNo
        }, 
				function(err, row) {dao.setSelectResult(err, row, result);},
        function(err, rowCount) {
          
				  if (err) console.log(err);
          if (typeof callback === 'function') callback(err, rowCount, result);
        }
      );
    }
		
    this.doSelectByGroupInYearMonth = function(userCode, callback) {

			var dao = this;
			
      var result = new Array();
      var vo;
    
			var sql = 'select in_year_month from '+ this.getTableName() + ' '
						  + 'where 1=1 '
              + 'and invalid_flag=$invalid_flag '
              + 'and insert_user_code=$insert_user_code '
						  + 'group by in_year_month '
						  + 'order by in_year_month ';
      conn.each(sql, {
        
          $invalid_flag: '0',
          $insert_user_code: userCode
        }, 
        function(err, row) {
  
					if (err) {
					
						console.log(err);
					}
					else {

						vo = new (this.getAccessVO())();
						vo.setInYearMonth(row.in_year_month);
    
						result.push(vo);
					}	
        }, 
        function(err, rowCount) {
          
				  if (err) console.log(err);
          if (typeof callback === 'function') callback(err, rowCount, result);
        }
      );
    }
  }

	if (typeof define === 'function') {
	
		define(['tw.ace33022.dao.vo.Ancestor', 'tw.ace33022.vo.InvoiceLogs', 'underscore'], function(Ancestor, InvoiceLogs) {
		
			_ = root._;
			
			ancestor = Ancestor;
			
			accessVO = InvoiceLogs;
			
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/RequireJSConfig.js');
		
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestor = require(RequireJSConfig.paths['tw.ace33022.dao.vo.Ancestor'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['tw.ace33022.vo.InvoiceLogs'] + '.js');
		
		module.exports = result;
	}
})(this);