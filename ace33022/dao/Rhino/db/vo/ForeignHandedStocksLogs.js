/**
 *
 * 外資持股資料
 *
 * @author ace
 *
 * @version 2013/10/26 初始版本。
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

(function(root) {

	var RequireJSConfig;
	
	var ancestor;
	var accessVO;
	
	var result = function(conn) {
	
		var serialVersionUID = new Number(1);     // 保留
  
		root._.extend(this, new ancestor(conn));
		this.prototype = this;		// 由於已複製父類別Ancestor，因此原型類別指向自己。
		
		this.setTableName('foreign_handed_stocks_logs');
		this.setAccessVO(accessVO);
  
		var setRStoVO = function(rs, vo) {

			// 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
			// rs物件只可取值乙次，第二次再取值則該資料遺失，造成例外錯誤？
			vo.setTrnDate(new String(rs.getString('trn_date')));
			vo.setStockCode(new String(rs.getString('stock_code')));
			vo.setPublishedQty(new Number(rs.getDouble('published_qty'))); 
			vo.setHandedQty(new Number(rs.getDouble('handed_qty'))); 
		}
  
		this.doInsert = function(vo) {
  
			var result = false;
    
			var pstmt = null;
			
			var sql = 'insert into ' + this.getTableName() + ' '
							+ '(trn_date, stock_code, published_qty, handed_qty) '
							+ 'values '
							+ '(?, ?, ?, ?) ';
			
			try {
    
				vo.initInsertDateTime();
    
				pstmt = conn.prepareStatement(sql);
    
				pstmt.setString(1, vo.getTrnDate());
				pstmt.setString(2, vo.getStockCode());
				pstmt.setDouble(3, vo.getPublishedQty());
				pstmt.setDouble(4, vo.getHandedQty());
				
				if (pstmt.executeUpdate() > 0) result = true;
			}
			finally {
    
				if (pstmt !== null) pstmt.close();
			}
    
			return result;
		}
  
		this.doSelectByTrnDate = function(trnDate) {
  
			var result = new Array();
    
			var pstmt = null;
			
			var sql = 'select * from ' + this.getTableName() + ' '
						  + 'where (1=1) '
						  + 'and trn_date=? ';
    
			try {
    
				pstmt = conn.prepareStatement(sql);
				
				pstmt.setString(1, trnDate);
				
				this.setSelectResult(pstmt.executeQuery(), result);
			}
			finally {
    
				if (pstmt !== null) pstmt.close();
			}
    
			return result;
		}
  
		this.doDeleteByTrnDate = function(trnDate) {
  
			var result = false;
    
			var pstmt = null;
			
			var sql = 'delete from ' + this.getTableName() + ' '
							+ 'where (1=1) '
							+ 'and trn_date=? ';
    
			try {
    
				pstmt = conn.prepareStatement(sql);
				
				pstmt.setString(1, trnDate);
				
				if (pstmt.executeUpdate() > 0) result = true;
			}
			finally {
    
				if (pstmt !== null) pstmt.close();
			}
    
			return result;
		}
	}

	if (typeof define === 'function') {
	
		define(["tw.ace33022.dao.db.vo.Ancestor", "tw.ace33022.vo.ForeignHandedStocksLogs", "underscore"], function(Ancestor, ForeignHandedStocksLogs) {
		
			ancestor = Ancestor;
			accessVO = ForeignHandedStocksLogs;
			
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		require(RequireJSConfig.paths["underscore"] + '.js');
	
		ancestor = require(RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');
		accessVO = require(RequireJSConfig.paths["tw.ace33022.vo.ForeignHandedStocksLogs"] + '.js');
			
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
	
		if (typeof load !== 'undefined') {
		
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
		
			if (typeof root.tw.ace33022.dao.db.vo.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');
			if (typeof root.tw.ace33022.vo.ForeignHandedStocksLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.ForeignHandedStocksLogs"] + '.js');
		}
		
		ancestor = root.tw.ace33022.dao.db.vo.Ancestor;
		accessVO = root.tw.ace33022.vo.ForeignHandedStocksLogs;
		
		root.tw.ace33022.dao.db.vo.ForeignHandedStocksLogs = result;
	}    
})(this);