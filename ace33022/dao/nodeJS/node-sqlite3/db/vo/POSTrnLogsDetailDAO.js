/**
 *
 * POSTrnLogsDetailDAO
 *
 * @author ace
 *
 * @version 2014/04/10 初始版本。
 * @version 2015/04/14 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
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
  
		var serialVersionUID = 1;	// 保留
		
		var tableName = 'pos_trn_logs_detail';

		var uber = new ancestorDAO(conn);
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName(tableName);
		this.setAccessVO(accessVO);

    this.setRStoVO = function(rs, vo) {
  
      // 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
      vo.setTrnNo(rs.trn_no);
      vo.setSerNo(rs.ser_no);
			vo.setProductCode(rs.product_code);
			vo.setBarcode(rs.barcode);
			vo.setSdCode(rs.sd_code);
			vo.setProductName(rs.product_name);
			vo.setProductPname(rs.product_pname);
			vo.setTaxType(rs.tax_type);
			vo.setTaxDesc(rs.tax_desc);
			vo.setTaxRate(rs.tax_rate);
			vo.setProductPrice(rs.product_price);
			vo.setTrnPrice(rs.trn_price);
			vo.setTrnQty(rs.trn_qty);
			vo.setTrnAmt01(rs.trn_amt01);
			vo.setTrnAmt02(rs.trn_amt02);
			vo.setTrnAmt03(rs.trn_amt03);
			vo.setTrnTotal(rs.trn_total);
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
             + '(trn_no, ser_no, product_code, barcode, sd_code, product_name, product_pname, tax_type, tax_desc, tax_rate, product_price, '
						 + 'trn_price, trn_qty, trn_amt01, trn_amt02, trn_amt03, trn_total, invalid_flag, insert_date, insert_time, insert_user_code, '
						 + 'update_date, update_time, update_user_code) '
             + 'values '
             + '($trn_no, $ser_no, $product_code, $barcode, $sd_code, $product_name, $product_pname, $tax_type, $tax_desc, $tax_rate, $product_price, '
						 + '$trn_price, $trn_qty, $trn_amt01, $trn_amt02, $trn_amt03, $trn_total, $invalid_flag, $insert_date, $insert_time, $insert_user_code, '
						 + '$update_date, $update_time, $update_user_code) ';

      conn.run(strSQL, {

          $trn_no: vo.getTrnNo(),
					$ser_no: vo.getSerNo(),
					$product_code: vo.getProductCode(),
					$barcode: vo.getBarcode(),
					$sd_code: vo.getSdCode(),
					$product_name: vo.getProductName(),
					$product_pname: vo.getProductPname(),
					$tax_type: vo.getTaxType(),
					$tax_desc: vo.getTaxDesc(),
					$tax_rate: vo.getTaxRate(),
					$product_price: vo.getProductPrice(),
					$trn_price: vo.getTrnPrice(),
					$trn_qty: vo.getTrnQty(),
					$trn_amt01: vo.getTrnAmt01(),
					$trn_amt02: vo.getTrnAmt02(),
					$trn_amt03: vo.getTrnAmt03(),
					$trn_total: vo.getTrnTotal(),
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
  }
  
	if (typeof define === 'function') {
	
		define(['underscore', 'AncestorDAO', 'POSTrnLogsDetail'], function(underscore, dAncestorDAO, dPOSTrnLogsDetail) {

			_ = underscore;
			
			ancestorDAO = dAncestorDAO;
			
			accessVO = dPOSTrnLogsDetail;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['POSTrnLogsDetail'] + '.js');
		
		module.exports = result;
	}
})();