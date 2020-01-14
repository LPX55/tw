/**
 *
 * FormUtils
 *  
 * @description
 *
 * @author ace
 * 
 * @version 2016/03/08 初始版本。
 * @version 2016/03/14 新增showProgressbar。
 * @version 2016/03/14 新增closeProgressbar。
 *
 * @see <a href="http://requirejs.org/">RequireJS</a>
 *
 * @see <a href="https://jquery.com/">jQuery</a>
 *
 * @see <a href="http://webdesign.kerthis.com/jquery/">jQuery 教學 - jQuery Tutorial</a>
 *
 * @see <a href="https://plugins.jquery.com/custombox/">Custombox | jQuery Plugin Registry</a>
 * @see <a href="http://dixso.github.io/custombox/">Custombox - Modal window effects with transitions CSS3.</a>
 * @see <a href="https://github.com/dixso/custombox/issues/77">Two custombox close method · Issue #77 · dixso/custombox</a>
 *
 * @comment
 *
 * @todo
 * 
 */
 
(function(root) {

	define(['tw.ace33022.vo.Programs', 'tw.ace33022.dao.vo.Programs', 'tw.ace33022.vo.OperatePanelsDetail', 'tw.ace33022.dao.vo.OperatePanelsDetail', 'tw.ace33022.vo.OperatePanels', 'tw.ace33022.dao.vo.OperatePanels', 'tw.ace33022.dao.SYS00010', 'tw.ace33022.utils.Browser.BaseForms', 'custombox', 'jquery', 'jquery.ui.dialog', 'jquery.ui.progressbar'], function(Programs, ProgramsDAO, OperatePanelsDetail, OperatePanelsDetailDAO, OperatePanels, OperatePanelsDAO, SYS00010, BaseForms, Custombox) {
	
		/**
		 * 
		 * 確認對話框
		 *  
		 * @description 動態產生確認對話框
		 *   
		 * @param {String} 訊息字串。
		 * @param {Function} 對話框關閉後的回呼函數。
		 *
		 * @return
		 *  
		 * @require
		 *
		 * @author ace
		 * 
		 * @version 2015/10/24 初始版本。
		 *
		 * @see <a href="https://jquery.com/">jQuery</a>
		 *
		 * @see <a href="https://jqueryui.com/dialog/">Dialog | jQuery UI</a>
		 * @see <a href="http://api.jqueryui.com/dialog/">Dialog Widget | jQuery UI API Documentation</a>
		 *
		 * @see <a href="https://api.jquery.com/find/">.find() | jQuery API Documentation</a>
		 * @see <a href="http://api.jquery.com/attr/">.attr() | jQuery API Documentation</a>
		 * @see <a href="http://api.jquery.com/on/">.on() | jQuery API Documentation</a>
		 * @see <a href="https://api.jquery.com/click/">.click() | jQuery API Documentation</a>
		 * @see <a href="https://api.jquery.com/remove/">.remove() | jQuery API Documentation</a>
		 * @see <a href="https://api.jquery.com/empty/">.empty() | jQuery API Documentation</a>
		 *
		 * @see <a href="http://blog.wu-boy.com/2012/04/use-on-api-to-attach-event-handlers-on-jquery/">jQuery 1.7 透過 on 來綁定事件</a>
		 * @see <a href="http://stackoverflow.com/questions/9285451/handling-css-id-and-classes-with-spaces">handling css id and classes with spaces</a>
		 * @see <a href="http://blog.darkthread.net/post-2011-06-08-css-specificity.aspx">筆記-CSS選擇器的套用優先順序</a>
		 * @see <a href="http://blog.wu-boy.com/2010/10/%E5%88%A9%E7%94%A8-jquery-%E5%8B%95%E6%85%8B%E6%94%B9%E8%AE%8A%E7%B6%B2%E7%AB%99-css/">利用 jQuery 動態改變網站 CSS</a>
		 * @see <a href="http://stackoverflow.com/questions/1677880/how-to-get-a-dom-element-from-a-jquery-selector">How to get a DOM Element from a JQuery Selector</a>
		 * @see <a href="http://stackoverflow.com/questions/1391793/how-to-destroy-a-dom-element-with-jquery">How to destroy a DOM element with jQuery?</a>
		 * @see <a href="http://stackoverflow.com/questions/3090662/jquery-empty-vs-remove">JQuery empty() vs remove()</a>
		 *
		 * @see <a href="http://stackoverflow.com/questions/951021/what-do-i-do-if-i-want-a-javascript-version-of-sleep">What do I do if I want a JavaScript version of sleep()?</a>
		 *
		 * @see <a href="http://stackoverflow.com/questions/960693/jquery-ui-dialog-button-positioning">jQuery UI Dialog button positioning - Stack Overflow</a>
		 *
		 * @comment 2015/10/25 JavaScript is single-threaded, which means when you call a function, it blocks until it returns.
		 * @comment 2015/10/25 alert()函數屬於window物件的函數。因此呼叫alert()函數時，控制將轉移給瀏覽器，直到瀏覽器還回控制權。
		 *
		 * @todo
		 *
		 */
		var showMessage = function() {
		
			var message = '';
			var title = '';
			var closeCallback;
				
			var frmId = 'frmShowMessage';
			var tag;
								
			if (arguments.length >= 1) message = arguments[0];
			
			if (arguments.length == 2) {
			
				if (typeof arguments[1] == 'string') title = arguments[1];
				if (typeof arguments[1] == 'function') closeCallback = arguments[1];
			}
			else if (arguments.length == 3) {
			
				title = arguments[1];
				closeCallback = arguments[2];
			}
			
			tag = '<div id="' + frmId + '" class="ace-font ace-custom-form" style="display: none; width: 300px; height: 105px; padding: 0px 0px 20px 0px;">'
					+ '	 <div style="padding: 20px; text-align: center;">' + message + '</div>'
					+ '  <div style="text-align: center;"><input type="button" id="btnConfirm" class="ace-flat-button" value="確定" tabindex="0"></div>'
					+ '</div>';
					
			if (jQuery('#' + frmId).length == 0) jQuery(tag).appendTo('body');
				
			jQuery('#' + frmId).find('#btnConfirm').on('click', function() {Custombox.close();});
			
			Custombox.open({
						
				target: '#' + frmId,
				effect: 'fadein',
				escKey: false,
				overlayClose: false,
				close: function() {
				
					jQuery('#' + frmId).remove();
					
					if (typeof closeCallback === 'function') closeCallback();
				},
				complete: function() {jQuery('#' + frmId).find('#btnConfirm').focus();}
			});
		};
	
		/**
		 * 
		 * 確認/取消對話框
		 *  
		 * @description 動態產生確認對話框
		 *   
		 * @param {String} 訊息字串。
		 * @param {Function} 確認後的回呼函數。
		 * @param {Function} 取消後的回呼函數。
		 *
		 * @return
		 *  
		 * @require
		 *
		 * @author ace
		 * 
		 * @version 2016/03/03 初始版本。
		 *
		 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean">Boolean - JavaScript | MDN</a>
		 *
		 * @comment 
		 *
		 * @todo
		 *
		 */
		var showConfirmMessage = function(message, confirmCallback, cancelCallback) {
		
			var frmId = 'frmConfirmMessage';
			var frm = BaseForms.frmConfirmMessage(frmId, message);
			var choice = new Boolean(true);
			
			frm.find('#btnConfirm').on('click', function() {choice = true; Custombox.close();});
			frm.find('#btnCancel').on('click', function() {choice = false; Custombox.close();});
			
			Custombox.open({
						
				target: '#' + frmId,
				effect: 'fadein',
				escKey: false,
				overlayClose: false,
				close: function() {
				
					frm.remove();
					
					if (choice) {
					
						if (typeof confirmCallback === 'function') confirmCallback();
					}
					else {
					
						if (typeof cancelCallback === 'function') cancelCallback();
					}
				},
				complete: function() {frm.find('#btnConfirm').focus();}
			});
		};
		
		/**
		 * 
		 * 作業面版視窗
		 *  
		 * @description
		 *   
		 * @param
		 *
		 * @return
		 *  
		 * @require
	   *
		 * @author ace
		 * 
		 * @version 2016/03/06 初始版本。
		 *
		 * @see <a href="https://jquery.com/">jQuery</a>
		 * @see <a href="https://api.jquery.com/click/">.click() | jQuery API Documentation</a>
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var showOperatePanels = function(closeCallback) {

			var frm = BaseForms.frmOperatePanels();
			
			var dao = new OperatePanelsDAO();
			
			dao.doSelect(
					
				function(data, textStatus, jqXHR) {
        
					var returnData = JSON.parse(data);
					var index;
					var operatePanels;
							
					var operatePanelCode = '';
							
					var frmId = frm.attr('id');
					var frmTag = '';
      
					for (index = 0; index < returnData['return_result'].length; index++) {
                
						operatePanels = new OperatePanels();
						operatePanels.setValueFromJSONObject(returnData['return_result'][index]);
               
						frmTag += '<div class="operate-btn" data-operate-panel-code="' + operatePanels.getOperatePanelCode() + '">' + operatePanels.getOperatePanelName() + '</div>';
					}
							
					jQuery(frmTag).appendTo('#' + frmId);
          
					jQuery('#' + frmId + ' ' + '.operate-btn')
					.addClass('ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only')
					.css({
					})
					.click(function() {
          
						operatePanelCode = jQuery(this).attr('data-operate-panel-code');
            
						Custombox.close();
					});
        
					Custombox.open({
            
						target: '#' + frmId,
						width: 'full',
						overlayOpacity: 0.8,
						effect: 'fadein',
						escKey: true,
						overlayClose: false,
						close: function() {
            
							jQuery('#' + frmId).remove();
              
							if (operatePanelCode != '') {
							
								if (typeof closeCallback === 'function') {
									
									closeCallback(operatePanelCode);
								}
								else {
									
									showOperatePanelsDetail(operatePanelCode);
								}
							}
						},
						complete: function() {}
					});
				},
				function(jqXHR, textStatus, errorThrown) {}, 
				function(jqXHR, textStatus) {}
			);
		};
		
		/**
		 * 
		 * 作業面版明細視窗
		 *  
		 * @description
		 *   
		 * @param
		 *
		 * @return
		 *  
		 * @require
	   *
		 * @author ace
		 * 
		 * @version 2016/03/06 初始版本。
		 *
		 * @see <a href="https://jquery.com/">jQuery</a>
		 * @see <a href="https://api.jquery.com/click/">.click() | jQuery API Documentation</a>
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var showOperatePanelsDetail = function(operatePanelCode) {

      var dao = new OperatePanelsDetailDAO();
			
      dao.doSelectByOperatePanelCode(operatePanelCode,
          
        function(data, textStatus, jqXHR) {
				
					var programCode = '';
					
					var frm = BaseForms.frmOperatePanelsDetail();
					var frmId = frm.attr('id');
					
					var returnData = JSON.parse(data);
					
          var index = 0;
					
					var addOperatePanelsDetailPanel = function(oJSON) {
					
						var vo = new OperatePanelsDetail();
						var dao = new ProgramsDAO();
						
						vo.setValueFromJSONObject(oJSON);
						
						dao.doSelectByProgramCode(vo.getProgramCode(),
				
							function(data, textStatus, jqXHR) {
					
								var programs = new Programs;
					
								var tag;
						
								if ((JSON.parse(data))['return_result'].length != 0) {
						
									programs.setValueFromJSONObject((JSON.parse(data))['return_result'][0]);
									
									tag = '<div class="operate-btn" data-program-code="' + vo.getProgramCode() + '">' + programs.getProgramName() + '</div>';
							
									jQuery(tag).appendTo('#' + frmId)
									.css({
                  
										'position': 'absolute',
										'top': vo.getTopPixel() + 'px',
										'left': vo.getLeftPixel() + 'px',
										'width': vo.getWidthPixel() + 'px',
										'height': vo.getHeightPixel() + 'px',
										'line-height': vo.getHeightPixel() + 'px'
									});
								}
								
								if (index < returnData['return_result'].length) {
						
									addOperatePanelsDetailPanel(returnData['return_result'][index++]);
								}
								else {
								
									jQuery('#' + frmId + ' ' + '.operate-btn')
									.addClass('ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only')
									.click(function(e) {
								
										programCode = jQuery(this).attr('data-program-code');	
								
										Custombox.close();
									});
						
									Custombox.open({
            
										target: '#' + frmId,
										width: 'full',
										overlayOpacity: 0.8,
										effect: 'fadein',
										escKey: true,
										overlayClose: false,
										close: function() {
            
											var dao = new ProgramsDAO();
								
											jQuery('#' + frmId).remove();
								
											if (programCode != '') {	// 按下Esc時沒有程式代碼。
								
												dao.doSelectByProgramCode(programCode,
									
													function(data, textStatus, jqXHR) {
										
														var returnData = JSON.parse(data);
														var programs = new Programs();
										
														if (returnData['return_result'].length != 0) {
										
															programs.setValueFromJSONObject(returnData['return_result'][0]);
											
															location.assign(location.origin + '/' + programs.getURLPath());
														}	
													},
													function(jqXHR, textStatus, errorThrown) {}, 
													function(jqXHR, textStatus) {}
												);
											}
										},
										complete: function() {}
									});
								}
							},
							function(jqXHR, textStatus, errorThrown) {}, 
							function(jqXHR, textStatus) {}
						);
					};

					if (returnData['return_result'].length != 0) {
					
						addOperatePanelsDetailPanel(returnData['return_result'][index++]);
					}
					else {
					
						showMessage('沒有明細資料！');
					}
        },
        function(jqXHR, textStatus, errorThrown) {}, 
        function(jqXHR, textStatus) {}
      );
		};
		
		/**
		 * 
		 * 程式列表視窗
		 *  
		 * @description
		 *   
		 * @param
		 *
		 * @return
		 *  
		 * @require
	   *
		 * @author ace
		 * 
		 * @version 2016/03/06 初始版本。
		 *
		 * @see <a href="https://jquery.com/">jQuery</a>
		 * @see <a href="https://api.jquery.com/click/">.click() | jQuery API Documentation</a>
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var showPrograms = function(closeCallback) {

			var frm = BaseForms.frmPrograms();
				
      var dao = new ProgramsDAO();
          
      dao.doSelect(
          
        function(data, textStatus, jqXHR) {
            
          var returnData = JSON.parse(data);
          var index;
					var programs;
						
					var programCode = '';
                
					var frmId = frm.attr('id');
					var frmTag = '';
      
          for (index = 0; index < returnData['return_result'].length; index++) {
                
            programs = new Programs();
            programs.setValueFromJSONObject(returnData['return_result'][index]);
                
            frmTag = '<div class="operate-btn" data-program-code="' + programs.getProgramCode() + '">' + programs.getProgramName() + '</div>';
      
            jQuery(frmTag).appendTo('#' + frmId);
          }
						
					jQuery('#' + frmId + ' ' + '.operate-btn')
					.addClass('ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only')
					.click(function(e) {
								
						programCode = jQuery(this).attr('data-program-code');	
								
						Custombox.close();
					});
						
					Custombox.open({
            
						target: '#' + frmId,
						width: 'full',
						overlayOpacity: 0.8,
						effect: 'fadein',
						escKey: true,
						overlayClose: false,
						close: function() {
            
							jQuery('#' + frmId).remove();
								
							if (programCode != '') {	// 按下Esc時沒有程式代碼。
							
								if (typeof closeCallback === 'function') closeCallback(programCode);
							}
						},
						complete: function() {}
					});
        },
        function(jqXHR, textStatus, errorThrown) {}, 
        function(jqXHR, textStatus) {}
      );
		};
		
		/**
		 * 
		 * 開啟Progressbar視窗
		 *  
		 * @description
		 *   
		 * @param
		 *
		 * @return
		 *  
		 * @require
	   *
		 * @author ace
		 * 
		 * @version 2016/03/14 初始版本。
		 *
		 * @see <a href="https://jquery.com/">jQuery</a>
		 *
		 * @see <a href="https://jqueryui.com/">jQuery UI</a>
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var showProgressbar = function(closeCallback) {

			var frmId = 'frmProgressbar';
			
			if (jQuery('#' + frmId).length == 0) jQuery('<div id="' + frmId + '" class="ace-font" style="display: none;"><div id="progressbar"></div></div>').appendTo('body');
			
			var progressbar = jQuery('#' + frmId).find('#progressbar');
			
			progressbar.progressbar({value: false});
			
			Custombox.open({
						
				target: '#' + frmId,
				effect: 'fadein',
				escKey: false,
				overlayClose: false,
				complete: function() {
				
					progressbar.progressbar('option', 'value', false);
					
					if (typeof closeCallback !== 'undefined') closeCallback(jQuery('#' + frmId));
				}
			});
		};
		
		/**
		 * 
		 * 關閉Progressbar視窗
		 *  
		 * @description
		 *   
		 * @param
		 *
		 * @return
		 *  
		 * @require
	   *
		 * @author ace
		 * 
		 * @version 2016/03/14 初始版本。
		 *
		 * @see <a href="https://jquery.com/">jQuery</a>
		 *
		 * @see <a href="https://jqueryui.com/">jQuery UI</a>
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var closeProgressbar = function(frm) {

			frm.remove();
			
			Custombox.close();
		};
		
		/**
		 * 
		 * 數量輸入視窗
		 *  
		 * @description
		 *   
		 * @param
		 *
		 * @return
		 *  
		 * @require
	   *
		 * @author ace
		 * 
		 * @version 2016/05/06 初始版本。
		 *
		 * @see <a href="http://api.jquery.com/jquery/">jQuery() | jQuery API Documentation</a>
		 *
		 * @see <a href="http://demo.tc/post/617">如何限制 Input 只能輸入 數字 | demo小鋪</a>
		 * @see <a href="https://dotblogs.com.tw/dino0315/2015/12/31/010758">[jQuery] input 限制輸入數字 | 艾力克斯馬路口 - 點部落</a>
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var showInputQtyForm = function(qty, closeCallback) {
		
			var frmId = 'frmInputQty';
			var tag = '<div id="' + frmId + '" class="ace-font ace-custom-form" style="display: none; width: 300px; height: 50px;"> '
							+ '  <div>輸入數量：<input type="text" id="txtQty" style="width: 50px; text-align: right;" tabindex="1"></div>'
							+ '</div> ';
										
			if (jQuery('#' + frmId).length == 0) jQuery(tag).appendTo('body');
						
			jQuery('#' + frmId).find('#txtQty').keypress(function(e) {if (e.keyCode == 13) Custombox.close();});
							
			jQuery('#' + frmId).find('#txtQty').keydown(function(e) {

				// Allow: Backspace, Tab, Enter, Escape, Delete, .
				if (jQuery.inArray(e.keyCode, [8, 9, 13, 27, 46, 110]) !== -1) return;
								
				// Allow: Ctrl+A, Command+A
				if ((e.keyCode == 65) && ((e.ctrlKey === true) || (e.metaKey === true))) return;
									
				// Allow: home, end, left, right, down, up
				if ((e.keyCode >= 35) && (e.keyCode <= 40)) return;	
								
				// Ensure that it is a number and stop the keypress
				if (((e.shiftKey === true) || ((e.keyCode < 48) || ((e.keyCode > 57) && (e.keyCode != 189) && (e.keyCode != 190)))) && ((e.keyCode < 96) || (e.keyCode > 105))) e.preventDefault();
							
				// 如果使用者輸入-，先判斷現在的值有沒有-，如果有就不允許輸入。
				if ((e.keyCode == 189) && /-/g.test(this.value)) e.preventDefault();
							
				// 如果使用者輸入.，先判斷現在的值有沒有.，如果有就不允許輸入。
				if ((e.keyCode == 190) && /\./g.test(this.value)) e.preventDefault();
			});
							
			Custombox.open({
						
				target: '#' + frmId,
				effect: 'fadein',
				escKey: true,
				overlayClose: false,
				close: function() {
				
					var trn_qty = jQuery('#' + frmId).find('#txtQty').val();
									
					jQuery('#' + frmId).remove();
									
					if (typeof closeCallback === 'function') closeCallback(trn_qty);
				},
				complete: function() {
								
					jQuery('#' + frmId).find('#txtQty').val(qty);
					jQuery('#' + frmId).find('#txtQty').focus().select();
				}
			});
		};
		
		/**
		 * 
		 * 登入系統對話框
		 *  
		 * @description
		 *   
		 * @param
		 *
		 * @return
		 *  
		 * @require
	   *
		 * @author ace
		 * 
		 * @version 2015/10/22 初始版本。
		 *
		 * @see <a href="http://api.jquery.com/jquery/">jQuery() | jQuery API Documentation</a>
		 * @see <a href="http://api.jquery.com/on/">.on() | jQuery API Documentation</a>
		 * @see <a href="https://api.jquery.com/keypress/">.keypress() | jQuery API Documentation</a>
		 *
		 * @see <a href="http://blog.rx836.tw/blog/jquery-html-forms/">[jQuery] jQuery常用的表單驗證事件</a>
		 * @see <a href="http://stackoverflow.com/questions/21051440/how-to-define-the-css-hover-state-in-a-jquery-selector">How to define the css :hover state in a jQuery selector?</a>
		 * @see <a href="http://stackoverflow.com/questions/979662/how-to-detect-pressing-enter-on-keyboard-using-jquery">How to detect pressing enter on keyboard using jquery?</a>
		 *
		 * @see <a href="http://stackoverflow.com/questions/563890/is-there-a-way-to-simulate-a-click-on-an-alert-in-javascript">Is there a way to simulate a click on an alert in JavaScript?</a>
		 *
		 * @comment
		 *
		 * @todo
		 *
		 */
		var showLogin = function(closeCallback) {

			var frm = BaseForms.frmLogin();
			
			frm.on('keypress', function(e) {
			
				var dao = new SYS00010();
				
				var keycode = (e.keyCode ? e.keyCode : e.which);
				
				if (keycode == '13') {	// Enter Key Code
				
					dao.doLoginByUserAccount(
				
						frm.find('#txtUserAccount').val(), 
						frm.find('#txtUserPassword').val(), 
						function(data, textStatus, jqXHR) {
				
							if ((JSON.parse(data))['return_value'] == 1) {
						
								Custombox.close();
							}
							else {
						
								// 登入失敗的處理。
								showMessage(
								
									'帳號/密碼有誤，請檢查輸入的資料是否正確！', 
									function() {frm.find('#txtUserAccount').focus();}
								);
							}
						},
						function(jqXHR, textStatus, errorThrown) {},
						function(jqXHR, textStatus) {}
					);
        }
			});
			
			Custombox.open({
						
				target: '#' + frm.attr('id'),
				effect: 'fadein',
				escKey: false,
				overlayClose: false,
				close: function() {
				
					frm.remove();
					
					if (typeof closeCallback === 'function') closeCallback();
				},
				complete: function() { frm.find('#txtUserAccount').focus(); }
			});
		};
	
		return {

			showMessage: showMessage,
			showConfirmMessage: showConfirmMessage,
			showOperatePanels: showOperatePanels,
			showOperatePanelsDetail: showOperatePanelsDetail,
			showPrograms: showPrograms,
			showProgressbar: showProgressbar,
			closeProgressbar: closeProgressbar,
			showInputQtyForm: showInputQtyForm,
			showLogin: showLogin
		};
	});
})(this);