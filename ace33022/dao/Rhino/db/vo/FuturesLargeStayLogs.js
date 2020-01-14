/**
 *
 * 期貨大額交易人未沖銷部位資料(FuturesLargeStayLogsDAO)
 *
 * @author ace
 *
 * @version 2013/10/28 初始版本。
 * @version 2014/12/23 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
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
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName('futures_large_stay_logs');
		this.setAccessVO(accessVO);
		
		this.setRStoVO = function(rs, vo) {

			// 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
			// rs物件只可取值乙次，第二次再取值則該資料遺失，造成例外錯誤？
			vo.setTrnDate(new String(rs.getString('trn_date')));
			vo.setProductCode(new String(rs.getString('product_code')));
			vo.setConMonth(new String(rs.getString('con_month')));
			vo.setPreFiveBuy(new Number(rs.getDouble('pre_five_buy')));
			vo.setPreFiveJurBuy(new Number(rs.getDouble('pre_five_jur_buy')));
			vo.setPreTenBuy(new Number(rs.getDouble('pre_ten_buy')));
			vo.setPreTenJurBuy(new Number(rs.getDouble('pre_ten_jur_buy')));
			vo.setPreFiveSell(new Number(rs.getDouble('pre_five_sell')));
			vo.setPreFiveJurSell(new Number(rs.getDouble('pre_five_jur_sell')));
			vo.setPreTenSell(new Number(rs.getDouble('pre_ten_sell')));
			vo.setPreTenJurSell(new Number(rs.getDouble('pre_ten_jur_sell')));
			vo.setStayQty(new Number(rs.getDouble('stay_qty'))); 
		}
  
		this.doInsert = function(vo) {
  
			var result = false;
    
			var pstmt = null;

			// 在Rhino環境下，寫入HSQLDB(http://hsqldb.org/)時，欄位名稱需以雙引號處理，原因尚不明？
			// 此部份程式碼為之前測試時使用無誤，此處暫時保留，確定使用方法後再調整。
			var sql = 'insert into ' + this.getTableName() + ' '
							+ '(trn_date, product_code, con_month, pre_five_buy, pre_five_jur_buy, pre_ten_buy, pre_ten_jur_buy, pre_five_sell, pre_five_jur_sell, pre_ten_sell, '
							+ 'pre_ten_jur_sell, stay_qty) '
							+ 'values '
							+ '(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, '
							+ '?, ?) ';
    
			try {
    
				vo.initInsertDateTime();
    
				pstmt = conn.prepareStatement(sql);
    
				pstmt.setString(1, vo.getTrnDate());
				pstmt.setString(2, vo.getProductCode());
				pstmt.setString(3, vo.getConMonth());
				pstmt.setDouble(4, vo.getPreFiveBuy());
				pstmt.setDouble(5, vo.getPreFiveJurBuy());
				pstmt.setDouble(6, vo.getPreTenBuy());
				pstmt.setDouble(7, vo.getPreTenJurBuy());
				pstmt.setDouble(8, vo.getPreFiveSell());
				pstmt.setDouble(9, vo.getPreFiveJurSell());
				pstmt.setDouble(10, vo.getPreTenSell());
				pstmt.setDouble(11, vo.getPreTenJurSell());
				pstmt.setDouble(12, vo.getStayQty());
				
				if (pstmt.executeUpdate() > 0) result = true;
			}
			finally {
    
				if (pstmt != null) pstmt.close();
			}
    
			return result;
		}
  
		this.doSelectByConMonthOrderByTrnDate = function(productCode, conMonth) {
  
			var result = new Array();
    
			var pstmt = null;
			
			var sql = 'select * from ' + this.getTableName() + ' '
							+ 'where (1=1) '
							+ 'and (product_code=?) '
							+ 'and (con_month=?) '
							+ 'order by trn_date ';
    
			try {
    
				pstmt = conn.prepareStatement(sql);
				
				pstmt.setString(1, productCode);
				pstmt.setString(2, conMonth);
				
				this.setSelectResult(pstmt.executeQuery(), result);
			}
			finally {
    
				if (pstmt != null) pstmt.close();
			}
    
			return result;
		}
	}
	
	if (typeof define === 'function') {
	
		define(["tw.ace33022.dao.db.vo.FuturesLargeStayAllLogs", "tw.ace33022.vo.FuturesLargeStayLogs", "underscore"], function(FuturesLargeStayAllLogs, FuturesLargeStayLogs) {
		
			ancestor = FuturesLargeStayAllLogs;
			accessVO = FuturesLargeStayLogs;
			
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
		
		require(RequireJSConfig.paths["underscore"] + '.js');

		ancestor = require(RequireJSConfig.paths["tw.ace33022.dao.db.vo.FuturesLargeStayAllLogs"] + '.js');
		accessVO = require(RequireJSConfig.paths["tw.ace33022.vo.FuturesLargeStayLogs"] + '.js');
			
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
	
		if (typeof load !== 'undefined') {
		
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.vo.FuturesLargeStayLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.FuturesLargeStayLogs"] + '.js');
			if (typeof root.tw.ace33022.dao.db.vo.FuturesLargeStayAllLogs === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.dao.db.vo.FuturesLargeStayAllLogs"] + '.js');
		}
		
		ancestor = root.tw.ace33022.dao.db.vo.FuturesLargeStayAllLogs;
		accessVO = root.tw.ace33022.vo.FuturesLargeStayLogs;
			
		root.tw.ace33022.dao.db.vo.FuturesLargeStayLogs = result;
	}
})(this);