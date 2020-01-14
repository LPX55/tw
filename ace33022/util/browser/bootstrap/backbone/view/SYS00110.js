/**
 *
 * @description SYS00110
 *
 * @author ace
 *
 * @version 2018/06/28 初始版本。
 *
 */

(function(root) {

	var inpLargeClassCodeId = 'inpLargeClassCode' + Math.random().toString(36).substr(2, 6);
	var inpLargeClassNameId = 'inpLargeClassName' + Math.random().toString(36).substr(2, 6);
	
	var result;

	if (typeof define === 'function') {
	
		define(["tw.ace33022.util.browser.FormUtils", "tw.ace33022.backbone.view.AncestorForm02"], function(FormUtils, AncestorFormView) {
		
			result = {

				"initialize": function(options) {

					var tag = '<div class="row" style="margin-top: 5px;">'
									+ '  <form class="form-horizontal" style="padding-top: 10px;">'
									+ '    <div class="form-group">'
									+ '      <label class="control-label col-sm-2" for="' + inpLargeClassCodeId + '">代碼：</label>'
									+ '	     <div class="col-sm-4">'
									+ '        <input type="text" class="form-control" id="' + inpLargeClassCodeId + '" data-field-name="large_class_code" disabled>'
									+ '      </div>'
									+ '      <label class="control-label col-sm-2" for="' + inpLargeClassNameId + '">名稱：</label>'
									+ '      <div class="col-sm-4">'
									+ '        <input type="text" class="form-control" id="' + inpLargeClassNameId + '" data-field-name="large_class_name" disabled>'
									+ '      </div>'
									+ '    </div>'
									+ '  </form>'
									+ '</div>';

					// AncestorForm會觸發formStateChange，在呼叫父類別的initialize函數前，應先將標籤元件都先設定好，避免render時找不到元件的狀況。
					AncestorFormView.prototype.initialize.apply(this, arguments);
					
					this.appendRow(tag);
					
					this.trigger('formStateChange');
				},
				"navButtonClickTrigger": function(btnName) {
				
					var booCheckFieldResult = true;

					function checkFieldValue() {
					
						if ((booCheckFieldResult == true) && (jQuery('#' + inpLargeClassCodeId).val() == '')) {

							booCheckFieldResult = false;
							
							FormUtils.showMessage('代碼不可空白！', function() {

								jQuery('#' + inpLargeClassCodeId).focus();
							});
						}
						
						if ((booCheckFieldResult == true) && (jQuery('#' + inpLargeClassNameId).val() == '')) {

							booCheckFieldResult = false;
							
							FormUtils.showMessage('名稱不可空白！', function() {

								jQuery('#' + inpLargeClassNameId).focus();
							});
						}
					}
					
					if (btnName === 'btnConfirm') {

						if ((this.getFormState() === 'insert') || (this.getFormState() === 'update')) checkFieldValue();
						
						if (booCheckFieldResult == true) AncestorFormView.prototype.navButtonClickTrigger.apply(this, arguments);
					}
					else {
					
						AncestorFormView.prototype.navButtonClickTrigger.apply(this, arguments);
					}
				},
				"render": function() {
				
					AncestorFormView.prototype.render.apply(this, arguments);
					
					this.disableDeleteButton();
					
					if (this.getFormState() === 'update') {
					
						jQuery('#' + inpLargeClassCodeId).prop('disabled', true);
					}
					
					if ((this.getFormState() === 'insert') || (this.getFormState() === 'update')) this.focusFirstInput();
				}
			};
			
			return AncestorFormView.extend(result);
		});
	}
})(this);