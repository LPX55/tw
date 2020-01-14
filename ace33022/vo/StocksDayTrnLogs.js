/**
 *
 * StocksDayTrnLogs
 *
 * @author ace
 *
 * @version 2013/10/22 初始版本。
 * @version 2015/03/27 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
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
	
	var result = function () {

		var serialVersionUID = 1; // 保留
  
		var trnDate = '';   // 交易日期
		var stockCode = '';	// 股票代碼
		var openPrice = 0;  // 開盤價
		var highPrice = 0;  // 最高價
		var lowPrice = 0;   // 最低價
		var closePrice = 0; // 收盤價
		var trnQty = 0;     // 成交股數
  
		var uber = new ancestor();
  
    _.extend(this, uber);
    // this.prototype = uber; // 保留原型鍊。
    this.prototype = this;  	// 由於已複製父類別Ancestor，因此原型類別指向自己。
  
		// @version 2015/04/02 JavaScript的資料型別並沒有所謂的null(用於表示物件)，JSON資料傳遞內容並沒有所謂的null資料；因此從資料表取得null資料不適合直接寫入要傳遞的JSON資料傳遞內容。
		this.setTrnDate = function(value) {if (value) trnDate = value; return value;}
		this.setStockCode = function(value) {if (value) stockCode = value; return value;}
		this.setOpenPrice = function(value) {if (value) openPrice = value; return value;}
		this.setHighPrice = function(value) {if (value) highPrice = value; return value;}
		this.setLowPrice = function(value) {if (value) lowPrice = value; return value;}
		this.setClosePrice = function(value) {if (value) closePrice = value; return value;}
		this.setTrnQty = function(value) {if (value) trnQty = value; return value;}
  
		this.getTrnDate = function() {return trnDate;}
		this.getStockCode = function() {return stockCode;}
		this.getOpenPrice = function() {return openPrice;}
		this.getHighPrice = function() {return highPrice;}
		this.getLowPrice = function() {return lowPrice;}
		this.getClosePrice = function() {return closePrice;}
		this.getTrnQty = function() {return trnQty;}
  
		// JSON物件資料。
		this.toJSONObject = function() {
  
			var result = {
    
				'trn_date': trnDate,
				'stock_code': stockCode,
				'open_price': openPrice,
				'high_price': highPrice,
				'low_price': lowPrice,
				'close_price': closePrice,
				'trn_qty': trnQty
			};
    
			return _.extend(result, uber.toJSONObject());
		}
  
		this.setValueFromJSON = function (value) {
  
			uber.setValueFromJSON(value);
    
			this.setTrnDate(value['trn_date']);
			this.setStockCode(value['stock_code']);
			this.setOpenPrice(value['open_price']);
			this.setHighPrice(value['high_price']);
			this.setLowPrice(value['low_price']);
			this.setClosePrice(value['close_price']);
			this.setTrnQty(value['trn_qty']);
		}
		
    this.getSchemaJSONObject = function() {

      var result = _.extend({}, uber.getSchemaJSONObject());

			result.$schema = '/json-schema/VO/StocksDayTrnLogs';
			result.title = 'stocks_day_trn_logs';
			
      result.properties.trn_date = {'description': '交易日期', 'type': 'string', 'maxLength': 8};
      result.properties.stock_code = {'description': '股票代碼', 'type': 'string', 'maxLength': 7};
      result.properties.open_price = {'description': '開盤價', 'type': 'number'};
      result.properties.high_price = {'description': '最高價', 'type': 'number'};
      result.properties.low_price = {'description': '最低價', 'type': 'number'};
      result.properties.close_price = {'description': '收盤價', 'type': 'number'};
      result.properties.trn_qty = {'description': '成交股數', 'type': 'number'};

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
		
		root['StocksDayTrnLogs'] = result;
	}
})();