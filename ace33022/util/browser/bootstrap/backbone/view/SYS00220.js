/**
 *
 * SYS00220
 *
 * @description
 *
 * @author ace
 *
 * @version 2018/07/02 初始版本。
 *
 * @see <a href="http://requirejs.org/">RequireJS</a>
 *
 * @see <a href="https://jquery.com/">jQuery</a>
 *
 * @comment
 *
 * @todo
 *
 */

(function(root) {

	var btnSetDetailId = 'btnSetDetail' + Math.random().toString(36).substr(2, 6);
	var inpSizeGroupCodeId = 'inpSizeGroupCode' + Math.random().toString(36).substr(2, 6);
	var inpSizeGroupNameId = 'inpSizeGroupName' + Math.random().toString(36).substr(2, 6);
	
	var result;
	
	if (typeof define === 'function') {
	
		define(["tw.ace33022.util.browser.FormUtils", "tw.ace33022.backbone.view.AncestorForm02"], function(FormUtils, AncestorFormView) {
		
			result = {

				"initialize": function(options) {
				
					var self = this;

					var tag = '<div class="row" style="margin-top: 5px;">'
									+ '  <form class="form-horizontal" style="padding-top: 10px;">'
									+ '    <div class="form-group">'
									+ '      <span class="btn btn-primary btn-lg" id="' + btnSetDetailId + '" disabled>明細設定</span>'
									+ '    </div>'
									+ '    <div class="form-group">'
									+ '      <label class="control-label col-sm-2" for="' + inpSizeGroupCodeId + '">代碼：</label>'
									+ '	     <div class="col-sm-4">'
									+ '        <input type="text" class="form-control" id="' + inpSizeGroupCodeId + '" data-field-name="size_group_code" disabled>'
									+ '      </div>'
									+ '      <label class="control-label col-sm-2" for="' + inpSizeGroupNameId + '">名稱：</label>'
									+ '      <div class="col-sm-4">'
									+ '        <input type="text" class="form-control" id="' + inpSizeGroupNameId + '" data-field-name="size_group_name" disabled>'
									+ '      </div>'
									+ '    </div>'
									+ '  </form>'
									+ '</div>';
									
					// AncestorForm會觸發formStateChange，在呼叫父類別的initialize函數前，應先將標籤元件都先設定好，避免render時找不到元件的狀況。
					AncestorFormView.prototype.initialize.apply(self, arguments);
					
					self.appendRow(tag);
					
					if (typeof options["setDetail"] !== 'undefined') self["setDetail"] = options["setDetail"];
					
					self.getContainer().on('click', function(event) {
			
						var element = jQuery(event.target);

						if ((element.attr('id') === btnSetDetailId) && (typeof element.attr('disabled') === 'undefined')) {

							if (typeof self["setDetail"] === 'function') self["setDetail"](self.model);
						}
					});
					
					self.trigger('formStateChange');
					
					return self;
				},
				"navButtonClickTrigger": function(btnName) {
				
					var booCheckFieldResult = true;

					function checkFieldValue() {
					
						if ((booCheckFieldResult == true) && (jQuery('#' + inpSizeGroupCodeId).val() == '')) {

							booCheckFieldResult = false;
							
							FormUtils.showMessage('代碼不可空白！', function() { jQuery('#' + inpSizeGroupCodeId).focus(); });
						}
						
						if ((booCheckFieldResult == true) && (jQuery('#' + inpSizeGroupNameId).val() == '')) {

							booCheckFieldResult = false;
							
							FormUtils.showMessage('名稱不可空白！', function() { jQuery('#' + inpSizeGroupNameId).focus(); });
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
					
					jQuery('#' + btnSetDetailId).attr('disabled', true);
					
					if (this.getFormState() === 'browse') {
					
						jQuery('#' + btnSetDetailId).attr('disabled', false);
					}
					else if (this.getFormState() === 'update') {
					
						jQuery('#' + inpSizeGroupCodeId).prop('disabled', true);
					}
					
					if ((this.getFormState() === 'insert') || (this.getFormState() === 'update')) this.focusFirstInput();
				}
			};
			
			return AncestorFormView.extend(result);
		});
	}
})(this);