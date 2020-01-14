/**
 *
 * @description CommonUtil
 *
 * @version 2020/01/12 ace 初始版本。
 *
 * @author ace
 *
 */

(function(root) { 

	define(["jquery"], function() {
	
		// dataType: 'json' =>success回呼函數中取得之data參數為物件型態資料。
		// dataType: 'text' =>success回呼函數中取得之data參數為字串型態資料。
		var ajaxSettings = {
		
			// contentType: 'text/json',
			"contentType": "application/json; charset=utf-8",
			"dataType": "json",
			"success": function(data, textStatus, jqXHR) { if (typeof successCallback === 'function') successCallback(data, textStatus, jqXHR); },
			"error": function(jqXHR, textStatus, errorThrown) { if (typeof errorCallback === 'function') errorCallback(jqXHR, textStatus, errorThrown); },
			"complete": function(jqXHR, textStatus) { if (typeof completeCallback === 'function') completeCallback(jqXHR, textStatus); }
		};
		
		function getDefaultAjaxSettings() { return ajaxSettings; }
			
		/**
		 *
		 * 取得編碼對照資料的說明欄位。
		 *
		 * @param arrCodeDesc CodeContrastDetail的VO資料陣列。
		 *
		 * @author ace
		 *
		 * @version 2017/02/16 初始版本。
		 *  
		 * @see
		 * 
		 */
		function getCodeDesc(arrCodeContrastDetail, codeGroup, code) {
		
			var result = '';
			
			var codeContrastDetail = _.find(arrCodeContrastDetail, function(vo) { return (vo.getCodeGroup() == codeGroup) && (vo.getCode() == code); });
			
			if (typeof codeContrastDetail !== 'undefined') result = codeContrastDetail.getCodeDesc(); 
			
			return result;
		};
		
		function returnValueSheet(value) {
		
			var sheet = new Array();
			
			sheet[1]  = '尚未登入系統！';
			sheet[11] = '資料存取過程有誤！';
			
			return sheet[value];
		};
		
    /**
     *
     * @description Upload File
     *
		 * @param {string} url 上傳網址
		 * @param {object} file 檔案物件
     * @param {function} successCallback 執行成功回呼函數
		 * @param {function} errorCallback 執行錯誤回呼函數
		 * @param {function} completeCallback 執行完成回呼函數
     *
     * @require jQuery
     *
     * @version 2016/03/12 初始版本。
     *
     * @author ace
     *
		 * @see {@link https://dotblogs.com.tw/jasonyah/archive/2013/06/02/use-ajax-you-need-to-be-care.aspx|[jQuery][筆記] 小心使用 Ajax 防止 Bug 產生 | 分享你的 Coding 新鮮事 - 點部落}
     *
     */
    function uploadFile(url, file, successCallback, errorCallback, completeCallback) {
		
      requirejs(["DateTimeUtil"], function(DateTimeUtil) {
			
        var formData = new FormData();
				
        formData.append('upload-file', file);
        // formData.append('modification-date-parm', moment(file.lastModifiedDate).format('YYYYMMDDHHmmss'));
				formData.append('modification-date-parm', DateTimeUtil.doDateTimeToDateTimeString(file.lastModifiedDate, false));
        formData.append('creation-date-parm', '');
        formData.append('read-date-parm', '');
				
				ajaxSettings["url"] = url;
				ajaxSettings["type"] = 'POST';
				ajaxSettings["contentType"] = false;	// tell jQuery not to set contentType
				ajaxSettings["processDate"] = false;	// tell jQuery not to process the data
				ajaxSettings["cache"] = false;
				ajaxSettings["data"] = formData;
				ajaxSettings["dataType"] = 'text';
				
				jQuery.ajax(ajaxSettings);
      });
    };
		
		return {

			getDefaultAjaxSettings: getDefaultAjaxSettings,
			getCodeDesc: getCodeDesc,
			returnValueSheet: returnValueSheet,
			uploadFile: uploadFile
		}
	});
})(this);