/**
 *
 * ForeignFuturesOptionsDayTrnLogs(外資每日期貨/選擇權交易統計資料)
 *
 * @author ace
 *
 * @version 2013/11/07 初始版本。
 * @version 2015/03/10 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
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
	
	var _;	// underscore.js
	
	var ancestor;
	var accessVO;
	
	var result = function(conn) {

		var serialVersionUID = new Number(1);	// 保留
  
		var uber = new ancestor(conn);
		
		_.extend(this, uber);
		// this.prototype = uber;	// 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName('foreign_futures_options_day_trn_logs');
		this.setAccessVO(accessVO);
  
		this.setRStoVO = function(rs, vo) {

			// 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
			// rs物件只可取值乙次，第二次再取值則該資料遺失，造成例外錯誤？
			vo.setTrnDate(new String(rs.getString('trn_date')));
			vo.setFuturesBuyQty(new Number(rs.getDouble('futures_buy_qty')));
			vo.setOptionsBuyQty(new Number(rs.getDouble('options_buy_qty')));
			vo.setFuturesSellQty(new Number(rs.getDouble('futures_sell_qty')));
			vo.setOptionsSellQty(new Number(rs.getDouble('options_sell_qty')));
			vo.setFuturesStayBuyQty(new Number(rs.getDouble('futures_stay_buy_qty')));
			vo.setOptionsStayBuyQty(new Number(rs.getDouble('options_stay_buy_qty')));
			vo.setFuturesStaySellQty(new Number(rs.getDouble('futures_stay_sell_qty')));
			vo.setOptionsStaySellQty(new Number(rs.getDouble('options_stay_sell_qty')));
		}
  
		this.doInsert = function(vo) {
  
			var result = false;
    
			var pstmt = null;
			
			var sql = 'insert into ' + this.getTableName() + ' '
              + '(trn_date, futures_buy_qty, options_buy_qty, futures_sell_qty, options_sell_qty, futures_stay_buy_qty, options_stay_buy_qty, futures_stay_sell_qty, options_stay_sell_qty) '
              + 'values '
              + '(?, ?, ?, ?, ?, ?, ?, ?, ?) ';

			try {   
    
				vo.initInsertDateTime();
			
				pstmt = conn.prepareStatement(sql);
				
				pstmt.setString(1, vo.getTrnDate());
				pstmt.setDouble(2, vo.getFuturesBuyQty());
				pstmt.setDouble(3, vo.getOptionsBuyQty());
				pstmt.setDouble(4, vo.getFuturesSellQty());
				pstmt.setDouble(5, vo.getOptionsSellQty());
				pstmt.setDouble(6, vo.getFuturesStayBuyQty());
				pstmt.setDouble(7, vo.getOptionsStayBuyQty());
				pstmt.setDouble(8, vo.getFuturesStaySellQty());
				pstmt.setDouble(9, vo.getOptionsStaySellQty());
				
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
			var sql = 'select * from ' + this.getTableName() + ' '
							+ 'where (1=1) '
							+ 'and trn_date=? ';
    
			try {
    
				pstmt = conn.prepareStatement(sql);
				
				pstmt.setString(1, trnDate);       
				
				this.setSelectResult(pstmt.executeQuery(), result);
			}
			finally {
    
				if (pstmt != null) pstmt.close();
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
    
				if (pstmt != null) pstmt.close();
			}
    
			return result;
		}
	}

	if (typeof define === 'function') {
	
		define(['tw.ace33022.vo.ForeignFuturesOptionsDayTrnLogs', 'tw.ace33022.dao.vo.Ancestor', 'underscore'], function(ForeignFuturesOptionsDayTrnLogs, Ancestor) {
		
			_ = root._;

			accessVO = ForeignFuturesOptionsDayTrnLogs;
			ancestor = Ancestor;
			
			return result;
		});
	}
	else if (typeof exports  !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
	
		accessVO = require(RequireJSConfig.paths['tw.ace33022.vo.ForeignFuturesOptionsDayTrnLogs'] + '.js');
		ancestor = require(RequireJSConfig.paths['tw.ace33022.dao.vo.Ancestor'] + '.js');
			
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
	
		if (typeof load !== 'undefined') {
		
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');
			
			if (typeof root.tw.ace33022.vo.ForeignFuturesOptionsDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['tw.ace33022.vo.ForeignFuturesOptionsDayTrnLogs'] + '.js');
			if (typeof root.tw.ace33022.dao.vo.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['tw.ace33022.dao.vo.Ancestor'] + '.js');
		}
		
		_ = root._;
		
		accessVO = root.tw.ace33022.vo.ForeignFuturesOptionsDayTrnLogs;
		ancestor = root.tw.ace33022.dao.vo.Ancestor;
			
		root.tw.ace33022.dao.vo.ForeignFuturesOptionsDayTrnLogs = result;
	}    
})(this);