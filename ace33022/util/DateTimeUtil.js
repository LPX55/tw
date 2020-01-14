/*
 * tw.ace33022.util.DateTimeUtil
 *  
 * @version 2013/10/11 ace 初始版本。
 * @version 2013/11/23 ace 以require.js之方式改寫。
 * @version 2014/06/23 ace 新增函數dateTimeToDateTimeString。
 * @version 2014/11/27 ace 調整成可提供requirejs、require(CommonJS格式)、load(Rhino格式)使用。
 * @version 2015/01/22 ace moment.js無法使用Rhino的load載入，調整函數處理方式。
 *
 * @author ace
 * 
 * @see <a href="http://requirejs.org/">require.js</a>
 *   
 */
 
(function(root) {

	var moment;
	// var sprintf;

  /*
   * DateTime物件資料轉換成C8格式日期字串
   *  
   * @param {Date} value Date物件資料。
   *  
   * @return C8格式日期字串。
   * @type String
   * 
   * @version 2013/10/11 ace 初始版本。
	 * @version 2015/01/22 ace moment.js無法使用Rhino的load載入，調整函數處理方式。	 
   *   
   * @author ace
   * 
   */
  var doDateTimeToDateString = function(value) {

    var result = new String();
		
		if (typeof moment === 'undefined') {
		
			result = root.sprintf('%d%02d%02d', value.getFullYear(), value.getMonth() + 1, value.getDate());
		}
		else {
		
			result = moment(value).format('YYYYMMDD');
		}	
  
    return result;
  }
	
  /*
   * C8格式日期字串轉換成DateTime物件
   *  
   * @param {String} value C8格式日期字串。
   *  
   * @return Date物件資料。
   * @type Date
   * 
   * @version 2016/04/26 ace 初始版本。  
   *   
   * @author ace
   * 
   */
	var doDateStringToDateTime = function(value) {
	
		var result = 0;
	
		var year = new Number((new String(value)).substr(0, 4));
		var month = new Number((new String(value)).substr(4, 2)) - 1;
		var day = new Number((new String(value)).substr(6, 2));
		
		result = new Date(year, month, day);
		
		return result;
	}

  /*
   * DateTime物件資料轉換成C6或C9格式時間字串
   *  
   * @param {Date} date Date物件。
   * @param {Boolean} c9 指定轉換成C6或C9格式時間字串。
   *  
   * @return 參數c9為布林值true，傳回C9格式時間字串；否則傳回C6格式字串。
   * @type String
   * 
   * @version 2013/10/11 ace 初始版本。   
	 * @version 2015/01/22 ace moment.js無法使用Rhino的load載入，調整函數處理方式。	 
   *   
   * @author ace
   * 
   */
  var doDateTimeToTimeString = function(date, c9) {

    var result = new String();
    var timeFormat = 'HHmmss';
  
		if ((typeof c9 !== 'undefined') && (c9 == true)) timeFormat = 'HHmmssSSS';
		
		if (typeof moment === 'undefined') {
		
			result = root.sprintf('%02d%02d%02d', date.getHours(), date.getMinutes(), date.getSeconds());
			if ((typeof c9 !== 'undefined') && (c9 == true)) result = root.sprintf('%02d%02d%02d%03d', date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
		}
		else {
		
			result = moment(date).format(timeFormat);
		}	
  
    return result;
  }

  /*
   * DateTime物件資料轉換成C14或C17格式日期時間字串
   * 
   * @param {Date} date Date物件。
   * @param {Boolean} c9 指定轉換成C14或C17格式日期時間字串。
   *  
   * @return 若參數c9為布林值true，傳回C17格式日期時間字串；否則傳回C14格式日期時間字串。
   * @type String
   * 
   * @version 2014/06/23 ace 初始版本。   
   *   
   * @author ace
   * 
   */
  var doDateTimeToDateTimeString = function(date, c9) {return new String(doDateTimeToDateString(date) + doDateTimeToTimeString(date, c9));}
	
  /*
   * 日期時間字串轉換成DateTime物件資料
   *  
   * @param {String} value 日期時間字串。
   *  
   * @return Date物件資料。
   * @type Date
   * 
   * @version 2016/05/15 ace 初始版本。  
   *   
   * @author ace
   * 
   */
	var doDateTimeStringToDateTime = function(value) {
	
		var result = 0;
		
		var year = new Number((new String(value)).substr(0, 4));
		var month = new Number((new String(value)).substr(4, 2)) - 1;
		var day = new Number((new String(value)).substr(6, 2));
		var hour = new Number((new String(value)).substr(8, 2));
		var minutes = new Number((new String(value)).substr(10, 2));
		var seconds = new Number((new String(value)).substr(12, 2));
		var milliseconds = new Number((new String(value)).substr(14, 3));
		
		result = new Date(year, month, day, hour, minutes, seconds, milliseconds);
		
		return result;
	}

	if (typeof define === 'function') {

		define(["moment"], function(pmoment) {
		
			moment = pmoment;
			
			return {
	
				doDateTimeToDateString: doDateTimeToDateString,
				doDateTimeToTimeString: doDateTimeToTimeString,
				doDateTimeToDateTimeString: doDateTimeToDateTimeString,
				doDateStringToDateTime: doDateStringToDateTime,
				doDateTimeStringToDateTime: doDateTimeStringToDateTime
			};
		});	
	}
	else if (typeof exports !== 'undefined') {
	
		moment = require('moment/moment.js');
	
		exports.doDateTimeToDateString = doDateTimeToDateString;
		exports.doDateTimeToTimeString = doDateTimeToTimeString;
		exports.doDateTimeToDateTimeString = doDateTimeToDateTimeString;
		exports.doDateStringToDateTime = doDateStringToDateTime;
		exports.doDateTimeStringToDateTime = doDateTimeStringToDateTime;
	}
	else {
	
		// moment無法以Rhino的load載入。
		// if (typeof(global.moment) === 'undefined') load(RequireJSConfig.baseUrl + RequireJSConfig.paths['moment'] + '.js');
		
		// moment = global.moment;
		
		if (typeof root.tw.ace33022.RequireJSConfig === 'undefined') throw new Error('tw.ace33022.RequireJSConfig is undefined.');
		
		load(root.tw.ace33022.RequireJSConfig.baseUrl + root.tw.ace33022.RequireJSConfig.paths["sprintfjs"] + '.js');

		root.sprintf = window.sprintf;
		
		root.tw.ace33022.util.DateTimeUtil.doDateTimeToDateString = doDateTimeToDateString;
		root.tw.ace33022.util.DateTimeUtil.doDateTimeToTimeString = doDateTimeToTimeString;
		root.tw.ace33022.util.DateTimeUtil.doDateTimeToDateTimeString = doDateTimeToDateTimeString;
		root.tw.ace33022.util.DateTimeUtil.doDateStringToDateTime = doDateStringToDateTime;
		root.tw.ace33022.util.DateTimeUtil.doDateTimeStringToDateTime = doDateTimeStringToDateTime;
	}
})(this);