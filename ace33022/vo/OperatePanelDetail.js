/**
 *
 * OperatePanelDetail
 *
 * @version 2015/11/01 ace 初始版本。
 *
 * @author ace
 *
 */

(function(root) {

	var RequireJSConfig;

	var ancestor;

  var result = function() {

    var serialVersionUID = new Number(1); // 保留

		var userAccount = new String('');  			// 使用者帳號
	  var operatePanelCode = new String('');  // 面版代碼
    var serNo = new String('');							// 序號
		var programCode = new String('');				// 程式代碼
		var topPixel = new Number(0);						// 上邊界pixel值
		var leftPixel = new Number(0);					// 左邊界pixel值
		var widthPixel = new Number(100);				// 寬度pixel值
		var heightPixel = new Number(25);				// 高度pixel值
		var color = new String('FFFFFF');				// Color
		var bgColor = new String('337AB7');			// Background Color

		var uber = new ancestor();

    root._.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。

		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setUserAccount = function(value) { if (typeof value !== 'undefined') userAccount = value; return value; }
    this.setOperatePanelCode = function(value) { if (typeof value !== 'undefined') operatePanelCode = value; return value; }
		this.setSerNo = function(value) { if (typeof value !== 'undefined') serNo = value; return value; }
		this.setProgramCode = function(value) { if (typeof value !== 'undefined') programCode = value; return value; }
		this.setTopPixel = function(value) { if (typeof value !== 'undefined') topPixel = value; return value; }
		this.setLeftPixel = function(value) { if (typeof value !== 'undefined') leftPixel = value; return value; }
		this.setWidthPixel = function(value) { if (typeof value !== 'undefined') widthPixel = value; return value; }
		this.setHeightPixel = function(value) { if (typeof value !== 'undefined') heightPixel = value; return value; }
		this.setColor = function(value) { if (typeof value !== 'undefined') color = value; return value; }
		this.setBGColor = function(value) { if (typeof value !== 'undefined') bgColor = value; return value; }

		this.getUserAccount = function() {return userAccount;}
	  this.getOperatePanelCode = function() {return operatePanelCode;}
    this.getSerNo = function() {return serNo;}
		this.getProgramCode = function() {return programCode;}
		this.getTopPixel = function() {return topPixel;}
		this.getLeftPixel = function() {return leftPixel;}
		this.getWidthPixel = function() {return widthPixel;}
		this.getHeightPixel = function() {return heightPixel;}
		this.getColor= function() {return color;}
		this.getBGColor= function() {return bgColor;}

    // JSON物件資料。
    this.toJSONObject = function() {

      var result = {

				"user_account": this.getUserAccount(),
		    "operate_panel_code": this.getOperatePanelCode(),
        "ser_no": this.getSerNo(),
				"program_code": this.getProgramCode(),
				"top_pixel": this.getTopPixel(),
				"left_pixel": this.getLeftPixel(),
				"width_pixel": this.getWidthPixel(),
				"height_pixel": this.getHeightPixel(),
				"color": this.getColor(),
				"bg_color": this.getBGColor()
      };

      return root._.extend(result, uber.toJSONObject());
    }

    this.setValueFromJSONObject = function(value) {

      uber.setValueFromJSONObject(value);

			this.setUserAccount(value["user_account"]);
		  this.setOperatePanelCode(value["operate_panel_code"]);
      this.setSerNo(value["ser_no"]);
			this.setProgramCode(value["program_code"]);
			this.setTopPixel(value["top_pixel"]);
			this.setLeftPixel(value["left_pixel"]);
			this.setWidthPixel(value["width_pixel"]);
			this.setHeightPixel(value["height_pixel"]);
			this.setColor(value["color"]);
			this.setBGColor(value["bg_color"]);
    }

    this.getSchemaJSONObject = function() {

      var result = root._.extend({}, uber.getSchemaJSONObject());

			result["$schema"] = '/json-schema/vo/operate_panels_detail';
			result["title"] = 'operate_panels_detail';

			result["properties"]["user_account"] = {"description": "使用者帳號", "type": "string", "maxLength": 32};
      result["properties"]["operate_panel_code"] = {"description": "面版代碼", "type": "string", "maxLength": 5};
			result["properties"]["ser_no"] = {"description": "序號", "type": "string", "maxLength": 5};
			result["properties"]["program_code"] = {"description": "程式代碼", "type": "string", "maxLength": 32};
			result["properties"]["top_pixel"] = {"description": "上邊界pixel值", "type": "number"};
			result["properties"]["left_pixel"] = {"description": "左邊界pixel值", "type": "number"};
			result["properties"]["width_pixel"] = {"description": "寬度pixel值", "type": "number"};
			result["properties"]["height_pixel"] = {"description": "高度pixel值", "type": "number"};
			result["properties"]["color"] = {"description": "Color", "type": "string", "maxLength": 6};
			result["properties"]["bg_color"] = {"description": "Background Color", "type": "string", "maxLength": 6};

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

		root.tw.ace33022.vo.OperatePanelDetail = result;
	}
})(this);