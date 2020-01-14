/**
 *
 * Lottery649Logs
 *
 * @version 2015/11/03 初始版本。
 *
 * @author ace
 *
 *
 * @see <a href="https://developer.mozilla.org/zh-TW/docs/JavaScript">JavaScript</a>
 *
 */

(function(root) {
 
	var RequireJSConfig;
	
	var ancestor;

  var result = function() {

    var serialVersionUID = new Number(1);	// 保留
  
		var period = '';			// 期數
		var drawDate = '';		// 開獎日期
		var num01 = '';
		var num02 = '';
		var num03 = '';
		var num04 = '';
		var num05 = '';
		var num06 = '';
		var numSpecial = '';	// 特別號
		var prize01 = 0;			// 頭獎中獎注數
		var prize02 = 0;			// 貳獎中獎注數
		var prize03 = 0;			// 參獎中獎注數
		var prize04 = 0;			// 肆獎中獎注數
		var prize05 = 0;			// 伍獎中獎注數
		var prize06 = 0;			// 陸獎中獎注數
		var prize07 = 0;			// 柒獎中獎注數
		var prizeNormal = 0;	// 普獎中獎注數
	
		var uber = new ancestor();
  
    root._.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
		
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setPeriod = function(value) {period = value; return value;}
		this.setDrawDate = function(value) {drawDate = value; return value;}
		this.setNum01 = function(value) {num01 = value; return value;}
		this.setNum02 = function(value) {num02 = value; return value;}
		this.setNum03 = function(value) {num03 = value; return value;}
		this.setNum04 = function(value) {num04 = value; return value;}
		this.setNum05 = function(value) {num05 = value; return value;}
		this.setNum06 = function(value) {num06 = value; return value;}
		this.setNumSpecial = function(value) {numSpecial = value; return value;}
		this.setPrize01 = function(value) {prize01 = value; return value;}
		this.setPrize02 = function(value) {prize02 = value; return value;}
		this.setPrize03 = function(value) {prize03 = value; return value;}
		this.setPrize04 = function(value) {prize04 = value; return value;}
		this.setPrize05 = function(value) {prize05 = value; return value;}
		this.setPrize06 = function(value) {prize06 = value; return value;}
		this.setPrize07 = function(value) {prize07 = value; return value;}
		this.setPrizeNormal = function(value) {prizeNormal = value; return value;}
		
	  this.getPeriod = function() {return period;}
    this.getDrawDate = function() {return drawDate;}
		this.getNum01 = function() {return num01;}
		this.getNum02 = function() {return num02;}
		this.getNum03 = function() {return num03;}
		this.getNum04 = function() {return num04;}
		this.getNum05 = function() {return num05;}
		this.getNum06 = function() {return num06;}
		this.getNumSpecial = function() {return numSpecial;}
		this.getPrize01 = function() {return prize01;}
		this.getPrize02 = function() {return prize02;}
		this.getPrize03 = function() {return prize03;}
		this.getPrize04 = function() {return prize04;}
		this.getPrize05 = function() {return prize05;}
		this.getPrize06 = function() {return prize06;}
		this.getPrize07 = function() {return prize07;}
		this.getPrizeNormal = function() {return prizeNormal;}
		
    // JSON物件資料。
    this.toJSONObject = function() {
  
      var result = {
    
				"period": period,
				"draw_date": drawDate,
				"num01": num01,
				"num02": num02,
				"num03": num03,
				"num04": num04,
				"num05": num05,
				"num06": num06,
				"num_special": numSpecial,
				"prize01": prize01,
				"prize02": prize02,
				"prize03": prize03,
				"prize04": prize04,
				"prize05": prize05,
				"prize06": prize06,
				"prize07": prize07,
				"prize_normal": prizeNormal
      };
    
      // return _.extend(result, uber.toJSONObject());
			return result;
    }
  
    this.setValueFromJSONObject = function(value) {
  
      // uber.setValueFromJSONObject(value);
    
		  this.setPeriod(value["period"]);
      this.setDrawDate(value["draw_date"]);
			this.setNum01(value["num01"]);
			this.setNum02(value["num02"]);
			this.setNum03(value["num03"]);
			this.setNum04(value["num04"]);
			this.setNum05(value["num05"]);
			this.setNum06(value["num06"]);
			this.setNumSpecial(value["num_special"]);
			this.setPrize01(value["prize01"]);
			this.setPrize02(value["prize02"]);
			this.setPrize03(value["prize03"]);
			this.setPrize04(value["prize04"]);
			this.setPrize05(value["prize05"]);
			this.setPrize06(value["prize06"]);
			this.setPrize07(value["prize07"]);
			this.setPrizeNormal(value["prize_normal"]);
    }
    
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/vo/lottery649_logs';
			result.title = 'lottery649_logs';
			
			result.properties["period"] = {"description": "期數", "type": "string", "maxLength": 10};
			result.properties["draw_date"] = {"description": "開獎日期", "type": "string", "maxLength": 8};
			result.properties["num01"] = {"description": "獎號", "type": "string", "maxLength": 2};
			result.properties["num02"] = {"description": "獎號", "type": "string", "maxLength": 2};
			result.properties["num03"] = {"description": "獎號", "type": "string", "maxLength": 2};
			result.properties["num04"] = {"description": "獎號", "type": "string", "maxLength": 2};
			result.properties["num05"] = {"description": "獎號", "type": "string", "maxLength": 2};
			result.properties["num06"] = {"description": "獎號", "type": "string", "maxLength": 2};
			result.properties["num_special"] = {"description": "特別號", "type": "string", "maxLength": 2};
			result.properties["prize01"] = {"description": "頭獎中獎注數", "type": "integer"};
			result.properties["prize02"] = {"description": "貳獎中獎注數", "type": "integer"};
			result.properties["prize03"] = {"description": "參獎中獎注數", "type": "integer"};
			result.properties["prize04"] = {"description": "肆獎中獎注數", "type": "integer"};
			result.properties["prize05"] = {"description": "伍獎中獎注數", "type": "integer"};
			result.properties["prize06"] = {"description": "陸獎中獎注數", "type": "integer"};
			result.properties["prize07"] = {"description": "柒獎中獎注數", "type": "integer"};
			result.properties["prize_normal"] = {"description": "普獎中獎注數", "type": "integer"};
			
      return result;
    };
		
		this.getNumTotal = function() { return parseInt(this.getNum01()) + parseInt(this.getNum02()) + parseInt(this.getNum03()) + parseInt(this.getNum04()) + parseInt(this.getNum05()) + parseInt(this.getNum06()); };
  }
  
	if (typeof define === 'function') {
	
		define(["tw.ace33022.vo.Ancestor", "underscore"], function(Ancestor) {
		
			ancestor = Ancestor;
				
			return result;
		});
	}
	else if (typeof exports !== 'undefined') {
	
		RequireJSConfig = require('tw/ace33022/RequireJSConfig.js');
	
		// _ = require(RequireJSConfig.paths["underscore"] + '.js');
		
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
		
		root.tw.ace33022.vo.Lottery649Logs = result;
	}
})(this);