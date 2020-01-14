
(function(root) { 

	/**
	 *
	 * E-mail address格式檢查
	 *
	 * @author ace
	 *  
	 * @see <a href="http://ithelp.ithome.com.tw/question/10027862?tag=ithome.article">合法 E-mail address 的正規化標示法</a>
	 * @see <a href="http://www.w3schools.com/js/js_obj_regexp.asp">JavaScript RegExp Object</a>
	 * @see <a href="http://blog.roodo.com/rocksaying/archives/2670695.html">Regular Expression (RegExp) in JavaScript</a>
	 * @see <a href="http://www.minwt.com/?p=1917">[JS]RegExp正規表法驗證表單的架構</a>
	 * 
	 * @description 合法 E-mail address 的條件：
	 *              一、必要且唯一的 @ 符號左邊是收件人名稱；右邊是收件位址。
	 *              二、收件人名稱與收件位址可以是英文、數字、特定符號( . - _ )，長度不限制。
	 *              三、收件位址以 . 符號分欄位，最靠近 @ 符號的第一欄(主機名稱)可以是英文、數字、特定符號( . - )；其餘欄位(主機位址)則限定只能是英文，合法欄位為 2 到 4 欄。
	 *          
	 *              結合以上樣式規定，合法 E-mail address 的正規化表示法為：
	 *              [A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,4}
	 *           
	 *              針對這個正規化表示，由左至右再進一步解說：
	 *              1. [A-Z0-9._-]+ 為收件者名稱。其中的 + 符號代表 [A-Z0-9._-] 必須出現至少一次，但長度不限，而內容為英文、數字、特定符號( . - _ )。
	 *              2. 一個 @ 符號。
	 *              3. [A-Z0-9.-]+ ，同理，主機名稱的規則跟收件者名稱相同。
	 *              4. \.[A-Z]{2,4} 代表主機位址只接受英文字母，可以有2到4欄，以 . 符號做分界。
	 *   
	 *              原Regular Expression只用大寫英文字母判斷，一般e-mail都包含小寫英文字母，造成誤判現象，再修改表示法如下：
	 *              [A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}       
	 */
	function validateEmailAddress(emailAddress) { return /[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/.test(emailAddress); }

	/**
	 *
	 * @description 發票格式檢查
	 *
	 * @version 2015/06/15 ace 初始版本。
	 *  
	 * @author ace
	 *
	 * @see <a href="http://www.w3schools.com/js/js_obj_regexp.asp">JavaScript RegExp Object</a>
	 * 
	 */
	function validateInvoiceNo(invoiceNo) {

		var result = {"return_value": 0};
	
		if (invoiceNo === '') {
		
			result["return_value"] = 1;
		}
		else if (!/^[A-Z]{2}[0-9]{8}/.test(invoiceNo)) {
		
			result["return_value"] = 2;
		}
	
		return result;
	};
	
	if (typeof define === 'function') {
	
		define([], function() { 
		
			return {
  
				validateEmailAddress: validateEmailAddress,
				validateInvoiceNo: validateInvoiceNo
			}
		});
	}
	else if (typeof exports !== 'undefined') {
	
		module.exports = validateEmailAddress;
		module.exports = validateInvoiceNo;
	}
	else {
	
		root.tw.ace33022.utils.CommonUtils.validateEmailAddress = validateEmailAddress;
		root.tw.ace33022.utils.CommonUtils.validateInvoiceNo = validateInvoiceNo;
	}
})(this);