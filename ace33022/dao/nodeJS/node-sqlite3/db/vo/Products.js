/**
 *
 * ProductsDAO
 *
 * @author ace
 *
 * @version 2014/04/23 初始版本。
 * @version 2015/04/14 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @description
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3">mapbox / node-sqlite3</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki">Home · mapbox/node-sqlite3 Wiki</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki/API">API · mapbox/node-sqlite3 Wiki</a>
 *
 * {@link http://www.nodebeginner.org/index-zh-tw.html Node入門}
 *
 * @todo 
 *
 * @comment
 *
 */

(function() {

	var _;					// underscore.js
	
	var ancestorDAO;
	var accessVO;

  var result = function(conn) {
	
		var serialVersionUID = 1;	// 保留
		
		var tableName = 'users';

		var uber = new ancestorDAO(conn);
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName(tableName);
		this.setAccessVO(accessVO);

    this.setRStoVO = function(row, vo) {
  
      // 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
      vo.setRowId(row.row_id);
			vo.setProductCode(row.product_code);
			vo.setBarcode(row.barcode);
			vo.setSdCode(row.sd_code);
			vo.setProductName(row.product_name);
			vo.setProductPname(row.product_pname);
			vo.setProductPrice(row.product_price);
			vo.setProductDepartmentCode(row.product_department_code);
			vo.setTaxRate(row.tax_rate);
      vo.setInvalidFlag(row.invalid_flag);
      vo.setInsertDate(row.insert_date);
      vo.setInsertTime(row.insert_time);
      vo.setInsertUserCode(row.insert_user_code);
      vo.setUpdateDate(row.update_date);
      vo.setUpdateTime(row.update_time);
      vo.setUpdateUserCode(row.update_user_code);
    }
  
    this.doInsert = function(vo, callback) {
  
      var strSQL = new String();
    
      vo.initInsertDateTime();
    
      strSQL = 'insert into ' + tableName + ' '
             + '(product_code, barcode, sd_code, product_name, product_pname, product_price, product_department_code, tax_rate, invalid_flag, insert_date, '
             + 'insert_time, insert_user_code, update_date, update_time, update_user_code) '
             + 'values '
						 + '($product_code, $barcode, $sd_code, $product_name, $product_pname, $product_price, $product_department_code, $tax_rate, $invalid_flag, $insert_date, '
             + '$insert_time, $insert_user_code, $update_date, $update_time, $update_user_code) ';
      conn.run(strSQL, {
      
          $product_code: vo.getProductCode(),
					$barcode: vo.getBarcode(),
					$sd_code: vo.getSdCode(),
          $product_name: vo.getProductName(),
					$product_pame: vo.getProductPname(),
					$product_price: vo.getProductPrice(),
					$product_department_code: vo.getProductDepartmentCode(),
					$tax_rate: vo.getTaxRate(),
          $invalid_flag: vo.getInvalidFlag(),
          $insert_date: vo.getInsertDate(),
          $insert_time: vo.getInsertTime(),
          $insert_user_code: vo.getInsertUserCode(),
          $update_date: vo.getUpdateDate(),
          $update_time: vo.getUpdateTime(),
          $update_user_code: vo.getUpdateUserCode() 
        }, 
        function(lastID, changes) {
        
					if (lastID) console.log(changes);
					if (typeof callback === 'function') callback(lastID, changes);
        }
      );  
    }

    this.doSelectByCode = function(pCode, callback) {
    
			var thisDAO = this;
			
      var result = new Array();
    
      var strSQL = new String();
      var vo;
    
			strSQL = 'select * from ' + tableName + ' '
						 + 'where 1=1 '
						 + 'and ((product_code=$product_code) or (barcode=$barcode) or (sd_code=$sd_code)) ';
      conn.each(strSQL, { 
			
			    $product_code: pCode,
					$barcode: pCode,
					$sd_code: pCode
			  },
        function(err, row) {
  
          vo = new Products();
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
	
		define(['underscore', 'AncestorDAO', 'Products'], function(underscore, dAncestorDAO, dProducts) {

			_ = underscore;
			
			ancestorDAO = dAncestorDAO;
			
			accessVO = dProducts;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['Products'] + '.js');
		
		module.exports = result;
	}
})();