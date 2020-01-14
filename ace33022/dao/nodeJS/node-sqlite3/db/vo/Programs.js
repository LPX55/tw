/**
 *
 * Programs
 *
 * @author ace
 *
 * @version 2015/11/03 初始版本。
 *
 * @description
 *
 * @see <a href="https://github.com/mapbox/node-sqlite3">mapbox / node-sqlite3</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki">Home · mapbox/node-sqlite3 Wiki</a>
 * @see <a href="https://github.com/mapbox/node-sqlite3/wiki/API">API · mapbox/node-sqlite3 Wiki</a>
 *
 * @todo 
 *
 * @comment
 *
 */

(function() {

	var RequireJSConfig;
	
	var _;					// underscore.js
	
	var ancestor;
	
	var accessVO;

  var result = function(conn) {
  
		var serialVersionUID = 1;	// 保留
		
		var uber = new ancestor(conn);
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName('programs');
		this.setAccessVO(accessVO);

    this.setRStoVO = function(rs, vo) {
  
      // 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
			uber.setRStoVO(rs, vo);
			
			vo.setRowId(rs.row_id);
			
			vo.setProgramCode(rs["program_code"]);
			vo.setProgramName(rs["program_name"]);
			vo.setBPLName(rs["bpl_name"]);
			vo.setFormClassName(rs["form_class_name"]);
			vo.setParams(rs["params"]);
			vo.setProgramMemo(rs["program_memo"]);
			vo.setScriptContent(rs["script_content"]);
			vo.setForceLogin(rs["force_login"]);
    }
    
    this.doInsert = function(vo, callback) {
  
      var sql = 'insert into ' + this.getTableName() + ' '
              + '(program_code, program_name, program_memo, bpl_name, form_class_name, params, url_path, script_content, invalid_flag, insert_date, '
						  + 'insert_time, insert_user_code, update_date, update_time, update_user_code) '
              + 'values '
              + '($program_code, $program_name, $program_memo, $bpl_name, $form_class_name, $params, $url_path, $script_content, $invalid_flag, $insert_date, '
						  + '$insert_time, $insert_user_code, $update_date, $update_time, $update_user_code) ';
    
      vo.initInsertDateTime();
      
      conn.run(sql, {

					$program_code: vo.getProgramCode(),
					$program_name: vo.getProgramName(),
					$program_memo: vo.getProgramMemo(),
					$bpl_name: vo.getBPLName(),
					$form_class_name: vo.getFormClassName(),
					$params: vo.getParams(),
					$url_path: vo.getURLPath(),
					$script_content: vo.getScriptContent(),
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
		
    this.doSelectByProgramCode = function(programCode, callback) {
    
			var sql = 'select * from '+ this.getTableName() + ' '
							+ 'where 1=1 '
							+ 'and (program_code=$program_code) ';
							
			this.doSelect({
			
				"sql": sql,
				"params": {
				
					"$program_code": programCode
				},
				"callback": callback
			});
    }
  }
  
	if (typeof define === 'function') {
	
		define(["tw.ace33022.dao.db.vo.Ancestor", "tw.ace33022.vo.Programs", "underscore"], function(Ancestor, Programs) {

			_ = root._;
			
			ancestor = Ancestor;
			
			accessVO = Programs;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/RequireJSConfig.js');
		
		_ = require(RequireJSConfig.paths["underscore"] + '.js');
		
		ancestor = require(RequireJSConfig.paths["tw.ace33022.dao.db.vo.Ancestor"] + '.js');
		
		accessVO = require(RequireJSConfig.paths["tw.ace33022.vo.Programs"] + '.js');
		
		module.exports = result;
	}
})();