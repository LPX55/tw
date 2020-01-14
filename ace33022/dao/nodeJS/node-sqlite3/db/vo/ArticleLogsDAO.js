/**
 *
 * ArticleLogsDAO(文章記錄資料)
 *
 * @author ace
 *
 * @version 2014/05/23 初始版本。
 * @version 2015/04/14 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
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
		
		var tableName = 'article_logs';

		var uber = new ancestorDAO(conn);
		
		_.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		this.setTableName(tableName);
		this.setAccessVO(accessVO);
		
    this.setRStoVO = function(rs, vo) {

      // 需使用JavaScript語法重新轉型字串型態，以免vo物件處理資料時產生錯誤。
      vo.setReadedFlag(rs.readed_flag);
      vo.setArticleUrl(rs.article_url);
      vo.setArticleTitle(rs.article_title);
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

			strSQL = 'insert into ' + tableName + ' '
             + '(readed_flag, article_url, article_title, invalid_flag, insert_date, insert_time, insert_user_code, update_date, update_time, '
						 + 'update_user_code) '
             + 'values '
             + '($readed_flag, $article_url, $article_title, $invalid_flag, $insert_date, $insert_time, $insert_user_code, $update_date, $update_time, '
						 + '$update_user_code) ';

      conn.run(strSQL, {

          $readed_flag: vo.getReadedFlag(),
          $article_url: vo.getArticleUrl(),
          $article_title: vo.getArticleTitle(),
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

    this.doSelectByDate = function(userCode, date, callback) {

			var thisDAO = this;
			
      var result = new Array();

      var strSQL = new String();
      var vo;

			strSQL = 'select * from ' + tableName + ' '
						 + 'where 1=1 '
             + 'and invalid_flag=$InvalidFlag '
             + 'and insert_user_code=$insert_user_code '
             + 'and insert_user_date=$insert_user_date '
             + 'order by row_id ';
      db.each(strSQL, {

          $InvalidFlag : '0',
          $insert_user_code : userCode,
          $insert_user_date : inYearMonth
        },

        function(err, row) {

          vo = new InvoiceMatchPrizeLogs();
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
	
		define(['underscore', 'AncestorDAO', 'ArticleLogs'], function(underscore, dAncestorDAO, dArticleLogs) {

			_ = underscore;
			
			ancestorDAO = dAncestorDAO;
			
			accessVO = dArticleLogs;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestorDAO = require(RequireJSConfig.paths['AncestorDAO'] + '.js');
		
		accessVO = require(RequireJSConfig.paths['ArticleLogs'] + '.js');
		
		module.exports = result;
	}
})();