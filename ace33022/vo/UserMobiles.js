/**
 *
 * UserMobiles
 *
 * @author ace
 *
 * @version 2013/11/11 初始版本。
 * @version 2014/07/14 以require.js之方式改寫。
 * @version 2014/08/20 JSON資料格式調整。
 * @version 2015/03/26 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 * @description
 *
 * @require underscore.js
 * @require Ancestor.js
 *
 * @todo 
 *
 */
 
(function() {
 
	var root = this;
	
	var _;					// underscore.js
	
	var ancestor;
 
  var result = function() {

		var serialVersionUID = 1; // 保留
  
		var userCode = '';    // 代碼
		var userMobile = '';  // 手機號碼
  
		var uber = new ancestor();
		
    _.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setUserCode = function(value) {if (value) userCode = value; return value;}
		this.setUserMobile = function(value) {if (value) userMobile = value; return value;}
  
		this.getUserCode = function() {return userCode;}
		this.getUserMobile = function() {return userMobile;}
  
		// JSON物件資料。
		this.toJSONObject = function() {
		
			var result = {
    
				'user_code': userCode,
				'user_mobile': userMobile
			};
    
			return _.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSON = function(value) {
  
			uber.setValueFromJSON(value);
    
			this.setUserCode(value['user_code']);
			this.setUserMobile(value['user_mobile']);
		}
	
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());
			
			result['$schema'] = '/json-schema/VO/UserMobiles';
			result['title'] = 'user_mobiles';
			
      result.properties.user_code = {'description': '使用者代碼', 'type': 'string', 'maxLength': 10};
      result.properties.user_mobile = {'description': '手機號碼', 'type': 'string', 'maxLength': 11};

      return result;
    }
	}

	if (typeof(define) == 'function') {
	
		define(['underscore', 'Ancestor'], function(underscore, dAncestor) {
		
			_ = underscore;
				
			ancestor = dAncestor;
				
			return result;
		});
	}
	else if (typeof(exports) != 'undefined') {
	
		_ = require(RequireJSConfig.paths['underscore'] + '.js');
		
		ancestor = require(RequireJSConfig.paths['Ancestor'] + '.js');
		
		module.exports = result;
	}
	else {
	
		if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['underscore'] + '.js');
		if (typeof root.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['Ancestor'] + '.js');
		
		_ = root._;
		
		ancestor = root.Ancestor;
		
		root['UserMobiles'] = result;
	}
})();