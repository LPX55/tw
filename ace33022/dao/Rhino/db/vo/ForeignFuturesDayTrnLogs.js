/**
 *
 * 外資每日期貨交易統計資料(ForeignFuturesDayTrnLogs)
 *
 * @author ace
 *
 * @version 2013/10/30 初始版本。
 * @version 2014/12/26 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/01/09 Add method doSelectByProductCodeRangeTrnDateOrderByTrnDate。
 *
 * @see <a href="http://ejohn.org/">John Resig</a>
 * @see <a href="https://github.com/jeresig/env-js">jeresig/env-js</a>
 *
 * @todo 2015/03/31 在Rhino環境下處理HSQLDB(http://hsqldb.org/)時，欄位名稱需以雙引號處理？
 *
 * @description
 *
 * @require underscore/underscore.js
 * @require tw/ace33022/dao/db/Rhino/AncestorDAO.js
 * @require tw/ace33022/dao/db/Rhino/ForeignFuturesDayTrnLogs.js
 * 
 */

(function(root) {

	var RequireJSConfig;
	
	var ancestor;
	var accessVO;
		
	var result = function(conn) {

		var serialVersionUID = new Number(1);	// 保留
		
		root._.extend(this, new ancestor(conn));
		this.prototype = this;		// 由於已複製父類別Ancestor，因此原型類別指向自己。
		
		this.setTableName('foreign_futures_day_trn_logs');
		this.setAccessVO(accessVO);
		
		this.setRStoVO = function(rs, vo) {

			// 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
			// rs物件只可取值乙次，第二次再取值則該資料遺失，造成例外錯誤？
			vo.setTrnDate(new String(rs.getString('trn_date')));
			vo.setProductCode(new String(rs.getString('product_code')));
			vo.setBuyQty(new Number(rs.getDouble('buy_qty'))); 
			vo.setBuyTotal(new Number(rs.getDouble('buy_total'))); 
			vo.setSellQty(new Number(rs.getDouble('sell_qty'))); 
			vo.setSellTotal(new Number(rs.getDouble('sell_total'))); 
			vo.setStayBuyQty(new Number(rs.getDouble('stay_buy_qty'))); 
			vo.setStayBuyTotal(new Number(rs.getDouble('stay_buy_total'))); 
			vo.setStaySellQty(new Number(rs.getDouble('stay_sell_qty'))); 
			vo.setStaySellTotal(new Number(rs.getDouble('stay_sell_total'))); 
		}
  
		this.doInsert = function(vo) {
  
			var result = false;
    
			var pstmt = null;
			
			var sql = 'insert into ' + this.getTableName() + ' '
							+ '(trn_date, product_code, buy_qty, buy_total, sell_qty, sell_total, stay_buy_qty, stay_buy_total, stay_sell_qty, stay_sell_total) '
							+ 'values '
							+ '(?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ';
    
			try {
    
				vo.initInsertDateTime();
				
				pstmt = conn.prepareStatement(sql);
				
				pstmt.setString(1, vo.getTrnDate());
				pstmt.setString(2, vo.getProductCode());
				pstmt.setDouble(3, vo.getBuyQty());
				pstmt.setDouble(4, vo.getBuyTotal());
				pstmt.setDouble(5, vo.getSellQty());
				pstmt.setDouble(6, vo.getSellTotal());
				pstmt.setDouble(7, vo.getStayBuyQty());
				pstmt.setDouble(8, vo.getStayBuyTotal());
				pstmt.setDouble(9, vo.getStaySellQty());
				pstmt.setDouble(10, vo.getStaySellTotal());
				
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
  
		this.doSelectBetweenTrnDateOrderByTrnDate = function(productCode, beginDate, endDate) {
  
			var result = new Array();
    
			var pstmt = null;
			
			var sql = 'select * from ' + this.getTableName() + ' '
							+ 'where (1=1) '
							+ 'and product_code=? '
							+ 'and (trn_date >= ? and trn_date <= ?) '
							+ 'order by trn_date ';
    
			try {
    
				pstmt = conn.prepareStatement(sql);
				
				pstmt.setString(1, productCode);
				pstmt.setString(2, beginDate);
				pstmt.setString(3, endDate);
				
				this.setSelectResult(pstmt.executeQuery(), result);
			}
			finally {
    
				if (pstmt !== null) pstmt.close();
			}
    
			return result;
		}
		
		this.doSelectBetweenTrnDateByProductCodeOrderByTrnDate = function(beginDate, endDate, productCode) {
		
			var result = new Array();
    
			var pstmt = null;
			
			var sql = 'select * from ' + this.getTableName() + ' '
							+ 'where (1=1) '
							+ 'and (trn_date >= ? and trn_date <= ?) '
							+ 'and product_code=? '
							+ 'order by trn_date ';
    
			try {
    
				pstmt = conn.prepareStatement(sql);
				
				pstmt.setString(1, beginDate);
				pstmt.setString(2, endDate);
				pstmt.setString(3, productCode);
				
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
	
		define(["tw.ace33022.dao.db.vo.Ancestor", "tw.ace33022.vo.ForeignFuturesDayTrnLogs", "underscore"], function(Ancestor, ForeignFuturesDayTrnLogs) {
		
			ancestor = Ancestor;
			accessVO = ForeignFuturesDayTrnLogs;
			
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		require(RequireJSConfig.paths['underscore'] + '.js');
	
		accessVO = require(RequireJSConfig.paths["tw.ace33022.vo.ForeignFuturesDayTrnLogs"] + '.js');
		ancestor = require(RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');
			
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
		
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
		
			if (typeof root.tw.ace33022.dao.db.vo.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');
			if (typeof root.tw.ace33022.vo.ForeignFuturesDayTrnLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.ForeignFuturesDayTrnLogs"] + '.js');
		}
		
		ancestor = root.tw.ace33022.dao.db.vo.Ancestor;
		accessVO = root.tw.ace33022.vo.ForeignFuturesDayTrnLogs;
		
		root.tw.ace33022.dao.db.vo.ForeignFuturesDayTrnLogs = result;
	}    
})(this);