/**
 *
 * ArticleLogs
 *
 * @author ace
 *
 * @version 2014/05/20 初始版本。
 * @version 2015/03/27 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @description
 *
 * @require Ancestor.js
 *
 * @todo 
 *
 */

(function() {
 
	var root = this;
	
	var _;					// underscore.js
	
	var ancestor;
	
  var result function() {
	
		var serialVersionUID = 1; // 保留
  
		var readedFlag = '';		// 閱讀旗標('0'：未讀；'1'：已讀。)
		var articleUrl = '';  	// 文章網址
		var articleTitle = '';	// 文章抬頭

		var uber = new ancestor();
  
    _.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。

		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setReadedFlag = function(value) {if (value) readedFlag = value; return value;}
		this.setArticleUrl = function(value) {if (value) articleUrl = value; return value;}
		this.setArticleTitle = function(value) {if (value) articleTitle = value; return value;}
  
		this.getReadedFlag = function() {return readedFlag;}
		this.getArticleUrl = function() {return articleUrl;}
		this.getArticleTitle = function() {return articleTitle;}
  
		// JSON物件資料。
		this.toJSONObject = function() {
  
			var result = {
    
				'readed_flag': readedFlag,
				'article_url': articleUrl,
				'article_title': articleTitle
			};
    
			return _.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSON = function(value) {
  
			uber.setValueFromJSON(value);
    
			this.setReadedFlag(value['readed_flag']);
			this.setArticleUrl(value['article_url']);
			this.setArticleTitle(value['article_title']);
		}
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/ArticleLogs';
			result.title = 'article_logs';
			
      result.properties.readed_flag = {'description': '閱讀旗標', 'type': 'string', 'maxLength': 1};
      result.properties. = {'description': '文章網址', 'type': 'string', 'maxLength': 255};
      result.properties.product_name = {'description': '文章抬頭', 'type': 'string', 'maxLength': 255};

      return result;
    }
	}

	if (typeof define === 'function') {
	
		define(['underscore', 'Ancestor'], function(underscore, dAncestor) {
		
			_ = underscore;
				
			ancestor = dAncestor;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestor = require(RequireJSConfig.paths['Ancestor'] + '.js');
		
		module.exports = result;
	}
	else {
	
		if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');
		if (typeof root.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['Ancestor'] + '.js');
		
		_ = root._;
		
		ancestor = root.Ancestor;
		
		root['Consumptions'] = result;
	}
})();