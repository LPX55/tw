/**
 *
 * 投信每日個股交易資料
 *
 * @author ace
 *
 * @version 2013/10/25 初始版本。
 * @version 2015/03/19 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="http://ejohn.org/">John Resig</a>
 * @see <a href="https://github.com/jeresig/env-js">jeresig/env-js</a>
 *
 * @todo 
 *
 * @description
 *
 * @require underscore/underscore.js
 * @require tw/ace33022/factory/dao/db/AncestorDAO.js
 * 
 */

(function() {

	var root = this;

	var _;					// underscore.js
	
	var ancestorDAO;
	var accessVO;
	
	var result = function(conn) {

		var serialVersionUID = new Number(1);     // 保留

		var tableName = 'invest_stocks_day_trn_logs';
		
		var uber = new ancestorDAO(conn);
		
		_.extend(this, uber);
		// this.prototype = uber;	// 保留原型鍊。
		this.prototype = this;		// 由於已複製父類別Ancestor，因此原型類別指向自己。
		
		this.setTableName(tableName);
		this.setAccessVO(accessVO);
  
		var setRStoVO = function(rs, vo) {

			// 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
			// rs物件只可取值乙次，第二次再取值則該資料遺失，造成例外錯誤？
			vo.setTrnDate(new String(rs.getString('trn_date')));
			vo.setStockCode(new String(rs.getString('stock_code')));
			vo.setBuyQty(new Number(rs.getDouble('buy_qty'))); 
			vo.setSellQty(new Number(rs.getDouble('sell_qty'))); 
		}
  
		this.doInsert = function(vo) {
  
			var result = false;
    
			var pstmt = null;
			var strSQL = new String();
    
			try {
    
				vo.initInsertDateTime();
    
				// 此部份程式碼為之前測試時使用無誤，此處暫時保留，確定使用方法後再調整。
				strSQL = 'insert into ' + tableName + ' '
							 + '(trn_date, stock_code, buy_qty, sell_qty) '
							 + 'values '
							 + '(?, ?, ?, ?) ';
				pstmt = conn.prepareStatement(strSQL);
    
				pstmt.setString(1, vo.getTrnDate());
				pstmt.setString(2, vo.getStockCode());
				pstmt.setDouble(3, vo.getBuyQty());
				pstmt.setDouble(4, vo.getSellQty());
				
				if (pstmt.executeUpdate() > 0) result = true;
			}
			finally {
    
				if (pstmt != null) pstmt.close();
			}
    
			return result;
		}
  
		this.doSelectByTrnDate = function(trnDate) {
  
			var result = new Array();
    
			var pstmt = null;
			var strSQL = new String();
    
			var resultSet = null;
			var vo = null;
    
			try {
    
				strSQL = 'select * from ' + tableName + ' '
							 + 'where 1=1 '
							 + 'and trn_date=? ';
				pstmt = conn.prepareStatement(strSQL);
				pstmt.setString(1, trnDate);     
				resultSet = pstmt.executeQuery();
				while (resultSet.next() == true) {
 
					vo = new accessVO();
					setRStoVO(resultSet, vo);
      
					result.push(vo);
				}
			}
			finally {
    
				if (pstmt != null) pstmt.close();
			}
    
			return result;
		}
  
		this.doDeleteByTrnDate = function(trnDate) {
  
			var result = false;
    
			var pstmt = null;
			var strSQL = new String();
    
			try {
			
				strSQL = 'delete from ' + tableName + ' '
							 + 'where 1=1 '
							 + 'and trn_date=? ';
				pstmt = conn.prepareStatement(strSQL);
				pstmt.setString(1, trnDate);
				if (pstmt.executeUpdate() > 0) result = true;
			}
			finally {
    
				if (pstmt != null) pstmt.close();
			}
    
			return result;
		}
	}

	if (typeof define === 'function') {
	
		define(['underscore', 'AncestorDAO', 'InvestStocksDayTrnLogs'], function(underscore, dAncestorDAO, dInvestStocksDayTrnLogs) {
		
			_ = underscore;
			
			ancestorDAO = dAncestorDAO;
			accessVO = dInvestStocksDayTrnLogs;
			
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
	
		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		accessVO = require(RequireJSConfig.paths['InvestStocksDayTrnLogs'] + '.js');
			
		module.exports = result;
	}
	else {
	
		if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');
		
		if (typeof root.AncestorDAO === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['AncestorDAO'] + '.js');
		if (typeof root.InvestStocksDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['InvestStocksDayTrnLogs'] + '.js');
		
		_ = root._;
		
		ancestorDAO = root.AncestorDAO;
		accessVO = root.InvestStocksDayTrnLogs;
		
		root['InvestStocksDayTrnLogsDAO'] = result;
	}    
})();