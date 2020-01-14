/**
 *
 * InvoicePrizeLogsDAO(發票開獎號碼資料)
 *
 * @author ace
 *
 * @version 2013/11/12 初始版本。
 * @version 2014/05/14 改寫成require.js之格式。
 * @version 2015/04/10 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
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
		
		var tableName = 'invoice_prize_logs';

		var uber = new ancestorDAO(conn);
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName(tableName);
		this.setAccessVO(accessVO);
	
		this.setRStoVO = function(rs, vo) {
  
			// 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
			vo.setInYearMonth(rs.in_year_month);
			vo.setInvoiceNo(rs.invoice_no);
			vo.setPrizeItem(rs.prize_item);
		}
  
		this.doInsert = function(vo, callback) {
  
			var strSQL = new String();
    
			strSQL = 'insert into ' + tableName + ' '
             + '(in_year_month, invoice_no, prize_item) '
             + 'values '
             + '($in_year_month, $invoice_no, $prize_item) ';
             
			conn.run(strSQL, {
			
					$in_year_month: vo.getInYearMonth(),
					$invoice_no: vo.getInvoiceNo(),
					$prize_item: vo.getPrizeItem()
				}, 
				function(lastID, changes) {
        
					if (lastID) console.log(changes);
					if (typeof callback === 'function') callback(lastID, changes);
				}
			);  
		}

		this.doSelectByInYearMonthAndPrizeItem = function(inYearMonth, prizeItem, callback) {
		
			var thisDAO = this;
    
			var result = new Array();
    
			var strSQL = new String();
			var vo;
    
			strSQL = 'select * from ' + tableName + ' '
						 + 'where 1=1 '
             + 'and in_year_month=$in_year_month '
						 + 'and prize_item=$prize_item ';
			conn.each(strSQL, { 
			
          $in_year_month : inYearMonth,
					$prize_item: prizeItem
				}, 
        
				function(err, row) {
  
					vo = new accessVO();
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
	
		define(['underscore', 'AncestorDAO', 'InvoicePrizeLogs'], function(underscore, dAncestorDAO, dInvoicePrizeLogs) {
		
			_ = underscore;
			
			ancestorDAO = dAncestorDAO;
			
			accessVO = dInvoicePrizeLogs;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['InvoicePrizeLogs'] + '.js');
		
		module.exports = result;
	}
})();