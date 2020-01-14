/**
 *
 * StocksDAO
 *
 * @author ace
 *
 * @version 2015/02/12 初始版本。
 *
 * @see <a href="https://github.com/mapbox/node-sqlite3">mapbox / node-sqlite3</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki">Home · mapbox/node-sqlite3 Wiki</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki/API">API · mapbox/node-sqlite3 Wiki</a>
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
	
		var serialVersionUID = new Number(1);     // 保留
		
		var tableName = 'stocks';

		var uber = new ancestorDAO(conn);
		
		_.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName(tableName);
		this.setAccessVO(accessVO);
		
    var setRStoVO = function(rs, vo) {

      // 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
      vo.setRowId(rs.row_id);
      vo.setStockCode(rs.stock_code);
      vo.setStockName(rs.stock_name);
      vo.setStockShortName(rs.stock_short_name);
      vo.setEffectFlag(rs.effect_flag);
      vo.setInvalidFlag(rs.invalid_flag);
      vo.setInsertDate(rs.insert_date);
      vo.setInsertTime(rs.insert_time);
      vo.setInsertUserCode(rs.insert_user_code);
      vo.setUpdateDate(rs.update_date);
      vo.setUpdateTime(rs.update_time);
      vo.setUpdateUserCode(rs.update_user_code);
    }

    this.doInsert = function(vo, callback) {

      var strSQL = new String();

      vo.initInsertDateTime();

      strSQL = 'insert into ' + tableName + ' '
             + '(stock_code, stock_name, stock_short_name, effect_flag, invalid_flag, insert_date, insert_time, insert_user_code, update_date, update_time, '
             + 'update_user_code) '
             + 'values '
             + '($stock_code, $stock_name, $stock_short_name, $effect_flag, $invalid_flag, $insert_date, $insert_time, $insert_user_code, $update_date, $update_time, '
             + '$update_user_code) ';

      conn.run(strSQL, {

          $stock_code: vo.getStock_Code(),
          $stock_name: vo.getStockName(),
          $stock_short_name: vo.getStockShortName(),
          $effect_flag: vo.getEffectFlag(),
          $invalid_flag: vo.getInvalidFlag(),
          $insert_date: vo.getInsertDate(),
          $insert_time: vo.getInsertTime(),
          $insert_user_code: vo.getInsertUserCode(),
          $update_date: vo.getUpdateDate(),
          $update_time: vo.getUpdateTime(),
          $update_user_code: vo.getUpdateUserCode()
        },
        function (lastID, changes) {

          if (lastID) console.log(lastID);
          if (typeof callback === 'function') callback(lastID, changes);
        }
      );
    }

    this.doSelect = function(callback) {

			var thisDAO = this;
			
      var result = new Array();

      var strSQL = new String();
      var vo;

			strSQL = 'select * from ' + tableName + ' '
						 + 'where 1=1 '
             + 'and invalid_flag=$InvalidFlag ';
      conn.each(strSQL, { 
			
					$InvalidFlag : '0' 
				},

        function (err, row) {

          vo = new accessVO();
					thisDAO.setRStoVO(row, vo);

          result.push(vo);
        },
        function (err, rowCount) {

          if (err) console.log(err);
          if (typeof callback === 'function') callback(err, rowCount, result);
        }
      );
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
	else if (typeof exports !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['Stocks'] + '.js');
		
		module.exports = result;
	}
})();