/**
 *
 * @description Users
 *
 * @author ace
 *
 * @version 2013/11/11 初始版本。
 * @version 2014/01/26 以require.js之方式改寫。
 * @version 2014/08/20 JSON資料格式調整。
 * @version 2015/03/26 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
 * @version 2017/04/01 新增角色代碼欄位。
 * @version 2017/04/10 新增出生日期欄位。
 * @version 2017/04/10 新增身份證字號欄位。
 * @version 2018/02/01 新增e-mail欄位。
 *
 * @require underscore.js
 * @require Ancestor.js
 *
 */

(function(root) {
 
	var RequireJSConfig;
	
	var ancestor;
	
  var result = function() {
	
    var serialVersionUID = new Number(1);	// 保留

    var userAccount = new String('');     // 帳號(登入系統使用，區分大小寫。)
    var userPassword = new String('');    // 密碼(登入系統使用，區分大小寫。)
    var userName = new String('');        // 姓名
		var userBirthday = new String('');		// 出生日期
		var roleCode = new String('');				// 角色代碼
		var idNum = new String('');						// 身份證字號
		var stopUsingDate = new String('');		// 停用日期
    var userArriveDate = new String('');	// 到職日期
    var userLeaveDate = new String('');   // 離職日期

		var uber = new ancestor();
		
		root._.extend(this, uber);
		
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
    this.setUserAccount = function(value) {if (typeof value !== 'undefined') userAccount = value; return value;}
    this.setUserPassword = function(value) {if (typeof value !== 'undefined') userPassword = value; return value;}
    this.setUserName = function(value) {if (typeof value !== 'undefined') userName = value; return value;}
		this.setUserBirthday = function(value) {if (typeof value !== 'undefined') userBirthday = value; return value;}
		this.setRoleCode = function(value) {if (typeof value !== 'undefined') roleCode = value; return value;}
		this.setIdNum = function(value) {if (typeof value !== 'undefined') idNum = value; return value;}
    this.setStopUsingDate = function(value) {if (typeof value !== 'undefined') stopUsingDate = value; return value;}
    this.setUserArriveDate = function(value) {if (typeof value !== 'undefined') userArriveDate = value; return value;}
    this.setUserLeaveDate = function(value) {if (typeof value !== 'undefined') userLeaveDate = value; return value;}
		
    this.getUserAccount = function() {return userAccount;}
    this.getUserPassword = function() {return userPassword;}
    this.getUserName = function() {return userName;}
		this.getUserBirthday = function() {return userBirthday;}
		this.getRoleCode = function() {return roleCode;}
		this.getIdNum = function() {return idNum;}
		this.getStopUsingDate = function() {return stopUsingDate;}
    this.getUserArriveDate = function() {return userArriveDate;}
    this.getUserLeaveDate = function() {return userLeaveDate;}

    // JSON物件資料。
    this.toJSONObject = function() {

      var result = {

        "user_account": this.getUserAccount(),
        "user_password": this.getUserPassword(),
        "user_name": this.getUserName(),
				"user_birthday": this.getUserBirthday(),
				"role_code": this.getRoleCode(),
				"id_num": this.getIdNum(),
        "stop_using_date": this.getStopUsingDate(),
        "user_arrive_date": this.getUserArriveDate(),
        "user_leave_date": this.getUserLeaveDate()
      };

      return root._.extend(result, uber.toJSONObject());
    }

    this.setValueFromJSONObject = function(value) {

			uber.setValueFromJSONObject(value);
			
      this.setUserAccount(value["user_account"]);
      this.setUserPassword(value["user_password"]);
      this.setUserName(value["user_name"]);
			this.setUserBirthday(value["user_birthday"]);
			this.setRoleCode(value["role_code"]);
			this.setIdNum(value["id_num"]);
      this.setStopUsingDate(value["stop_using_date"]);
      this.setUserArriveDate(value["user_arrive_date"]);
      this.setUserLeaveDate(value["user_leave_date"]);
    }

    this.getSchemaJSONObject = function() {

      var result = root._.extend({}, uber.getSchemaJSONObject());
			
			result.$schema = '/json-schema/vo/users';
			result.title = 'users';

      result.properties["user_account"] = {"description": "帳號(登入系統使用，區分大小寫。)", "type": "string", "maxLength": 15};
      result.properties["user_password"] = {"description": "密碼(登入系統使用，區分大小寫。)", "type": "string", "maxLength": 15};
      result.properties["user_name"] = {"description": "姓名", "type": "string", "maxLength": 20};
			result.properties["user_birthday"] = {"description": "出生日期", "type": "string", "maxLength": 8};
			result.properties["role_code"] = {"description": "角色代碼", "type": "string", "maxLength": 4};
			result.properties["id_num"] = {"description": "身份證字號", "type": "string", "maxLength": 10};
			result.properties["stop_using_date"] = {"description": "停用日期", "type": "string", "maxLength": 8};
      result.properties["user_arrive_date"] = {"description": "到職日期", "type": "string", "maxLength": 8};
      result.properties["user_leave_date"] = {"description": "離職日期", "type": "string", "maxLength": 8};

      return result;
    }
  }

	if (typeof define === 'function') {
	
		define(["tw.ace33022.vo.Ancestor", "underscore"], function(Ancestor) {
		
			ancestor = Ancestor;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/RequireJSConfig.js');
	
		require(RequireJSConfig.paths["underscore"] + '.js');
		
		ancestor = require(RequireJSConfig.paths["tw.ace33022.vo.Ancestor"] + '.js');
		
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load !== 'undefined') {
	
			if (typeof root._ === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.vo.Ancestor === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.Ancestor"] + '.js');
		}
		
		ancestor = root.tw.ace33022.vo.Ancestor;
		
		root.tw.ace33022.vo.Users = result;
	}
})(this);