/**
 *
 * StocksDAO
 *
 * @author ace
 *
 * @version 2013/05/03 初始版本。
 * @version 2014/08/28 改寫成require.js之格式。
 * @version 2015/03/30 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @todo 
 *
 * @description
 *
 */
 
(function() {

	var root = this;
	
	var _;					// underscore.js
	
	var ancestorDAO;
	var accessVO;
	
	var result = function(conn) {

		var serialVersionUID = 1;	// 保留
  
		var tableName = 'stocks';

		var uber = new ancestorDAO(conn);
  
		_.extend(this, uber);
		// this.prototype = uber;	// 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName(tableName);
		this.setAccessVO(accessVO);
		
		this.setRStoVO = function(rs, vo) {
  
			// 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
			vo.setStockCode(new String(rs.getString('stock_code')));  
			vo.setStockName(new String(rs.getString('stock_name')));
			vo.setStockShortName(new String(rs.getString('stock_short_name')));
			vo.setEffectFlag(new String(rs.getString('effect_flag')));
		}
  
		this.doSelectByStockCode = function(stockCode) {

			var result = new Array();
    
			var pstmt = null;
			var strSQL = new String();
    
			var resultSet = null;
			var vo = null;
    
			try {
    
				strSQL = 'select * from ' + tableName + ' '
							 + 'where 1=1 '
               + 'and stock_code=? '
							 + 'and effect_flag=? ';
				pstmt = conn.prepareStatement(strSQL);
				pstmt.setString(1, stockCode);    
				pstmt.setString(2, '1');				
				resultSet = pstmt.executeQuery();
				while (resultSet.next() == true) {
 
					vo = new accessVO();
					this.setRStoVO(resultSet, vo);
					console.log(vo.getStockName());
      
					result.push(vo);
				}
			}
			finally {
    
				if (pstmt != null) pstmt.close();
			}
    
			return result;
		}
	}

	if (typeof define === 'function') {
	
		define(['underscore', 'AncestorDAO', 'Stocks'], function(underscore, dAncestorDAO, dStocks) {
		
			_ = underscore;
			
			ancestorDAO = dAncestorDAO;
			accessVO = dStocks;
			
			return result;
		});
	}
	else if (typeof exports  !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');

		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		accessVO = require(RequireJSConfig.paths['Stocks'] + '.js');

		module.exports = result;
	}
	else {
	
		if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');
		
		if (typeof root.AncestorDAO === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['AncestorDAO'] + '.js');
		if (typeof root.Stocks === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['Stocks'] + '.js');
		
		_ = root._;
		
		ancestorDAO = root.AncestorDAO;
		accessVO = root.Stocks;
			
		root['StocksDAO'] = result;
	}    
})();