/**
 *
 * AncestorDAO
 *
 * @author ace
 *
 * @version 2015/11/11 初始版本。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a>
 *
 * @description
 *
 * @todo 
 *
 * @require
 *
 */

(function() {

	var result = function(conn) {

		var serialVersionUID = 1;	// 保留
		
		var tableName;
		var accessVO;
						
		this.setTableName = function(value) { tableName = value; return value; }
		this.setAccessVO = function(value) { accessVO = value; return value; }
		
		this.getTableName = function() { return tableName; }
		
    this.doSelect = function(callback) {
		
			var dao = this;

      var result = new Array();

      var strSQL = new String();

      strSQL = 'select * from '+ tableName + ' ';
             + 'where 1=1 ';
			conn.connect();
      conn.query(strSQL, function(err, rows, fields) {

				var vo;
				var index;
				
				if (!err) {
				
					for (index in rows) {
				
						vo = new accessVO();
					
						dao.setRStoVO(rows[index], vo);	// 使用子類別的setRStoVO()函數。 PS. 在這個類別中不可存在同名函數，否則會因為Closure而無法取得子類別的函數。
					
						result.push(vo);
					}
				}	
				
				conn.end();
				
				if (typeof callback === 'function') callback(err, rows.length, result);
      });
    }
	}
	
	// 主要使用在nodeJS環境，無法直接增加全域變數。
	if (typeof define === 'function') {
	
		define([], function() {
		
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		module.exports = result;
	}
})();