/**
 *
 * ProductNameStatisticsDAO
 *
 * @author ace
 *
 * @version 2013/10/05 初始版本。
 * @version 2014/01/07 改寫成require.js之格式。
 * @version 2014/03/05 新增使用者代碼欄位。
 * @version 2014/08/24 新增Method doSelectLikeProductName。
 * @version 2015/04/07 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/09 修正each函數的this.setRStoVO用法。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3">mapbox / node-sqlite3</a>
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
		
		var tableName = 'product_name_statistics';

		var uber = new ancestorDAO(conn);
		
		_.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName(tableName);
		this.setAccessVO(accessVO);
		
    this.setRStoVO = function(rs, vo) {
  
      vo.setProductName(rs.product_name);
      vo.setNumberOfTimes(rs.number_of_times);
      vo.setUserCode(rs.user_code);
    }
		
    this.doInsert = function(vo, callback) {
  
      var strSQL = new String();
    
      vo.initInsertDateTime();
      
      strSQL = 'insert into ' + tableName + ' '
             + '(product_name, number_of_times, user_code) '
             + 'values '
             + '($product_name, $number_of_times, $user_code) ';
             
      conn.run(strSQL, {
      
          $product_name: vo.getProductName(),
          $number_of_times: vo.getNumberOfTimes(),
          $user_code: vo.getUserCode()
        }, 
        function(lastID, changes) {
        
          if (lastID) console.log(changes);
          if (typeof(callback) == 'function') callback(lastID, changes);
        }
      );  
    }

    this.doSelect = function(userCode, callback) {

			var thisDAO = this;
			
      var result = new Array();
    
      var strSQL = new String();
      var vo;
    
      strSQL = 'select * from ' + tableName + ' '
             + 'where 1=1 '
             + 'and user_code=$user_code ';
      conn.each(strSQL, { 
      
          $user_code: userCode
        }, 
        
        function(err, row) {
  
          vo = new accessVO();
          thisDAO.setRStoVO(row, vo);
    
          result.push(vo);
        }, 
        function(err, rowCount) {
          
          if (err) console.log(err);
          if (typeof(callback) == 'function') callback(err, rowCount, result);
        }
      );
    }
		
    this.doSelectByProductName = function(userCode, productName, callback) {

			var thisDAO = this;
			
      var result = new Array();
    
      var strSQL = new String();
      var vo;
    
      strSQL = 'select * from ' + tableName + ' '
             + 'where 1=1 '
             + 'and user_code=$user_code '
             + 'and product_name = $product_name ';
      conn.each(strSQL, { 
      
          $user_code: userCode,
          $product_name: productName 
        }, 
        
        function(err, row) {
  
					// @version 2015/04/09 修正each函數的this.setRStoVO用法。
          vo = new accessVO();
					// this.setRStoVO(row, vo);	// 在callback中，this已指向statement object。(https://github.com/mapbox/node-sqlite3/wiki/API#databaserunsql-param--callback)
          thisDAO.setRStoVO(row, vo);
    
          result.push(vo);
        }, 
        function(err, rowCount) {
          
          if (err) console.log(err);
          if (typeof(callback) == 'function') callback(err, rowCount, result);
        }
      );
    }
		
    this.doSelectLikeProductName = function(userCode, productName, callback) {
		
			var thisDAO = this;

      var result = new Array();
    
      var strSQL = new String();
      var vo;
    
      strSQL = 'select * from ' + tableName + ' '
             + 'where 1=1 '
             + 'and user_code=$user_code '
             + 'and product_name like $product_name ';
      conn.each(strSQL, { 
      
          $user_code: userCode,
          $product_name: productName + '%'
        }, 
        
        function(err, row) {
  
					// @version 2015/04/09 修正each函數的this.setRStoVO用法。
          vo = new accessVO();
					// this.setRStoVO(row, vo);	// 在callback中，this已指向statement object。(https://github.com/mapbox/node-sqlite3/wiki/API#databaserunsql-param--callback)
          thisDAO.setRStoVO(row, vo);
    
          result.push(vo);
        }, 
        function(err, rowCount) {
          
          if (err) console.log(err);
          if (typeof(callback) == 'function') callback(err, rowCount, result);
        }
      );
		}
		
    this.doUpdate = function(vo, callback) {
  
      var strSQL = new String();
    
      vo.setNowUpdateDateTime();
      
      strSQL = 'update ' + tableName + ' '
             + 'set '
             + 'number_of_times=$number_of_times '
             + 'where 1=1 '
             + 'and product_name=$product_name '
             + 'and user_code=$user_code ';
      conn.run(strSQL, {
      
          $number_of_times: vo.getNumberOfTimes(),
          $product_name: vo.getProductName(),
          $user_code: vo.getUserCode()
        }, 
        function(lastID, changes) {
      
			    if (lastID) console.log(changes);
          if (typeof(callback) == 'function') callback(lastID, changes);
        }  
      );  
    }
  }

	if (typeof define === 'function') {
	
		define(['underscore', 'AncestorDAO', 'ProductNameStatistics'], function(underscore, dAncestorDAO, dProductNameStatistics) {
		
			_ = underscore;
			
			ancestorDAO = dAncestorDAO;
			
			accessVO = dProductNameStatistics;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['ProductNameStatistics'] + '.js');
		
		module.exports = result;
	}
})();