/**
 *
 * ConsumptionsDAO
 *
 * @author ace
 *
 * @version 2013/10/05 初始版本。
 * @version 2014/08/24 新增Method doSelectLastLimitByProductName。
 * @version 2014/12/17 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/09 修正each函數的this.setRStoVO用法。
 *
 * @see <a href="https://github.com/mapbox/node-sqlite3">mapbox / node-sqlite3</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki">Home · mapbox/node-sqlite3 Wiki</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki/API">API · mapbox/node-sqlite3 Wiki</a>
 *
 */
 
var ConsumptionsDAO = function(conn) {};

(function() {

	var RequireJSConfig;
	
	var _;					// underscore.js
	
	var ancestorDAO;
	
	var accessVO;

  ConsumptionsDAO = function(conn) {
	
		var serialVersionUID = 1;	// 保留
		
		var tableName = 'consumptions';

		var uber = new ancestorDAO(conn);
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName(tableName);
		this.setAccessVO(accessVO);
		
    this.setRStoVO = function(rs, vo) {

      // 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
      vo.setRowId(rs.row_id);
      vo.setTrnDate(rs.trn_date);
      vo.setProductName(rs.product_name);
      vo.setTrnPrice(rs.trn_price);
      vo.setClassifyName(rs.classify_name);
      vo.setInvalidFlag(rs.invalid_flag);
      vo.setInsertDate(rs.insert_date);
      vo.setInsertTime(rs.insert_time);
      vo.setInsertUserCode(rs.insert_user_code);
      vo.setUpdateDate(rs.update_date);
      vo.setUpdateTime(rs.update_time);
      vo.setUpdateUserCode(rs.update_user_code);
    }

    this.doInsert = function(vo, callback) {

      var sql = new String();

      vo.initInsertDateTime();

      sql = 'insert into ' + tableName + ' '
          + '(trn_date, product_name, trn_price, classify_name, '
					+ 'invalid_flag, insert_date, insert_time, insert_user_code, update_date, update_time, update_user_code) '
          + 'values '
          + '($trn_date, $product_name, $trn_price, $classify_name, '
					+ '$invalid_flag, $insert_date, $insert_time, $insert_user_code, $update_date, $update_time, $update_user_code) ';

      conn.run(sql, {

          $trn_date: vo.getTrnDate(),
          $product_name: vo.getProductName(),
          $trn_price: vo.getTrnPrice(),
          $classify_name: vo.getClassifyName(),
          $invalid_flag: vo.getInvalidFlag(),
          $insert_date: vo.getInsertDate(),
          $insert_time: vo.getInsertTime(),
          $insert_user_code: vo.getInsertUserCode(),
          $update_date: vo.getUpdateDate(),
          $update_time: vo.getUpdateTime(),
          $update_user_code: vo.getUpdateUserCode()
        },
        function (lastID, changes) {

					if (lastID) console.log(changes);
					if (typeof callback === 'function') callback(lastID, changes);
        }
      );
    }

		this.doSelect = function(userCode, callback) {
		
			var thisDAO = this;

			var result = new Array();
    
			var sql = new String();
			var vo;
    
			sql = 'select * from ' + tableName + ' '
					+ 'where 1=1 '
					+ 'and insert_user_code=$insert_user_code '
					+ 'order by row_id ';
			conn.each(sql, { 
        
					$insert_user_code: userCode
				}, 
				function(err, row) {
  
					// @version 2015/04/09 修正each函數的this.setRStoVO用法。
					vo = new accessVO();
					thisDAO.setRStoVO(row, vo);
    
					result.push(vo);
				}, 
				function(err, rowCount) {
          
				  if (err) console.log(err);
          if (typeof callback === 'function') callback(err, rowCount, result);
				}
			);
		}
			
    this.doSelectByProductName = function(productName, userCode, callback) {

			var thisDAO = this;
			
      var result = new Array();

      var sql = new String();
      var vo;

			sql = 'select * from ' + tableName + ' '
					+ 'where 1=1 '
					+ 'and insert_user_code=$insert_user_code '
          + 'and product_name=$ProductName '
          + 'order by trn_date ';
      conn.each(sql, {

					$insert_user_code: userCode,
          $ProductName: productName
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
          if (typeof callback === 'function') callback(err, rowCount, result);
        }
      );
    }

    this.doSelectLastLimitByProductName = function(productName, count, userCode, callback) {

			var thisDAO = this;
			
      var result = new Array();

      var sql = new String();
      var vo;

      sql = 'select * from ' + tableName + ' '
          + 'where 1=1 '
					+ 'and insert_user_code=$insert_user_code '
          + 'and product_name=$ProductName '
          + 'order by trn_date desc '
					+ 'limit ' + count + ' ';
      conn.each(sql, {

					$insert_user_code: userCode,
          $ProductName: productName
        },
        function(err, row) {

					// @version 2015/04/09 修正each函數的this.setRStoVO用法。
          vo = new accessVO();
          thisDAO.setRStoVO(row, vo);

          result.push(vo);
        },
        function(err, rowCount) {

				  if (err) console.log(err);
          if (typeof callback === 'function') callback(err, rowCount, result);
        }
      );
    }
		
    this.doSelectByLikeProductName = function(productName, userCode, callback) {

			var thisDAO = this;
			
      var result = new Array();

      var sql = new String();
      var vo;

      sql = 'select * from ' + tableName + ' '
             + 'where 1=1 '
						 + 'and insert_user_code=$insert_user_code '
             + 'and product_name like $ProductName '
             + 'order by trn_date ';
      conn.each(sql, {

					$insert_user_code: userCode,
          $ProductName: productName + '%'
        },
        function(err, row) {

					// @version 2015/04/09 修正each函數的this.setRStoVO用法。
          vo = new accessVO();
          thisDAO.setRStoVO(row, vo);

          result.push(vo);
        },
        function(err, rowCount) {

          if (err) console.log(err);
          if (typeof callback === 'function') callback(err, rowCount, result);
        }
      );
    }

    this.doSelectByTrnDate = function(trnDate, userCode, callback) {

			var thisDAO = this;
			
      var result = new Array();

      var sql = new String();
      var vo;

      sql = 'select * from ' + tableName + ' '
             + 'where 1=1 '
						 + 'and insert_user_code=$insert_user_code '
             + 'and trn_date=$TrnDate '
             + 'order by row_id ';
      conn.each(sql, {

					$insert_user_code: userCode,
          $TrnDate: trnDate
        },
        function(err, row) {

					// @version 2015/04/09 修正each函數的this.setRStoVO用法。
          vo = new accessVO();
          thisDAO.setRStoVO(row, vo);

          result.push(vo);
        },
        function(err, rowCount) {

          if (err) console.log(err);
          if (typeof callback === 'function') callback(err, rowCount, result);
        }
      );
    }

    this.doSelectBetweenTrnDate = function(beginTrnDate, endTrnDate, userCode, callback) {

			var thisDAO = this;
			
      var result = new Array();

      var sql = new String();
      var vo;

      sql = 'select * from ' + tableName + ' '
          + 'where 1=1 '
					+ 'and insert_user_code=$insert_user_code '
          + 'and trn_date>=$BeginTrnDate and trn_date<=$EndTrnDate '
          + 'order by trn_date ';
      conn.each(sql, {

					$insert_user_code: userCode,
          $BeginTrnDate: beginTrnDate,
          $EndTrnDate: endTrnDate
        },
        function(err, row) {

					// @version 2015/04/09 修正each函數的this.setRStoVO用法。
          vo = new accessVO();
          thisDAO.setRStoVO(row, vo);

          result.push(vo);
        },
        function(err, rowCount) {

          if (err) console.log(err);
          if (typeof callback === 'function') callback(err, rowCount, result);
        }
      );
    }
  }

	if (typeof define === 'function') {
	
		define(['underscore', 'AncestorDAO', 'Consumptions'], function(underscore, dAncestorDAO, dConsumptions) {
		
			_ = underscore;
			
			ancestorDAO = dAncestorDAO;
			
			accessVO = dConsumptions;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/utils/RequireJSConfig.js');
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['Consumptions'] + '.js');
		
		module.exports = result;
	}
})();