/**
 *
 * FuturesDayTrnLogsDAO
 *
 * @author ace
 *
 * @version 2015/02/13 初始版本。
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
		
		var tableName = 'futures_day_trn_logs';

		var uber = new ancestorDAO(conn);
		
		_.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName(tableName);
		this.setAccessVO(accessVO);
		
    this.setRStoVO = function(rs, vo) {

      // 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
      vo.setRowId(rs.row_id);
      vo.setTrnDate(rs.trn_date);
			vo.setTrnMonth(rs.trn_month);
      vo.setProductCode(rs.product_code);
			vo.setOpenPoint(rs.open_point);
			vo.setHighPoint(rs.high_point);
			vo.setLowPoint(rs.low_point);
			vo.setClosePoint(rs.close_point);
			vo.setLastCalPoint(rs.last_cal_point);
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
             + '(trn_date, trn_month, product_code, open_point, high_point, low_point, close_point, last_cal_point, invalid_flag, insert_date, '
						 + 'insert_time, insert_user_code, update_date, update_time, update_user_code) '
             + 'values '
             + '($trn_date, $trn_month, $product_code, $open_point, $high_point, $low_point, $close_point, $last_cal_point, $invalid_flag, $insert_date, '
						 + '$insert_time, $insert_user_code, $update_date, $update_time, $update_user_code) ';

      conn.run(strSQL, {

          $trn_date: vo.getTrnDate(),
					$trn_month: vo.getTrnMonth(),
          $product_code: vo.getProductCode(),
          $open_point: vo.getOpenPoint(),
					$high_point: vo.getHighPoint(),
					$low_point: vo.getLowPoint(),
					$close_point: vo.getClosePoint(),
					$last_cal_point: vo.getLastCalPoint(),
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

    this.doSelectByTrnDate = function(trnDate, callback) {
		
			var thisDAO = this;

      var result = new Array();

      var strSQL = new String();
      var vo;

      strSQL = 'select * from ' + tableName + ' '
             + 'where 1=1 '
             + 'and invalid_flag=$invalid_flag '
             + 'and trn_date=$trn_date ';
      conn.each(strSQL, {

          $invalid_flag: '0',
          $trn_date: trnDate
        },
        function(err, row) {

          vo = new accessVO();
          thisDAO.setRStoVO(row, vo);

          result.push(vo);
        },
        function(err, rowCount) {

				  if (err) console.log(err);
					if (typeof callback == 'function') callback(err, rowCount, result);
        }
      );
    }
		
    this.doDeleteByTrnDate = function(trnDate, callback) {

      var strSQL = new String();

      vo.initInsertDateTime();

      strSQL = 'delete from ' + tableName + ' '
						 + 'where 1=1 '
						 + 'and invalid_flag=$invalid_flag '
						 + 'and trn_date=$trn_date ';

      conn.run(strSQL, {

          $trn_date: trnDate,
          $invalid_flag: '0'
        },
        function (lastID, changes) {

          if (lastID) console.log(lastID);
          if (typeof callback === 'function') callback(lastID, changes);
        }
      );
    }
  }

	if (typeof define === 'function') {
	
		define(['underscore', 'AncestorDAO', 'FuturesDayTrnLogs'], function(underscore, dAncestorDAO, dFuturesDayTrnLogs) {
		
			_ = underscore;
			
			ancestorDAO = dAncestorDAO;
			
			accessVO = dFuturesDayTrnLogs;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['FuturesDayTrnLogs'] + '.js');
		
		module.exports = result;
	}
})();