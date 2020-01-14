/**
 *
 * Ancestor
 *
 * @author ace
 *
 * @version 2013/09/29 初始版本。
 * @version 2014/11/26 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a>
 *
 */

(function(root) {

	result = function(conn) {

		var serialVersionUID = 1;	// 保留

		var tableName;
		var accessVO;

		this.setTableName = function(value) {tableName = value; return value;};
		this.setAccessVO = function(value) {accessVO = value; return value;};

		this.getTableName = function() {return tableName;};
		this.getAccessVO = function() {return accessVO;};

    this.setRStoVO = function(rs, vo) {

      vo.setInvalidFlag(rs["invalid_flag"]);
      vo.setInsertDate(rs["insert_date"]);
      vo.setInsertTime(rs["insert_time"]);
      vo.setInsertUserAccount(rs["insert_user_account"]);
      vo.setUpdateDate(rs["update_date"]);
      vo.setUpdateTime(rs["update_time"]);
      vo.setUpdateUserAccount(rs["update_user_account"]);
    };
		
		this.doSelect = function(options) {
		
			var self = this;
		
      var result = new Array();
			
      conn.each(options["sql"], options["params"],
			
        function(err, row) {
				
					var vo;
					
					if (err) {

						console.log(err);
					}
					else {

						vo = new (self.getAccessVO())();
						self.setRStoVO(row, vo);

						result.push(vo);
					}
				},
        function(err, rowCount) {
          
					if (err) console.log(err);
          if (typeof options["callback"] === 'function') options["callback"](err, rowCount, result);
        }
      );
		}

    this.doSelectAll = function(callback) {

			var self = this;
			
			self.doSelect({
			
				"sql": 'select * from '+ self.getTableName() + ' where (1=1) ',
				"params": {},
				"callback": callback
			});
    };
	};

	// 主要使用在nodeJS環境，無法直接增加全域變數。
	if (typeof define === 'function') {

		define([], function() {

			return result;
		});
	}
	else if (typeof exports !== 'undefined') {

		module.exports = result;
	}
})(this);