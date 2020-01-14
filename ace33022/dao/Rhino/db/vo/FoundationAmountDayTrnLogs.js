/**
 *
 * 三大法人每日交易金額資料(FoundationAmountDayTrnLogs)
 *
 * @author ace
 *
 * @version 2013/10/27 初始版本。
 * @version 2015/03/12 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="http://ejohn.org/">John Resig</a>
 * @see <a href="https://github.com/jeresig/env-js">jeresig/env-js</a>
 *
 * @require underscore/underscore.js
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
  
		this.setTableName('foundation_amount_day_trn_logs');
		this.setAccessVO(accessVO);
  
		this.setRStoVO = function(rs, vo) {

			// 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
			// rs物件只可取值乙次，第二次再取值則該資料遺失，造成例外錯誤？
			vo.setTrnDate(new String(rs.getString('trn_date')));
			vo.setDealerBuy(new Number(rs.getDouble('dealer_buy')));
			vo.setDealerSell(new Number(rs.getDouble('dealer_sell')));
			vo.setDealerHedgeBuy(new Number(rs.getDouble('dealer_hedge_buy')));
			vo.setDealerHedgeSell(new Number(rs.getDouble('dealer_hedge_sell')));
			vo.setInvestBuy(new Number(rs.getDouble('invest_buy')));
			vo.setInvestSell(new Number(rs.getDouble('invest_sell')));
			vo.setForeignBuy(new Number(rs.getDouble('foreign_buy')));
			vo.setForeignSell(new Number(rs.getDouble('foreign_sell')));
		}
  
		this.doInsert = function(vo) {
  
			var result = false;
    
			var pstmt = null;
			
			var sql = 'insert into ' + this.getTableName() + ' '
							+ '(trn_date, dealer_buy, dealer_sell, dealer_hedge_buy, dealer_hedge_sell, invest_buy, invest_sell, foreign_buy, foreign_sell) '
							+ 'values '
							+ '(?, ?, ?, ?, ?, ?, ?, ?, ?) ';
			try {
    
				vo.initInsertDateTime();
    
				pstmt = conn.prepareStatement(sql);
				
				pstmt.setString(1, vo.getTrnDate());
				pstmt.setDouble(2, vo.getDealerBuy());
				pstmt.setDouble(3, vo.getDealerSell());
				pstmt.setDouble(4, vo.getDealerHedgeBuy());
				pstmt.setDouble(5, vo.getDealerHedgeSell());
				pstmt.setDouble(6, vo.getInvestBuy());
				pstmt.setDouble(7, vo.getInvestSell());
				pstmt.setDouble(8, vo.getForeignBuy());
				pstmt.setDouble(9, vo.getForeignSell());
				
				if (pstmt.executeUpdate() > 0) result = true;
			}
			finally {
    
				if (pstmt !== null) pstmt.close();
			}
    
			return result;
		};
  
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
	
		define(["tw.ace33022.vo.FoundationAmountDayTrnLogs", "tw.ace33022.dao.db.vo.Ancestor", "underscore"], function(FoundationAmountDayTrnLogs, Ancestor) {
		
			ancestor = Ancestor;
			accessVO = FoundationAmountDayTrnLogs;
			
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		require(RequireJSConfig.paths["underscore"] + '.js');
	
		ancestor = require(RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');
		accessVO = require(RequireJSConfig.paths["tw.ace33022.vo.FoundationAmountDayTrnLogs"] + '.js');
			
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
		
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.dao.db.vo.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');
			if (typeof root.tw.ace33022.vo.FoundationAmountDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.FoundationAmountDayTrnLogs"] + '.js');
		}	
		
		ancestor = root.tw.ace33022.dao.db.vo.Ancestor;
		accessVO = root.tw.ace33022.vo.FoundationAmountDayTrnLogs;
		
		root.tw.ace33022.dao.db.vo.FoundationAmountDayTrnLogs = result;
	}    
})(this);