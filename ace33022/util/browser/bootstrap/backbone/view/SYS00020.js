/**
 *
 * @description SYS00020
 *
 * @author ace
 *
 * @version 2016/12/05 初始版本。
 *
 */

(function(root) {

	var btnSetProgramId = 'btnSetProgram' + Math.random().toString(36).substr(2, 6);
	var inpRoleCodeId = 'inpRoleCode' + Math.random().toString(36).substr(2, 6);
	var inpRoleNameId = 'inpRoleName' + Math.random().toString(36).substr(2, 6);
	
	var result;
	
	if (typeof define === 'function') {
	
		define(["tw.ace33022.util.browser.FormUtils", "tw.ace33022.backbone.view.AncestorForm02"], function(FormUtils, AncestorFormView) {
		
			result = {

				"initialize": function(options) {
				
					var self = this;
				
					var tag = '<div class="row" style="margin-top: 5px;">'
									+ '  <form class="form-horizontal" style="padding-top: 10px;">'
									+ '    <div class="form-group">'
									+ '      <span class="btn btn-primary btn-lg" id="' + btnSetProgramId + '" disabled>角色-程式設定</span>'
									+ '    </div>'
									+ '    <div class="form-group">'
									+ '      <label class="control-label col-sm-2" for="' + inpRoleCodeId + '">角色代碼：</label>'
									+ '      <div class="col-sm-4">'
									+ '        <input type="text" class="form-control" id="' + inpRoleCodeId + '" data-field-name="role_code" disabled>'
									+ '      </div>'
									+ '      <label class="control-label col-sm-2" for="' + inpRoleNameId + '">角色名稱：</label>'
									+ '      <div class="col-sm-4">'
									+ '        <input type="text" class="form-control" id="' + inpRoleNameId + '" data-field-name="role_name" disabled>'
									+ '      </div>'
									+ '    </div>'
									+ '  </form>'
									+ '</div>';
									
					if (typeof options["setRoleProgram"] !== 'undefined') self["setRoleProgram"] = options["setRoleProgram"];
					
					// AncestorForm會觸發formStateChange，在呼叫父類別的initialize函數前，應先將標籤元件都先設定好，避免render時找不到元件的狀況。
					AncestorFormView.prototype.initialize.apply(this, arguments);
					
					this.appendRow(tag);
					
					this.getContainer().on('click', function(event) {
						
						// event.preventDefault();
						
						var element = self.$el.find(event.target);

						if ((element.attr('id') === btnSetProgramId) && (typeof element.attr('disabled') === 'undefined')) {

							if (typeof self["setRoleProgram"] === 'function') self["setRoleProgram"](self.model);
						}
					});
					
					this.trigger('formStateChange');
				
					return this;
				},
				"render": function() {
						
					AncestorFormView.prototype.render.apply(this, arguments);
							
					this.disableDeleteButton();	// 不提供刪除功能！
							
					jQuery('#' + btnSetProgramId).attr('disabled', true);
				
					if (this.getFormState() === 'browse') {
							
						jQuery('#' + btnSetProgramId).attr('disabled', false);
					}
					else if (this.getFormState() === 'insert') {
							
						jQuery('#' + inpRoleCodeId).focus();
					}
					else if (this.getFormState() === 'update') {

						jQuery('#' + inpRoleCodeId).prop('disabled', true);
								
						jQuery('#' + inpRoleNameId).focus().select();
					}
					
					if ((this.getFormState() === 'insert') || (this.getFormState() === 'update')) this.focusFirstInput();
				}
			};
			
			return AncestorFormView.extend(result);
		});
	}
})(this);