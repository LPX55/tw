/**
 *
 * 臺灣指數每日交易資料
 *
 * @author ace
 *
 * @version 2013/09/09 初始版本。
 * @version 2015/03/12 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @return {Object} TWSEDayTrnLogsDAO
 *
 * @see <a href="http://ejohn.org/">John Resig</a>
 * @see <a href="https://github.com/jeresig/env-js">jeresig/env-js</a>
 *
 * @require underscore.js
 * @require AncestorDAO.js
 * @require TWSEDayTrnLogs.js
 *
 */
 
(function(root) {

	var RequireJSConfig;
	
	var ancestor;
	var accessVO;
	
	var result = function(conn) {

		var serialVersionUID = new Number(1);	// 保留
		
		root._.extend(this, new ancestor());
		// this.prototype = uber;	// 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName('twse_day_trn_logs');
		this.setAccessVO(accessVO);
  
		this.setRStoVO = function(rs, vo) {

			// 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
			// rs物件只可取值乙次，第二次再取值則該資料遺失，造成例外錯誤？
			vo.setTrnDate(new String(rs.getString('trn_date')));
			vo.setOpenPoint(new Number(rs.getDouble('open_point'))); 
			vo.setHighPoint(new Number(rs.getDouble('high_point'))); 
			vo.setLowPoint(new Number(rs.getDouble('low_point')));  
			vo.setClosePoint(new Number(rs.getDouble('close_point')));
			vo.setTrnTotal(new Number(rs.getDouble('trn_total')));  
		}
  
		this.doInsert = function(vo) {
  
			var result = false;
    
			var pstmt = null;
			
			var sql = 'insert into ' + this.getTableName() + ' '
						  + '(trn_date, open_point, high_point, low_point, close_point, trn_total) '
							+ 'values '
							+ '(?, ?, ?, ?, ?, ?) ';
							 
			try {
    
				vo.initInsertDateTime();
    
				pstmt = conn.prepareStatement(sql);
    
				pstmt.setString(1, vo.getTrnDate());
				pstmt.setDouble(2, vo.getOpenPoint());
				pstmt.setDouble(3, vo.getHighPoint());
				pstmt.setDouble(4, vo.getLowPoint());
				pstmt.setDouble(5, vo.getClosePoint());
				pstmt.setDouble(6, vo.getTrnTotal());
				
				if (pstmt.executeUpdate() > 0) result = true;
			}
			finally {
    
				if (pstmt !== null) pstmt.close();
			}
    
			return result;
		};
		
		this.doSelectBetweenTrnDateOrderByTrnDate = function(beginDate, endDate) {
  
			var result = new Array();
    
			var pstmt = null;
			
			var sql = 'select * from ' + this.getTableName() + ' '
							+ 'where (1=1) '
							+ 'and trn_date between ? and ? '
							+ 'order by trn_date ';
    
			try {
    
				pstmt = conn.prepareStatement(sql);
				
				pstmt.setString(1, beginDate);
				pstmt.setString(2, endDate);
				
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
		};
	};
	
	if (typeof define === 'function') {
	
		define(["tw.ace33022.vo.TWSEDayTrnLogs", "tw.ace33022.dao.db.vo.Ancestor", "underscore"], function(TWSEDayTrnLogs, Ancestor) {
		
			ancestor = Ancestor;
			accessVO = TWSEDayTrnLogs;
			
			return result;
		});
	}
	else if (typeof exports  !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		require(RequireJSConfig.paths["underscore"] + '.js');
	
		ancestor = require(RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');
		accessVO = require(RequireJSConfig.paths["tw.ace33022.vo.TWSEDayTrnLogs"] + '.js');
			
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
	
		if (typeof load !== 'undefined') {
		
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
		
			if (typeof root.tw.ace33022.dao.db.vo.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');
			if (typeof root.tw.ace33022.vo.TWSEDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.TWSEDayTrnLogs"] + '.js');
		}
		
		ancestor = root.tw.ace33022.dao.db.vo.Ancestor;
		accessVO = root.tw.ace33022.vo.TWSEDayTrnLogs;
		
		root.tw.ace33022.dao.db.vo.TWSEDayTrnLogs = result;
	}    
})(this);