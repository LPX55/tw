/**
 *
 * @description CommonForm
 *
 * @version 2016/10/16 初始版本。
 * @version 2017/03/17 新增showLoadingEffect函數。
 * @version 2017/04/08 新增selectUsersModal函數。
 * @version 2017/06/30 新增showAbout函數。
 * @version 2017/07/12 新增selectDrinksModal函數。
 * @version 2017/07/24 新增selectFileModal函數。
 * @version 2017/07/26 新增selectSizeGroupsModal函數。
 * @version 2017/07/27 新增selectSugarGroupsModal函數。
 * @version 2017/07/27 新增selectIceDosageGroupsModal函數。
 * @version 2017/09/07 新增showInputModal函數。
 * @version 2018/06/25 新增showBetweenTrnDateModal函數。
 * @version 2018/06/28 新增selectLargeClassesModal函數。
 * @version 2018/06/29 新增selectMiddleClassesModal函數。
 * @version 2018/06/29 新增selectSmallClassesModal函數。
 * @version 2018/06/30 新增selectSizesModal函數。
 * @version 2018/07/02 新增checkSizeGroupsDetailModal函數。
 * @version 2018/07/03 新增selectSugarsModal函數。
 * @version 2018/07/03 新增checkSugarGroupsDetailModal函數。
 * @version 2018/07/04 新增selectIceDosagesModal函數。
 * @version 2018/07/04 新增checkIceDosageGroupsDetailModal函數。
 * @version 2018/07/14 新增showInputNumberModal函數。
 * @version 2018/09/04 新增showTextareaModal函數。
 * @version 2019/04/09 新增getTextareaModal函數。
 *
 * @author ace
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web|Web technology for developers | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API|Web APIs | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/Events|Event reference | MDN}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript|JavaScript | MDN}
 * @see {@link https://developer.mozilla.org/zh-TW/docs/Web/JavaScript|JavaScript | MDN}
 * @see {@link https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference|JavaScript 參考文件 | MDN}
 * @see {@link https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects|標準內建物件 | MDN}
 *
 * @see {@link http://requirejs.org/|RequireJS}
 *
 * @see {@link https://jquery.com/|jQuery}
 *
 * @see {@link https://api.jquery.com/|jQuery API Documentation}
 * @see {@link https://api.jquery.com/addclass/|.addClass() | jQuery API Documentation}
 * @see {@link https://api.jquery.com/removeclass/|.removeClass() | jQuery API Documentation}
 *
 * @see {@link https://getbootstrap.com/|Bootstrap · The most popular HTML, CSS, and JS library in the world.}
 *
 * @see {@link http://underscorejs.org/|Underscore.js}
 * @see {@link https://github.com/jashkenas/underscore|jashkenas/underscore: JavaScript's utility _ belt}
 *
 * @see {@link http://backbonejs.org/|Backbone.js}
 * @see {@link https://github.com/jashkenas/backbone|jashkenas/backbone: Give your JS App some Backbone with Models, Views, Collections, and Events}
 * @see {@link https://github.com/jashkenas/backbone/wiki/Tutorials%2C-blog-posts-and-example-sites|Tutorials, blog posts and example sites · jashkenas/backbone Wiki}
 *
 * @see {@link https://fontawesome.com/|Font Awesome}
 *
 * @see {@link http://bootboxjs.com/|Bootbox.js — alert, confirm and flexible dialogs for the Bootstrap framework}
 * @see {@link https://github.com/ehpc/bootstrap-waitingfor|ehpc/bootstrap-waitingfor: "Waiting for..." modal dialog with progress bar for Bootstrap}
 *
 */

(function(root) {

	define(["jasny-rowlink", "underscore"], function() {

		var addBaseModal = function(modalHeader, modalBody, modalFooter) {

			var modalId = 'modal' + Math.random().toString(36).substr(2, 6);

			var tag = '<div id="' + modalId + '" class="modal fade" tabindex="-1" role="dialog">'
							+ '  <div class="modal-dialog" role="document">'
							+ '    <div class="modal-content">'
							+ '    </div>'	// <!-- /.modal-content -->
							+ '  </div>'		// <!-- /.modal-dialog -->
							+ '</div>';			// <!-- /.modal -->
			var result = jQuery(tag);

			if ((typeof modalHeader !== 'undefined') && (modalHeader !== null)) result.find('.modal-content').append(modalHeader);
			if ((typeof modalBody !== 'undefined') && (modalBody !== null)) result.find('.modal-content').append(modalBody);
			if ((typeof modalFooter !== 'undefined') && (modalFooter !== null)) result.find('.modal-content').append(modalFooter);

			result.appendTo('body');

			return result;
		}

		/**
		 *
		 * @description Show Item Select Modal
		 *
		 * @param {jQuery} Header。
		 * @param {jQuery} Body。
		 * @param {jQuery} Footer。
		 * @param {function} callback。
		 *
		 * @require bootstrap
		 *
		 * @version 2018/07/02 初始版本。
		 *
		 * @author ace
		 *
		 */
		function showItemSelectModal(modalHeader, modalBody, getTDIndex, callback) {

			var result = null;

			var tag;
			var modalFooter;
			
			var inpSearchId = 'inpSearch' + Math.random().toString(36).substr(2, 6);

			var baseModal;

			tag = '<div class="modal-footer">'
					+ '  <button type="button" class="btn btn-primary" data-dismiss="modal">取消</button>'
					+ '</div>';
			modalFooter = jQuery(tag);
			
			modalBody.children().first().before('<input type="text" class="form-control" id="' + inpSearchId + '" style="margin-bottom: 5px;" placeholder="Search..">');

			baseModal = addBaseModal(modalHeader, modalBody, modalFooter);

			modalBody.find('tr').on('click', function(event) {

				jQuery(event.toElement).parent().find('td').each(function(index, element) {

					if (index === getTDIndex) result = jQuery(element).text();
				});

				baseModal.modal('hide');
			});

		  jQuery('#' + inpSearchId).on('keyup', function(event) {

				var value = jQuery(this).val().toLowerCase();

				// jQuery('#' + modalId + ' div > table > tbody > tr').filter(function() {
				baseModal.find('tr').filter(function() {

					jQuery(this).toggle(jQuery(this).text().toLowerCase().indexOf(value) > -1);
				});
			});
				
			baseModal.on('shown.bs.modal', function() {

				jQuery('#' + inpSearchId).focus().select();
			});
			
			baseModal.on('hidden.bs.modal', function(event) {

				jQuery(this).remove();

				if (typeof callback === 'function') callback(result);
			});

			baseModal.modal('show');
		}

		function showItemCheckModal(modalHeader, modalBody, checkEventFunction) {
		
			var result = null;

			var tag;
			var modalFooter;

			var baseModal;

			tag = '<div class="modal-footer">'
					+ '  <button type="button" class="btn btn-primary" data-dismiss="modal">關閉</button>'
					+ '</div>';
			modalFooter = jQuery(tag);

			baseModal = addBaseModal(modalHeader, modalBody, modalFooter);
			
			modalBody.find('tr').on('click', function(event) {
			
				var tr;
				var result = null;
				var okElement = null;
			
				if (jQuery(event.target).is('td')) {

					tr = jQuery(event.target).parent();
				}
				else if (jQuery(event.target).is('span')) {

					tr = jQuery(event.target).parent().parent();
				}

				tr.find('td').each(function(index, element) {

					if (index === 0) {

						okElement = jQuery(element).find('span');
					}
					else if (index === 1) {

						result = jQuery(element).text();
					}
				});
				
				if (typeof checkEventFunction === 'function') {
				
					checkEventFunction(
				
						result, 
						okElement.hasClass('glyphicon-ok'),
						function() {okElement.removeClass('glyphicon glyphicon-ok');},
						function() {okElement.addClass('glyphicon glyphicon-ok');}
					);
				}	
			});
			
			baseModal.on('hidden.bs.modal', function(event) {jQuery(this).remove();});
			
			baseModal.modal('show');
		}
		
		/**
		 *
		 * @description 閃動訊息框
		 *
		 * @param {String} 訊息字串。
		 * @param {Number} 延遲時間。
		 *
		 * @require
		 *
		 * @version 2016/10/28 初始版本。
		 *
		 * @author ace
		 *
		 */
		var showFlashMessage = function() {

			var message = '';
			var duration = 750;
			var callback;

			if (arguments.length >= 1) message = arguments[0];

			if (arguments.length === 2) {

				if (typeof arguments[1] === 'number') duration = arguments[1];
				if (typeof arguments[1] === 'function') callback = arguments[1];
			}
			else if (arguments.length === 3) {

				duration = arguments[1];
				callback = arguments[2];
			}

			requirejs(["bootbox"], function(bootbox) {

        var tag = '<div class="text-center h4">'
                + '  <strong>' + message + '</strong>'
                + '</div>';

        var dialog = bootbox.dialog({

          message: tag,
          closeButton: false
        });

        setTimeout(

					function() {

						dialog.modal('hide');

						if (typeof callback === 'function') callback();
					},
					duration
				);
			});
		};

		/**
		 *
		 * @description 動態產生確認對話框
		 *
		 * @param {String} 訊息字串。
		 * @param {String} 抬頭字串。
		 * @param {Function} 對話框關閉後的回呼函數。
		 *
		 * @return
		 *
		 * @require
		 *
		 * @version 2015/10/24 初始版本。
		 *
		 * @author ace
		 *
		 * @see {@link https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/arguments|Arguments 物件 | MDN}
		 *
		 * @comment 2015/10/25 JavaScript is single-threaded, which means when you call a function, it blocks until it returns.
		 * @comment 2015/10/25 alert()函數屬於window物件的函數。因此呼叫alert()函數時，控制將轉移給瀏覽器，直到瀏覽器還回控制權。
		 *
		 */
		var showMessage = function() {

			var message = '';
			var title = '';
			var callback;

			if (arguments.length >= 1) message = arguments[0];

			if (arguments.length == 2) {

				if (typeof arguments[1] == 'string') title = arguments[1];
				if (typeof arguments[1] == 'function') callback = arguments[1];
			}
			else if (arguments.length == 3) {

				title = arguments[1];
				callback = arguments[2];
			}

			requirejs(["bootbox"], function(bootbox) {

        var tag = '<div class="text-center h4">'
                + '  <strong>' + message + '</strong>'
                + '</div>';

        var dialog = bootbox.dialog({

          message: tag,
					title: title,
					onEscape: false,
          closeButton: false,
					buttons: {

						confirm: {

							label: '確認',
							className: 'btn-primary',
							callback: function() {

								dialog.modal('hide');

								if (typeof callback == 'function') callback();
							}
						}
					}
        });
			});
		};

		/**
		 *
		 * @description 動態產生確認對話框
		 *
		 * @param {String} 訊息字串。
		 * @param {Function} 確認後的回呼函數。
		 * @param {Function} 取消後的回呼函數。
		 *
		 * @require
		 *
		 * @version 2016/03/03 初始版本。
		 *
		 * @author ace
		 *
		 */
		var showConfirmMessage = function(message, confirmCallback, cancelCallback) {

			requirejs(["bootbox"], function(bootbox) {

        var tag = '<div class="text-center h4">'
                + '  <strong>' + message + '</strong>'
                + '</div>';

        var dialog = bootbox.dialog({

          message: tag,
					onEscape: false,
          closeButton: false,
					buttons: {

						confirm: {

							label: '確認',
							className: 'btn-primary',
							callback: function() {

								dialog.modal('hide');

								if (typeof confirmCallback === 'function') confirmCallback();
							}
						},
						cancel: {

							label: '取消',
							className: 'btn-primary',
							callback: function() {

								dialog.modal('hide');

								if (typeof cancelCallback === 'function') cancelCallback();
							}
						}
					}
        });
			});
		};

		/**
		 *
		 * @description Progress Bar Modal
		 *
		 * @param {String} message。
		 * @param {Function} showCallback。
		 * @param {Function} closeCallback。
		 *
		 * @require bootstrap
	   *
		 * @version 2016/03/14 初始版本。
		 *
		 * @author ace
		 *
		 */
		var showProgressbar = function(message, showCallback, closeCallback) {
		
			var baseModal, modalHeader, modalBody;

			var defaultTitle = message;
			
			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">' + defaultTitle + '</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <div class="progress progress-striped active" style="margin-bottom: 0px;">'
					+ '    <div class="progress-bar" style="width: 100%;"></div>'
					+ '  </div>'
					+	'</div>';
			modalBody = jQuery(tag);
			
			baseModal = addBaseModal(modalHeader, modalBody);
			
			baseModal.on('shown.bs.modal', function() {

				if (typeof showCallback === 'function') showCallback(function() { setTimeout(function() { baseModal.modal('hide'); }, 200); });
			});
			
			baseModal.on('hidden.bs.modal', function() {
			
				jQuery(this).remove();
				
				if (typeof closeCallback === 'function') closeCallback();
			});
			
			baseModal.modal({
			
				"backdrop": "static",
				"keyboard": false,
				"show": true
			});
		};

		/**
		 *
		 * @description Marquee Bar Modal
		 *
		 * @param {String} message。
		 * @param {Function} showCallback。
		 * @param {Function} closeCallback。
		 *
		 * @require bootstrap
	   *
		 * @version 2017/06/09 初始版本。
		 *
		 * @author ace
		 *
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS|CSS: Cascading Style Sheets | MDN}
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions|CSS Transitions | MDN}
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions|Using CSS transitions | MDN}
		 *
		 * @see {@link https://www.w3schools.com/cssref/|CSS Reference}
		 * @see {@link https://www.w3schools.com/cssref/css3_pr_transition.asp|CSS transition Property}
		 * @see {@link https://www.w3schools.com/cssref/css3_pr_transition-property.asp|CSS transition-property Property}
		 * @see {@link https://www.w3schools.com/cssref/css3_pr_transition-delay.asp|CSS transition-delay Property}
		 * @see {@link https://www.w3schools.com/cssref/css3_pr_transition-duration.asp|CSS transition-duration Property}
		 * @see {@link https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp|CSS transition-timing-function Property}
		 *
		 * @see {@link https://github.com/dwmkerr/angular-modal-service/issues/41|.modal-open still attached to body after modal is closed · Issue #41 · dwmkerr/angular-modal-service}
		 * @see {@link https://github.com/thednp/bootstrap.native/issues/125|.modal-open class not removed when closing modal quickly · Issue #125 · thednp/bootstrap.native}
		 * @see {@link https://github.com/valor-software/ngx-bootstrap/issues/2137|Modal keeps body class `modal-open` on after closing, causing scrollbars to disappear · Issue #2137 · valor-software/ngx-bootstrap}
		 *
		 * @see {@link https://stackoverflow.com/questions/11519660/twitter-bootstrap-modal-backdrop-doesnt-disappear|Twitter bootstrap modal-backdrop doesn't disappear - Stack Overflow}
		 * @see {@link https://stackoverflow.com/questions/22056147/bootstrap-modal-backdrop-remaining|javascript - Bootstrap Modal Backdrop Remaining - Stack Overflow}
		 * @see {@link https://stackoverflow.com/questions/49701172/modal-open-is-not-removing-from-body|javascript - modal-open is not removing from <body> - Stack Overflow}
		 *
		 * @see {@link https://stackoverflow.com/questions/32168234/change-the-bootstrap-modal-effect|css - Change the Bootstrap Modal effect - Stack Overflow}
		 * @see {@link https://codepen.io/nhembram/pen/PzyYLL|Bootstrap Modal Animation With Animate.css}
		 *
		 * @see {@link https://getbootstrap.com/docs/4.0/components/modal/|Modal · Bootstrap}
		 *
		 * @see {@link https://www.w3schools.com/Bootstrap/bootstrap_progressbars.asp|Bootstrap Progress Bars}
		 *
		 * @see {@link https://stackoverflow.com/questions/26756500/how-to-make-bootbox-closing-when-using-custom-dialog|javascript - How to make bootbox closing when using custom dialog - Stack Overflow}
		 * @see {@link https://github.com/makeusabrew/bootbox/issues/446|No example in documentation for bootbox.init · Issue #446 · makeusabrew/bootbox}
		 *
		 * @comment 20190110 ace bootstrap-waitingfor提供的UI在會出現無法完整移除的狀況，在連續顯示訊息時造成畫面卡住的狀況；改以bootbox顯示訊息。
		 *
		 */
		var showMarqueebar = function(message, showCallback, closeCallback) {

			var baseModal, modalHeader, modalBody;

			var defaultTitle = message;
			
			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">' + defaultTitle + '</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <div class="progress progress-striped active" style="margin-bottom: 0px;">'
					+ '    <div class="progress-bar" style="width: 100%;"></div>'
					+ '  </div>'
					+	'</div>';
			modalBody = jQuery(tag);
			
			baseModal = addBaseModal(modalHeader, modalBody);
			
			baseModal.on('shown.bs.modal', function() {

				// console.log(jQuery('.modal.fade').css('transition'));
				// console.log(jQuery('.modal.fade').css('transition-duration'));
				// console.log(jQuery('.modal.fade').css('transition-delay'));
				
				if (typeof showCallback === 'function') showCallback(function() { setTimeout(function() { baseModal.modal('hide'); }, 200); });
			});
			
			baseModal.on('hidden.bs.modal', function() {
			
				jQuery(this).remove();
				
				if (typeof closeCallback === 'function') closeCallback();
			});
			
			baseModal.modal({
			
				"backdrop": "static",
				"keyboard": false,
				"show": true
			});
		};

		/**
		 *
		 * @description showLoadingEffect
		 *
		 * @param {function} callback
		 *
		 * @version 2017/03/17 初始版本。
		 *
		 * @author ace
		 *
		 * @see {@link https://bootsnipp.com/snippets/BDk3p|Bootstrap Snippet Loading Page using HTML CSS Bootstrap Javascript}
		 * @see {@link https://stackoverflow.com/questions/6919236/hide-document-body-on-page-load|javascript - Hide document body on page load - Stack Overflow}
		 * @see {@link https://stackoverflow.com/questions/5680657/adding-css-file-with-jquery|javascript - adding css file with jquery - Stack Overflow}
		 * @see {@link https://ithelp.ithome.com.tw/articles/10128451|CSS沒有極限 - 別忘了偽元素 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天}
		 * @see {@link https://stackoverflow.com/questions/5041494/selecting-and-manipulating-css-pseudo-elements-such-as-before-and-after-usin|javascript - Selecting and manipulating CSS pseudo-elements such as ::before and ::after using jQuery - Stack Overflow}
		 * @see {@link https://stackoverflow.com/questions/19627745/using-jquery-remove-style-tag-from-html-page|Using jquery remove style tag from html page - Stack Overflow}
		 *
		 */
		var showLoadingEffect = function(callback) {

			var loadingBgId = 'loading-bg' + Math.random().toString(36).substr(2, 6);
			var loadingWrapperId = 'loading-wrapper' + Math.random().toString(36).substr(2, 6);
			
			var styleId = 'style' + Math.random().toString(36).substr(2, 6);

			var tag;

			tag = '<style type="text/css" id="' + styleId + '">'
					+ '  #' + loadingWrapperId + ':before, ' + '#' + loadingWrapperId + ':after {'
					+ '  content: "";'
					+ '  position: absolute;'
					+ '  z-index: -1;'
					+ '  border-radius: inherit;'
					+ '  box-shadow: inset 0 0 2em rgba(255,255,255,0.3);'
					+ '  border: 1em dashed;'
					+ '  }'

					+ '  #' + loadingWrapperId + ':before {'
					+ '  top: 0;'
					+ '  right: 0;'
					+ '  bottom: 0;'
					+ '  left: 0;'
					+ '  border-color: rgba(138, 189, 195, 0.2);'
					+ '  }'

					+ '  #' + loadingWrapperId + ':after {'
					+ '    top: 1em;'
					+ '    right: 1em;'
					+ '    bottom: 1em;'
					+ '    left: 1em;'
					+ '    border-color: rgba(138,189,195,0.4);'
					+ '  }'

					+ '  @keyframes rota {to {transform: rotate(360deg);}}'
					+ '  @keyframes loading-1 {14.28% {opacity: 0.3;}}'
					+ '  @keyframes loading-2 {28.57% {opacity: 0.3;}}'
					+ '  @keyframes loading-3 {42.86% {opacity: 0.3;}}'
					+ '  @keyframes loading-4 {57.14% {opacity: 0.3;}}'
					+ '  @keyframes loading-5 {71.43% {opacity: 0.3;}}'
					+ '  @keyframes loading-6 {85.71% {opacity: 0.3;}}'
					+ '  @keyframes loading-7 {  100% {opacity: 0.3;}}'
					+ '</style>';
			jQuery(tag).appendTo('body');

			tag = '<div id="' + loadingBgId + '"></div>'
					+ '<div id="' + loadingWrapperId + '">'
					+ '  <div>'
					+ '    <span>L</span>'
					+ '    <span>o</span>'
					+ '    <span>a</span>'
					+ '    <span>d</span>'
					+ '    <span>i</span>'
					+ '    <span>n</span>'
					+ '    <span>g</span>'
					+ '  </div>'
					+ '</div>';
			jQuery(tag).appendTo('body');

			jQuery('#' + loadingBgId)
			.css({

				"position": "fixed",
				"left": "0px",
				"top": "0px",
				"width": "100%",
				"height": "100%",
				"background": "#EEE"
			});

			jQuery('#' + loadingWrapperId)
			.css({

				"position": "fixed",
				"left": "50%",
				"top": "50%",
				"width": "9em",
				"height": "9em",
				"margin-top": "-100px",
				"margin-left": "-100px",
				"line-height": "6.5em",

				"color": "#444",
				"text-align": "center",
				"text-transform": "uppercase",
				"text-shadow": "0 .04em rgba(255,255,255,0.9)",

				"background": "rgba(255,255,255,0.1)",
				"border": "1em dashed rgba(138,189,195,0.5)",
				"border-radius": "50%",
				"box-shadow": "inset 0 0 2em rgba(255,255,255,0.3), 0 0 0 0.7em rgba(255,255,255,0.3)",

				"font-size": "25px",

				"animation": "rota 3.5s linear infinite"
			});

			jQuery('#' + loadingWrapperId + ' div')
			.css({

				"width": "100%",
				"height": "100%",
				"animation": "rota 3.5s linear reverse infinite"
			});

			jQuery('#' + loadingWrapperId + ' span')
			.css({

				"display": "inline-block",
				"animation": "placeholder 1.5s ease-out infinite"
			});

			jQuery('#' + loadingWrapperId + ' span:nth-child(1)').css({"animation-name": "loading-1"});
			jQuery('#' + loadingWrapperId + ' span:nth-child(2)').css({"animation-name": "loading-2"});
			jQuery('#' + loadingWrapperId + ' span:nth-child(3)').css({"animation-name": "loading-3"});
			jQuery('#' + loadingWrapperId + ' span:nth-child(4)').css({"animation-name": "loading-4"});
			jQuery('#' + loadingWrapperId + ' span:nth-child(5)').css({"animation-name": "loading-5"});
			jQuery('#' + loadingWrapperId + ' span:nth-child(6)').css({"animation-name": "loading-6"});
			jQuery('#' + loadingWrapperId + ' span:nth-child(7)').css({"animation-name": "loading-7"});

			if (typeof callback == 'function') {

				callback(function() {

					jQuery('#' + loadingBgId).fadeOut('slow');
					jQuery('#' + loadingWrapperId).fadeOut('slow');
					
					jQuery('#' + styleId).remove();
					jQuery('#' + loadingBgId).remove();
					jQuery('#' + loadingWrapperId).remove();
				});
			}
		};

		/**
		 *
		 * @description 登入系統對話框
		 *
		 * @require bootstrap
	   *
		 * @version 2015/10/22 初始版本。
		 *
		 * @author ace
		 *
		 * @see {@link https://designshack.net/articles/javascript/howto-code-modal-window-login-form/|Create a Modal Window Login Form Effect Using jQuery | Design Shack}
		 * @see {@link https://designshack.net/tutorialexamples/modal-login-jquery/index.html|Modal Login Window Demo}
		 * @see {@link https://designshack.net/tutorialexamples/modal-login-jquery/modal-login-jquery.zipl|modal-login-jquery.zip}
		 *
		 * @see {@link http://leanmodal.finelysliced.com.au/|leanModal - a JQuery modal plugin that works with your CSS}
		 * @see {@link http://leanmodal.finelysliced.com.au/leanModal.v1.1.zip|leanModal.v1.1.zip}
		 *
		 * @see {@link https://bootsnipp.com/snippets/featured/clean-modal-login-form|Bootstrap Snippet Clean Modal Login Form using HTML CSS}
		 *
		 * @see {@link https://stackoverflow.com/questions/15961484/leanmodal-js-simplest-jquery-modal-script-troubleshooting|css - leanModal.js - Simplest jQuery Modal Script Troubleshooting - Stack Overflow}
		 *
		 * @see {@link https://stackoverflow.com/questions/21051440/how-to-define-the-css-hover-state-in-a-jquery-selector|javascript - How to define the css :hover state in a jQuery selector? - Stack Overflow}
		 *
		 * @see {@link https://stackoverflow.com/questions/979662/how-to-detect-pressing-enter-on-keyboard-using-jquery|javascript - How to detect pressing Enter on keyboard using jQuery? - Stack Overflow}
		 *
		 */
		var showLogin = function(callback) {

			var checkValue = function() {

				var result = {

					"error_code": 0
				};

				if (jQuery('#' + inpUserAccount).val() === '') {

					result = {

						"error_code": 1,
						"error_message": "帳號不可空白！",
						"element": jQuery('#' + inpUserAccount)
					};
				}
				else if (jQuery('#' + inpUserPassword).val() === '') {

					result = {

						"return_value": 1,
						"error_message": "密碼不可空白！",
						"element": jQuery('#' + inpUserPassword)
					};
				}

				return result;
			};

			var frmId = 'modalLogin' + Math.random().toString(36).substr(2, 6);
			var btnConfirm = 'btnConfirm' + Math.random().toString(36).substr(2, 6);
			var btnCancel = 'btnCancel' + Math.random().toString(36).substr(2, 6);
			var inpUserAccount = 'inpUserAccount' + Math.random().toString(36).substr(2, 6);
			var inpUserPassword = 'inpUserPassword' + Math.random().toString(36).substr(2, 6);
			var loginMessage = 'loginMessage' + Math.random().toString(36).substr(2, 6);

			var tag = '<div class="modal fade" id="' + frmId + '" tabindex="-1" role="dialog">'
							+ '  <div class="modal-dialog" role="document">'
							+ '    <div style="padding: 30px; margin: 0 auto; width: 100% !important; max-width: 350px; overflow: hidden; background-color: #F7F7F7; border-radius: 2px; box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);">'
							+ '		   <h2 style="text-align: center;">登入系統</h2>'
							+ '			 <input type="text" id="' + inpUserAccount + '" placeholder="Account">'
							+ '			 <input type="password" id="' + inpUserPassword + '" placeholder="Password">'
							+ '			 <input type="button" id="' + btnConfirm + '" value="確認">'
							+ '			 <input type="button" id="' + btnCancel + '" value="取消">'
							+ '      <h2 id="' + loginMessage + '" style="text-align: center;"></h2>'
							+ '		 </div>'
							+ '  </div>'
							+ '</div>';

			var inputCSS = {

				"font-size": "16px",
				"height": "44px",
				"width": "100%",
				"margin-bottom": "10px",
				"padding": "0 8px",
				"border": "1px solid #D9D9D9",
				"background": "#FFFFFF",
				"-webkit-box-sizing": "border-box",
				"-moz-box-sizing": "border-box",
				"box-sizing": "border-box",
			};

			jQuery(tag).appendTo('body');

			jQuery('#' + frmId).find('input:text').css(inputCSS);
			jQuery('#' + frmId).find('input:password').css(inputCSS);

			jQuery('#' + frmId).find('input:text').hover(

				function() {

					jQuery(this).css({

						"border": "1px solid #B9B9B9",
						"-moz-box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.1) inset",
						"-webkit-box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.1) inset",
						"box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.1) inset"
					});
				},
				function() {

					jQuery(this).css({

						"border": "1px solid #D9D9D9",
						"-moz-box-shadow": "none",
						"-webkit-box-shadow": "none",
						"box-shadow": "none"
					});
				}
			);

			jQuery('#' + frmId).find('input:password').hover(

				function() {

					jQuery(this).css({

						"border": "1px solid #B9B9B9",
						"-moz-box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.1) inset",
						"-webkit-box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.1) inset",
						"box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.1) inset"
					});
				},
				function() {

					jQuery(this).css({

						"border": "1px solid #D9D9D9",
						"-moz-box-shadow": "none",
						"-webkit-box-shadow": "none",
						"box-shadow": "none"
					});
				}
			);

			jQuery('#' + frmId).find('input:button').css({

				"font-size": "14px",
				"padding": "17px 0px",
				"width": "100%",
				"display": "block",
				"margin-bottom": "10px",
				"border": "0px",
				"color": "#FFFFFF",
				"text-shadow": "0 1px rgba(0, 0, 0, 0.1)",
				"background-color": "#4D90FE"
			});

			jQuery('#' + frmId).find('input:button').hover(

				function() {

					jQuery(this).css({

						"text-shadow": "0 1px rgba(0, 0, 0, 0.3)",
						"background-color": "#357AE8"
					});
				},
				function() {

					jQuery(this).css({

						"text-shadow": "0 1px rgba(0, 0, 0, 0.1)",
						"background-color": "#4D90FE"
					});
				}
			);

			jQuery('#' + btnConfirm).on('click', function(e) {

				jQuery('#' + frmId).off('hidden.bs.modal');

				jQuery('#' + frmId).on('hidden.bs.modal', function() {

					var message;

					if (checkValue()["error_code"] === 1) {

						message = checkValue()["error_message"];

						showMessage(message, '', function() {

							jQuery('#' + frmId).off('shown.bs.modal');

							jQuery('#' + frmId).on('shown.bs.modal', function() {checkValue()["element"].focus().select();});

							jQuery('#' + frmId).modal({keyboard: false});
							jQuery('#' + frmId).modal('show');
						});
					}
					else {

						requirejs(["tw.ace33022.util.InitReSetUtil"], function(InitReSetUtil) {

							showProgressbar(

								'系統登入中，請稍候‧‧‧',
								function(closeProgressbar) {

									InitReSetUtil.doLogin(

										jQuery('#' + inpUserAccount).val(),
										jQuery('#' + inpUserPassword).val(),
										function(data, textStatus, jqXHR) {

											var message;

											closeProgressbar();

											if (data["error_code"] !== 0) {

												message = '錯誤訊息：' + data["error_message"];

												showMessage(message, '登入系統失敗！', function() {

													jQuery('#' + frmId).off('shown.bs.modal');

													jQuery('#' + frmId).on('shown.bs.modal', function() {jQuery('#' + inpUserAccount).focus().select();});

													jQuery('#' + frmId).modal({keyboard: false});
													jQuery('#' + frmId).modal('show');
												});
											}
											else {

											  // remove the event listeners when the dialog is dismissed
												jQuery('#' + btnConfirm).off('click');
												jQuery('#' + btnCancel).off('click');

												// remove the actual elements from the DOM when fully hidden
												jQuery('#' + frmId).remove();

												if (typeof callback === 'function') callback(true);
											}
										},
										function(jqXHR, textStatus, errorThrown) {},
										function(jqXHR, textStatus) {}
									);
								}
							);
						});
					}
				});

				jQuery('#' + frmId).modal('hide');
			});

			jQuery('#' + btnCancel).on('click', function(e) {

				// remove the event listeners when the dialog is dismissed
				jQuery('#' + frmId).on('hide.bs.modal', function() {

					jQuery('#' + btnConfirm).off('click');
					jQuery('#' + btnCancel).off('click');
				});

				jQuery('#' + frmId).off('hidden.bs.modal');

				// remove the actual elements from the DOM when fully hidden
				jQuery('#' + frmId).on('hidden.bs.modal', function() {

					jQuery(this).remove();

					if (typeof callback === 'function') callback(false);
				});

				jQuery('#' + frmId).modal('hide');
			});

			jQuery('#' + frmId).on('shown.bs.modal', function() {jQuery('#' + inpUserAccount).focus().select();});

			jQuery('#' + frmId).modal({keyboard: false});
			jQuery('#' + frmId).modal('show');
		};

		/**
		 *
		 * @description AttachSlideMenu
		 *
		 * @param {function} callback
		 *
		 * @version 2016/10/25 初始版本。
		 * @version 2017/03/01 調整工作面版路徑。
		 *
		 * @author ace
		 *
		 */
		var attachSlideMenu = function(callback, addCutList) {

			requirejs(["tw.ace33022.util.InitReSetUtil"], function(InitReSetUtil) {

				var btnIndex = 'btnIndex' + Math.random().toString(36).substr(2, 6);
				var btnOperate = 'btnOperate' + Math.random().toString(36).substr(2, 6);
				var btnChangePassword = 'btnChangePassword' + Math.random().toString(36).substr(2, 6);
				var btnSign = 'btnSign' + Math.random().toString(36).substr(2, 6);

				var shortCutList = 'shortCutList' + Math.random().toString(36).substr(2, 6);
				var miniSubmenu = 'miniSubmenu' + Math.random().toString(36).substr(2, 6);
				var slideSubmenu = 'slideSubmenu' + Math.random().toString(36).substr(2, 6);

				var loginStatus = 'loginStatus' + Math.random().toString(36).substr(2, 6);

				var loginValue = '登入系統';

				var doLogout = function(callback) {

					showMarqueebar('系統登出中，請稍候‧‧‧', function(closeProgressbar) {

						InitReSetUtil.doLogout(

							function(data, textStatus, jqXHR) {

								closeProgressbar();

								if (data["error_code"] !== 0) {

									showMessage(data["error_message"], '登出系統失敗！');
								}
								else {

									showFlashMessage('已登出系統‧‧‧', function() {

										jQuery('#' + loginStatus).text('登入系統');

										if (typeof callback === 'function') callback();
									});
								}
							},
							function(jqXHR, textStatus, errorThrown) {},
							function(jqXHR, textStatus) {}
						);
					});
				};

				var tag = '<div style="position: fixed; top: 0px; left: 0px; z-index: 1000;">'
								+ '  <div id="' + miniSubmenu + '">'
								+ '    <span class="icon-bar"></span>'
								+ '    <span class="icon-bar"></span>'
								+ '    <span class="icon-bar"></span>'
								+ '  </div>'
								+ '  <div class="list-group" style="display: none;">'
								+ '    <span class="list-group-item active">'
								+ '      快捷選單'
								+ '      <span class="pull-right" id="' + slideSubmenu + '" style="margin-left: 5px;"><i class="fa fa-times"></i></span>'
								+ '    </span>'
								+ '    <div id="' + shortCutList + '"></div>'
								+ '  </div>'
								+ '</div>';

				jQuery(tag).appendTo('body');

				jQuery('#' + miniSubmenu).css({

					"width": "42px",
					"padding": "9px",
					"border": "1px solid rgba(0, 0, 0, 0.9)",
					"border-radius": "4px",
					"background-color": "rgba(0, 0, 0, 0)"
				});

				jQuery('#' + miniSubmenu + ' .icon-bar').css({

					"width": "22px",
					"height": "2px",
					"border-radius": "1px",
					"margin-top": "3px",
					"display": "block",
					"background-color": "#000000"
				});

				jQuery('#' + slideSubmenu).css({

					"padding": "0 8px",
					"border-radius": "4px",
					"display": "inline-block",
					"background": "rgba(0, 0, 0, 0.45)",
					"cursor": "pointer"
				});

				jQuery('#' + miniSubmenu).hover(

					function() {

						jQuery(this).css({"cursor": "pointer"});
					},
					function() {}
				);

				jQuery('#' + slideSubmenu).on('click', function() {

					jQuery(this).closest('.list-group').fadeOut('slide', function() {jQuery('#' + miniSubmenu).fadeIn();});
				});

				jQuery('#' + shortCutList).on('click', function() {

					jQuery(this).closest('.list-group').fadeOut('slide', function() {jQuery('#' + miniSubmenu).fadeIn();});
				});

				jQuery('#' + miniSubmenu).on('click', function(event) {

					jQuery('#' + shortCutList).empty();

					jQuery(this).next('.list-group').toggle('slide');

					jQuery('#' + miniSubmenu).hide();

					if (window.location.pathname !== '/') {

						jQuery('#' + shortCutList).append('<a href="#" class="list-group-item" id="' + btnIndex + '"><i class="fa fa-home" style="margin-right: 2px;"></i>返回首頁</a>');

						jQuery('#' + btnIndex).on('click', function(event) {

							window.location.assign(root.Configurations.location.origin);

							event.preventDefault();
						});
					}

					InitReSetUtil.doCheckLoginStatus(

						function(data, textStatus, jqXHR) {

							var loginValue = '登入系統';

							if (data["error_code"] === 0) {

								loginValue = '登出系統';

								jQuery('#' + shortCutList).append('<a href="#" class="list-group-item" id="' + btnOperate + '"><i class="fa fa-exchange" style="margin-right: 2px;"></i>工作面版</a>');

								// 角色是否允許使用工作面版？
								jQuery('#' + btnOperate).on('click', function(event) {

									event.preventDefault();

									// window.location.assign(root.Configurations.location.origin + '/' + root.Configurations.programPath + 'BAS09010');

									window.location.assign(root.Configurations.location.origin + '/' + 'WorkPanel');
								});

								jQuery('#' + shortCutList).append('<a href="#" class="list-group-item" id="' + btnChangePassword + '"><i class="fa fa-user" style="margin-right: 2px;"></i>變更密碼</a>');

								jQuery('#' + btnChangePassword).on('click', function(event) {

									requirejs(["md5"], function(md5) {

										var users;

										var activity = '';

										var modalId = 'modal' + Math.random().toString(36).substr(2, 6);
										var btnConfirmId = 'btnConfirm' + Math.random().toString(36).substr(2, 6);
										var btnCancelId = 'btnCancel' + Math.random().toString(36).substr(2, 6);

										var tag = '<div class="modal fade" tabindex="-1" role="dialog" id="' + modalId + '">'
														+ '  <div class="modal-dialog" role="document">'
														+ '    <div class="modal-content">'
														+ '      <div class="modal-header">'
														+ '        <h4 class="modal-title">變更密碼</h4>'
														+ '      </div>'
														+ '      <div class="modal-body row-fluid" style="">'
														+ '        <div class="form-horizontal">'
														+ '          <div class="form-group">'
														+ '            <label class="control-label col-sm-4" for="inpOldPassword">舊有密碼：</label>'
														+ '            <div class="col-sm-8">'
														+ '              <input type="password" id="inpOldPassword" class="form-control">'
														+ '            </div>'
														+ '          </div>'
														+ '          <div class="form-group">'
														+ '            <label class="control-label col-sm-4" for="inpNewPassword">新密碼：</label>'
														+ '            <div class="col-sm-8">'
														+ '              <input type="password" id="inpNewPassword" class="form-control">'
														+ '            </div>'
														+ '          </div>'
														+ '          <div class="form-group">'
														+ '            <label class="control-label col-sm-4" for="inpConfirmPassword">確認密碼：</label>'
														+ '            <div class="col-sm-8">'
														+ '              <input type="password" id="inpConfirmPassword" class="form-control">'
														+ '            </div">'
														+ '          </div>'
														+ '        </div>'
														+ '      </div>'
														+ '      <div class="modal-footer">'
														+ '        <button type="button" id="' + btnConfirmId + '" class="btn btn-primary">確定</button>'
														+ '        <button type="button" id="' + btnCancelId + '" class="btn">取消</button>'
														+ '      </div>'
														+ '    </div> <!-- /.modal-content -->'
														+ '  </div> <!-- /.modal-dialog -->'
														+ '</div> <!-- /.modal -->';

										event.preventDefault();

										InitReSetUtil.doGetUsers(

											function(data, textStatus, jqXHR) {

												if (data["error_code"] === 0) {

													users = data["result"];

													jQuery(tag).appendTo('body');

													jQuery('#' + modalId).on('shown.bs.modal', function(event) {jQuery('#inpOldPassword').focus();});

													jQuery('#' + modalId).on('hidden.bs.modal', function(event) {

														var data = {

															"user_password": md5(jQuery('#inpNewPassword').val())
														};

														var ajaxSettings = {

															"contentType": "application/json; charset=utf-8",
															"dataType": "json"
														};

														this.remove();

														if (activity === 'confirm') {

															ajaxSettings["type"] = 'PUT';
															ajaxSettings["url"] = new String(location.origin) + '/changePassword';
															ajaxSettings["data"] = JSON.stringify(data);

															ajaxSettings["success"] = function(data, textStatus, jqXHR) {

																if (data["error_code"] === 0) {

																	showMessage('密碼變更成功，下次登入請使用新密碼！');
																}
																else {

																	showMessage('密碼變更失敗，錯誤訊息：' + data["error_message"]);
																}
															};

															ajaxSettings["error"] = function(jqXHR, textStatus, errorThrown) {};
															ajaxSettings["complete"] = function(jqXHR, textStatus) {};

															jQuery.ajax(ajaxSettings);
														}
													});

													jQuery('#' + btnCancelId).on('click', function(event) {jQuery('#' + modalId).modal('hide');});

													jQuery('#' + btnConfirmId).on('click', function(event) {

														function checkValue() {

															var result = true;

															if (jQuery('#inpOldPassword').val() === '') {

																result = false;

																jQuery('#inpOldPassword').attr('data-toggle', 'tooltip');
																jQuery('#inpOldPassword').attr('title', '必須輸入舊有密碼');
																jQuery('#inpOldPassword').tooltip();

																jQuery('#inpOldPassword').focus();
															}

															if (result === true) {

																if (jQuery('#inpNewPassword').val() !== jQuery('#inpConfirmPassword').val()) {

																	result = false;

																	jQuery('#inpConfirmPassword').attr('data-toggle', 'tooltip');
																	jQuery('#inpConfirmPassword').attr('title', '確認密碼不一至');
																	jQuery('#inpConfirmPassword').tooltip();

																	jQuery('#inpConfirmPassword').focus().select();
																}
															}

															if (result === true) {

																if (md5(jQuery('#inpOldPassword').val()) !== users["user_password"]) {

																	jQuery('#inpOldPassword').attr('data-toggle', 'tooltip');
																	jQuery('#inpOldPassword').attr('title', '舊有密碼不正確');
																	jQuery('#inpOldPassword').tooltip();

																	jQuery('#inpOldPassword').focus().select();

																	result = false;
																}
															}

															return result;
														}

														if (checkValue() === true) {

															activity = 'confirm';

															jQuery('#' + modalId).modal('hide');
														}
													});

													jQuery('#' + modalId).modal('show');
												}
												else {

													showMessage('無法取得個人資料，請重新登入後再進行作業！');
												}
											},
											function(jqXHR, textStatus, errorThrown) {},
											function(jqXHR, textStatus) {}
										);
									});
								});

								if (typeof addCutList === 'function') addCutList(shortCutList);
							}

							jQuery('#' + shortCutList).append('<a href="#" class="list-group-item" id="' + btnSign + '"><i class="fa fa-sign-in"></i><span id="' + loginStatus + '" style="margin-left: 2px;">' + loginValue + '</span></a>');

							jQuery('#' + loginStatus).text(loginValue);

							jQuery('#' + btnSign).on('click', function(event) {

								event.preventDefault();

								if (jQuery('#' + loginStatus).text() === '登入系統') {

									showLogin(function(logined) {

										if (logined == true) {

											showFlashMessage('已登入系統‧‧‧', function() {jQuery('#' + loginStatus).text('登出系統');});
										}
									});
								}
								else {

									if (InitReSetUtil.getForceLogin() === 'Y') {

										showConfirmMessage('當前作業需要登入系統才可執行，登出後將離開目前作業！',

											function() {

												doLogout(function() {window.location.assign(window.location.origin);});
											},
											function() {}
										);
									}
									else {

										doLogout();
									}
								}
							});
						},
						function(jqXHR, textStatus, errorThrown) {},
						function(jqXHR, textStatus) {}
					);
				});

				if (typeof callback === 'function') callback(shortCutList);
			});
		};

		/**
		 *
		 * About
		 *
		 * @description
		 *
		 * @param
		 *
		 * @return
		 *
		 * @author ace
		 *
		 * @version 2017/06/30 初始版本。
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var showAbout = function() {

			var modalHeader = null, modalBody = null, modalFooter = null;
			var baseModal;

			tag = '<div class="modal-body" style="text-align: center;">'
					+ '  <a href="http://ace33022.blogspot.tw/" target="_blank" title="前往小爪哇的初發" data-placement="right">'
					+ '    <img class="img-rounded" src="data:image/jpeg;base64,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" />'
					+ '  </a>'
					+ '</div>';
			modalBody = jQuery(tag);

			tag = '<div class="modal-footer">'
					+ '  <button type="button" class="btn btn-primary" data-dismiss="modal">關閉</button>'
					+ '</div>';
			modalFooter = jQuery(tag);
			
			baseModal = addBaseModal(modalHeader, modalBody, modalFooter);

			baseModal.find('a').tooltip();

			baseModal.on('hidden.bs.modal', function() { jQuery(this).remove(); });

			baseModal.modal('show');
		};

		/**
		 *
		 * @description ProgramsModal
		 *
		 * @param
		 *
		 * @require bootstrap
	   *
		 * @author ace
		 *
		 * @version 2017/04/03 初始版本。
		 *
		 */
		var selectProgramsModal = function(arrVO, callback) {

			requirejs(["tw.ace33022.vo.Programs"], function(Programs) {

				var modalId = 'modal' + Math.random().toString(36).substr(2, 6);
				var inpSearchId = 'inpSearch' + Math.random().toString(36).substr(2, 6);

				var tag = '<div class="modal fade" tabindex="-1" role="dialog" id="' + modalId + '">'
								+ '  <div class="modal-dialog" role="document">'
								+ '    <div class="modal-content">'
								+ '      <div class="modal-header">'
								+ '      	 <h4 class="modal-title">程式資料</h4>'
								+ '      </div>'
								+ '      <div class="modal-body">'
								+ '        <input type="text" class="form-control" id="' + inpSearchId + '" style="margin-bottom: 5px;" placeholder="Search..">'
								+ '        <table class="table table-bordered table-condensed table-hover">'
								+ '          <thead>'
								+ '            <tr>'
								+ '              <th>程式代碼</th>'
								+ '              <th>程式名稱</th>'
								+ '            </tr>'
								+ '          </thead>'
								+ '          <tbody class="rowlink"></tbody>'
								+ '        </table>'
								+ '      </div>'
								+ '      <div class="modal-footer">'
								+ '        <button type="button" class="btn btn-primary" data-dismiss="modal">取消</button>'
								+ '      </div>'
								+ '    </div> <!-- /.modal-content -->'
								+ '  </div> <!-- /.modal-dialog -->'
								+ '</div> <!-- /.modal -->'

				var vo;
				var index;

				jQuery(tag).appendTo('body');

				for (index = 0; index < arrVO.length; index++) {

					vo = arrVO[index];

					tag = '<tr>'
							+ '  <td>' + vo.getProgramCode() + '</td>'
							+ '  <td>' + vo.getProgramName() + '</td>'
							+ '</tr>';
					jQuery('#' + modalId + ' div > table > tbody').append(tag);
				}

				jQuery('#' + modalId + ' div > table > tbody > tr').on('click', function(e) {

					var vo = new Programs();

					jQuery(e.toElement).parent().find('td').each(function(index, element) {

						if (index === 0) {

							vo.setProgramCode(jQuery(element).text())
						}
						else if (index === 1) {

							vo.setProgramName(jQuery(element).text())
						}
					});

					jQuery('#' + modalId).on('hidden.bs.modal', function() {

						this.remove();

						if (typeof callback === 'function') callback(vo);
					});

					jQuery('#' + modalId).modal('hide');
				});

				jQuery('#' + modalId).on('shown.bs.modal', function() {

					jQuery('#' + inpSearchId).focus().select();
				});

			  jQuery('#' + inpSearchId).on('keyup', function(event) {

					var value = jQuery(this).val().toLowerCase();

					jQuery('#' + modalId + ' div > table > tbody > tr').filter(function() {

						jQuery(this).toggle(jQuery(this).text().toLowerCase().indexOf(value) > -1);
					});
				});

				jQuery('#' + modalId).modal('show');
			});
		};

		/**
		 *
		 * @description DrinksModal
		 *
		 * @param
		 *
		 * @require bootstrap
	   *
		 * @author ace
		 *
		 * @version 2017/07/12 初始版本。
		 *
		 */
		var selectDrinksModal = function(arrVO, callback) {

			var modalHeader, modalBody;

			var tag;
			var vo;
			var index;

			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">飲料資料</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <table class="table table-bordered table-condensed table-hover">'
					+ '    <thead>'
					+ '      <tr>'
					+ '        <th>飲料代碼</th>'
					+ '        <th>飲料名稱</th>'
					+ '      </tr>'
					+ '    </thead>'
					+ '    <tbody class="rowlink"></tbody>'
					+ '  </table>'
					+ '</div>';
			modalBody = jQuery(tag);

			tag = '';
			for (index = 0; index < arrVO.length; index++) {

				vo = arrVO[index];

				if (vo.getInvalidFlag() == '0') {

					tag += '<tr>'
							 + '  <td>' + vo.getDrinkCode() + '</td>'
							 + '  <td>' + vo.getDrinkName() + '</td>'
							 + '</tr>';
				}
			}
			modalBody.find('tbody').append(tag);

			showItemSelectModal(modalHeader, modalBody, 0, callback);
		};

		/**
		 *
		 * RolesModal
		 *
		 * @description
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @author ace
		 *
		 * @version 2017/04/08 初始版本。
		 *
		 */
		var selectRolesModal = function(arrVO, callback) {

			requirejs(["tw.ace33022.vo.Roles"], function(Roles) {

				var modalId = 'modal' + Math.random().toString(36).substr(2, 6);

				var tag = '<div class="modal fade" tabindex="-1" role="dialog" id="' + modalId + '">'
								+ '  <div class="modal-dialog" role="document">'
								+ '    <div class="modal-content">'
								+ '      <div class="modal-header">'
								+ '      	 <h4 class="modal-title">角色資料</h4>'
								+ '      </div>'
								+ '      <div class="modal-body">'
								+ '        <table class="table table-bordered table-condensed table-hover">'
								+ '          <thead>'
								+ '            <tr>'
								+ '              <th>角色代碼</th>'
								+ '              <th>角色名稱</th>'
								+ '            </tr>'
								+ '          </thead>'
								+ '          <tbody class="rowlink"></tbody>'
								+ '        </table>'
								+ '      </div>'
								+ '      <div class="modal-footer">'
								+ '        <button type="button" class="btn btn-primary" data-dismiss="modal">取消</button>'
								+ '      </div>'
								+ '    </div> <!-- /.modal-content -->'
								+ '  </div> <!-- /.modal-dialog -->'
								+ '</div> <!-- /.modal -->'

				var vo;
				var index;

				jQuery(tag).appendTo('body');

				for (index = 0; index < arrVO.length; index++) {

					vo = arrVO[index];

					tag = '<tr>'
							+ '  <td>' + vo.getRoleCode() + '</td>'
							+ '  <td>' + vo.getRoleName() + '</td>'
							+ '</tr>';
					jQuery('#' + modalId + ' div > table > tbody').append(tag);
				}

				jQuery('#' + modalId + ' div > table > tbody > tr').on('click', function(event) {

					var vo = new Roles();

					jQuery(event.toElement).parent().find('td').each(function(index, element) {

						if (index === 0) {

							vo.setRoleCode(jQuery(element).text())
						}
						else if (index === 1) {

							vo.setRoleName(jQuery(element).text())
						}
					});

					jQuery('#' + modalId).on('hidden.bs.modal', function() {

						this.remove();

						if (typeof callback === 'function') callback(vo);
					});

					jQuery('#' + modalId).modal('hide');
				});

				jQuery('#' + modalId).modal('show');
			});
		};

		/**
		 *
		 * UsersModal
		 *
		 * @description
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @author ace
		 *
		 * @version 2017/04/07 初始版本。
		 *
		 */
		var selectUsersModal = function(arrVO, callback) {

			var modalHeader, modalBody;

			var tag;
			var vo;
			var index;

			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">使用者資料</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <table class="table table-bordered table-condensed table-hover">'
					+ '    <thead>'
					+ '      <tr>'
					+ '        <th>使用者帳號</th>'
					+ '        <th>使用者名稱</th>'
					+ '      </tr>'
					+ '    </thead>'
					+ '    <tbody class="rowlink"></tbody>'
					+ '  </table>'
					+ '</div>';
			modalBody = jQuery(tag);

			tag = '';
			for (index = 0; index < arrVO.length; index++) {

				vo = arrVO[index];

				if (vo.getInvalidFlag() == '0') {

					tag += '<tr>'
							 + '  <td>' + vo.getUserAccount() + '</td>'
							 + '  <td>' + vo.getUserName() + '</td>'
							 + '</tr>';
				}
			}
			modalBody.find('tbody').append(tag);

			showItemSelectModal(modalHeader, modalBody, 0, callback);
		};

		/**
		 *
		 * SizesModal
		 *
		 * @description
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @author ace
		 *
		 * @version 2018/06/30 初始版本。
		 *
		 * @see
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var selectSizesModal = function(arrVO, callback) {

			var modalHeader, modalBody;

			var tag;
			var vo;
			var index;

			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">尺寸資料</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <table class="table table-bordered table-condensed table-hover">'
					+ '    <thead>'
					+ '      <tr>'
					+ '        <th>尺寸代碼</th>'
					+ '        <th>尺寸名稱</th>'
					+ '      </tr>'
					+ '    </thead>'
					+ '    <tbody class="rowlink"></tbody>'
					+ '  </table>'
					+ '</div>';
			modalBody = jQuery(tag);

			tag = '';
			for (index = 0; index < arrVO.length; index++) {

				vo = arrVO[index];

				if (vo.getInvalidFlag() == '0') {

					tag += '<tr>'
							 + '  <td>' + vo.getSizeCode() + '</td>'
							 + '  <td>' + vo.getSizeName() + '</td>'
							 + '</tr>';
				}
			}
			modalBody.find('tbody').append(tag);

			showItemSelectModal(modalHeader, modalBody, 0, callback);
		};

		/**
		 *
		 * @description SizeGroupsModal
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @version 2017/07/26 初始版本。
		 *
		 * @author ace
		 *
		 */
		var selectSizeGroupsModal = function(arrVO, callback) {

			var modalHeader, modalBody;

			var tag;
			var vo;
			var index;

			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">尺寸群組資料</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <table class="table table-bordered table-condensed table-hover">'
					+ '    <thead>'
					+ '      <tr>'
					+ '        <th>尺寸群組代碼</th>'
					+ '        <th>尺寸群組名稱</th>'
					+ '      </tr>'
					+ '    </thead>'
					+ '    <tbody class="rowlink"></tbody>'
					+ '  </table>'
					+ '</div>';
			modalBody = jQuery(tag);

			tag = '';
			for (index = 0; index < arrVO.length; index++) {

				vo = arrVO[index];

				if (vo.getInvalidFlag() == '0') {

					tag += '<tr>'
							 + '  <td>' + vo.getSizeGroupCode() + '</td>'
							 + '  <td>' + vo.getSizeGroupName() + '</td>'
							 + '</tr>';
				}
			}
			modalBody.find('tbody').append(tag);

			showItemSelectModal(modalHeader, modalBody, 0, callback);
		};

		/**
		 *
		 * @description SugarGroupsModal
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @author ace
		 *
		 * @version 2017/07/27 初始版本。
		 *
		 */
		var selectSugarGroupsModal = function(arrVO, callback) {

			var modalHeader, modalBody;

			var tag;
			var vo;
			var index;

			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">甜度群組資料</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <table class="table table-bordered table-condensed table-hover">'
					+ '    <thead>'
					+ '      <tr>'
					+ '        <th>甜度群組代碼</th>'
					+ '        <th>甜度群組名稱</th>'
					+ '      </tr>'
					+ '    </thead>'
					+ '    <tbody class="rowlink"></tbody>'
					+ '  </table>'
					+ '</div>';
			modalBody = jQuery(tag);

			tag = '';
			for (index = 0; index < arrVO.length; index++) {

				vo = arrVO[index];

				if (vo.getInvalidFlag() == '0') {

					tag += '<tr>'
							 + '  <td>' + vo.getSugarGroupCode() + '</td>'
							 + '  <td>' + vo.getSugarGroupName() + '</td>'
							 + '</tr>';
				}
			}
			modalBody.find('tbody').append(tag);

			showItemSelectModal(modalHeader, modalBody, 0, callback);
		};

		/**
		 *
		 * @description IceDosageGroupsModal
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @author ace
		 *
		 * @version 2017/07/27 初始版本。
		 *
		 */
		var selectIceDosageGroupsModal = function(arrVO, callback) {

			var modalHeader, modalBody;

			var tag;

			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">冰塊用量群組資料</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <table class="table table-bordered table-condensed table-hover">'
					+ '    <thead>'
					+ '      <tr>'
					+ '        <th>冰塊用量群組代碼</th>'
					+ '        <th>冰塊用量群組名稱</th>'
					+ '      </tr>'
					+ '    </thead>'
					+ '    <tbody class="rowlink"></tbody>'
					+ '  </table>'
					+ '</div>';
			modalBody = jQuery(tag);

			tag = '';
			arrVO.forEach(function(element, index) {
			
				if (element.getInvalidFlag() == '0') {

					tag += '<tr>'
							 + '  <td>' + element.getIceDosageGroupCode() + '</td>'
							 + '  <td>' + element.getIceDosageGroupName() + '</td>'
							 + '</tr>';
				}
			});
			modalBody.find('tbody').append(tag);

			showItemSelectModal(modalHeader, modalBody, 0, callback);
		};

		/**
		 *
		 * @description FileModal
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @version 2017/07/24 初始版本。
		 *
		 * @author ace
		 *
		 */
		var selectFileModal = function(jsonObj) {

			requirejs(["bootstrap-fileinput"], function() {

				var result = null;

				var tag;
				var defaultTitle = '選取檔案';

				var modalHeader, modalBody, modalFooter;
				var baseModal;
			
				var btnConfirmId = 'btnConfirm' + Math.random().toString(36).substr(2, 6);

				if ((typeof jsonObj !== 'undefined') && (typeof jsonObj["title"] !== 'undefined') && (jsonObj["title"] != '')) defaultTitle = jsonObj["title"];
				
				tag = '<div class="modal-header">'
						+ '  <h4 class="modal-title">' + defaultTitle + '</h4>'
						+ '</div>';
				modalHeader = jQuery(tag);

				tag = '<div class="modal-body form-group">'
						+	'  <input type="file" class="file" data-show-preview="false" data-show-upload="false" data-show-remove="false" />'
						+	'</div>';
				modalBody = jQuery(tag);

				tag = '<div class="modal-footer">'
						+ '  <button type="button" id="' + btnConfirmId + '" class="btn btn-primary">確認</button>'
						+ '  <button type="button" class="btn btn-primary" data-dismiss="modal">取消</button>'
						+ '</div>';
				modalFooter = jQuery(tag);

				baseModal = addBaseModal(modalHeader, modalBody, modalFooter);

				if ((typeof jsonObj !== 'undefined') && (typeof jsonObj["fileAccept"] !== 'undefined') && (jsonObj["fileAccept"] != '')) baseModal.find('input[type="file"]').attr('accept', jsonObj["fileAccept"]);
				
				baseModal.on('shown.bs.modal', function() {

					jQuery(this).find('input').fileinput().focus();
				});

				baseModal.on('hidden.bs.modal', function() {

					jQuery(this).remove();

					if ((typeof jsonObj !== 'undefined') && (typeof jsonObj["callback"] !== 'undefined') && (typeof jsonObj["callback"] === 'function')) jsonObj["callback"](result);
				});

				jQuery('#' + btnConfirmId).on('click', function(event) {

					result = baseModal.find('input').get(0).files[0];
					
					baseModal.modal('hide');
				});

				baseModal.find('input[type="file"]').on('fileclear', function(event) {});

				baseModal.find('input[type="file"]').on('filecleared', function(event) {});

				baseModal.find('input[type="file"]').on('change', function(event) {

					if (jQuery(this).get(0).files[0]) jQuery('#' + btnConfirmId).attr('disabled', false);
				});

				baseModal.modal('show');
			});
		};

		/**
		 *
		 * @description InputModal
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @version 2017/09/07 初始版本。
		 *
		 * @author ace
		 *
		 * @see <a href="http://api.jquery.com/jquery/">jQuery() | jQuery API Documentation</a>
		 *
		 */
		var showInputModal = function(jsonObj) {

			var result = null;

			var tag;
			var defaultTitle = '輸入資料';
			var defaultInputValue = '';

			var modalHeader, modalBody, modalFooter;
			var baseModal;

			var btnConfirmId = 'btnConfirm' + Math.random().toString(36).substr(2, 6);

			if ((typeof jsonObj["title"] !== 'undefined') && (jsonObj["title"] != '')) defaultTitle = jsonObj["title"];
			if ((typeof jsonObj["defaultInputVaule"] !== 'undefined') && (jsonObj["defaultInputVaule"] != '')) defaultInputValue = jsonObj["defaultInputVaule"];

			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">' + defaultTitle + '</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body form-group">'
					+	'  <input type="text" class="form-control" value="' + defaultInputValue + '" />'
					+	'</div>';
			modalBody = jQuery(tag);

			tag = '<div class="modal-footer">'
					+ '  <button type="button" id="' + btnConfirmId + '" class="btn btn-primary">確認</button>'
					+ '  <button type="button" class="btn btn-primary" data-dismiss="modal">取消</button>'
					+ '</div>';
			modalFooter = jQuery(tag);

			baseModal = addBaseModal(modalHeader, modalBody, modalFooter);

			baseModal.on('shown.bs.modal', function() {

				jQuery(this).find('input').focus().select();
			});

			baseModal.on('hidden.bs.modal', function() {

				jQuery(this).remove();

				if ((typeof jsonObj["callback"] !== 'undefined') && (typeof jsonObj["callback"] === 'function')) jsonObj["callback"](result);
			});

			jQuery('#' + btnConfirmId).on('click', function(e) {

				result = baseModal.find('input[type="text"]').val();

				baseModal.modal('hide');
			});

			baseModal.modal('show');
		};

		/**
		 *
		 * @description BetweenTrnDateModal
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @version 2018/06/25 初始版本。
		 *
		 * @author ace
		 *
		 * @see {@link http://eonasdan.github.io/bootstrap-datetimepicker/|eonasdan.github.io/bootstrap-datetimepicker/}
		 * @see {@link https://github.com/Eonasdan/bootstrap-datetimepicker|Eonasdan/bootstrap-datetimepicker: Date/time picker widget based on twitter bootstrap}
		 *
		 */
		var showBetweenTrnDateModal = function(callback) {

			requirejs(["moment", "bootstrap-datetimepicker"], function(moment) {

				var beginDate, endDate;

				var inpBeginTrnDateId = 'inpBeginTrnDate' + Math.random().toString(36).substr(2, 6);
				var inpEndTrnDateId = 'inpEndTrnDate' + Math.random().toString(36).substr(2, 6);
				var btnConfirmId = 'btnConfirm' + Math.random().toString(36).substr(2, 6);

				var modalHeader, modalBody, modalFooter;
				var baseModal;
			
				tag = '<div class="modal-header">'
						+ '  <h4 class="modal-title">查詢條件</h4>'
						+ '</div>';
				modalHeader = jQuery(tag);

				tag = '<div class="modal-body form-group">'
						+ '  <label class="control-label" for="' + inpBeginTrnDateId + '">起始日期：</label>'
						+ '	 <div class="input-group date">'
						+ '    <input type="text" class="form-control" id="' + inpBeginTrnDateId + '" readonly>'
						+ '	   <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span> '
						+ '	 </div>'
						+ '  <label class="control-label" for="' + inpEndTrnDateId + '">結束日期：</label>'
						+ '	 <div class="input-group date">'
						+ '	   <input type="text" class="form-control" id="' + inpEndTrnDateId + '" readonly>'
						+ '		 <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span> '
						+ '	 </div>'
						+ '</div>';
				modalBody = jQuery(tag);

				tag = '<div class="modal-footer">'
						+ '  <button type="button" id="' + btnConfirmId + '" class="btn btn-primary">確認</button>'
						+ '  <button type="button" class="btn btn-primary" data-dismiss="modal">取消</button>'
						+ '</div>';
				modalFooter = jQuery(tag);

				baseModal = addBaseModal(modalHeader, modalBody, modalFooter);
			
				baseModal.find('.date').datetimepicker({

					"format": "YYYY/MM/DD",
					"showClose": true,
					"showClear": true,
					"ignoreReadonly": true
				});

				jQuery('#' + btnConfirmId).on('click', function(event) {

					beginDate = moment(jQuery('#' + inpBeginTrnDateId).val(), root.Configurations.ShowDateFormatString, true);
					endDate = moment(jQuery('#' + inpEndTrnDateId).val(), root.Configurations.ShowDateFormatString, true);

					baseModal.modal('hide');
				});

				baseModal.on('shown.bs.modal', function() {

					jQuery('#' + inpBeginTrnDateId).val(moment(new Date()).format(root.Configurations.ShowDateFormatString));
					jQuery('#' + inpEndTrnDateId).val(moment(new Date()).format(root.Configurations.ShowDateFormatString));

					jQuery('#' + btnConfirmId).focus();
				});

				baseModal.on('hidden.bs.modal', function() {

					jQuery(this).remove();

					if (typeof callback === 'function') callback(beginDate, endDate);
				});

				baseModal.modal('show');
			});
		};

		/**
		 *
		 * @description LargeClassesModal
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @version 2018/06/28 初始版本。
		 *
		 * @author ace
		 *
		 */
		var selectLargeClassesModal = function(arrVO, callback) {

			var modalHeader, modalBody;

			var tag;
			var vo;
			var index;

			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">大分類資料</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <table class="table table-bordered table-condensed table-hover">'
					+ '    <thead>'
					+ '      <tr>'
					+ '        <th>大分類代碼</th>'
					+ '        <th>大分類名稱</th>'
					+ '      </tr>'
					+ '    </thead>'
					+ '    <tbody class="rowlink"></tbody>'
					+ '  </table>'
					+ '</div>';
			modalBody = jQuery(tag);

			tag = '';
			for (index = 0; index < arrVO.length; index++) {

				vo = arrVO[index];

				if (vo.getInvalidFlag() == '0') {

					tag += '<tr>'
							 + '  <td>' + vo.getLargeClassCode() + '</td>'
							 + '  <td>' + vo.getLargeClassName() + '</td>'
							 + '</tr>';
				}
			}
			modalBody.find('tbody').append(tag);

			showItemSelectModal(modalHeader, modalBody, 0, callback);
		};

		/**
		 *
		 * MiddleClassesModal
		 *
		 * @description
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @author ace
		 *
		 * @version 2018/06/29 初始版本。
		 *
		 * @see
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var selectMiddleClassesModal = function(arrVO, callback) {

			var modalHeader, modalBody;

			var tag;
			var vo;
			var index;

			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">中分類資料</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <table class="table table-bordered table-condensed table-hover">'
					+ '    <thead>'
					+ '      <tr>'
					+ '        <th>中分類代碼</th>'
					+ '        <th>中分類名稱</th>'
					+ '      </tr>'
					+ '    </thead>'
					+ '    <tbody class="rowlink"></tbody>'
					+ '  </table>'
					+ '</div>';
			modalBody = jQuery(tag);

			tag = '';
			for (index = 0; index < arrVO.length; index++) {

				vo = arrVO[index];

				if (vo.getInvalidFlag() == '0') {

					tag += '<tr>'
							 + '  <td>' + vo.getMiddleClassCode() + '</td>'
							 + '  <td>' + vo.getMiddleClassName() + '</td>'
							 + '</tr>';
				}
			}
			modalBody.find('tbody').append(tag);

			showItemSelectModal(modalHeader, modalBody, 0, callback);
		};

		/**
		 *
		 * SmallClassesModal
		 *
		 * @description
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @author ace
		 *
		 * @version 2018/06/29 初始版本。
		 *
		 * @see
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var selectSmallClassesModal = function(arrVO, callback) {

			var modalHeader, modalBody;

			var tag;
			var vo;
			var index;

			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">小分類資料</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <table class="table table-bordered table-condensed table-hover">'
					+ '    <thead>'
					+ '      <tr>'
					+ '        <th>小分類代碼</th>'
					+ '        <th>小分類名稱</th>'
					+ '      </tr>'
					+ '    </thead>'
					+ '    <tbody class="rowlink"></tbody>'
					+ '  </table>'
					+ '</div>';
			modalBody = jQuery(tag);

			tag = '';
			for (index = 0; index < arrVO.length; index++) {

				vo = arrVO[index];

				if (vo.getInvalidFlag() == '0') {

					tag += '<tr>'
							 + '  <td>' + vo.getSmallClassCode() + '</td>'
							 + '  <td>' + vo.getSmallClassName() + '</td>'
							 + '</tr>';
				}
			}
			modalBody.find('tbody').append(tag);

			showItemSelectModal(modalHeader, modalBody, 0, callback);
		};
		
		/**
		 *
		 * CheckSizeGroupsDetailModal
		 *
		 * @description
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @author ace
		 *
		 * @version 2018/07/02 初始版本。
		 *
		 * @see
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var checkSizeGroupsDetailModal = function(arrSizes, arrSizeGroupsDetail, checkEventFunction) {
		
			var modalHeader, modalBody;

			var tag;
			var vo;
			var index;

			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">尺寸明細資料</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <table class="table table-bordered table-condensed table-hover">'
					+ '    <thead>'
					+ '      <tr>'
					+ '        <th style="text-align: center;">設置</th>'
					+ '        <th style="text-align: center;">尺寸代碼</th>'
					+ '        <th style="text-align: center;">尺寸名稱</th>'
					+ '      </tr>'
					+ '    </thead>'
					+ '    <tbody class="rowlink"></tbody>'
					+ '  </table>'
					+ '</div>';
			modalBody = jQuery(tag);
			
			tag = '';
			for (index = 0; index < arrSizes.length; index++) {

				tag += '<tr>';
				
				if (_.find(arrSizeGroupsDetail, function(vo) {return vo.getSizeCode() == arrSizes[index].getSizeCode();})) {

					tag += '<td style="text-align: center;"><span class="glyphicon glyphicon-ok"></span></td>';
				}
				else {

					tag += '<td style="text-align: center;"><span></span></td>';
				}
				
				tag += '  <td>' + arrSizes[index].getSizeCode() + '</td>'
						+ '  <td>' + arrSizes[index].getSizeName() + '</td>'
						+ '</tr>';
			}
			modalBody.find('tbody').append(tag);

			showItemCheckModal(modalHeader, modalBody, checkEventFunction);
		};

		/**
		 *
		 * @description SugarsModal
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @version 2018/07/03 初始版本。
		 *
		 * @author ace
		 *
		 */
		var selectSugarsModal = function(arrVO, callback) {

			var modalHeader, modalBody;

			var tag;
			var vo;
			var index;

			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">甜度資料</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <table class="table table-bordered table-condensed table-hover">'
					+ '    <thead>'
					+ '      <tr>'
					+ '        <th>甜度代碼</th>'
					+ '        <th>甜度名稱</th>'
					+ '      </tr>'
					+ '    </thead>'
					+ '    <tbody class="rowlink"></tbody>'
					+ '  </table>'
					+ '</div>';
			modalBody = jQuery(tag);

			tag = '';
			for (index = 0; index < arrVO.length; index++) {

				vo = arrVO[index];

				if (vo.getInvalidFlag() == '0') {

					tag += '<tr>'
							 + '  <td>' + vo.getSugarCode() + '</td>'
							 + '  <td>' + vo.getSugarName() + '</td>'
							 + '</tr>';
				}
			}
			modalBody.find('tbody').append(tag);

			showItemSelectModal(modalHeader, modalBody, 0, callback);
		};
		
		/**
		 *
		 * CheckSugarGroupsDetailModal
		 *
		 * @description
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @version 2018/07/03 初始版本。
		 *
		 * @author ace
		 *
		 */
		var checkSugarGroupsDetailModal = function(arrSugars, arrSugarGroupsDetail, checkEventFunction) {
		
			var modalHeader, modalBody;

			var tag;
			var vo;
			var index;

			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">甜度明細資料</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <table class="table table-bordered table-condensed table-hover">'
					+ '    <thead>'
					+ '      <tr>'
					+ '        <th style="text-align: center;">設置</th>'
					+ '        <th style="text-align: center;">甜度代碼</th>'
					+ '        <th style="text-align: center;">甜度名稱</th>'
					+ '      </tr>'
					+ '    </thead>'
					+ '    <tbody class="rowlink"></tbody>'
					+ '  </table>'
					+ '</div>';
			modalBody = jQuery(tag);
			
			tag = '';
			for (index = 0; index < arrSugars.length; index++) {

				tag += '<tr>';
				
				if (_.find(arrSugarGroupsDetail, function(vo) {return vo.getSugarCode() == arrSugars[index].getSugarCode();})) {

					tag += '<td style="text-align: center;"><span class="glyphicon glyphicon-ok"></span></td>';
				}
				else {

					tag += '<td style="text-align: center;"><span></span></td>';
				}
				
				tag += '  <td>' + arrSugars[index].getSugarCode() + '</td>'
						 + '  <td>' + arrSugars[index].getSugarName() + '</td>'
						 + '</tr>';
			}
			modalBody.find('tbody').append(tag);

			showItemCheckModal(modalHeader, modalBody, checkEventFunction);
		};
		
		/**
		 *
		 * @description IceDosagesModal
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @version 2018/07/04 初始版本。
		 *
		 * @author ace
		 *
		 */
		var selectIceDosagesModal = function(arrVO, callback) {

			var modalHeader, modalBody;

			var tag;
			var vo;
			var index;

			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">冰塊用量資料</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <table class="table table-bordered table-condensed table-hover">'
					+ '    <thead>'
					+ '      <tr>'
					+ '        <th>冰塊用量代碼</th>'
					+ '        <th>冰塊用量名稱</th>'
					+ '      </tr>'
					+ '    </thead>'
					+ '    <tbody class="rowlink"></tbody>'
					+ '  </table>'
					+ '</div>';
			modalBody = jQuery(tag);

			tag = '';
			for (index = 0; index < arrVO.length; index++) {

				vo = arrVO[index];

				if (vo.getInvalidFlag() == '0') {

					tag += '<tr>'
							 + '  <td>' + vo.getIceDosageCode() + '</td>'
							 + '  <td>' + vo.getIceDosageName() + '</td>'
							 + '</tr>';
				}
			}
			modalBody.find('tbody').append(tag);

			showItemSelectModal(modalHeader, modalBody, 0, callback);
		};
		
		/**
		 *
		 * @description CheckIceDosageGroupsDetailModal
		 *
		 * @param
		 *
		 * @return
		 *
		 * @require bootstrap
	   *
		 * @author ace
		 *
		 * @version 2018/07/04 初始版本。
		 *
		 */
		var checkIceDosageGroupsDetailModal = function(arrIceDosages, arrIceDosageGroupsDetail, checkEventFunction) {
		
			var modalHeader, modalBody;

			var tag;
			var vo;

			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">冰塊用量明細資料</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <table class="table table-bordered table-condensed table-hover">'
					+ '    <thead>'
					+ '      <tr>'
					+ '        <th style="text-align: center;">設置</th>'
					+ '        <th style="text-align: center;">冰塊用量代碼</th>'
					+ '        <th style="text-align: center;">冰塊用量名稱</th>'
					+ '      </tr>'
					+ '    </thead>'
					+ '    <tbody class="rowlink"></tbody>'
					+ '  </table>'
					+ '</div>';
			modalBody = jQuery(tag);
			
			tag = '';
			arrIceDosages.forEach(function(element, index) {
			
				tag += '<tr>';
				
				if (_.find(arrIceDosageGroupsDetail, function(vo) {return vo.getIceDosageCode() == element.getIceDosageCode();})) {

					tag += '<td style="text-align: center;"><span class="glyphicon glyphicon-ok"></span></td>';
				}
				else {

					tag += '<td style="text-align: center;"><span></span></td>';
				}
				
				tag += '  <td>' + element.getIceDosageCode() + '</td>'
						 + '  <td>' + element.getIceDosageName() + '</td>'
						 + '</tr>';
			});
			modalBody.find('tbody').append(tag);

			showItemCheckModal(modalHeader, modalBody, checkEventFunction);
		};
		
		/**
		 *
		 * @description 數值輸入視窗
		 *
		 * @param
		 *
		 * @require bootstrap
	   *
		 * @version 2018/07/14 初始版本。
		 *
		 * @author ace
		 *
		 * @see {@link https://demo.tc/post/617|如何限制 Input 只能輸入 數字 - demo小鋪}
		 * @see {@link https://dotblogs.com.tw/dino0315/2015/12/31/010758|[jQuery] input 限制輸入數字 | 艾力克斯馬路口 - 點部落}
		 *
		 */
		var showInputNumberModal = function(jsonObj) {

			var result = null;

			var tag;
			var defaultTitle = '價格';
			var defaultValue = 0;

			var modalHeader, modalBody, modalFooter;
			var baseModal;

			var btnConfirmId = 'btnConfirm' + Math.random().toString(36).substr(2, 6);
			var btnCancelId = 'btnCancel' + Math.random().toString(36).substr(2, 6);
			var txtValueId = 'txtValue' + Math.random().toString(36).substr(2, 6);
			
			if ((typeof jsonObj["title"] !== 'undefined') && (jsonObj["title"] != '')) defaultTitle = jsonObj["title"];
			if ((typeof jsonObj["value"] !== 'undefined') && (jsonObj["value"] != '')) defaultValue = jsonObj["value"];
				
			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">' + defaultTitle + '</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body form-group">'
					+	'  <input type="text" id="' + txtValueId + '" class="form-control" style="text-align: right;" />'
					+	'</div>';
			modalBody = jQuery(tag);

			tag = '<div class="modal-footer">'
					+ '  <input type="button" id="' + btnConfirmId + '" class="btn btn-primary" value="確認" />'
					+ '  <input type="button" class="btn" data-dismiss="modal" value="取消" />'
					+ '</div>';
			modalFooter = jQuery(tag);

			baseModal = addBaseModal(modalHeader, modalBody, modalFooter);

			jQuery('#' + txtValueId).keypress(function(event) {if (event.keyCode == 13) jQuery('#' + btnConfirmId).click();});

			jQuery('#' + txtValueId).keydown(function(event) {

				// Allow: Backspace, Tab, Enter, Escape, Delete, .
				if (jQuery.inArray(event.keyCode, [8, 9, 13, 27, 46, 110]) !== -1) return;

				// Allow: Ctrl+A, Command+A
				if ((event.keyCode == 65) && ((event.ctrlKey === true) || (event.metaKey === true))) return;

				// Allow: home, end, left, right, down, up
				if ((event.keyCode >= 35) && (event.keyCode <= 40)) return;

				// Ensure that it is a number and stop the keypress
				if (((event.shiftKey === true) || ((event.keyCode < 48) || ((event.keyCode > 57) && (event.keyCode != 189) && (event.keyCode != 190)))) && ((event.keyCode < 96) || (event.keyCode > 105))) event.preventDefault();

				// 如果使用者輸入-，先判斷現在的值有沒有-，如果有就不允許輸入。
				if ((event.keyCode == 189) && /-/g.test(this.value)) event.preventDefault();

				// 如果使用者輸入.，先判斷現在的值有沒有.，如果有就不允許輸入。
				if ((event.keyCode == 190) && /\./g.test(this.value)) event.preventDefault();
			});

			jQuery('#' + btnConfirmId).on('click', function(event) {

				result = new Number(jQuery('#' + txtValueId).val());

				baseModal.modal('hide');
			});

			baseModal.on('shown.bs.modal', function() {

				jQuery('#' + txtValueId).val(defaultValue);

				jQuery(this).find('input[type="text"]').focus().select();
			});

			baseModal.on('hidden.bs.modal', function() {

				jQuery(this).remove();

				if ((result !== null) && (typeof jsonObj["callback"] === 'function')) jsonObj["callback"](result);
			});

			baseModal.modal('show');
		};
		
		/**
		 *
		 * @description Get Textarea Modal
		 *
		 * @param {string} title
		 * @param {string} value
		 * @param {function} callback
		 *
		 * @return {jQuery} Modal
		 *
		 * @require bootstrap
	   *
		 * @version 2019/04/09 初始版本。
		 *
		 * @author ace
		 *
		 */
		var getTextareaModal = function() {
		
			var result = null;

			var defaultTitle = '輸入資料';
			var textValue = '';
			var callback;

			var tag;
			var modalHeader, modalBody, modalFooter;

			var textCommentId = 'textComment' + Math.random().toString(36).substr(2, 6);
			var btnConfirmId = 'btnConfirm' + Math.random().toString(36).substr(2, 6);
			
			var booConfirm = false;
			
			if ((arguments.length >= 1) && (typeof arguments[0] === 'object')) {
			
				if ((typeof arguments[0]["title"] !== 'undefined') && (arguments[0]["title"] !== '')) defaultTitle = arguments[0]["title"];
				if ((typeof arguments[0]["value"] !== 'undefined') && (arguments[0]["value"] !== '')) textValue = arguments[0]["value"];
				
				if (typeof arguments[0]["callback"] !== 'undefined') callback = arguments[0]["callback"];
			}
			
			tag = '<div class="modal-header">'
					+ '  <h4 class="modal-title">' + defaultTitle + '</h4>'
					+ '</div>';
			modalHeader = jQuery(tag);

			tag = '<div class="modal-body">'
					+ '  <form class="form-horizontal" role="form">'
					+ '    <div class="form-group">'
					+ '      <div class="col-md-12">'
					+ '        <textarea id="' + textCommentId + '" rows="5" class="form-control" style="resize: none;"></textarea>'
					+ '      </div>'
					+ '    </div>'
					+ '  </form>'
					+	'</div>';
			modalBody = jQuery(tag);

			tag = '<div class="modal-footer">'
					+ '  <input type="button" id="' + btnConfirmId + '" class="btn btn-primary" value="確認" />'
					+ '  <input type="button" class="btn" data-dismiss="modal" value="取消" />'
					+ '</div>';
			modalFooter = jQuery(tag);

			result = addBaseModal(modalHeader, modalBody, modalFooter);

			jQuery('#' + btnConfirmId).on('click', function(event) {

				booConfirm = true;
				
				textValue = jQuery('#' + textCommentId).val();

				result.modal('hide');
			});

			result.on('shown.bs.modal', function() {

				jQuery('#' + textCommentId).val(textValue);
				jQuery('#' + textCommentId).focus();
			});

			result.on('hidden.bs.modal', function() {

				jQuery(this).remove();
				
				if (booConfirm == true) {
				
					if ((typeof callback !== 'undefined') && (typeof callback === 'function')) callback(textValue);
				}
			});
			
			return result;
		};
		
		/**
		 *
		 * @description Show Textarea Modal
		 *
		 * @param {string} title
		 * @param {string} value
		 * @param {function} callback
		 *
		 * @return {jQuery} Modal
		 *
		 * @require bootstrap
	   *
		 * @version 2018/09/04 初始版本。
		 *
		 * @author ace
		 *
		 */
		var showTextareaModal = function() {
		
			getTextareaModal(arguments[0]).modal({
			
				"backdrop": "static",
				"keyboard": false,
				"show": true
			});
		};
		
		return {
		
			addBaseModal: addBaseModal,
			showFlashMessage: showFlashMessage,
			showMessage: showMessage,
			showConfirmMessage: showConfirmMessage,
			showProgressbar: showProgressbar,
			showMarqueebar: showMarqueebar,
			showLoadingEffect: showLoadingEffect,
			attachSlideMenu: attachSlideMenu,
			showLogin: showLogin,
			showAbout: showAbout,
			selectProgramsModal: selectProgramsModal,
			selectDrinksModal: selectDrinksModal,
			selectRolesModal: selectRolesModal,
			selectUsersModal: selectUsersModal,
			selectSizesModal: selectSizesModal,
			selectSizeGroupsModal: selectSizeGroupsModal,
			selectSugarGroupsModal: selectSugarGroupsModal,
			selectIceDosageGroupsModal: selectIceDosageGroupsModal,
			selectFileModal: selectFileModal,
			showInputModal: showInputModal,
			showBetweenTrnDateModal: showBetweenTrnDateModal,
			selectLargeClassesModal: selectLargeClassesModal,
			selectMiddleClassesModal: selectMiddleClassesModal,
			selectSmallClassesModal: selectSmallClassesModal,
			checkSizeGroupsDetailModal: checkSizeGroupsDetailModal,
			selectSugarsModal: selectSugarsModal,
			checkSugarGroupsDetailModal: checkSugarGroupsDetailModal,
			selectIceDosagesModal: selectIceDosagesModal,
			checkIceDosageGroupsDetailModal: checkIceDosageGroupsDetailModal,
			showInputNumberModal: showInputNumberModal,
			getTextareaModal: getTextareaModal,
			showTextareaModal: showTextareaModal
		};
	});
})(this);