/**
 *
 * ClassifyNameStatisticsDAO(分類名稱統計資料)
 *
 * @author ace
 *
 * @version 2013/11/11 初始版本。
 * @version 2014/01/07 改寫成require.js之格式。
 * @version 2014/03/04 新增使用者代碼欄位。
 * @version 2014/08/24 新增Method doSelectLikeClassifyName。
 * @version 2015/04/09 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
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
		
		var tableName = 'classify_name_statistics';

		var uber = new ancestorDAO(conn);
		
		_.extend(this, uber);
		// this.prototype = uber;  // 保留原型鍊。
		this.prototype = this;  // 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName(tableName);
		this.setAccessVO(accessVO);
		
    this.setRStoVO = function(rs, vo) {
  
      // 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
      vo.setClassifyName(rs.classify_name);
      vo.setNumberOfTimes(rs.number_of_times);
      vo.setUserCode(rs.user_code);
    }
  
    this.doInsert = function(vo, callback) {
  
      var strSQL = new String();
    
      vo.initInsertDateTime();
      
      strSQL = 'insert into ' + tableName + ' '
             + '(classify_name, number_of_times, user_code) '
             + 'values '
             + '($classify_name, $number_of_times, $user_code) ';
      conn.run(strSQL, {
      
          $classify_name: vo.getClassifyName(),
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
		
    this.doSelectByClassifyName = function(userCode, classifyName, callback) {
		
			var thisDAO = this;

      var result = new Array();
    
      var strSQL = new String();
      var vo;
    
      strSQL = 'select * from ' + tableName + ' '
             + 'where 1=1 '
             + 'and user_code=$user_code '
             + 'and classify_name=$classify_name ';
      conn.each(strSQL, { 
      
          $user_code: userCode,
          $classify_name: classifyName
        }, 
        function(err, row) {
  
          vo = new accessVO();
          thisDAO.setRStoVO(row, vo);
    
          result.push(vo);
        }, 
        function(err, rowCount) {
          
          if (typeof(callback) == 'function') callback(err, rowCount, result);
        }
      );
    }
  
    this.doSelectLikeClassifyName = function(userCode, classifyName, callback) {
		
			var thisDAO = this;

      var result = new Array();
    
      var strSQL = new String();
      var vo;
    
      strSQL = 'select * from ' + tableName + ' '
             + 'where 1=1 '
             + 'and user_code=$user_code '
             + 'and classify_name like $classify_name ';
      conn.each(strSQL, { 
      
          $user_code: userCode,
          $classify_name: classifyName + '%'
        }, 
        function(err, row) {
  
          vo = new accessVO();
          thisDAO.setRStoVO(row, vo);
    
          result.push(vo);
        }, 
        function(err, rowCount) {
          
          if (typeof(callback) == 'function') callback(err, rowCount, result);
        }
      );
    }
		
    this.doUpdate = function (vo, callback) {
  
      var strSQL = new String();
    
      vo.setNowUpdateDateTime();
      
      strSQL = 'update classify_name_statistics '
             + 'set '
             + 'number_of_times=$number_of_times '
             + 'where 1=1 '
             + 'and classify_name=$classify_name '
             + 'and user_code=$user_code ';
      conn.run(strSQL, {
      
          $number_of_times: vo.getNumberOfTimes(),
          $classify_name: vo.getClassifyName(),
          $user_code: vo.getUserCode()
        }, 
        function(lastID, changes) {
      
          if (typeof(callback) == 'function') callback(lastID, changes);
        }  
      );  
    }
  }

	if (typeof define === 'function') {
	
		define(['underscore', 'AncestorDAO', 'ClassifyNameStatistics'], function(underscore, dAncestorDAO, dClassifyNameStatistics) {
		
			_ = underscore;
			
			ancestorDAO = dAncestorDAO;
			
			accessVO = dClassifyNameStatistics;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['ClassifyNameStatistics'] + '.js');
		
		module.exports = result;
	}
})();