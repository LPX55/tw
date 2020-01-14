/**
 *
 * Drinks
 *
 * @author ace
 *
 * @version 2017/06/10 初始版本。
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

(function(root) {

	var RequireJSConfig;
	
	var ancestor;
	
	var Products;

  var result = function() {

    var serialVersionUID = new Number(1);	// 保留

    var drinkCode = new String('');						// 飲料代碼
    var drinkName = new String(''); 					// 飲料名稱
		var sizeGroupCode = new String('');				// 尺寸群組代碼
		var sugarGroupCode = new String('');			// 甜度群組代碼
		var iceDosageGroupCode = new String(''); 	// 冰塊用量群組代碼
		var drinkImgBase64 = new String(''); 			// base64圖檔資料
		var expandProductFlag = new String('0');	// 展開商品資料旗標('0'：尚未展開；'1'：已展開。)

		var uber = new ancestor();
		
		root._.extend(this, uber);
		// this.prototype = uber; // 保留原型鍊。
		this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。

    this.setDrinkCode = function(value) {if (typeof value != 'undefined') drinkCode = value; return value;};
    this.setDrinkName = function(value) {if (typeof value != 'undefined') drinkName = value; return value;};
		this.setSizeGroupCode = function(value) {if (typeof value != 'undefined') sizeGroupCode = value; return value;};
		this.setSugarGroupCode = function(value) {if (typeof value != 'undefined') sugarGroupCode = value; return value;};
		this.setIceDosageGroupCode = function(value) {if (typeof value != 'undefined') iceDosageGroupCode = value; return value;};
		this.setDrinkImgBase64 = function(value) {if (typeof value != 'undefined') drinkImgBase64 = value; return value;};
		this.setExpandProductFlag = function(value) {if (typeof value != 'undefined') expandProductFlag = value; return value;};

    this.getDrinkCode = function() {return drinkCode;};
    this.getDrinkName = function() {return drinkName;};
		this.getSizeGroupCode = function() {return sizeGroupCode;};
		this.getSugarGroupCode = function() {return sugarGroupCode;};
		this.getIceDosageGroupCode = function() {return iceDosageGroupCode;};
		this.getDrinkImgBase64 = function() {return drinkImgBase64;};
		this.getExpandProductFlag = function() {return expandProductFlag;};

    // JSON物件資料。
    this.toJSONObject = function() {

      var result = {

        "drink_code": this.getDrinkCode(),
        "drink_name": this.getDrinkName(),
				"size_group_code": this.getSizeGroupCode(),
				"sugar_group_code": this.getSugarGroupCode(),
				"ice_dosage_group_code": this.getIceDosageGroupCode(),
				"drink_img_base64": this.getDrinkImgBase64(),
				"expand_product_flag": this.getExpandProductFlag()
      };

      return root._.extend(result, uber.toJSONObject());
    };

    this.setValueFromJSONObject = function(value) {

      uber.setValueFromJSONObject(value);

			this.setDrinkCode(value["drink_code"]);
			this.setDrinkName(value["drink_name"]);
			this.setSizeGroupCode(value["size_group_code"]);
			this.setSugarGroupCode(value["sugar_group_code"]);
			this.setIceDosageGroupCode(value["ice_dosage_group_code"]);
			this.setDrinkImgBase64(value["drink_img_base64"]);
			this.setExpandProductFlag(value["expand_product_flag"]);
    };

    this.getSchemaJSONObject = function() {

      var result = root._.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/vo/drinks';
			result.title = 'drinks';
			
      result.properties["drink_code"] = {"description": "飲料代碼", "type": "string", "maxLength": 4};
      result.properties["drink_name"] = {"description": "飲料名稱", "type": "string", "maxLength": 16};
			result.properties["size_group_code"] = {"description": "尺寸群組代碼", "type": "string", "maxLength": 2};
			result.properties["sugar_group_code"] = {"description": "甜度群組代碼", "type": "string", "maxLength": 2};
			result.properties["ice_dosage_group_code"] = {"description": "冰塊用量群組代碼", "type": "string", "maxLength": 2};
			result.properties["drink_img_base64"] = {"description": "base64圖檔資料", "type": "text"};
			result.properties["expand_product_flag"] = {"description": "展開商品資料旗標", "type": "string", "maxLength": 1};

      return result;
    };
		
		this.tranToProductsVO = function(userAccount, tranType, getArrSizeGroupsDetailVO, getArrSugarGroupsDetailVO, getArrIceDosageGroupsDetailVO, getArrSizesVO, getArrSugarsVO, getArrIceDosagesVO) {
		
			var result = new Array();
			
			var arrSizeGroupsDetailVO = _.sortBy(getArrSizeGroupsDetailVO(this), function(vo) {return vo.getSizeCode();});
			var arrSugarGroupsDetailVO = _.sortBy(getArrSugarGroupsDetailVO(this), function(vo) {return vo.getSugarCode();});
			var arrIceDosageGroupsDetailVO = _.sortBy(getArrIceDosageGroupsDetailVO(this), function(vo) {return vo.getIceDosageCode();});
			var arrSizesVO = getArrSizesVO(this);
			var arrSugarsVO = getArrSugarsVO(this);
			var arrIceDosagesVO = getArrIceDosagesVO(this);
			
			var indexSize, indexSugar, indexIceDosage;
			
			var vo;
			var index;
			var departmentCode, productCode, productName;
			
			for (indexSize = 0; indexSize < arrSizeGroupsDetailVO.length; indexSize++) {
				
				for (indexSugar = 0; indexSugar < arrSugarGroupsDetailVO.length; indexSugar++) {
					
					for (indexIceDosage = 0; indexIceDosage < arrIceDosageGroupsDetailVO.length; indexIceDosage++) {
						
						departmentCode = '01'
													 + (arrIceDosageGroupsDetailVO[indexIceDosage]).getIceDosageCode()
													 + (arrSugarGroupsDetailVO[indexSugar]).getSugarCode()
													 + (arrSizeGroupsDetailVO[indexSize]).getSizeCode();
						productCode = departmentCode + this.getDrinkCode();
							
						productName = this.getDrinkName();
						
						productName += '-' + (_.find(arrSizesVO, function(vo) {return vo.getSizeCode() == (arrSizeGroupsDetailVO[indexSize]).getSizeCode();})).getSizeName();
						productName += '-' + (_.find(arrSugarsVO, function(vo) {return vo.getSugarCode() == (arrSugarGroupsDetailVO[indexSugar]).getSugarCode();})).getSugarName();
						productName += '-' + (_.find(arrIceDosagesVO, function(vo) {return vo.getIceDosageCode() == (arrIceDosageGroupsDetailVO[indexIceDosage]).getIceDosageCode();})).getIceDosageName();

						vo = new Products();
							
						vo.setProductCode(productCode);
						vo.setProductName(productName);
						vo.setDepartmentCode(departmentCode);
						vo.setTaxRate(5);
						vo.setInsertUserAccount(userAccount);
						vo.setUpdateUserAccount(userAccount);
				
						result.push(vo);
					}
				}
			}
			
			return result;
		};
  };

	if (typeof define == 'function') {
	
		define(["tw.ace33022.vo.Ancestor", "tw.ace33022.vo.Products", "underscore"], function(Ancestor, AProducts) {
		
			ancestor = Ancestor;
			Products = AProducts;
				
			return result;
		});
	}
	else if (typeof exports != 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/RequireJSConfig.js');
	
		require(RequireJSConfig.paths["underscore"] + '.js');
		
		ancestor = require(RequireJSConfig.paths["tw.ace33022.vo.Ancestor"] + '.js');
		Products = require(RequireJSConfig.paths["tw.ace33022.vo.Products"] + '.js');
			
		module.exports = result;
	}
	else {
	
		RequireJSConfig = root.tw.ace33022.RequireJSConfig;
		
		if (typeof load != 'undefined') {
	
			if (typeof root._ == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["underscore"] + '.js');
			
			if (typeof root.tw.ace33022.vo.Ancestor == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.Ancestor"] + '.js');
			if (typeof root.tw.ace33022.vo.Products == 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths["tw.ace33022.vo.Products"] + '.js');
		}
		
		ancestor = root.tw.ace33022.vo.Ancestor;
		Products = root.tw.ace33022.vo.Products;
		
		root.tw.ace33022.vo.Drinks = result;
	}
})(this);