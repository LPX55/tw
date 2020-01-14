/**
 *
 * FuturesDayTrnLogs(期貨每日交易資料)
 *
 * @author ace
 *
 * @version 2013/09/09 初始版本。
 * @version 2014/12/23 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="http://ejohn.org/">John Resig</a>
 * @see <a href="https://github.com/jeresig/env-js">jeresig/env-js</a>
 *
 * @description
 *
 * @todo 
 *
 */

(function(root) {

	var RequireJSConfig;
	
	var ancestor;
	var accessVO;
	
	var result = function(conn) {

		var serialVersionUID = new Number(1);     // 保留
		
		root._.extend(this, new ancestor(conn));
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName('futures_day_trn_logs');
		this.setAccessVO(accessVO);
		
		this.setRStoVO = function(rs, vo) {

			// 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
			// rs物件只可取值乙次，第二次再取值則該資料遺失，造成例外錯誤？
			vo.setTrnDate(new String(rs.getString('trn_date')));
			vo.setProductCode(new String(rs.getString('product_code')));
			vo.setConMonth(new String(rs.getString('con_month')));
			vo.setOpenPoint(new Number(rs.getDouble('open_point'))); 
			vo.setHighPoint(new Number(rs.getDouble('high_point'))); 
			vo.setLowPoint(new Number(rs.getDouble('low_point')));  
			vo.setClosePoint(new Number(rs.getDouble('close_point')));
			vo.setLastCalPoint(new Number(rs.getDouble('last_cal_point')));
			vo.setTrnQty(new Number(rs.getDouble('trn_qty')));  
			vo.setStayQty(new Number(rs.getDouble('stay_qty')));  
		}
  
		this.doInsert = function(vo) {
  
			var result = false;
    
			var pstmt = null;
			
			var sql = 'insert into ' + this.getTableName() + ' '
						  + '(trn_date, product_code, con_month, open_point, high_point, low_point, close_point, last_cal_point, trn_qty, stay_qty) '
							+ 'values '
							+ '(?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ';

			try {   
			
				vo.initInsertDateTime();
			
				pstmt = conn.prepareStatement(sql);
    
				pstmt.setString(1, vo.getTrnDate());
				pstmt.setString(2, vo.getProductCode());
				pstmt.setString(3, vo.getConMonth());
				pstmt.setDouble(4, vo.getOpenPoint());
				pstmt.setDouble(5, vo.getHighPoint());
				pstmt.setDouble(6, vo.getLowPoint());
				pstmt.setDouble(7, vo.getClosePoint());
				pstmt.setDouble(8, vo.getLastCalPoint());
				pstmt.setDouble(9, vo.getTrnQty());
				pstmt.setDouble(10, vo.getStayQty());
				
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
		
		this.doSelectByConMonthOrderByTrnDate = function(productCode, conMonth) {
  
			var result = new Array();
    
			var pstmt = null;
			
			var sql = 'select * from ' + this.getTableName() + ' '
							+ 'where (1=1) '
							+ 'and product_code=? '
							+ 'and con_month=? '
							+ 'order by trn_date ';
    
			try {
    
				pstmt = conn.prepareStatement(sql);
				
				pstmt.setString(1, productCode);
				pstmt.setString(2, conMonth);
				
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
	
		define(["tw.ace33022.dao.db.vo.Ancestor", "tw.ace33022.vo.FuturesDayTrnLogs", "underscore"], function(Ancestor, FuturesDayTrnLogs) {
		
			ancestor = Ancestor;
			accessVO = FuturesDayTrnLogs;
			
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		require(RequireJSConfig.paths["underscore"] + '.js');
	
		ancestor = require(RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');
		accessVO = require(RequireJSConfig.paths["tw.ace33022.vo.FuturesDayTrnLogs"] + '.js');
			
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
	
		if (typeof load !== 'undefined') {
		
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.dao.db.vo.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');
			if (typeof root.tw.ace33022.vo.FuturesDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.FuturesDayTrnLogs"] + '.js');
		}
		
		ancestor = root.tw.ace33022.dao.db.vo.Ancestor;
		accessVO = root.tw.ace33022.vo.FuturesDayTrnLogs;
		
		root.tw.ace33022.dao.db.vo.FuturesDayTrnLogs = result;
	}    
})(this);