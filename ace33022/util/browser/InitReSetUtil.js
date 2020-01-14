/**
 *
 * @description InitReSetUtil
 *
 * @version 2015/10/21 ace 初始版本。
 *
 * @author ace
 *
 * @see {@link http://requirejs.org/|RequireJS}
 *
 * @see {@link https://jquery.com/|jQuery}
 *
 * @see {@link http://www.victsao.com/blog/81-javascript/287-javascript-function-iife|立即函式(IIFE)}
 *
 * @see {@link https://stackoverflow.com/questions/9507606/when-should-i-use-require-and-when-to-use-define|requirejs - When should I use require() and when to use define()? - Stack Overflow}
 * @see {@link https://stackoverflow.com/questions/19710752/unable-to-call-functions-with-require-js|javascript - Unable to call functions with Require.js - Stack Overflow}
 * @see {@link https://stackoverflow.com/questions/19846817/require-js-set-return-value-for-callback-function|javascript - Require.js - set return value for callback function - Stack Overflow}
 * @see {@link https://stackoverflow.com/questions/13346399/accessing-the-return-value-of-a-require-js-callback|javascript - Accessing the return value of a require.js callback - Stack Overflow}
 *
 */

(function(root) {

  define(["tw.ace33022.util.CommonUtil", "md5", "jquery"], function(CommonUtil, md5) {

		var ajaxSettings = CommonUtil.getDefaultAjaxSettings();
			
    /**
     *
     * @description 登入系統
     *
		 * @param {string} userAccount 使用者帳號
		 * @param {string} userPassword 使用者密碼
     * @param {function} successCallback 執行成功回呼函數
		 * @param {function} errorCallback 執行錯誤回呼函數
		 * @param {function} completeCallback 執行完成回呼函數
     *
     * @version 2016/10/25 ace 初始版本。
		 * @version 2017/03/10 ace 使用者密碼加入md5編碼後送出。
     *
     * @author ace
		 *
		 * @see {@link http://api.jquery.com/jquery.ajax/|jQuery.ajax() | jQuery API Documentation}
		 *
		 * @see {@link https://blueimp.github.io/JavaScript-MD5/|JavaScript MD5 Demo}
		 * @see {@link https://github.com/blueimp/JavaScript-MD5|blueimp/JavaScript-MD5: JavaScript MD5 implementation. Compatible with server-side environments like node.js, module loaders like RequireJS and all web browsers.}
     *
		 * @see {@link https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call|javascript - How do I return the response from an asynchronous call? - Stack Overflow}
		 * @see {@link https://dotblogs.com.tw/jasonyah/archive/2013/06/02/use-ajax-you-need-to-be-care.aspx|[jQuery][筆記] 小心使用 Ajax 防止 Bug 產生 | 分享你的 Coding 新鮮事 - 點部落}
     *
     */
    function doLogin(userAccount, userPassword, successCallback, errorCallback, completeCallback) {

			ajaxSettings["url"] = new String(location.origin) + '/login';
			ajaxSettings["type"] = 'POST';
			ajaxSettings["data"] = JSON.stringify({

        "user_account": userAccount,
        "user_password": md5(userPassword)
      });
			
      jQuery.ajax(ajaxSettings);
    };

    /**
     *
     * @description 登出系統
     *
     * @param {function} successCallback 執行成功回呼函數
		 * @param {function} errorCallback 執行錯誤回呼函數
		 * @param {function} completeCallback 執行完成回呼函數
     *
     * @version 2016/10/25 ace 初始版本。
     *
     * @author ace
     *
     */
    function doLogout(successCallback, errorCallback, completeCallback) {

			ajaxSettings["url"] = new String(location.origin) + '/logout';
			ajaxSettings["type"] = 'POST';
			ajaxSettings["data"] = JSON.stringify('{}');
			
      jQuery.ajax(ajaxSettings);
    };

    /**
     *
     * @description 檢查使用者登入狀態
     *
     * @param {function} successCallback 執行成功回呼函數
		 * @param {function} errorCallback 執行錯誤回呼函數
		 * @param {function} completeCallback 執行完成回呼函數
     *
     * @version 2015/10/22 ace 初始版本。
     *
     * @author ace
     *
     */
    var doCheckLoginStatus = function(successCallback, errorCallback, completeCallback) {

			ajaxSettings["url"] = new String(window.location.origin) + '/checkLoginStatus';
			ajaxSettings["type"] = 'GET';
			
      jQuery.ajax(ajaxSettings);
    };
		
    /**
     *
     * @description 檢查使用者是否有執行程式的權限
     *
		 * @param {string} programCode 程式代碼
     * @param {function} successCallback 執行成功回呼函數
		 * @param {function} errorCallback 執行錯誤回呼函數
		 * @param {function} completeCallback 執行完成回呼函數
     *
     * @return {string} 使用者是否有執行程式的權限
     *
     * @version 2017/11/16 ace 初始版本。
     *
     * @author ace
     *
     */
		function doCheckProgramAuthority(programCode, successCallback, errorCallback, completeCallback) {
		
			ajaxSettings["url"] = new String(window.location.origin) + '/checkProgramAuthority' + '?' + 'program_code=' + programCode;
			ajaxSettings["type"] = 'GET';

      jQuery.ajax(ajaxSettings);
		}

    /**
     *
     * @description 取得meta標籤的force-login設定值
     *
     * @return {string} meta標籤的force-login設定值
     *
     * @version 2016/11/03 ace 初始版本。
     *
     * @author ace
     *
		 * @see {@link https://stackoverflow.com/questions/7524585/how-do-i-get-the-information-from-a-meta-tag-with-javascript|html - How do I get the information from a meta tag with JavaScript? - Stack Overflow}
     *
     */
    function getForceLogin() {

      var result = 'N';
      var index;

      var metas = document.getElementsByTagName('meta');

      for (index = 0; index < metas.length; index++) {

        if (metas[index].getAttribute('name') === 'force-login') {

          result = metas[index].getAttribute('content');
          break;
        }
      }

      return result;
    };

    /**
     *
     * @description 取得meta標籤的program-code設定值
     *
     * @return {string} meta標籤的program-code設定值
     *
     * @version 2017/11/16 ace 初始版本。
     *
     * @author ace
     *
     */
    var getProgramCode = function() {

      var result = '';
      var index;

      var metas = document.getElementsByTagName('meta');

      for (index = 0; index < metas.length; index++) {

        if (metas[index].getAttribute('name') === 'program-code') {

          result = metas[index].getAttribute('content');
          break;
        }
      }

      return result;
    };
		
    /**
     *
     * @description Init Env
     *
		 * @param {function} callback 執行完成回呼函數
     *
     * @version 2016/11/03 ace 初始版本。
     *
     * @author ace
     *
     */
    function beforeInitEnv(callback) {
		
			requirejs(["tw.ace33022.browser.CommonForm"], function(CommonForm) {
			
				var forceLogin = getForceLogin();
				var loginStatus = 1;
				var programCode = getProgramCode();
				var execProgramAuthority = false;
			
				CommonForm.showProgressbar(
						
					'程式環境檢查，請稍候‧‧‧',
					function(closeProgressbar) {
				
						if (forceLogin == 'Y') {

							doCheckLoginStatus(

								function(data, textStatus, jqXHR) {
								
									loginStatus = data['error_code'];
									
									if ((loginStatus === 0) && (programCode !== '')) {

										doCheckProgramAuthority(
										
											programCode,
											function(data, textStatus, jqXHR) {
											
												if (data['error_code'] === 0) execProgramAuthority = true;
												
												closeProgressbar();
											},
											function(jqXHR, textStatus, errorThrown) {},
											function(jqXHR, textStatus) {}
										);	
									}
									else {
									
										closeProgressbar();
									}
								},
								function(jqXHR, textStatus, errorThrown) {},
								function(jqXHR, textStatus) {}
							);
						}
						else {

							closeProgressbar();
						}
					},
					function() {
					
						if (forceLogin == 'Y') {
						
							if (loginStatus === 1) {
							
								CommonForm.showMessage('登入系統才可進行操作！', '錯誤訊息', function() {

									CommonForm.showLogin(function(logined) {

										if (logined) {

											if (typeof callback === 'function') callback();
										}
										else {

											CommonForm.showMessage('登入系統失敗，將離開目前作業！', '錯誤訊息', function() { window.location.assign(window.location.origin); });
										}
									});
								});
							}
							else {
							
								if ((programCode !== '') && (execProgramAuthority === false)) {
								
									CommonForm.showMessage('沒有執行此程式的權限！', '錯誤訊息', function() { window.location.assign(window.location.origin); });
								}
								else {
								
									if (typeof callback === 'function') callback();
								}
							}							
						}
						else {
						
							if (typeof callback === 'function') callback();
						}
					}
				);	
			});
    };

    /**
     *
     * @description readyToInit
     *
     * @version 2016/03/08 ace 初始版本。
     *
     * @author ace
     *
     */
    function readyToInit() {

      var frmId = 'mwt_slider_scroll';
      var height = 26;

      var tag = '<div id="' + frmId + '"> '
              + '  <div id="mwt_slider_content" style="background: #3c5a98; text-align: left;"> '
              + '    <div id="btnHome" class="ace-btn ace-font" style="padding-top: 2px; padding-left: 2px;">返回首頁</div> '
              + '    <div id="btnOperatePanels" class="ace-btn ace-font" style="padding-top: 2px; padding-left: 2px;">開啟工作面版</div> '
              + '  </div> '
              + '  <div id="mwt_fb_tab" class="ace-font"> '
              + '    <span>開始</span> '
              + '  </div> '
              + '</div> ';

      if (jQuery('#' + frmId).length === 0) jQuery(tag).appendTo('body');

      jQuery('#' + frmId).css({

        'position': 'fixed',
        'top': '-' + height + 'px',
        'height': height + 'px',
        'width': '100%',
        'z-index': 9999,
      });

      jQuery('#mwt_fb_tab').css({

        'position': 'absolute',
        'top': height + 'px',

        'background': '#3c5a98',
        'color': '#ffffff',
        'font-family': 'Arial, Helvetica, sans-serif',
        'text-align': 'center',
        'padding': '2px',

        '-moz-border-radius-topright': '10px',
        '-moz-border-radius-bottomright': '10px',
        '-webkit-border-top-right-radius': '10px',
        '-webkit-border-bottom-right-radius': '10px'
      });

      jQuery('#mwt_fb_tab span').css({

        'display': 'block',
        'padding': '1px',
        'height': '15px',
        'line-height': '15px',
        'text-transform': 'uppercase',
      });

      jQuery("#mwt_fb_tab").mouseover(function() {  // 滑鼠滑入時

        if (jQuery('#' + frmId).css('top') == '-' + height + 'px') jQuery('#' + frmId).animate({top: '0px'}, 600, 'swing');
      });

      jQuery("#mwt_slider_content").mouseleave(function() {  // 滑鼠離開後

        jQuery('#' + frmId).animate({top: '-' + height + 'px'}, 600, 'swing');
      });

      jQuery('#btnHome')
      .text('返回首頁')
      .click(function(e) {

        e.preventDefault();

        location.assign(location.origin);
      });

      jQuery('#btnOperatePanels')
      .text('開啟工作面版')
      .click(function(e) {

        e.preventDefault();

        checkLoginStatus(

          CommonForm.showOperatePanels,
          function() {CommonForm.showLogin(CommonForm.showOperatePanels);}
        );
      });

      setAceButtonClass();
    };

    /**
     *
     * @description setAceButtonClass
     *
     * @version 2016/05/20 ace 初始版本。
     *
     * @author ace
     *
		 * @see {@link https://api.jquery.com/addclass/|.addClass() | jQuery API Documentation}
		 * @see {@link https://api.jquery.com/removeclass/|.removeClass() | jQuery API Documentation}
     *
     */
    var setAceButtonClass = function() {

      // jQuery UI的button函數會再加入span標籤，造成需要再放更寬的空間才可以顯示完整資料。底下套用jQuery UI的CSS設定，而不套用button函數。
      jQuery('.ace-btn').addClass('ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only');
      jQuery('.ace-btn').hover(

        function() {jQuery(this).addClass('ui-state-hover');},
        function() {jQuery(this).removeClass('ui-state-hover');}
      );
    };

    /**
     *
     * @description 取得訊息說明資料
     *
     * @param {function} successCallback 執行成功回呼函數
		 * @param {function} errorCallback 執行錯誤回呼函數
		 * @param {function} completeCallback 執行完成回呼函數
     *
     * @version 2017/02/28 ace 初始版本。
     *
     * @author ace
     *
     */
    function doGetMessageDescription(successCallback, errorCallback, completeCallback) {

			ajaxSettings["url"] = new String(location.origin) + '/messageDescription';
			ajaxSettings["type"] = 'GET';

      jQuery.ajax(ajaxSettings);
    };
		
    return {

      doLogin: doLogin,
      doLogout: doLogout,
      doCheckLoginStatus: doCheckLoginStatus,
      getForceLogin: getForceLogin,
      beforeInitEnv: beforeInitEnv,
      readyToInit: readyToInit,
      setAceButtonClass: setAceButtonClass,
			doGetMessageDescription: doGetMessageDescription
    };
  });
})(this);