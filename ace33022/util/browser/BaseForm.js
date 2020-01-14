/**
 *
 * BaseForms
 *
 * @description
 *
 * @author ace
 *
 * @version 2015/10/21 初始版本。
 *
 * @see <a href="http://requirejs.org/">RequireJS</a>
 *
 * @see <a href="http://www.openfoundry.org/tw/tech-column/8678-beginning-requirejs">初探 RequireJS</a>
 *
 * @see <a href="http://designshack.net/articles/javascript/howto-code-modal-window-login-form/">Create a Modal Window Login Form Effect Using jQuery</a>
 * @see <a href="http://designshack.net/tutorialexamples/modal-login-jquery/index.html">Modal Login Window Demo</a>
 *
 * @comment
 *
 * @todo
 *
 */

(function(root) {

	define(['jquery'], function() {

		var formCSS = {

			'font-weight': 'bold',
			'padding-top': '15px',
			'padding-right': '20px',
			
			'-webkit-border-radius': '6px',
			'-moz-border-radius': '6px',
			'border-radius': '6px',
			
			'-webkit-box-shadow': '0 1px 5px rgba(0, 0, 0, 0.5)',
			'-moz-box-shadow': '0 1px 5px rgba(0, 0, 0, 0.5)',
			'box-shadow': '0 1px 5px rgba(0, 0, 0, 0.5)'
		};

		var flatbtnCSS = {

			'padding': '6px 13px 6px 13px',
			
			'box-sizing': 'border-box',
			'-webkit-box-sizing': 'border-box',
			'-moz-box-sizing': 'border-box',
			
			'display': 'inline-block',
			'outline': '0',
			'border': '0',
			'color': '#edf4f9',
			'text-decoration': 'none',
			'background-color': '#4f94cf',
			'border-color': 'rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)',
			'line-height': 'normal',
			'text-align': 'center',
			'vertical-align': 'middle',
			'cursor': 'pointer',
			'text-transform': 'uppercase',
			'text-shadow': '0 1px 0 rgba(0,0,0,0.3)',
			
			'-webkit-border-radius': '3px',
			'-moz-border-radius': '3px',
			'border-radius': '3px',
			
			'-webkit-box-shadow': '0 1px 1px rgba(0, 0, 0, 0.2)',
			'-moz-box-shadow': '0 1px 1px rgba(0, 0, 0, 0.2)',
			'box-shadow': '0 1px 1px rgba(0, 0, 0, 0.2)'
		};

		/**
		 *
		 * ConfirmMessage
     *
     * @author ace
     *
     * @version 2016/03/03 初始版本。
     *
     * @param {String} 訊息字串。
		 *
		 * @return
     *
     * @require
     *
		 * @see <a href="http://api.jquery.com/jquery/">jQuery() | jQuery API Documentation</a>
		 * @see <a href="http://api.jquery.com/css/">.css() | jQuery API Documentation</a>
		 * @see <a href="https://api.jquery.com/hover/">.hover() | jQuery API Documentation</a>
		 * @see <a href="https://api.jquery.com/click/">.click() | jQuery API Documentation</a>
		 * @see <a href="https://api.jquery.com/mousedown/">.mousedown() | jQuery API Documentation</a>
		 * @see <a href="https://api.jquery.com/mouseup/">.mouseup() | jQuery API Documentation</a>
		 *
		 * @see <a href="http://www.1keydata.com/css-tutorial/tw/">CSS 語法教學 - 1Keydata</a>
		 * @see <a href="http://www.1keydata.com/css-tutorial/tw/padding.php">CSS 留白 (Padding) - 1Keydata CSS 語法教學</a>
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var frmConfirmMessage = function(frmId, message) {

			var tag = '<div id="frmConfirmMessage" style="display: none; padding: 0px 0px 20px 0px;">'
							+ '  <div class="ace-font" style="padding: 20px; text-align: center;">' + message + '</div>'
							+ '  <div class="center">'
							+ '    <input type="button" id="btnConfirm" class="flatbtn-blu" value="確定" tabindex="0">'
							+ '    <input type="button" id="btnCancel" class="flatbtn-blu" value="取消" tabindex="1">'
							+ '  </div>'
							+ '</div>';

			if (jQuery('#' + frmId).length == 0) jQuery(tag).appendTo('body');

			jQuery('#' + frmId).css(formCSS);

			jQuery('#' + frmId).css({

				'width': '300px',
				'background': '#f3f6fa'
			});

			jQuery('#' + frmId).find('.flatbtn-blu').css(flatbtnCSS);

			jQuery('#' + frmId).find('.flatbtn-blu').hover(

				function() {

					jQuery(this).css({

						"color": "#fff",
						"background-color": "#519dde"
					});
				},
				function() {

					jQuery(this).css({

						"color": "#edf4f9",
						"background-color": "#4f94cf"
					});
				}
			);

			jQuery('#' + frmId).find('#btnConfirm').on('mousedown', function() {

				jQuery(this).css({

					"-webkit-box-shadow": "inset 0 1px 5px rgba(0, 0, 0, 0.1)",
					"-moz-box-shadowv": "inset 0 1px 5px rgba(0, 0, 0, 0.1)",
					"box-shadow": "inset 0 1px 5px rgba(0, 0, 0, 0.1)"
				});
			});

			
			jQuery('#' + frmId).find('#btnCancel').on('mousedown', function() {

				jQuery(this).css({

					"-webkit-box-shadow": "inset 0 1px 5px rgba(0, 0, 0, 0.1)",
					"-moz-box-shadowv": "inset 0 1px 5px rgba(0, 0, 0, 0.1)",
					"box-shadow": "inset 0 1px 5px rgba(0, 0, 0, 0.1)"
				});
			});

			return jQuery('#' + frmId);
		}

		/**
		 *
		 * OperatePanels
     *
     * @author ace
     *
     * @version 2016/03/06 初始版本。
     *
     * @param
		 *
		 * @return
     *
     * @require
     *
		 * @see <a href="https://jquery.com/">jQuery</a>
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var frmOperatePanels = function() {

			var frmId = 'frmOperatePanels';

			if (jQuery('#' + frmId).length == 0) jQuery('<div id="' + frmId + '" class="ace-font" style="display: none;"></div>').appendTo('body');

			jQuery('#' + frmId).css(formCSS);

			return jQuery('#' + frmId);
		}

		/**
		 *
		 * OperatePanelsDetail
     *
     * @author ace
     *
     * @version 2016/03/06 初始版本。
     *
     * @param
		 *
		 * @return
     *
     * @require
     *
		 * @see <a href="https://jquery.com/">jQuery</a>
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var frmOperatePanelsDetail = function() {

			var frmId = 'frmOperatePanelsDetail';

			if (jQuery('#' + frmId).length == 0) jQuery('<div id="' + frmId + '" class="ace-font" style="display: none;"></div>').appendTo('body');

			jQuery('#' + frmId).css(formCSS);

			jQuery('#' + frmId).css({

				'position': 'relative'
			});

			return jQuery('#' + frmId);
		}

		/**
		 *
		 * Programs
     *
     * @author ace
     *
     * @version 2016/03/09 初始版本。
     *
     * @param
		 *
		 * @return
     *
     * @require
     *
		 * @see <a href="https://jquery.com/">jQuery</a>
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var frmPrograms = function() {

			var frmId = 'frmPrograms';

			if (jQuery('#' + frmId).length == 0) jQuery('<div id="' + frmId + '" class="ace-font" style="display: none;"></div>').appendTo('body');

			jQuery('#' + frmId).css(formCSS);

			return jQuery('#' + frmId);
		}

		/**
		 *
		 * Login
     *
     * @author ace
     *
     * @version 2015/10/25 初始版本。
     *
     * @param
		 *
		 * @return
     *
     * @require
     *
		 * @see <a href="http://api.jquery.com/jquery/">jQuery() | jQuery API Documentation</a>
		 * @see <a href="http://api.jquery.com/css/">.css() | jQuery API Documentation</a>
		 * @see <a href="https://api.jquery.com/focus/">.focus() | jQuery API Documentation</a>
		 * @see <a href="https://api.jquery.com/focusin/">.focusin() | jQuery API Documentation</a>
		 * @see <a href="https://api.jquery.com/focusout/">.focusout() | jQuery API Documentation</a>
		 * @see <a href="https://api.jquery.com/blur/">.blur() | jQuery API Documentation</a>
		 *
		 * @see <a href="http://www.1keydata.com/css-tutorial/tw/">CSS 語法教學 - 1Keydata</a>
		 * @see <a href="http://www.1keydata.com/css-tutorial/tw/padding.php">CSS 留白 (Padding) - 1Keydata CSS 語法教學</a>
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var frmLogin = function() {

			var frmTag;

			if (jQuery('#frmLogin').length == 0) {

				frmTag = '<div id="frmLogin" class="ace-font" style="display: none;">'
							 + '  <h1>登入系統</h1>'
							 + '  <div><label>帳號:</label><input type="text" id="txtUserAccount" class="txtfield" tabindex="1"></div>'
							 + '  <div><label>密碼:</label><input type="password" id="txtUserPassword" class="txtfield" tabindex="2"></div>'
							 + '</div>';

				jQuery(frmTag).appendTo('body');
			}

			jQuery('#frmLogin').css(formCSS);

			jQuery('#frmLogin').css({

				'width': '300px',
				'background': '#f3f6fa'
			});

			jQuery('#frmLogin .txtfield').css({

				"padding": "6px 5px",
				"margin-bottom": "15px",
				"font-family": "'Helvetica Neue', Helvetica, Verdana, sans-serif",
				"color": "#7988a3",
				"text-shadow": "1px 1px 0 rgba(255, 255, 255, 0.8)",
				"background-color": "#fff",
				"background-image": "-webkit-gradient(linear, left top, left bottom, from(#edf3f9), to(#fff))",
				"background-image": "-webkit-linear-gradient(top, #edf3f9, #fff)",
				"background-image": "-moz-linear-gradient(top, #edf3f9, #fff)",
				"background-image": "-ms-linear-gradient(top, #edf3f9, #fff)",
				"background-image": "-o-linear-gradient(top, #edf3f9, #fff)",
				"background-image": "linear-gradient(top, #edf3f9, #fff)",
				"border": "1px solid",
				"border-color": "#abbce8 #c3cae0 #b9c8ef",
				"-webkit-border-radius": "4px",
				"-moz-border-radius": "4px",
				"border-radius": "4px",
				"-webkit-box-shadow": "inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.4)",
				"-moz-box-shadow": "inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.4)",
				"box-shadow": "inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.4)",
				"-webkit-transition": "all 0.25s linear",
				"-moz-transition": "all 0.25s linear",
				"transition": "all 0.25s linear"
			});

			jQuery('#frmLogin .txtfield').focusin(function() {

				jQuery(this).css({

					"color": "#525864",
					"border-color": "#84c0ee",
					"-webkit-box-shadow": "inset 0 1px 2px rgba(0, 0, 0, 0.15), 0 0 7px #96c7ec",
					"-moz-box-shadow": "inset 0 1px 2px rgba(0, 0, 0, 0.15), 0 0 7px #96c7ec",
					"box-shadow": "inset 0 1px 2px rgba(0, 0, 0, 0.15), 0 0 7px #96c7ec"
				});
			});

			jQuery('#frmLogin .txtfield').focusout(function() {

				jQuery(this).css({

					"color": "#7988a3",
					"border-color": "#abbce8 #c3cae0 #b9c8ef",
					"-webkit-box-shadow": "inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.4)",
					"-moz-box-shadow": "inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.4)",
					"box-shadow": "inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.4)"
				});
			});

			return jQuery('#frmLogin');
		}

		return {

			frmConfirmMessage: frmConfirmMessage,
			frmOperatePanels: frmOperatePanels,
			frmOperatePanelsDetail: frmOperatePanelsDetail,
			frmPrograms: frmPrograms,
			frmLogin: frmLogin
		};
	});
})(this);
